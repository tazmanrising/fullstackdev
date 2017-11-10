using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TriWest.Ccn.Portal.Services.Demo;
using TriWest.Ccn.Portal.Common.Models;
using TriWest.Ccn.Portal.Services.Helpers;
using TriWest.Ccn.Portal.Common.HelperModels;

namespace TriWest.Ccn.Portal.Services.Controllers
{
    [Produces("application/json")]
    [Route("api/Providers")]
    public class ProvidersController : Controller
    {

        private readonly CcnPortalDbContext _context;
        private readonly ILogger<ProvidersController> _logger;

        public ProvidersController(CcnPortalDbContext context, ILogger<ProvidersController> logger)
        {
            _context = context;
            _logger = logger;
        }


        [HttpGet("{id:int}", Order = 1)]
        public IActionResult Get(int id)
        {
            // TODO: find a better way to get a user's claims
            //_logger.LogTrace($"GET single provider id {id} requested by { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");

            var provider = _context.Providers.Where(v => v.Id == id).SingleOrDefault();
            if (provider == null)
            {
                //_logger.LogTrace($"GET single provider id {id} NOT found for user { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");
                return NotFound(id);
            }

            //_logger.LogTrace($"GET single provider id {id} success for user { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");
            return Ok(provider);
        }


        [HttpGet()]
        public IActionResult Get([FromQuery]int page = 0, [FromQuery]int pageSize = 5,
            [FromQuery]string sortColumn = "", [FromQuery]string sortDirection = "",
            [FromQuery]string providerName = "", [FromQuery]string groupName = "",
            [FromQuery]string taxId = "", [FromQuery]string npi = "", [FromQuery]string postalCode = "", 
            [FromQuery]string state = "", [FromQuery]string city = "", [FromQuery]string phone = "",
            [FromQuery]string address = "", [FromQuery]string specialty = "")
        {

            //_logger.LogTrace($"GET search providers requested by { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");

            List<Provider> results = new List<Provider>();

            var predicate = PredicateBuilder.True<Provider>();

            if (providerName.Length > 0) predicate = predicate.And(p => p.ProviderName.ToLower().Contains(providerName.ToLower()));
            if (groupName.Length > 0) predicate = predicate.And(p => p.GroupName.ToLower().Contains(groupName.ToLower()));

            if (taxId.Length > 0)
                predicate = predicate.And(
                    p => p.TaxId.ToLower().Contains(taxId.ToLower()) || p.GroupTaxId.ToLower().Contains(taxId.ToLower()));

            if (npi.Length > 0)
                predicate = predicate.And(
                    p => p.PractitionerNpi.ToLower().Contains(npi.ToLower()) || p.GroupNpi.ToLower().Contains(npi.ToLower()));


            if (postalCode.Length > 0)
                predicate = predicate.And(
                    p => p.PostalCodeBilling.ToLower().Contains(postalCode.ToLower()) || 
                    p.PostalCodePrimary.ToLower().Contains(postalCode.ToLower()) ||
                    p.PostalCodeOther.ToLower().Contains(postalCode.ToLower()));

            if (state.Length > 0)
                predicate = predicate.And(
                    p => p.StateBilling.ToLower().Contains(state.ToLower()) ||
                    p.StateOther.ToLower().Contains(state.ToLower()) ||
                    p.StatePrimary.ToLower().Contains(state.ToLower()));

            if (city.Length > 0)
                predicate = predicate.And(
                    p => p.CityBilling.ToLower().Contains(city.ToLower()) ||
                    p.CityOther.ToLower().Contains(city.ToLower()) ||
                    p.CityPrimary.ToLower().Contains(city.ToLower()));

            if (phone.Length > 0)
                predicate = predicate.And(
                    p => p.PhonePrimary.ToLower().Contains(phone.ToLower()));

            if (specialty.Length > 0)
                predicate = predicate.And(
                    p => p.PractitionerSpecialty.ToLower().Contains(specialty.ToLower()) || 
                         p.GroupSpecialty.ToLower().Contains(specialty.ToLower()));

            if (address.Length > 0)
                predicate = predicate.And(
                    p => p.AddressBilling.ToLower().Contains(address.ToLower()) ||
                    p.AddressOther.ToLower().Contains(address.ToLower()) ||
                    p.AddressPrimary.ToLower().Contains(address.ToLower()));

            // todo: sort column and direction not implemented yet
            results = _context.Providers.Where(predicate).ToList();

            if (page == 0)
            {
                //_logger.LogTrace($"GET provider search yielded {results.Count} records for user { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");
                return Ok(results);
            }
            else
            {
                var pageResult = PageResult<Provider>.CreatePageResult(results, "api/providers", page, pageSize);
                //_logger.LogTrace($"GET provider search yielded {pageResult.TotalRecords} records WITH paging for user { User.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value }");
                return Ok(pageResult);
            }
        }



    }
}