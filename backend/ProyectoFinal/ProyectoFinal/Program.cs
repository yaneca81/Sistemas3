using Microsoft.EntityFrameworkCore;
using ProyectoFinal.AutoMappers;
using ProyectoFinal.DataBase;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<ConstructoraDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("varConex")));

builder.Services.AddCors(options =>
{
    options.AddPolicy("Cors", policy =>{policy.WithOrigins("*").AllowAnyHeader().AllowAnyMethod();});
}
);
//mapper
builder.Services.AddAutoMapper(typeof(MappingProfile));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
