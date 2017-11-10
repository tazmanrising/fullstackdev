using System;
using System.Collections.Generic;
using System.Text;

namespace TriWest.Ccn.Portal.Common.Models
{
    public class Authorization
    {
        public int Id { get; set; }
        public int VeteranId { get; set; }
        public int ProviderId { get; set; }
        public string Provider { get; set; }
        public int VamcId { get; set; }
        public string VeteranLastName { get; set; }
        public string VeteranFirstName { get; set; }
        public string VeteranZipCode { get; set; }
        public string MemberNumber { get; set; }
        public string SsnLast4 { get; set; }
        public string ReferralNumber { get; set; }
        public string Profile { get; set; }
        public string Program { get; set; }
        public string CategoryOfCare { get; set; }
        public string Vamc { get; set; }
        public string CreatedOn { get; set; }
        public string ReasonCode { get; set; }

    }
}
