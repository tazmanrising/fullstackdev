using System;
using System.Collections.Generic;
using System.Text;

namespace TriWest.Ccn.Portal.Common.Models
{
    public class Claim
    {
        public int Id { get; set; }
        public int ProviderId { get; set; }
        public int VeteranId { get; set; }
        public string ClaimNumber { get; set; }
        public string VeteranNumber { get; set; }
        public string VeteranLastName { get; set; }
        public string VeteranFirstName { get; set; } 
        public string ProviderName { get; set; }
        public string TaxId { get; set; }
        public string SsnLast4 { get; set; }
        public string Npi { get; set; }
        public string PractitionerNpi { get; set; }
        public string GroupNpi { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public DateTimeOffset BeginDate { get; set; }
        public decimal? Charges { get; set; }
        public decimal? PaidAmount { get; set; }
        public DateTimeOffset? PaidDate { get; set; }
        public string Status { get; set; }
        public int VamcId { get; set; }
        public string Vamc { get; set; }
    }
}
