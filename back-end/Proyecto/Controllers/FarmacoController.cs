using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Proyecto.BaseDatos;
using Proyecto.Models;

namespace Proyecto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("Cors")]
    public class FarmacoController : ControllerBase
    {
        private readonly FarmaciaDbContext _db;

        public FarmacoController(FarmaciaDbContext db)
        {
            _db = db;
        }

        // Listar
        [HttpGet("Listar")]
        public async Task<ActionResult<IEnumerable<Farmacos>>> Get()
        {
            var farmacos = await _db.Farmaco.ToListAsync();
            return Ok(farmacos);
        }

        // Buscar por nombre
        [HttpGet("BuscarPorNombre/{nombre}")]
        public async Task<ActionResult<Farmacos>> Get(string nombre)
        {
            var farmaco = await _db.Farmaco
                .FirstOrDefaultAsync(f => f.Nombre == nombre);

            if (farmaco == null)
            {
                return NotFound("Error: Fármaco no encontrado.");
            }

            return Ok(farmaco);
        }

        // Insertar
        [HttpPost("Insertar")]
        public async Task<ActionResult<Farmacos>> Post(Farmacos farmaco)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Farmaco.Add(farmaco);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = farmaco.IdFarmaco }, farmaco);
        }

        // Editar
        [HttpPut("Editar/{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] Farmacos farmaco)
        {
            if (id != farmaco.IdFarmaco)
            {
                return BadRequest("Error: El ID del fármaco no coincide.");
            }

            var existingFarmaco = await _db.Farmaco.FindAsync(id);
            if (existingFarmaco == null)
            {
                return NotFound("Error: Fármaco no encontrado.");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Entry(existingFarmaco).CurrentValues.SetValues(farmaco);
            await _db.SaveChangesAsync();

            return NoContent();
        }

        // Eliminar
        [HttpDelete("Eliminar/{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var farmaco = await _db.Farmaco.FindAsync(id);
            if (farmaco == null)
            {
                return NotFound("Error: Fármaco no encontrado.");
            }

            _db.Farmaco.Remove(farmaco);
            await _db.SaveChangesAsync();
            return Ok($"Fármaco con ID {id} eliminado con éxito.");
        }
    }
}
