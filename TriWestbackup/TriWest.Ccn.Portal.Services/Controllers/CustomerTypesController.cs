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
    [Route("api/customertypes")]
    public class CustomerTypesController : Controller
    {
        private readonly CcnDbContext _context;
        private readonly ILogger<CustomerTypesController> _logger;

        public CustomerTypesController(CcnDbContext context, ILogger<CustomerTypesController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet("{customerTypeId:int}", Order = 1)]
        public IActionResult Get(int customerTypeId)
        {
            // TODO: find a better way to get a user's claims
            //_logger.LogTrace($"GET single SessionTracker id {id} requested by { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");

            var result = _context.CustomerTypes
                .Include(ct => ct.ChildCategories)
                .ThenInclude(c => c.ChildSubCategories)
                .Where(v => v.CustomerTypeId == customerTypeId).SingleOrDefault();
            //var sessionTracker = _context.SessionTrackers.Where(v)
            if (result == null)
            {
                //_logger.LogTrace($"GET single SessionTracker id {id} NOT found for user { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");
                return NotFound(result);
            }

            //_logger.LogTrace($"GET single SessionTracker id {id} success for user { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");
            return Ok(result);
        }

        [HttpGet]
        public IActionResult Get()
        {
            var results = _context.CustomerTypes
                            .Include(ct => ct.ChildCategories)
                            .ThenInclude(c => c.ChildSubCategories)
                            .ToList();

            return Ok(results);
        }

    }
}