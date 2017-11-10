using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TriWest.Ccn.Portal.Services.Demo;
using Microsoft.Extensions.Logging;

namespace TriWest.Ccn.Portal.Services.Controllers
{

    [Produces("application/json")]
    [Route("api/banners")]
    public class BannersController : Controller
    {

        private readonly CcnPortalDbContext _context;
        private readonly ILogger<BannersController> _logger;

        public BannersController(CcnPortalDbContext context, ILogger<BannersController> logger)
        {
            _context = context;
            _logger = logger;
        }


        [HttpGet()]
        public IActionResult Get()
        {
            var banner = _context.Banners
                .OrderByDescending(bnr => bnr.Id).ToList();
            if (banner == null)
                return NotFound();

            return Ok(banner);
        }
    }
}