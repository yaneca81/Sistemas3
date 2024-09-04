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
    public class UsoController : ControllerBase
    {
        private readonly ConstructoraDbContext _db;
        private readonly IMapper _mapper;
        public UsoController(ConstructoraDbContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }
        // GET: api/<UsoController>
        [HttpGet("Listar")]
        public async Task<ActionResult<IEnumerable<Uso>>> Get()
        {
            var uso = await _db.Uso.Include(x => x.tarea).Include(x => x.insumo).ToListAsync();
            return Ok(uso);
        }

        // GET api/<UsoController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Uso>> Get(int id)
        {
            var usoid = await _db.Uso.Include(x => x.tarea).Include(x => x.insumo).FirstOrDefaultAsync(x => x.id == id);
            if (usoid == null)
            {
                return NotFound();
            }
            return Ok(usoid);
        }

        // POST api/<UsoController>
        [HttpPost("Insertar")]
        public async Task<ActionResult<Uso>> Post(UsoDTO usoDTO)
        {
            var uso = _mapper.Map<Uso>(usoDTO);
            var tareas = await _db.Tarea.FindAsync(uso.id);
            var insumos = await _db.Insumo.FindAsync(uso.id);
            if (uso == null)
            {
                return NotFound();
            }
            uso.tarea = tareas;
            uso.insumo = insumos;
            _db.Uso.Add(uso);
            await _db.SaveChangesAsync();
            return Ok(uso);
        }


        // PUT api/<UsoController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] UsoDTO usoDTO)
        {
            var uso = _mapper.Map<Uso>(usoDTO);
            if (id != uso.id)
            {
                return BadRequest("El ID del uso no coincide.");
            }

            var tarea = await _db.Tarea.FindAsync(uso.idtarea);
            if (tarea == null)
            {
                return NotFound("La tarea asociada no existe.");
            }

            var insumo = await _db.Insumo.FindAsync(uso.idinsumo);
            if (insumo == null)
            {
                return NotFound("El insumo asociado no existe.");
            }

            uso.tarea = tarea;
            uso.insumo = insumo;
            _db.Entry(uso).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_db.Uso.Any(e => e.id == id))
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


        // DELETE api/<UsoController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var uso = await _db.Uso.FindAsync(id);
            if (uso == null)
            {
                return NotFound();
            }

            _db.Uso.Remove(uso);
            await _db.SaveChangesAsync();

            return NoContent();
        }

    }
}
