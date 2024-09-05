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
    public class UsuarioController : ControllerBase
    {
        private readonly FarmaciaDbContext _db;

        public UsuarioController(FarmaciaDbContext db)
        {
            _db = db;
        }

        // Listar
        [HttpGet("Listar")]
        public async Task<ActionResult<IEnumerable<Usuarios>>> Get()
        {
            var usuarios = await _db.Usuario.ToListAsync();
            return Ok(usuarios);
        }

        // Buscar por ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Usuarios>> Get(int id)
        {
            var usuario = await _db.Usuario.FindAsync(id);
            if (usuario == null)
            {
                return NotFound("Error: Usuario no encontrado.");
            }
            return Ok(usuario);
        }

        // Insertar
        [HttpPost("Insertar")]
        public async Task<ActionResult<Usuarios>> Post(Usuarios usuario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Usuario.Add(usuario);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = usuario.IdUsuario }, usuario);
        }

        // Editar
        [HttpPut("Editar/{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] Usuarios usuario)
        {
            if (id != usuario.IdUsuario)
            {
                return BadRequest("Error: El ID del usuario no coincide.");
            }

            var existingUsuario = await _db.Usuario.FindAsync(id);
            if (existingUsuario == null)
            {
                return NotFound("Error: Usuario no encontrado.");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Entry(existingUsuario).CurrentValues.SetValues(usuario);
            await _db.SaveChangesAsync();

            return NoContent();
        }

        // Eliminar
        [HttpDelete("Eliminar/{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var usuario = await _db.Usuario.FindAsync(id);
            if (usuario == null)
            {
                return NotFound("Error: Usuario no encontrado.");
            }

            _db.Usuario.Remove(usuario);
            await _db.SaveChangesAsync();
            return Ok($"Usuario con ID {id} eliminado con éxito.");
        }
    }
}
