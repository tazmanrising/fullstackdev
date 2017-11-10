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
    [Route("api/veteranprofiles")]
    public class VeteranProfilesController : Controller
    {
        private readonly CcnPortalDbContext _context;
        private readonly ILogger<VeteranProfilesController> _logger;

        public VeteranProfilesController(CcnPortalDbContext context, ILogger<VeteranProfilesController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.VeteranProfiles.ToList());
        }
    }
}