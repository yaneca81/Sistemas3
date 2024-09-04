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
    public class TareaController : ControllerBase
    {
        private readonly ConstructoraDbContext _db;
        private readonly IMapper _mapper;
        public TareaController(ConstructoraDbContext db, IMapper mapper)
        { 
            _db = db;
            _mapper = mapper;
        }
        // GET: api/<TareaController>
        [HttpGet("Listar")]
        public async Task<ActionResult<IEnumerable<Tarea>>> Get()
        {
            var tarea = await _db.Tarea.Include(x=>x.proyecto).ToListAsync();
            return Ok(tarea);
        }

        // GET api/<TareaController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tarea>> Get(int id)
        {
            var tareaid = await _db.Tarea.Include(t => t.proyecto).FirstOrDefaultAsync(t => t.id == id);
            if (tareaid == null)
            {
                return NotFound();
            }
            return Ok(tareaid);
        }

        // POST api/<TareaController>
        [HttpPost("Insertar")]
        public async Task<ActionResult<Tarea>> Post(TareaDTO tareaDTO)
        {
            var tarea = _mapper.Map<Tarea>(tareaDTO);
            var proyecto = await _db.Proyecto.FindAsync(tarea.idproyecto);
            if (proyecto == null)
            {
                return BadRequest();
            }
            tarea.proyecto = proyecto;
            _db.Tarea.Add(tarea);
            await _db.SaveChangesAsync();
            return Ok(tarea);
        }


        // PUT api/<TareaController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] TareaDTO tareaDTO)
        {
            var     tarea = _mapper.Map<Tarea>(tareaDTO);
            if (id != tarea.id)
            {
                return BadRequest("El ID de la tarea no coincide.");
            }

            var proyecto = await _db.Proyecto.FindAsync(tarea.idproyecto);
            if (proyecto == null)
            {
                return NotFound("El proyecto asociado no existe.");
            }

            tarea.proyecto = proyecto;
            tarea.idproyecto = proyecto.id;
            _db.Entry(tarea).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_db.Tarea.Any(e => e.id == id))
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


        // DELETE api/<TareaController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var tarea = await _db.Tarea.FindAsync(id);
            if (tarea == null)
            {
                return NotFound();
            }

            _db.Tarea.Remove(tarea);
            await _db.SaveChangesAsync();

            return NoContent();
        }

    }
}
