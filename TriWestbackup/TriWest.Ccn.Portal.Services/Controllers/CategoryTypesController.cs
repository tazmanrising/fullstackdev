using System;
using System.Linq;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;

using TriWest.Ccn.Portal.Common.Models;
using TriWest.Ccn.Portal.Services.Demo;

namespace TriWest.Ccn.Portal.Services.Controllers
{
    [Produces("application/json")]
    [Route("api/categorytypes")]
    public class CategoryTypesController : Controller
    {
        private readonly CcnDbContext _context;
        private readonly ILogger<CategoryTypesController> _logger;

        public CategoryTypesController(CcnDbContext context, ILogger<CategoryTypesController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet("{categoryTypeId:int}", Order = 1)]
        public IActionResult Get(int categoryTypeId)
        {
            // TODO: find a better way to get a user's claims
            //_logger.LogTrace($"GET single SessionTracker id {id} requested by { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");

            var result = _context.Categories
                .Include(c=>c.ParentCustomerType)
                .Include(c=>c.ChildSubCategories)
                .Where(v => v.CategoryId == categoryTypeId)
                .SingleOrDefault();
            //var sessionTracker = _context.SessionTrackers.Where(v)
            if (result == null)
            {
                //_logger.LogTrace($"GET single SessionTracker id {id} NOT found for user { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");
                return NotFound(categoryTypeId);
            }

            //_logger.LogTrace($"GET single SessionTracker id {id} success for user { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");
            return Ok(result);
        }

        [HttpGet]
        public IActionResult Get()
        {
            var results = _context.Categories
                .Include(c => c.ParentCustomerType)
                .Include(c => c.ChildSubCategories)
                .ToList();

            return Ok(results);
        }
        
    }
}