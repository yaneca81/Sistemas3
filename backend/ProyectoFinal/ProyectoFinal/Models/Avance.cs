using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoFinal.Models
{
    public class Avance
    {
        /*ID_Avance (Clave primaria)
        ID_Tarea (Clave foránea a la tabla Tareas)
        Porcentaje_Avance
        Fecha_Actualización
        Observaciones*/
        [Key]
        public int id { get; set; }
        [Required(ErrorMessage = "Error debes ingresar el porcentaje")]
        public int porcentaje { get; set; }
        [Required(ErrorMessage = "Error debes ingresar la fecha de actualización")]
        public DateOnly fecha { get; set; }
        [Required(ErrorMessage = "Error debes ingresar las observaciones")]
        public string observaciones { get; set; }
        public int idtarea { get; set; }
        [ForeignKey(nameof(idtarea))]
        public Tarea tarea { get; set; }
    }
}
