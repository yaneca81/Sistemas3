using System.ComponentModel.DataAnnotations;

namespace ProyectoFinal.Models
{
    public class Proyecto
    {
        /*ID_Proyecto (Clave primaria)
        Nombre_Proyecto
        Cliente
        Ubicación
        Fecha_Inicio
        Fecha_Estimada_Fin
        Estado (En curso, Terminado, Detenido)
        Observaciones*/
        [Key]
        public int id { get; set; }
        [Required(ErrorMessage = "Error debes ingresar el nombre")]
        public string nombre { get; set; }
        [Required(ErrorMessage = "Error debes ingresar el cliente")]
        public string cliente { get; set; }
        [Required(ErrorMessage = "Error debes ingresar la ubicación")]
        public string ubicacion { get; set; }
        [Required(ErrorMessage = "Error debes ingresar la fecha de inicio")]
        public DateOnly inicio { get; set; }
        [Required(ErrorMessage = "Error debes ingresar la fecha de terminación")]
        public DateOnly fin { get; set; }
        [Required(ErrorMessage = "Error debes ingresar el estado")]
        public string estado { get; set; }
        [Required(ErrorMessage = "Error debes ingresar las observaciones")]
        public string observaciones { get; set; }
    }
}