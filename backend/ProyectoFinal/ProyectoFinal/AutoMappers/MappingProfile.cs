using AutoMapper;
using ProyectoFinal.DTOs;
using ProyectoFinal.Models;

namespace ProyectoFinal.AutoMappers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            //TareaDTO a Tarea
            CreateMap<TareaDTO, Tarea>();
            //AvanceDTO a Avance
            CreateMap<AvanceDTO, Avance>();
            //UsoDTO a Uso
            CreateMap<UsoDTO, Uso>();   
        }
    }
}
