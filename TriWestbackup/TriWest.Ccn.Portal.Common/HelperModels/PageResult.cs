using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TriWest.Ccn.Portal.Common.HelperModels
{
    public class PageResult<T>
    {
        /// <summary>
        /// The page number this page represents.
        /// </summary>
        public int Page { get; set; }

        /// <summary>
        /// The size of this page.
        /// </summary>
        public int PageSize { get; set; }

        /// <summary>
        /// The total number of pages available.
        /// </summary>
        public int TotalPages { get; set; }

        /// <summary>
        /// The total number of records available.
        /// </summary>
        public int TotalRecords { get; set; }

        /// <summary>
        /// The URL to the next page - if null, there are no more pages.
        /// </summary>
        public string NextPageUrl { get; set; }

        /// <summary>
        /// The records this page represents.
        /// </summary>
        public IEnumerable<T> Results { get; set; }


        public static PageResult<T> CreatePageResult(IEnumerable<T> enumerable, string route, int page, int pageSize/*, string orderBy, bool ascending*/)
        {
            var totalRecords = enumerable.Count();
            var skipAmount = pageSize * (page - 1);
            var results = enumerable.Skip(skipAmount).Take(pageSize).ToList();

            var mod = totalRecords % pageSize;
            var totalPageCount = (totalRecords / pageSize) + (mod == 0 ? 0 : 1);

            var nextPageUrl = page == totalPageCount ? string.Empty : $"{route}?page={page + 1}&pageSize={pageSize}";

            return new PageResult<T>
            {
                Results = results,
                Page = page,
                PageSize = results.Count,
                TotalPages = totalPageCount,
                TotalRecords = totalRecords,
                NextPageUrl = nextPageUrl
            };
        }

    }

}
