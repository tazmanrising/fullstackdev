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
    [Route("api/csrinteractions")]
    public class CsrInteractionsController : Controller
    {
        private readonly CcnDbContext _context;
        private readonly ILogger<CsrInteractionsController> _logger;

        public CsrInteractionsController(CcnDbContext context, ILogger<CsrInteractionsController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet("{sessionid:int}", Order = 1)]
        public IActionResult Get(int sessionid)
        {
            // TODO: find a better way to get a user's claims
            //_logger.LogTrace($"GET single SessionTracker id {id} requested by { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");

            var result = _context.CsrInteractions
                .Include(ct => ct.ContactType)
                .Include(ct => ct.SubCategory)
                .ThenInclude(sc => sc.ParentCategory)
                .ThenInclude(pc => pc.ParentCustomerType)
                .Where(v => v.SessionId == sessionid).SingleOrDefault();

            if (result == null)
            {
                //_logger.LogTrace($"GET single SessionTracker id {id} NOT found for user { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");
                return NotFound(sessionid);
            }

            //_logger.LogTrace($"GET single SessionTracker id {id} success for user { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");
            return Ok(result);
        }

        [HttpGet]
        public IActionResult Get()
        {
            var results = _context.CsrInteractions
                .Include(ct => ct.ContactType)
                .Include(ct => ct.SubCategory)
                .ThenInclude(sc => sc.ParentCategory)
                .ThenInclude(pc=>pc.ParentCustomerType)
                .ToList();

            return Ok(results);
        }

        [HttpPost]
        //[ValidateAntiForgeryToken]
        public IActionResult Post([FromBody]CsrInteraction csrInteraction)
        {
            csrInteraction.TimerStart = DateTime.Now.ToUniversalTime();

            if (csrInteraction == null)
                return new BadRequestObjectResult("csrInteraction cannot be null.");
            if (!ModelState.IsValid)
                return new BadRequestObjectResult(ModelState);

            _context.CsrInteractions.Add(csrInteraction);
            _context.SaveChanges();

            return Created($"api/csrinteractions/{csrInteraction.SessionId}", csrInteraction);
        }

        [HttpPut]
        //[ValidateAntiForgeryToken]
        public IActionResult Put([FromBody]CsrInteraction csrInteraction)
        {
            if (csrInteraction == null)
                return BadRequest();

            var current = _context.CsrInteractions.FirstOrDefault(v => v.SessionId == csrInteraction.SessionId);
            if (current == null)
                return NotFound();

            current.TimerEnd = csrInteraction.TimerEnd;
            current.TimerStart = csrInteraction.TimerStart;
            current.SessionNote = csrInteraction.SessionNote;

            current.FirstName = csrInteraction.FirstName;
            current.LastName = csrInteraction.LastName;
            current.ContactTypeId = csrInteraction.ContactTypeId;
            current.SubCategoryId = csrInteraction.SubCategoryId;
            current.Phone = csrInteraction.Phone;
            current.PhoneExtension = csrInteraction.PhoneExtension;

            _context.CsrInteractions.Update(current);
            _context.SaveChanges();

            return Accepted(current);
        }
    }
}