using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Proyecto.Models
{
    public class Roles
    {
        [Key]
        public int idrol { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar el Rol")]
        [StringLength(50, MinimumLength = 2, ErrorMessage = "Error: El Rol debe tener entre 2 y 50 caracteres")]
        public string Rol { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar la Descripción del rol")]
        [StringLength(255, MinimumLength = 5, ErrorMessage = "Error: La Descripción debe tener entre 5 y 255 caracteres")]
        public string Descripcion { get; set; }
    }
}
