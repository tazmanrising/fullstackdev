using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TriWest.Ccn.Portal.Common.Models
{
    public class VeteranEnrollment
    {
        public int Id { get; set; }

        [Display(Name = "EnrollmentType")]
        public string EnrollmentType { get; set; }

        [Display(Name = "Program")]
        public string ProgramName { get; set; }

        [Display(Name = "Case Manager")]
        public string ProgramCareManager { get; set; }

        [Display(Name = "Case Manager ID")]
        public string ProgramCareManagerId { get; set; }

        [Display(Name = "Start Date")]
        public DateTimeOffset? EnrollDate { get; set; }

        [Display(Name = "End Date")]
        public DateTimeOffset? EndDate { get; set; }
    }
}
