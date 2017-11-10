using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Linq;
using TriWest.Ccn.Portal.Services.Demo;

namespace TriWest.Ccn.Portal.Services.Controllers
{
    [Produces("application/json")]
    [Route("api/vamcs")]
    public class VamcsController : Controller
    {
        private readonly CcnPortalDbContext _context;
        private readonly ILogger<VeteransController> _logger;

        public VamcsController(CcnPortalDbContext context, ILogger<VeteransController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet()]
        public IActionResult Get()
        {
            _logger.LogTrace("GET vamc list requested.");
            return Ok(_context.Vamcs.OrderBy(v => v.Name).ToList());
        }
    }
}
