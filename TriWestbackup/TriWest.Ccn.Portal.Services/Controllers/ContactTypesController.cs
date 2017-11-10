using System;
using System.Linq;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using TriWest.Ccn.Portal.Common.Models;
using TriWest.Ccn.Portal.Services.Demo;

namespace TriWest.Ccn.Portal.Services.Controllers
{
    [Produces("application/json")]
    [Route("api/contacttypes")]
    public class ContactTypesController : Controller
    {
        private readonly CcnDbContext _context;
        private readonly ILogger<ContactTypesController> _logger;

        public ContactTypesController(CcnDbContext context, ILogger<ContactTypesController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet("{contactTypeId:int}", Order = 1)]
        public IActionResult Get(int contactTypeId)
        {
            // TODO: find a better way to get a user's claims
            //_logger.LogTrace($"GET single SessionTracker id {id} requested by { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");

            var result = _context.ContactTypes.Where(v => v.ContactTypeId == contactTypeId).SingleOrDefault();
            //var sessionTracker = _context.SessionTrackers.Where(v)
            if (result == null)
            {
                //_logger.LogTrace($"GET single SessionTracker id {id} NOT found for user { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");
                return NotFound(contactTypeId);
            }

            //_logger.LogTrace($"GET single SessionTracker id {id} success for user { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");
            return Ok(result);
        }

        [HttpGet]
        public IActionResult Get()
        {
            var results = _context.ContactTypes.ToList();

            return Ok(results);
        }

    }
}