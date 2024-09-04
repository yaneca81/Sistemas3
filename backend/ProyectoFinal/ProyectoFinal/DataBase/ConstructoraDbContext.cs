using Microsoft.EntityFrameworkCore;
using ProyectoFinal.Models;

namespace ProyectoFinal.DataBase
{
    public class ConstructoraDbContext : DbContext
    {
        public ConstructoraDbContext(DbContextOptions options) : base(options) { }
        public DbSet<Avance> Avance { get; set; }
        public DbSet<Insumo> Insumo { get; set; }
        public DbSet<Proyecto> Proyecto { get; set; }
        public DbSet<Tarea> Tarea { get; set; }
        public DbSet<Uso> Uso { get; set; }

    }
}
