using System.ComponentModel.DataAnnotations;

namespace ProyectoFinal.Models
{
    public class Insumo
    {
        /*ID_Insumo (Clave primaria)
        Nombre_Insumo
        Cantidad
        Unidad_Medida
        Proveedor
        Fecha_Compra*/
        [Key]
        public int id { get; set; }
        [Required(ErrorMessage = "Error debes ingresar el nombre")]
        public string nombre { get; set; }
        [Required(ErrorMessage = "Error debes ingresar la cantidad")]
        public int cantidad { get; set; }
        [Required(ErrorMessage = "Error debes ingresar la unidad de medida")]
        public string unidad { get; set; }
        [Required(ErrorMessage = "Error debes ingresar el proveedor")]
        public string proveedor { get; set; }
        [Required(ErrorMessage = "Error debes ingresar la fecha de compra")]
        public DateOnly fecha { get; set; }
    }
}
