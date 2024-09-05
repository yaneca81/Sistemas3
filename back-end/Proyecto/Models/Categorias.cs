using System.ComponentModel.DataAnnotations;

namespace Proyecto.Models
{
    public class Categorias
    {
        [Key]
        public int IdCategoria { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar la Categoría")]
        [StringLength(30, MinimumLength = 5, ErrorMessage = "Error: La Categoria debe tener entre 5 y 30 caracteres")]
        public string Categoria { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar la Descripción de la categoría")]
        [StringLength(255, MinimumLength = 10, ErrorMessage = "Error: La Descripcion debe tener entre 10 y 255 caracteres")]
        public string Descripcion { get; set; }
    }
}
