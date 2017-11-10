using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TriWest.Ccn.Portal.Services.Demo;
using Microsoft.Extensions.Logging;
using TriWest.Ccn.Portal.Common.Models;
using TriWest.Ccn.Portal.Common.HelperModels;

namespace TriWest.Ccn.Portal.Services.Controllers
{
    [Produces("application/json")]
    [Route("api/careRadiusNotes")]
    public class CareRadiusNotesController : Controller
    {

        private readonly CcnPortalDbContext _context;
        private readonly ILogger<CareRadiusNotesController> _logger;

        public CareRadiusNotesController(CcnPortalDbContext context, ILogger<CareRadiusNotesController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet("{id:int}", Order = 1)]
        public IActionResult Get(int id)
        {
            var note = _context.CareRadiusNotes.Where(n => n.Id == id).SingleOrDefault();
            if (note == null)
                return NotFound(id);

            return Ok(note);
        }


        [HttpGet()]
        public IActionResult Get([FromQuery]int page = 0, [FromQuery]int pageSize = 5,
            [FromQuery]string sortColumn = "", [FromQuery]string sortDirection = "",
            [FromQuery]int veteranId = 0)
        {

            List<CareRadiusNote> results = new List<CareRadiusNote>();

            if (veteranId > 0)
            {
                _logger.LogTrace($"GET Care Radius notes requested for veteran {veteranId}.");
                results = _context.CareRadiusNotes.Where(x => x.VeteranId == veteranId).OrderByDescending(x => x.CreatedOn).ToList();
            }

            if (page == 0)
            {
                return Ok(results);
            }
            else
            {
                var pageResult = PageResult<CareRadiusNote>.CreatePageResult(results, "api/careRadiusNotes", page, pageSize);
                return Ok(pageResult);
            }
        }


    }
}