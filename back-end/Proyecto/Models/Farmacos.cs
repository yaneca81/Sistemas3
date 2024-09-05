using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Proyecto.Models
{
    public class Farmacos 
    {
        [Key]
        public int IdFarmaco { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar el Nombre del producto")]
        [StringLength(50, MinimumLength = 2, ErrorMessage = "Error: El Nombre debe tener entre 2 y 50 caracteres")]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar la Descripción del producto")]
        [StringLength(255, MinimumLength = 10, ErrorMessage = "Error: La Descripción debe tener entre 10 y 255 caracteres")]
        public string Descripcion { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar el Código de Barras")]
        [StringLength(30, MinimumLength = 5, ErrorMessage = "Error: El Código de Barras debe tener entre 5 y 30 caracteres")]
        public string CodigoBarras { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar el Precio de Venta")]
        public double PrecioVenta { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar el Precio de Costo")]
        public double PrecioCosto { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar la Presentación del producto")]
        [StringLength(50, MinimumLength = 5, ErrorMessage = "Error: La Presentación debe tener entre 5 y 50 caracteres")]
        public string Presentacion { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar la Fecha de Vencimiento")]
        public DateTime FechaVencimiento { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar la Fecha de Adquisición")]
        public DateTime FechaAdquisicion { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar la Marca")]
        [StringLength(30, MinimumLength = 2, ErrorMessage = "Error: La Marca debe tener entre 2 y 30 caracteres")]
        public string Marca { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar la cantidad en stock")]
        [Range(0, int.MaxValue, ErrorMessage = "Error: La cantidad en stock no puede ser negativa")]
        public int Stock { get; set; }

        [Required(ErrorMessage = "Error: Debe ingresar el Estado del producto")]
        [StringLength(20, MinimumLength = 3, ErrorMessage = "Error: El Estado debe tener entre 3 y 20 caracteres")]
        public string Estado { get; set; }

        [Required(ErrorMessage = "Error: Debe subir una Imagen")]
        public string Imagen { get; set; }

        public string Categoria { get; set; }

    }
}
