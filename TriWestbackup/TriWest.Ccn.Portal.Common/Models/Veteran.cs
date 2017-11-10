using System;
using System.Collections.Generic;

namespace TriWest.Ccn.Portal.Common.Models
{
    public class Veteran
    {
        public int Id { get; set; }
        public string MemberNumber { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Gender { get; set; }          // added for 2884 on 9/6/17
        public string PhoneNumber { get; set; }
        public string EmailAddress { get; set; }    // added for 2884 on 9/6/17
        public string SsnLast4 { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public DateTime? DateOfDeath { get; set; }   // added for 2884 on 9/6/17
        public int VamcId { get; set; }             // added for 2884 on 9/6/17
        public string Vamc { get; set; }
        
        public string Program { get; set; }        
        public string AdditionalEmailAddress { get; set; }       
        public string SubscriptionType { get; set; }

        public int CountOfAuths { get; set; }
        public int CountOfProviders { get; set; }
        public int CountOfPrescriptions { get; set; }
        public int CountOfAppointments { get; set; }
        public int Age
        {
            get
            {
                if (!this.DateOfBirth.HasValue)
                    return 0;

                var today = DateTime.Today;
                var age = today.Year - this.DateOfBirth.Value.Year;
                return this.DateOfBirth > today.AddYears(-age) ? age-- : age;   // in case of leap year
            }
        }

        public virtual List<Address> Addresses { get; set; }

        public virtual List<Phone> Phones { get; set; }

        public virtual List<HippaAlert> HippaAlerts { get; set; }

        public virtual List<VeteranOHI> VeteranOHIList { get; set; }

        public virtual List<VeteranEnrollment> Enrollments { get; set; }

        public virtual List<VeteranPrimaryCareProviderItem> PrimaryCareProviderHistory { get; set; }
    }

    /// <summary>
    /// Temporary bucket for veteran PCP hx
    /// </summary>
    public class VeteranPrimaryCareProviderItem {

        public int Id { get; set; }
        public DateTime? UpdateDate { get; set; }
        public Provider Provider { get; set; }
    }
}
