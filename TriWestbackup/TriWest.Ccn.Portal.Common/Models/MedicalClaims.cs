using System;
using System.Collections.Generic;
using System.Text;

namespace TriWest.Ccn.Portal.Common.Models
{
    public class MedicalClaim
    {
        public int Id { get; set; }
        public int ProviderId { get; set; }
        public string ClaimNumber { get; set; }
        public string PatientLastName { get; set; }
        public string PatientFirstName { get; set; }        
        public DateTimeOffset ServiceDate { get; set; }      
        public decimal? PaidAmount { get; set; }
        public DateTimeOffset? PaidDate { get; set; }
        public string Status { get; set; }       
    }
}
