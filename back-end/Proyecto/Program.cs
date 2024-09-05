using Microsoft.EntityFrameworkCore;
using Proyecto.BaseDatos;
using Microsoft.AspNetCore.Authentication.Cookies;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<FarmaciaDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("conexion")));

// CORS configuration
builder.Services.AddCors(options =>
{
    options.AddPolicy("Cors", policy =>
    {
        policy.WithOrigins("*").AllowAnyHeader().AllowAnyMethod();
    });
});

// Authentication configuration
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.LoginPath = "/api/Usuarios/Login";
        options.LogoutPath = "/api/Usuarios/Logout";
        options.ExpireTimeSpan = TimeSpan.FromHours(1); // Cookie expiration time
    });

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("Cors"); // Use the configured CORS policy
app.UseAuthentication(); // Add this line to enable authentication
app.UseAuthorization();

app.MapControllers();

app.Run();
