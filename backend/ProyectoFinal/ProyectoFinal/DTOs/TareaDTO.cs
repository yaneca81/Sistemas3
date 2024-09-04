namespace ProyectoFinal.DTOs
{
    public class TareaDTO
    {
        public int id { get; set; }
        public string descripcion { get; set; }
        public DateOnly inicio { get; set; }
        public DateOnly fin { get; set; }
        public string estado { get; set; }
        public string observaciones { get; set; }
        public int idproyecto { get; set; }
    }
}
