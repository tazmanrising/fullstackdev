using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TriWest.Ccn.Portal.Services.Demo;
using Microsoft.Extensions.Logging;
using TriWest.Ccn.Portal.Common.Models;
using TriWest.Ccn.Portal.Common.HelperModels;
using TriWest.Ccn.Portal.Services.Helpers;



namespace TriWest.Ccn.Portal.Services.Controllers
{
    [Produces("application/json")]
    [Route("api/claims")]
    public class ClaimsController : Controller
    {
        private readonly CcnPortalDbContext _context;
        private readonly ILogger<ClaimsController> _logger;

        public ClaimsController(CcnPortalDbContext context, ILogger<ClaimsController> logger)
        {
            _context = context;
            _logger = logger;
        }


        private bool IsFieldEmpty(string val)
        {
            return string.IsNullOrEmpty(val);
        }

        [HttpGet()]
        public IActionResult Get([FromQuery]int page = 0,
        [FromQuery]int pageSize = 5,
        [FromQuery]string sortColumn = "",
        [FromQuery]string sortDirection = "",
        [FromQuery]string claimNumber = "",
        [FromQuery]string veteranLastName = "",
        [FromQuery]string veteranFirstName = "",
        [FromQuery]string veteranNumber = "",
        [FromQuery]int veteranId = 0,
        [FromQuery]int providerId = 0,
        [FromQuery]string ssnLast4 = "",
        [FromQuery]string providerTaxId = "",
        [FromQuery]string dob = "",
        [FromQuery]string npi = "",
        [FromQuery]string city = "",
        [FromQuery]string state = "",
        [FromQuery]string zip = "",
        [FromQuery]string providerName = "",
        [FromQuery]int vamcId = 0

        )

        {

            _logger.LogTrace("GET claims list requested.");

            List<Claim> results = new List<Claim>();
            if (this.IsFieldEmpty(claimNumber)
                && this.IsFieldEmpty(veteranLastName)
                && this.IsFieldEmpty(veteranFirstName)
                && this.IsFieldEmpty(veteranNumber)
                && veteranId == 0
                && providerId == 0
                && this.IsFieldEmpty(providerName)
                && this.IsFieldEmpty(ssnLast4)
                && this.IsFieldEmpty(providerTaxId)
                && this.IsFieldEmpty(dob)
                && this.IsFieldEmpty(npi)
                && this.IsFieldEmpty(city)
                && this.IsFieldEmpty(state)
                && this.IsFieldEmpty(zip))
            {
                //     results = _context.Claims.ToList();
            }

            else
            {
                var predicate = PredicateBuilder.True<Claim>();

                if (claimNumber.Length > 0)
                {
                    predicate = predicate.And(p => p.ClaimNumber.ToLower().Contains(claimNumber.ToLower()));
                }
                if (veteranFirstName.Length > 0)
                {
                    predicate = predicate.And(p => p.VeteranFirstName.ToLower().Contains(veteranFirstName.ToLower()));
                }
                if (veteranLastName.Length > 0)
                {
                    predicate = predicate.And(p => p.VeteranLastName.ToLower().Contains(veteranLastName.ToLower()));
                }
                if (veteranNumber.Length > 0)
                {
                    predicate = predicate.And(p => p.VeteranNumber.ToLower().Contains(veteranNumber.ToLower()));
                }
                if (ssnLast4.Length > 0)
                {
                    predicate = predicate.And(p => p.SsnLast4.ToLower() == ssnLast4.ToLower());
                }
                if (providerName.Length > 0)
                {
                    predicate = predicate.And(p => p.ProviderName.ToLower().Contains(providerName.ToLower()));
                }
                if (providerTaxId.Length > 0)
                {
                    predicate = predicate.And(p => p.TaxId.ToLower().Contains(providerTaxId.ToLower()));
                }
                if (npi.Length > 0)
                {
                    predicate = predicate.And(p => p.Npi.ToLower().Contains(npi.ToLower()) 
                            || p.GroupNpi.ToLower().Contains(npi.ToLower()) 
                            || p.PractitionerNpi.ToLower().Contains(npi.ToLower()));
                }
                if (city.Length > 0)
                {
                    predicate = predicate.And(p => p.City.ToLower().Contains(city.ToLower()));
                }
                if (state.Length > 0)
                {
                    predicate = predicate.And(p => p.State.ToLower().Contains(state.ToLower()));
                }
                if (zip.Length > 0)
                {
                    predicate = predicate.And(p => p.Zip.ToLower().Contains(zip.ToLower()));
                }
                if (dob.Length > 0)
                {
                    DateTime incoming = DateTime.MinValue;
                    DateTime.TryParse(dob, out incoming);

                    if (incoming > DateTime.MinValue)
                    {
                        predicate = predicate.And(p => p.DateOfBirth.HasValue && p.DateOfBirth.Value.Date == incoming.Date);
                    }
                }

                results = _context.Claims.Where(predicate).ToList();
            }

            if (page == 0)
            {
                return Ok(results);
            }
            else
            {
                var pageResult = PageResult<Claim>.CreatePageResult(results, "api/claims", page, pageSize);
                return Ok(pageResult);
            }
        }
    }
}