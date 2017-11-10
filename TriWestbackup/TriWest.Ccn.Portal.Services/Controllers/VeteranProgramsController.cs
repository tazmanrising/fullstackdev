using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TriWest.Ccn.Portal.Common.Models;
using TriWest.Ccn.Portal.Services.Demo;

namespace TriWest.Ccn.Portal.Services.Controllers
{
    [Produces("application/json")]
    [Route("api/veteranprograms")]
    public class VeteranProgramsController : Controller
    {
        private readonly CcnPortalDbContext _context;
        private readonly ILogger<VeteranProgramsController> _logger;

        public VeteranProgramsController(CcnPortalDbContext context, ILogger<VeteranProgramsController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.VeteranPrograms.ToList());
        }
    }
}