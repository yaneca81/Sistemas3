using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Proyecto.BaseDatos;
using Proyecto.Models;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Proyecto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("Cors")]
    public class CategoriasController : ControllerBase
    {
        private readonly FarmaciaDbContext _db;
        public CategoriasController(FarmaciaDbContext db)
        {
            _db = db;
        }

        // Listar
        [HttpGet("Listar")]
        public async Task<ActionResult<IEnumerable<Categorias>>> Get()
        {
            var categorias = await _db.Categoria.ToListAsync();
            return Ok(categorias);
        }

        // Buscar por ID
        [HttpGet("Buscar/{id}")]
        public async Task<ActionResult<Categorias>> Get(int id)
        {
            var categoria = await _db.Categoria.FindAsync(id);
            if (categoria == null)
            {
                return NotFound();
            }
            return Ok(categoria);
        }

        // Insertar
        [HttpPost("Insertar")]
        public async Task<ActionResult<Categorias>> Post(Categorias categoria)
        {
            _db.Categoria.Add(categoria);
            await _db.SaveChangesAsync();
            return Ok(categoria);
        }

        // Editar
        [HttpPut("Editar/{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Categorias categoria)
        {
            if (id != categoria.IdCategoria)
            {
                return BadRequest("ID de la categoría no coincide.");
            }

            _db.Entry(categoria).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoriaExists(id))
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

        // Eliminar
        [HttpDelete("Eliminar/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var categoria = await _db.Categoria.FindAsync(id);

            _db.Categoria.Remove(categoria);
            await _db.SaveChangesAsync();

            return NoContent();
        }

        private bool CategoriaExists(int id)
        {
            return _db.Categoria.Any(e => e.IdCategoria == id);
        }
    }
}
