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
    [Route("api/reasoncodes")]
    public class ReasonCodesController : Controller
    {
        private readonly CcnPortalDbContext _context;
        private readonly ILogger<ReasonCodesController> _logger;

        public ReasonCodesController(CcnPortalDbContext context, ILogger<ReasonCodesController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.ReasonCodes.ToList());
        }
    }
}