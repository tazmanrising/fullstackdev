using System;
using System.Collections.Generic;
using System.Text;

namespace TriWest.Ccn.Portal.Common.Models
{
    public class Referral
    {
        //[Key]
        public int Id { get; set; }
        public int ApprovalReferralAuth { get; set; }
        public int ContractNumber { get; set; }
        public string TaskClinXX { get; set; }
        public DateTime? CidDate { get; set; }
        public string VaPcp { get; set; }
        public string OrderingOfficer { get; set; }
        public string AppendExcludeServices { get; set; }
        public string Icd10Diagnosis { get; set; }
        public DateTime? ReferralTo { get; set; }
        public DateTime? ReferralFrom { get; set; }
        public string PreferredProviderName { get; set; }
        public int VaPrimaryCareProvider { get; set; }
        public string WhoIsAppoining { get; set; }
        public DateTime? AppointmentProvided { get; set; }
        public DateTime? DateReferralSubmitted { get; set; }
        public int AddProvider { get; set; }

    }

}
