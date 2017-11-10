using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TriWest.Ccn.Portal.Common.Models;
using TriWest.Ccn.Portal.Services.Demo;
using Microsoft.AspNetCore.Authorization;

namespace TriWest.Ccn.Portal.Services.Controllers
{
    [Produces("application/json")]
    [Route("api/trainingMessages")]
    public class TrainingMessagesController : Controller
    {
        private readonly CcnPortalDbContext _context;

        public TrainingMessagesController(CcnPortalDbContext context)
        {
            _context = context;
        }

        // GET: api/TrainingMessage
        [HttpGet]
        public IActionResult Get()
        {
            var trainingMessage = _context.TrainingMessages                                            
                                            .OrderByDescending(v => v.CreatedOn).FirstOrDefault();
           
            if (trainingMessage == null)
                return NotFound();                      

            return Ok(trainingMessage);
        }
    }
}
