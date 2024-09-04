using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoFinal.DataBase;
using ProyectoFinal.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProyectoFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("Cors")]
    public class InsumoController : ControllerBase
    {
        private readonly ConstructoraDbContext _db;
        public InsumoController(ConstructoraDbContext db)
        {
            _db = db;
        }
        // GET: api/<InsumoController>
        [HttpGet("Listar")]
        public async Task<ActionResult<IEnumerable<Insumo>>> Get()
        {
            var insumo = await _db.Insumo.ToListAsync();
            return Ok(insumo);
        }

        // GET api/<InsumoController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Insumo>> Get(int id)
        {
            var insumoid = await _db.Insumo.FindAsync(id);
            if (insumoid == null)
            {
                return NotFound();
            }
            return Ok(insumoid);
        }

        // POST api/<InsumoController>
        [HttpPost("Insertar")]
        public async Task<ActionResult<Insumo>> Post(Insumo insumo)
        {
            _db.Insumo.Add(insumo);
            await _db.SaveChangesAsync();
            return Ok(insumo);
        }

        // PUT api/<InsumoController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Insumo insumo)
        {
            if (id != insumo.id)
            {
                return BadRequest("El ID del insumo no coincide.");
            }
            _db.Entry(insumo).State = EntityState.Modified;
            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_db.Insumo.Any(e => e.id == id))
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

        // DELETE api/<InsumoController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var insumo = await _db.Insumo.FindAsync(id);
            if (insumo == null)
            {
                return NotFound();
            }
            _db.Insumo.Remove(insumo);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}
