using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Proyecto.Models
{
    public class Usuarios
    {
        [Key]
        public int IdUsuario { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar el Nombre")]
        [StringLength(100, MinimumLength = 2, ErrorMessage = "Error: El Nombre debe tener entre 2 y 50 caracteres")]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar el Apellido")]
        [StringLength(100, MinimumLength = 2, ErrorMessage = "Error: El Apellido debe tener entre 2 y 50 caracteres")]
        public string Apellido { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar el Correo")]
        [EmailAddress(ErrorMessage = "Error: El formato del Correo no es válido")]
        [StringLength(100, ErrorMessage = "Error: El Correo no puede tener más de 100 caracteres")]
        public string Correo { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar la Contraseña")]
        [StringLength(100, MinimumLength = 6, ErrorMessage = "Error: La Contraseña debe tener entre 6 y 100 caracteres")]
        public string Contraseña { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar el Contacto")]
        [StringLength(30, ErrorMessage = "Error: El Contacto no puede tener más de 20 caracteres")]
        [RegularExpression(@"^\+591[0-9]{8,10}$", ErrorMessage = "Error: El Contacto debe tener el formato +591 seguido de 8 a 10 dígitos")]
        public string Contacto { get; set; }

        public string Rol { get; set; }

    }
}
