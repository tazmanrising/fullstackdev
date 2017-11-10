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
using System.Linq.Expressions;

namespace TriWest.Ccn.Portal.Services.Controllers
{
    [Produces("application/json")]
    [Route("api/medicalClaims")]
    public class MedicalClaimsController : Controller
    {
        private readonly CcnPortalDbContext _context;
        private readonly ILogger<MedicalClaimsController> _logger;

        public MedicalClaimsController(CcnPortalDbContext context, ILogger<MedicalClaimsController> logger)
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
        [FromQuery]string patientLastName = "",
        [FromQuery]string patientFirstName = "",
        [FromQuery]int providerId = 0
        )
        {

            _logger.LogTrace("GET claims list requested.");

            List<MedicalClaim> results = new List<MedicalClaim>();
            if (this.IsFieldEmpty(claimNumber)
                && this.IsFieldEmpty(patientLastName)
                && this.IsFieldEmpty(patientFirstName)
                && providerId == 0
               )

            {
                //     results = _context.Claims.ToList();
            }

            else
            {
                var predicate = PredicateBuilder.True<MedicalClaim>();

                if (providerId != 0)
                {
                    predicate = predicate.And(p => p.ProviderId == providerId);
                }
                if (claimNumber.Length > 0)
                {
                    predicate = predicate.And(p => p.ClaimNumber.ToLower().Contains(claimNumber.ToLower()));
                }
                if (patientFirstName.Length > 0)
                {
                    predicate = predicate.And(p => p.PatientFirstName.ToLower().Contains(patientFirstName.ToLower()));
                }
                if (patientLastName.Length > 0)
                {
                    predicate = predicate.And(p => p.PatientLastName.ToLower().Contains(patientLastName.ToLower()));
                }


                results = _context.MedicalClaims.Where(predicate).OrderByField(sortColumn, sortDirection== "ascending").ToList();
            }

            if (page == 0)
            {
                return Ok(results);
            }
            else
            {
                var pageResult = PageResult<MedicalClaim>.CreatePageResult(results, "api/medicalClaims", page, pageSize);
                return Ok(pageResult);
            }


        }



    }

    public static class extensionmethods
    {
        public static IQueryable<T> OrderByField<T>(this IQueryable<T> q, string SortField, bool Ascending)
        {
            var param = Expression.Parameter(typeof(T), "p");
            var prop = Expression.Property(param, SortField);
            var exp = Expression.Lambda(prop, param);
            string method = Ascending ? "OrderBy" : "OrderByDescending";
            Type[] types = new Type[] { q.ElementType, exp.Body.Type };
            var mce = Expression.Call(typeof(Queryable), method, types, q.Expression, exp);
            return q.Provider.CreateQuery<T>(mce);
        }
    }

}