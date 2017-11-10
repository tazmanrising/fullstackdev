using System;
using System.Collections.Generic;
using System.Text;

namespace TriWest.Ccn.Portal.Common.Models
{
    public class Provider
    {
        public int Id { get; set; }

        // Search results
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        public string TaxId { get; set; }
        public string Npi { get; set; }
        public string ProviderName { get; set; }
        public string GroupName { get; set; }

        // Contact details tab
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        public string AddressPrimary { get; set; }
        public string CityPrimary { get; set; }
        public string StatePrimary { get; set; }
        public string PostalCodePrimary { get; set; }

        public string AddressBilling { get; set; }
        public string CityBilling { get; set; }
        public string StateBilling { get; set; }
        public string PostalCodeBilling { get; set; }

        public string AddressOther { get; set; }
        public string CityOther { get; set; }
        public string StateOther { get; set; }
        public string PostalCodeOther { get; set; }

        public string PhonePrimary { get; set; }
        public string PhoneBilling { get; set; }
        public string FaxPrimary { get; set; }
        public string FaxBilling { get; set; }

        public string MedDocCollectionNo { get; set; }

        public string EmailPrimary { get; set; }
        public string EmailContracting { get; set; }
        public string EmailBilling { get; set; }
        public string EmailOfficeManager { get; set; }

        // Provider details tab
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        public string PractitionerGender { get; set; }
        public string PractitionerSpecialty { get; set; }
        public string PractitionerNpi { get; set; }
        public string PractitionerContractStatus { get; set; }
        public DateTimeOffset PractitionerContractStartOn { get; set; }
        public DateTimeOffset PractitionerContractEndOn { get; set; }
        public string PractitionerContractDcn { get; set; }
        public bool PractitionerAcceptingPatients { get; set; }

        // Group details tab
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        public string GroupSpecialty { get; set; }
        public string GroupNpi { get; set; }
        public string GroupTaxId { get; set; }
        public string GroupContractStatus { get; set; }
        public DateTimeOffset GroupContractStartOn { get; set; }
        public DateTimeOffset GroupContractEndOn { get; set; }
        public string GroupContractDcn { get; set; }
        public bool GroupAcceptingPatients { get; set; }

        // Group details tab (added for story 885 on 9/8/2017)
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        public string HoursOfOperation { get; set; }
        public string SameDayAppointing { get; set; }
        public string UrgentCare { get; set; }


    }
}
