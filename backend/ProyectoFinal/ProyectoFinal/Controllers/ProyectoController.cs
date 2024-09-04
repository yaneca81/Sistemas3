using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoFinal.DataBase;
using ProyectoFinal.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProyectoFinal.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("Cors")]
    [ApiController]
    public class ProyectoController : ControllerBase
    {
        private readonly ConstructoraDbContext _db;
        public ProyectoController(ConstructoraDbContext db)
        {
            _db = db;
        }
        // GET: api/<ProyectoController>
        [HttpGet("Listar")]
        public async Task<ActionResult<IEnumerable<Proyecto>>> Get()
        {
            var proyecto = await _db.Proyecto.ToListAsync();
            return Ok(proyecto);
        }

        // GET api/<ProyectoController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Proyecto>> Get(int id)
        {
            var proyectoid = await _db.Proyecto.FindAsync(id);
            if (proyectoid == null)
            {
                return NotFound();
            }
            return Ok(proyectoid);
        }

        // POST api/<ProyectoController>
        [HttpPost("Insertar")]
        public async Task<ActionResult < Proyecto >> Post(Proyecto proyecto)
        {
            _db.Proyecto.Add(proyecto);
            await _db.SaveChangesAsync();
            return Ok(proyecto);
        }

        // PUT api/<ProyectoController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Proyecto proyecto)
        {
            if (id != proyecto.id)
            {
                return BadRequest("El ID del proyecto no coincide.");
            }
            _db.Entry(proyecto).State = EntityState.Modified;
            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_db.Proyecto.Any(e => e.id == id))
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

        // DELETE api/<ProyectoController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var proyecto = await _db.Proyecto.FindAsync(id);
            if (proyecto == null)
            {
                return NotFound();
            }
            _db.Proyecto.Remove(proyecto);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}
