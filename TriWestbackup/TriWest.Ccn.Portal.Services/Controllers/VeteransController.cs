using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using TriWest.Ccn.Portal.Common.HelperModels;
using TriWest.Ccn.Portal.Common.Models;
using TriWest.Ccn.Portal.Services.Demo;
using TriWest.Ccn.Portal.Services.Helpers;

namespace TriWest.Ccn.Portal.Services.Controllers
{
    [Produces("application/json")]
    [Route("api/veterans")]

    public class VeteransController : Controller
    {

        private readonly CcnPortalDbContext _context;
        private readonly ILogger<VeteransController> _logger;

        public VeteransController(CcnPortalDbContext context, ILogger<VeteransController> logger)
        {
            _context = context;
            _logger = logger;

            _context.Database.EnsureDeleted();
            _context.EnsureSeedData();

        }


        [HttpGet("{id:int}", Order = 1)]
        public IActionResult Get(int id)
        {
            // TODO: find a better way to get a user's claims
            //_logger.LogTrace($"GET single veteran id {id} requested by { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");

            var veteran = _context.Veterans.Where(v => v.Id == id).SingleOrDefault();
            if (veteran == null)
            {
                //_logger.LogTrace($"GET single veteran id {id} NOT found for user { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");
                return NotFound(id);
            }

            //_logger.LogTrace($"GET single veteran id {id} success for user { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");
            return Ok(veteran);
        }

        [HttpGet()]
        [ResponseCache(NoStore = true, Location = ResponseCacheLocation.None)]
        public IActionResult Get([FromQuery]int page = 0, [FromQuery]int pageSize = 5, 
            [FromQuery]string sortColumn = "", [FromQuery]string sortDirection = "",
            [FromQuery]string lastName = "", [FromQuery]string firstName = "", 
            [FromQuery]string phoneNumber = "", [FromQuery]string ssnLast4 = "", 
            [FromQuery]string vamc = "", [FromQuery]string city = "", [FromQuery]string state = "", 
            [FromQuery]string postalCode = "", [FromQuery]string memberNumber = "", 
            [FromQuery]string dob = "", [FromQuery]string program = "")
        {

            //_logger.LogTrace($"GET search veterans requested by { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");

            List<Veteran> results = new List<Veteran>();

            if (lastName.Length == 0 && firstName.Length == 0 && phoneNumber.Length == 0 && ssnLast4.Length == 0 && vamc.Length == 0 && city.Length == 0 && state.Length == 0 && postalCode.Length == 0 && memberNumber.Length == 0 && program.Length > 0 && dob.Length > 0)
            {
                // TODO: for test only.  live system should not allow a search with no criteria. - dagle
                results = _context.Veterans.ToList();
            }
            else
            {
                var predicate = PredicateBuilder.True<Veteran>();

                if (lastName.Length > 0) predicate = predicate.And(p => p.LastName.ToLower().Contains(lastName.ToLower()));
                if (firstName.Length > 0) predicate = predicate.And(p => p.FirstName.ToLower().Contains(firstName.ToLower()));
                if (phoneNumber.Length > 0) predicate = predicate.And(p => p.PhoneNumber.ToLower().Contains(phoneNumber.ToLower()));
                if (ssnLast4.Length > 0) predicate = predicate.And(p => p.SsnLast4.ToLower().Contains(ssnLast4.ToLower()));
                if (vamc.Length > 0) predicate = predicate.And(p => p.Vamc.ToLower().Contains(vamc.ToLower()));
                if (memberNumber.Length > 0) predicate = predicate.And(p => p.MemberNumber.ToLower().Contains(memberNumber.ToLower()));
                if (city.Length > 0) predicate = predicate.And(v => v.Addresses.Any(a => a.AddressType.ToLower() == "default" && a.City.ToLower().Contains(city.ToLower())));
                if (state.Length > 0) predicate = predicate.And(v => v.Addresses.Any(a => a.AddressType.ToLower() == "default" && a.State.ToLower().Contains(state.ToLower())));
                if (postalCode.Length > 0) predicate = predicate.And(v => v.Addresses.Any(a => a.AddressType.ToLower() == "default" && a.PostalCode.ToLower().Contains(postalCode.ToLower())));
                if (program.Length > 0) predicate = predicate.And(p => p.Program.ToLower().Contains(program.ToLower()));

                if (dob.Length > 0)
                {
                    DateTime incoming = DateTime.MinValue;
                    DateTime.TryParse(dob, out incoming);

                    if (incoming > DateTime.MinValue)
                    {
                        predicate = predicate.And(p => p.DateOfBirth.HasValue && p.DateOfBirth.Value.Date == incoming.Date);
                    }
                }

                // todo: maybe this should not ToList() here... 
                //       if we need to page we dont want the query to resolve yet
                //       best scenario might be to change the CreatePageResult to accept a Queryable?

                // todo: sort column and direction not implemented yet
                results = _context.Veterans.Where(predicate).ToList();
            }

            if (page == 0)
            {
                //_logger.LogTrace($"GET search yielded {results.Count} records for user { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");
                return Ok(results);
            }

            else
            {
                var pageResult = PageResult<Veteran>.CreatePageResult(results, "api/veterans", page, pageSize);
                //_logger.LogTrace($"GET search yielded {pageResult.TotalRecords} records WITH paging for user { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");
                return Ok(pageResult);
            }
        }





        [HttpPost]
        public IActionResult Post([FromBody]Veteran veteran)
        {
            if (veteran == null)
                return BadRequest();

            _context.Veterans.Add(veteran);
            _context.SaveChanges();

            return Created($"api/veterans/{veteran.Id}", veteran);
        }

        [HttpPut]
        public IActionResult Put([FromQuery]int id, [FromBody]Veteran veteran)
        {
            if (veteran == null)
                return BadRequest();

            var current = _context.Veterans.FirstOrDefault(v => v.Id == id);
            if (current == null)
                return NotFound();

           
            current.CountOfAuths = veteran.CountOfAuths;
            current.DateOfBirth = veteran.DateOfBirth;
            current.FirstName = veteran.FirstName;
            current.LastName = veteran.LastName;
            current.MemberNumber = veteran.MemberNumber;
            current.PhoneNumber = veteran.PhoneNumber;
            
            current.Program = veteran.Program;
            current.SsnLast4 = veteran.SsnLast4;
            
            current.Vamc = veteran.Vamc;

            _context.Veterans.Update(current);
            _context.SaveChanges();

            return Accepted(veteran);
        }

        [HttpDelete]
        public IActionResult Delete([FromQuery]int id)
        {
            var veteran = _context.Veterans.First(v => v.Id == id);
            if (veteran == null)
                return NotFound();

            _context.Veterans.Remove(veteran);
            _context.SaveChanges();

            return NoContent();
        }




    }
}