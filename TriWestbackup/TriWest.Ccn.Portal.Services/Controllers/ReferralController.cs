using System;
using System.Linq;

using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using TriWest.Ccn.Portal.Common.Models;
using TriWest.Ccn.Portal.Services.Demo;

namespace TriWest.Ccn.Portal.Services.Controllers
{
    [Produces("application/json")]
    [Route("api/referrals")]
    public class ReferralController : Controller
    {
        private readonly CcnPortalDbContext _context;
        private readonly ILogger<ReferralController> _logger;

        public ReferralController(CcnPortalDbContext context, ILogger<ReferralController> logger)
        {
            _context = context;
            _logger = logger;
        }


        [HttpGet("{id:int}", Order = 1)]
        public IActionResult Get(int id)
        {
            var note = _context.Referrals.SingleOrDefault(n => n.Id == id);
            if (note == null)
                return NotFound(id);

            return Ok(note);
        }

        [HttpGet()]
        public IActionResult Get()
        {
            var results = _context.Referrals.ToList();

            return Ok(results);
        }

        // Pull up existing veteran 

        // Initial Save POST 
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public IActionResult Post([FromBody]Referral referral)
        {
            //csrInteraction.TimerStart = DateTime.Now.ToUniversalTime();

            if (referral == null)
                return new BadRequestObjectResult("referral cannot be null.");
            if (!ModelState.IsValid)
                return new BadRequestObjectResult(ModelState);

            _context.Referrals.Add(referral);
            _context.SaveChanges();

            return Created($"api/referrals/{referral.Id}", referral);
        }



        // Save / Update  PUT   every 30 seconds 
        [HttpPut]
        //[ValidateAntiForgeryToken]
        public IActionResult Put([FromBody]Referral referral)
        {
            if (referral == null)
                return BadRequest();

            var current = _context.Referrals.FirstOrDefault(v => v.Id == referral.Id);
            if (current == null)
                return NotFound();

            //current.TimerEnd = csrInteraction.TimerEnd;
            //current.TimerStart = csrInteraction.TimerStart;
            //current.SessionNote = csrInteraction.SessionNote;

            //current.FirstName = csrInteraction.FirstName;
            //current.LastName = csrInteraction.LastName;
            //current.ContactTypeId = csrInteraction.ContactTypeId;
            //current.SubCategoryId = csrInteraction.SubCategoryId;
            //current.Phone = csrInteraction.Phone;
            //current.PhoneExtension = csrInteraction.PhoneExtension;

            _context.Referrals.Update(current);
            _context.SaveChanges();

            return Accepted(current);
        }



    }

}