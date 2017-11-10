using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Text;

namespace TriWest.Ccn.Portal.Common.Models
{
    public class VeteranOHI
    {
        public Int64 Id { get; set; }

        [Display(Name = "Care Classification")]
        public string CareClassification { get; set; }

        [Display(Name = "Carrier Name")]
        public string CarrierName { get; set; }

        [Display(Name = "Member ID")]
        public string MemberId { get; set; }

        [Display(Name = "Effective Date")]
        public DateTimeOffset EffectiveDate { get; set; }

        [Display(Name = "Group ID")]
        public string GroupId { get; set; }

        [Display(Name = "Plan ID")]
        public string PlanId { get; set; }

        [Display(Name = "End Date")]
        public Nullable<DateTimeOffset> EndDate { get; set; }
    }
}
