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
    [Route("api/authorizations")]
    public class AuthorizationsController : Controller
    {
        private readonly CcnPortalDbContext _context;
        private readonly ILogger<AuthorizationsController> _logger;

        public AuthorizationsController(CcnPortalDbContext context, ILogger<AuthorizationsController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet()]
        public IActionResult Get(
            [FromQuery]int page = 0, 
            [FromQuery]int pageSize = 5,
            [FromQuery]string sortColumn = "", 
            [FromQuery]string sortDirection = "",
            [FromQuery]int providerId = 0,
            [FromQuery]string provider = "",
            [FromQuery]int vamcId = 0,
            [FromQuery]string vamc = "",
            [FromQuery]string veteranLastName = "",
            [FromQuery]string veteranFirstName = "",
            [FromQuery]string veteranZipCode = "",
            [FromQuery]string memberNumber = "",
            [FromQuery]string categoryOfCare = "",
            [FromQuery]string ssnLast4 = "",
            [FromQuery]string referralNumber = "",
            [FromQuery]string profile = "",
            [FromQuery]string program = "",
            [FromQuery]string createdOnStart = "",
            [FromQuery]string createdOnEnd = "",
            [FromQuery]string reasonCode = "")
        {
            _logger.LogTrace("GET authorizations list requested.");

            List<Authorization> results = new List<Authorization>();

            var predicate = PredicateBuilder.True<Authorization>();
            if (vamcId > 0) predicate = predicate.And(p => p.VamcId == vamcId);
            if (providerId > 0) predicate = predicate.And(p => p.ProviderId == providerId);

            if (!string.IsNullOrEmpty(provider)) predicate = predicate.And(p => p.Provider.ToLower().Contains(provider.ToLower()));
            if (!string.IsNullOrEmpty(vamc)) predicate = predicate.And(p => p.Vamc.ToLower().Contains(vamc.ToLower()));
            if (!string.IsNullOrEmpty(veteranLastName)) predicate = predicate.And(p => p.VeteranLastName.ToLower().Contains(veteranLastName.ToLower()));
            if (!string.IsNullOrEmpty(veteranFirstName)) predicate = predicate.And(p => p.VeteranFirstName.ToLower().Contains(veteranFirstName.ToLower()));
            if (!string.IsNullOrEmpty(ssnLast4)) predicate = predicate.And(p => p.SsnLast4.Contains(ssnLast4));
            if (!string.IsNullOrEmpty(referralNumber)) predicate = predicate.And(p => p.ReferralNumber.ToLower().Contains(referralNumber.ToLower()));
            if (!string.IsNullOrEmpty(profile)) predicate = predicate.And(p => p.Profile.ToLower().Contains(profile.ToLower()));
            if (!string.IsNullOrEmpty(program)) predicate = predicate.And(p => p.Program.ToLower().Contains(program.ToLower()));
            if (!string.IsNullOrEmpty(reasonCode)) predicate = predicate.And(p => p.ReasonCode.ToLower().Contains(reasonCode.ToLower()));
            if (!string.IsNullOrEmpty(veteranZipCode)) predicate = predicate.And(p => p.VeteranZipCode.Contains(veteranZipCode));
            if (!string.IsNullOrEmpty(memberNumber)) predicate = predicate.And(p => p.MemberNumber.ToLower().Contains(memberNumber.ToLower()));
            if (!string.IsNullOrEmpty(categoryOfCare)) predicate = predicate.And(p => p.CategoryOfCare.ToLower().Contains(categoryOfCare.ToLower()));
            //start date only
            if (!string.IsNullOrEmpty(createdOnStart) && string.IsNullOrEmpty(createdOnEnd))
            {
                var createDateStart = DateTimeOffset.Parse(createdOnStart);
                predicate = predicate.And(p => DateTimeOffset.Parse(p.CreatedOn) >= createDateStart);
            }
            // end date only
            if (string.IsNullOrEmpty(createdOnStart) && !string.IsNullOrEmpty(createdOnEnd))
            {
                var createDateEnd = DateTimeOffset.Parse(createdOnEnd);
                predicate = predicate.And(p => DateTimeOffset.Parse(p.CreatedOn) <= createDateEnd);
            }
            // both start and end dates
            if (!string.IsNullOrEmpty(createdOnStart) && !string.IsNullOrEmpty(createdOnEnd))
            {
                var createDateStart = DateTimeOffset.Parse(createdOnStart);
                var createDateEnd = DateTimeOffset.Parse(createdOnEnd);
                predicate = predicate.And(p => DateTimeOffset.Parse(p.CreatedOn) >= createDateStart).And(p => DateTimeOffset.Parse(p.CreatedOn) <= createDateEnd);
            }

            results = _context.Authorizations.Where(predicate).ToList();

            if (!string.IsNullOrEmpty(sortColumn))
                ///todo jnazarian temp sort method
                results = ResultsSortByColumnName(results, sortColumn, sortDirection);
            else
                // default to createdon desc
                results.OrderByDescending(x => x.CreatedOn).ToList();

            if (page == 0)
            {
                return Ok(results);
            }
            else
            {
                var pageResult = PageResult<Authorization>.CreatePageResult(results, "api/authorizations", page, pageSize);
                return Ok(pageResult);
            }
        }

        /// <summary>
        /// temporary sorting solution for dummy test data
        /// </summary>
        /// <param name="results"></param>
        /// <param name="sortColumn"></param>
        /// <param name="asc"></param>
        /// <returns></returns>
        private List<Authorization> ResultsSortByColumnName(List<Authorization> results, string sortColumn, string sortDirection)
        {
            ///todo jnazarian database sorting and paging in the futures

            #region Sort direction
            var asc = (string.IsNullOrEmpty(sortDirection)) 
                ? true // default to asc=true
                : sortDirection.Equals("asc", StringComparison.OrdinalIgnoreCase);
            
            #endregion

            #region Sort options
            // providerId
            if (!string.IsNullOrEmpty(sortColumn) && sortColumn.Equals("providerId", StringComparison.OrdinalIgnoreCase))
                if (asc) results = results.OrderBy(a => a.ProviderId).ToList();
                else results = results.OrderByDescending(a => a.ProviderId).ToList();
            // vamcId
            if (!string.IsNullOrEmpty(sortColumn) && sortColumn.Equals("vamcId", StringComparison.OrdinalIgnoreCase))
                if (asc) results = results.OrderBy(a => a.VamcId).ToList();
                else results = results.OrderByDescending(a => a.VamcId).ToList();
            // veteranLastName
            if (!string.IsNullOrEmpty(sortColumn) && sortColumn.Equals("veteranLastName", StringComparison.OrdinalIgnoreCase))
                if (asc) results = results.OrderBy(a => a.VeteranLastName).ToList();
                else results = results.OrderByDescending(a => a.VeteranLastName).ToList();
            // veteranFirstName
            if (!string.IsNullOrEmpty(sortColumn) && sortColumn.Equals("veteranFirstName", StringComparison.OrdinalIgnoreCase))
                if (asc) results = results.OrderBy(a => a.VeteranFirstName).ToList();
                else results = results.OrderByDescending(a => a.VeteranFirstName).ToList();
            // veteranZipCode
            if (!string.IsNullOrEmpty(sortColumn) && sortColumn.Equals("veteranZipCode", StringComparison.OrdinalIgnoreCase))
                if (asc) results = results.OrderBy(a => a.VeteranZipCode).ToList();
                else results = results.OrderByDescending(a => a.VeteranZipCode).ToList();
            // memberNumber
            if (!string.IsNullOrEmpty(sortColumn) && sortColumn.Equals("memberNumber", StringComparison.OrdinalIgnoreCase))
                if (asc) results = results.OrderBy(a => a.MemberNumber).ToList();
                else results = results.OrderByDescending(a => a.MemberNumber).ToList();
            // categoryOfCare
            if (!string.IsNullOrEmpty(sortColumn) && sortColumn.Equals("categoryOfCare", StringComparison.OrdinalIgnoreCase))
                if (asc) results = results.OrderBy(a => a.CategoryOfCare).ToList();
                else results = results.OrderByDescending(a => a.CategoryOfCare).ToList();
            // ssnLast4
            if (!string.IsNullOrEmpty(sortColumn) && sortColumn.Equals("ssnLast4", StringComparison.OrdinalIgnoreCase))
                if (asc) results = results.OrderBy(a => a.SsnLast4).ToList();
                else results = results.OrderByDescending(a => a.SsnLast4).ToList();
            // referralNumber
            if (!string.IsNullOrEmpty(sortColumn) && sortColumn.Equals("referralNumber", StringComparison.OrdinalIgnoreCase))
                if (asc) results = results.OrderBy(a => a.ReferralNumber).ToList();
                else results = results.OrderByDescending(a => a.ReferralNumber).ToList();
            // profile
            if (!string.IsNullOrEmpty(sortColumn) && sortColumn.Equals("profile", StringComparison.OrdinalIgnoreCase))
                if (asc) results = results.OrderBy(a => a.Profile).ToList();
                else results = results.OrderByDescending(a => a.Profile).ToList();
            // program
            if (!string.IsNullOrEmpty(sortColumn) && sortColumn.Equals("program", StringComparison.OrdinalIgnoreCase))
                if (asc) results = results.OrderBy(a => a.Program).ToList();
                else results = results.OrderByDescending(a => a.Program).ToList();
            // createdOn
            if (!string.IsNullOrEmpty(sortColumn) && sortColumn.Equals("createdOn", StringComparison.OrdinalIgnoreCase))
                if (asc) results = results.OrderBy(a => a.CreatedOn).ToList();
                else results = results.OrderByDescending(a => a.CreatedOn).ToList();
            // reasonCode
            if (!string.IsNullOrEmpty(sortColumn) && sortColumn.Equals("reasonCode", StringComparison.OrdinalIgnoreCase))
                if (asc) results = results.OrderBy(a => a.ReasonCode).ToList();
                else results = results.OrderByDescending(a => a.ReasonCode).ToList();
            #endregion

            return results;
        }

    }
}