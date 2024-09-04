using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoFinal.DataBase;
using ProyectoFinal.DTOs;
using ProyectoFinal.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProyectoFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("Cors")]
    public class AvanceController : ControllerBase
    {
        private readonly ConstructoraDbContext _db;
        private readonly IMapper _mapper;
        public AvanceController(ConstructoraDbContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }
        // GET: api/<AvanceController>
        [HttpGet("Listar")]
        public async Task<ActionResult<IEnumerable<Avance>>> Get()
        {
            var avance = await _db.Avance.Include(x=>x.tarea).ToListAsync();
            return Ok(avance);
        }

        // GET api/<AvanceController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Avance>> Get(int id)
        {
            var avanceid = await _db.Avance.Include(x => x.tarea).FirstOrDefaultAsync(x => x.id == id);
            if (avanceid == null)
            {
                return NotFound();
            }
            return Ok(avanceid);
        }

        // POST api/<AvanceController>
        [HttpPost("Insertar")]
        public async Task<ActionResult<Avance>> Post(AvanceDTO avanceDTO)
        {
            var avance = _mapper.Map<Avance>(avanceDTO);
            var tareas = await _db.Tarea.FindAsync(avance.id);
            if (avance == null)
            {
                return NotFound();
            }
            avance.tarea = tareas;
            _db.Avance.Add(avance);
            await _db.SaveChangesAsync();
            return Ok(avance);
        }

        // PUT api/<AvanceController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] AvanceDTO avanceDTO)
        {
            var avance = _mapper.Map<Avance>(avanceDTO);
            if (id != avance.id)
            {
                return BadRequest("El ID del avance no coincide.");
            }

            var tarea = await _db.Tarea.FindAsync(avance.idtarea);
            if (tarea == null)
            {
                return NotFound("La tarea asociada no existe.");
            }

            avance.tarea = tarea;
            _db.Entry(avance).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_db.Avance.Any(e => e.id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        // DELETE api/<AvanceController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var avance = await _db.Avance.FindAsync(id);
            if (avance == null)
            {
                return NotFound();
            }

            _db.Avance.Remove(avance);
            await _db.SaveChangesAsync();

            return NoContent();
        }

    }
}
