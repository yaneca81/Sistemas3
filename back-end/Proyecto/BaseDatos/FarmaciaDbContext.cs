using Microsoft.EntityFrameworkCore;
using Proyecto.Models;

namespace Proyecto.BaseDatos
{
    public class FarmaciaDbContext : DbContext
    {
        public FarmaciaDbContext(DbContextOptions options) : base(options) { }
        public DbSet<Usuarios> Usuario { get; set; }
        public DbSet<Roles> Rol { get; set; }
        public DbSet<Farmacos> Farmaco { get; set; }
        public DbSet<Categorias> Categoria { get; set; }
    }
}
