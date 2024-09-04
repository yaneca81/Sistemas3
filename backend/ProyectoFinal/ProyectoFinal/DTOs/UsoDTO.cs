using ProyectoFinal.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ProyectoFinal.DTOs
{
    public class UsoDTO
    {
        public int id { get; set; }
        public int cantidad { get; set; }
        public DateOnly fecha { get; set; }
        public int idtarea { get; set; }
        public int idinsumo { get; set; }
    }
}
