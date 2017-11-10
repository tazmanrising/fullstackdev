using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TriWest.Ccn.Portal.Services.Demo;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TriWest.Ccn.Portal.Services.Controllers
{
    [Produces("application/json")]
    [Route("api/announcements")]
    public class AnnouncementsController : Controller
    {
        private readonly CcnPortalDbContext _context;

        public AnnouncementsController(CcnPortalDbContext context)
        {
            _context = context;
        }



        [HttpGet]
        public IActionResult Get()
        {
            //TODO - the user hub should be set in the user data and referenced here
            //TODO - validate the hub for all csr(s) is set to 'Corporate'

            var userHub = "Phoenix";

            var announcements = _context.Announcements.Where( a => a.Hub == userHub || a.Hub == "Corporate" )
                .OrderByDescending(a => a.CreatedOn).Take(10).ToList();
            if (announcements == null)
                return NotFound(announcements);

            return Ok(announcements);
        }
    }
}
