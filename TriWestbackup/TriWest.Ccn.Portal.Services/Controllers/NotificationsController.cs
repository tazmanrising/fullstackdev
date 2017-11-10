using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TriWest.Ccn.Portal.Services.Demo;
using Microsoft.Extensions.Logging;
using TriWest.Ccn.Portal.Common.Models;
using TriWest.Ccn.Portal.Common.HelperModels;

namespace TriWest.Ccn.Portal.Services.Controllers
{
    [Produces("application/json")]
    [Route("api/notifications")]
    public class NotificationsController : Controller
    {
        private readonly CcnPortalDbContext _context;
        private readonly ILogger<NotificationsController> _logger;


        public NotificationsController(CcnPortalDbContext context, ILogger<NotificationsController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet("{id:int}", Order = 1)]
        public IActionResult Get(int id)
        {
            var note = _context.Notifications.SingleOrDefault(n => n.Id == id);
            if (note == null)
                return NotFound(id);

            return Ok(note);
        }


        [HttpGet()]
        public IActionResult Get([FromQuery]int page = 0, [FromQuery]int pageSize = 5,
            [FromQuery]string sortColumn = "", [FromQuery]string sortDirection = "")
        {

            List<Notification> results = new List<Notification>();
            _logger.LogTrace("GET Notifications requested for vet portal.");
            results = _context.Notifications.OrderByDescending(x => x.Date).ToList();
            
            if (page == 0)
            {
                return Ok(results);
            }
            else
            {
                var pageResult = PageResult<Notification>.CreatePageResult(results, "api/notifications", page, pageSize);
                return Ok(pageResult);
            }
        }




    }
}