using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Proyecto.BaseDatos;
using Proyecto.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Proyecto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("Cors")]
    public class RolesController : ControllerBase
    {
        private readonly FarmaciaDbContext _db;
        public RolesController(FarmaciaDbContext db)
        {
            _db = db;
        }

        // Listar
        [HttpGet("Listar")]
        public async Task<ActionResult<IEnumerable<Roles>>> Get()
        {
            var rol = await _db.Rol.ToListAsync();
            return Ok(rol);
        }

        // Insertar
        [HttpPost("Insertar")]
        public async Task<ActionResult<Roles>> Post(Roles rol)
        {
            _db.Rol.Add(rol);
            await _db.SaveChangesAsync();
            return Ok(rol);
        }

        //editar 
        [HttpPut("Editar/{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] Roles rol)
        {
            if (id != rol.idrol)
            {
                return BadRequest("Error: El ID del rol no coincide.");
            }

            _db.Entry(rol).State = EntityState.Modified;
            await _db.SaveChangesAsync();

            return NoContent();
        }

        // Eliminar
        [HttpDelete("Eliminar/{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var rol = await _db.Rol.FindAsync(id);
            if (rol == null)
            {
                return NotFound("Error: Rol no encontrado.");
            }

            _db.Rol.Remove(rol);
            await _db.SaveChangesAsync();

            return Ok($"Rol con ID {id} eliminado con éxito.");
        }
    }
}
