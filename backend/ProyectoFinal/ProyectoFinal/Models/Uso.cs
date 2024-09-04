using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoFinal.Models
{
    public class Uso
    {
        /*ID_Uso_Insumo (Clave primaria)
        ID_Tarea (Clave foránea a la tabla Tareas)
        ID_Insumo (Clave foránea a la tabla Insumos)
        Cantidad_Utilizada
        Fecha_Uso
        */
        [Key]
        public int id { get; set; }
        [Required(ErrorMessage = "Error debes ingresar la cantidad de insumos utilizados")]
        public int cantidad { get; set; }
        [Required(ErrorMessage = "Error debes ingresar la fecha de uso")]
        public DateOnly fecha { get; set; }
        public int idtarea { get; set; }
        [ForeignKey(nameof(idtarea))]
        public Tarea tarea { get; set; }
        public int idinsumo { get; set; }
        [ForeignKey(nameof(idinsumo))]
        public Insumo insumo { get; set; }
    }
}
