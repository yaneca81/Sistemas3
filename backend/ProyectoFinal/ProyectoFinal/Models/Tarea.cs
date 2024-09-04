using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoFinal.Models
{
    public class Tarea
    {
        /* ID_Tarea (Clave primaria)
        ID_Proyecto (Clave foránea a la tabla Proyectos)
        Descripción_Tarea
        Fecha_Inicio_Tarea
        Fecha_Estimada_Fin_Tarea
        Estado_Tarea (En curso, Terminada)
        Observaciones*/
        [Key]
        public int id { get; set; }
        [Required(ErrorMessage = "Error debes ingresar la descripción de la tarea")]
        public string descripcion { get; set; }
        [Required(ErrorMessage = "Error debes ingresar la fecha de inicio de la tarea")]
        public DateOnly inicio { get; set; }
        [Required(ErrorMessage = "Error debes ingresar la fecha de fin de la tarea")]
        public DateOnly fin { get; set; }
        [Required(ErrorMessage = "Error debes elegir el estado de la tarea")]
        public string estado { get; set; }
        [Required(ErrorMessage = "Error debes de ingresar las observaciones de la tarea")]
        public string observaciones { get; set; }
        public int idproyecto { get; set; }
        [ForeignKey(nameof(idproyecto))]
        public Proyecto proyecto { get; set; }
    }
}
