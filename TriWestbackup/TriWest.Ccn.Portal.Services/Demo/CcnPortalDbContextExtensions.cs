using System;
using System.Collections.Generic;
using System.Linq;
using TriWest.Ccn.Portal.Common.Models;

namespace TriWest.Ccn.Portal.Services.Demo
{
    public static class CcnPortalDbContextExtensions
    {
        public static void EnsureSeedData(this CcnPortalDbContext context)
        {
            #region Referrals
            if(!context.Referrals.Any())
            {
                context.Referrals.AddRange(
                    new Referral { Id = 1,  ApprovalReferralAuth = 1, ContractNumber = 1, TaskClinXX = "test", CidDate = DateTime.Now, VaPcp = "other", OrderingOfficer = "John Baxter", AppendExcludeServices = "dental", Icd10Diagnosis = "liver", ReferralFrom = DateTime.Now, ReferralTo = DateTime.Now, PreferredProviderName = "Blue", VaPrimaryCareProvider = 1, WhoIsAppoining = "VAMC", AppointmentProvided = DateTime.Now, DateReferralSubmitted = DateTime.Now, AddProvider = 1 }
                );
            }
            #endregion 


            #region Veterans
            if (!context.Veterans.Any())
            {
                context.Veterans.AddRange(
                    new Veteran
                    {
                        Id = 15,
                        FirstName = "Jimmy",
                        LastName = "Carter",
                        MemberNumber = "99473",
                        DateOfBirth = DateTime.Parse("10/1/2010"),
                        Gender = "M",
                        EmailAddress = "jim@peachfarms.com",
                        Program = "Distance",
                        SsnLast4 = "4321",
                        VamcId = 61,
                        Vamc = "Tenessesse Valley VAMC",
                        CountOfAuths = 4,
                        CountOfProviders = 2,
                        CountOfPrescriptions = 3,
                        CountOfAppointments = 6,
                        SubscriptionType = "sms",
                        Phones = new List<Phone>()
                        {
                            new Phone { PhoneNumber = "555-376-5465", PhoneType="Home"},
                            new Phone { PhoneNumber = "901-748-2550", PhoneType="Mobile"},
                            new Phone { PhoneNumber = "555-122-4543", PhoneType="Work"},
                            new Phone { PhoneNumber = "510-351-9276", PhoneType="Fax"},
                        },
                        Addresses = new List<Address>()
                        {
                            new Address { Street = "111 Ellington Circle", City = "Nashville", State = "TN",PostalCode = "34211",  AddressType="Default"},
                            new Address { Street = "111 Ellington Circle", City = "Nashville", State = "GA", PostalCode = "34211",  AddressType="Permanent"},
                            new Address { Street = "2347 N 5Oth Ave", City = "Arcadia", State = "FL", PostalCode = "34226",  AddressType="Temporary"}
                        },
                        HippaAlerts = new List<HippaAlert>()
                        {
                            new HippaAlert { AlertType = "Alert", BeginOn = DateTime.Now.AddDays(-60), EndOn = DateTime.Now.AddDays(130), Message = "Dan Agle has POA."}
                        },
                        VeteranOHIList = new List<VeteranOHI>() {
                            //new VeteranOHI { CareClassification = "Commercial Med",    CarrierName = "Blue Cross",   MemberId = "", EffectiveDate = DateTimeOffset.Parse("12/12/2016").Date, GroupId = "", PlanId = "", EndDate = null },
                            //new VeteranOHI { CareClassification = "Commercial Dental", CarrierName = "Delta Dental", MemberId = "", EffectiveDate = DateTimeOffset.Parse("01/01/2017").Date, GroupId = "", PlanId = "", EndDate = null },
                            //new VeteranOHI { CareClassification = "Medicare Med",    CarrierName = "Medicare",   MemberId = "", EffectiveDate = DateTimeOffset.Parse("12/12/2016").Date, GroupId = "", PlanId = "", EndDate = null },
                            //new VeteranOHI { CareClassification = "Medicaid",    CarrierName = "AHCCCS",   MemberId = "", EffectiveDate = DateTimeOffset.Parse("12/12/2016").Date, GroupId = "", PlanId = "", EndDate = null }
                        },
                        Enrollments = new List<VeteranEnrollment>()
                        {
                            new VeteranEnrollment
                            {
                                EndDate = null,
                                EnrollDate = DateTime.Parse("1/1/2017"),
                                EnrollmentType = "Distance",
                                ProgramCareManager = "",
                                ProgramCareManagerId = "",
                                ProgramName = "Distance"
                            },
                            new VeteranEnrollment
                            {
                                EndDate = null,
                                EnrollDate = DateTime.Parse("1/1/2017"),
                                EnrollmentType = "WaitTime",
                                ProgramCareManager = "",
                                ProgramCareManagerId = "",
                                ProgramName = "Wait Time"
                            },
                            new VeteranEnrollment
                            {
                                EndDate = null,
                                EnrollDate = DateTime.Parse("2/11/2017"),
                                EnrollmentType = "Other",
                                ProgramCareManager = "George Reynolds",
                                ProgramCareManagerId = "3279",
                                ProgramName = "Disease Management"
                            },
                            new VeteranEnrollment
                            {
                                EndDate = null,
                                EnrollDate = DateTime.Parse("2/11/2017"),
                                EnrollmentType = "Other",
                                ProgramCareManager = "Joyce Finial",
                                ProgramCareManagerId = "2548",
                                ProgramName = "Case Management"
                            },
                            new VeteranEnrollment
                            {
                                EndDate = null,
                                EnrollDate = DateTime.Parse("2/11/2017"),
                                EnrollmentType = "Other",
                                ProgramCareManager = "Tina Flanders",
                                ProgramCareManagerId = "3690",
                                ProgramName = "Care Coodination"
                            },
                        },
                        ///TODO jnazarian should be sorted by most recent first
                        PrimaryCareProviderHistory = new List<VeteranPrimaryCareProviderItem>
                        {
                            new VeteranPrimaryCareProviderItem {
                                UpdateDate = DateTime.Parse("03/01/2015"),
                                Provider = new Provider { Id = 9, ProviderName = "Charles Rogers", GroupName = "Utica Medical Clinic", TaxId = "111111111", GroupTaxId = "111111111", Npi = "2222222222", PractitionerNpi = "2222222222", GroupNpi = "3333333333", AddressPrimary = "1439 Utica Ave", CityPrimary = "Tulsa", StatePrimary = "OK", PostalCodePrimary = "74100", PhonePrimary = "2085551234", FaxPrimary = "2085559687", EmailPrimary = "charles@uticamed.org", AddressBilling = "1439 Utica Ave", CityBilling = "Tulsa", StateBilling = "OK", PostalCodeBilling = "74100", EmailBilling = "mo@uticamed.org", PhoneBilling = "2085551234", FaxBilling = "2085559687", AddressOther = "", CityOther = "", StateOther = "", PostalCodeOther = "", EmailContracting = "charles@uticamed.org", EmailOfficeManager = "mo@uticamed.org", MedDocCollectionNo = "32454325987", PractitionerGender = "M", PractitionerContractDcn = "9765654435", PractitionerContractStatus = "Good", PractitionerContractStartOn = DateTime.Now.AddYears(-1), PractitionerContractEndOn = DateTime.Now.AddYears(1), PractitionerSpecialty = "Laparoscopy", PractitionerAcceptingPatients = true, GroupContractDcn = "9765654435", GroupContractStatus = "Good", GroupContractStartOn = DateTime.Now.AddYears(-1), GroupContractEndOn = DateTime.Now.AddYears(1), GroupSpecialty = "Laparoscopy", GroupAcceptingPatients = true, HoursOfOperation = "Mon, Wed, Fri: 7:00 - 15:00 Tues, Thur: 9:00 - 18:00", SameDayAppointing = "Yes", UrgentCare = "No" }
                            }
                        }
                    },
                    new Veteran
                    {
                        Id = 2,
                        FirstName = "Gerald",
                        LastName = "Ford",
                        Gender = "M",
                        MemberNumber = "34254",
                        DateOfBirth = DateTime.Parse("4/14/1913"),
                        PhoneNumber = "555-112-9572",
                        Program = "Distance",
                        SsnLast4 = "5465",
                        VamcId = 44,
                        Vamc = "Omaha VAMC",
                        CountOfAuths = 3,
                        CountOfProviders = 2,
                        CountOfPrescriptions = 3,
                        CountOfAppointments = 6,
                        Phones = new List<Phone>() { new Phone { PhoneNumber = "555-112-9572", PhoneType = "Home" } },
                        Addresses = new List<Address>() { new Address { Street = "PO Box 8845", City = "Omaha", State = "NE", PostalCode = "68007", AddressType = "Default" } },
                        HippaAlerts = new List<HippaAlert>() { new HippaAlert { AlertType = "Alert", BeginOn = DateTime.Now.AddDays(-360), EndOn = DateTime.Now.AddDays(130), Message = "Somebody has POA." } },
                        Enrollments = new List<VeteranEnrollment>()
                        {
                            new VeteranEnrollment
                            {
                                EndDate = null,
                                EnrollDate = DateTime.Parse("1/1/2017"),
                                EnrollmentType = "Distance",
                                ProgramCareManager = "",
                                ProgramCareManagerId = "",
                                ProgramName = "Distance"
                            },
                            new VeteranEnrollment
                            {
                                EndDate = null,
                                EnrollDate = DateTime.Parse("1/1/2017"),
                                EnrollmentType = "WaitTime",
                                ProgramCareManager = "",
                                ProgramCareManagerId = "",
                                ProgramName = "Wait Time"
                            },
                            new VeteranEnrollment
                            {
                                EndDate = null,
                                EnrollDate = DateTime.Parse("3/11/2014"),
                                EnrollmentType = "Other",
                                ProgramCareManager = "George Reynolds",
                                ProgramCareManagerId = "3279",
                                ProgramName = "Disease Management"
                            },
                            new VeteranEnrollment
                            {
                                EndDate = null,
                                EnrollDate = DateTime.Parse("4/20/2017"),
                                EnrollmentType = "Other",
                                ProgramCareManager = "Joyce Finial",
                                ProgramCareManagerId = "2548",
                                ProgramName = "Disease Management"
                            }
                        },
                        ///TODO jnazarian should be sorted by most recent first
                        PrimaryCareProviderHistory = new List<VeteranPrimaryCareProviderItem>
                        {
                            new VeteranPrimaryCareProviderItem {
                                UpdateDate = DateTime.Parse("05/23/2016"),
                                Provider = new Provider { Id = 10, ProviderName = "Charles Rogers", GroupName = "Utica Medical Clinic", TaxId = "777777777", GroupTaxId = "777777777", Npi = "8888888888", PractitionerNpi = "8888888888", GroupNpi = "9999999999", AddressPrimary = "1439 Utica Ave", CityPrimary = "Tulsa", StatePrimary = "OK", PostalCodePrimary = "74100", PhonePrimary = "2085551234", FaxPrimary = "2085559687", EmailPrimary = "charles@uticamed.org", AddressBilling = "1439 Utica Ave", CityBilling = "Tulsa", StateBilling = "OK", PostalCodeBilling = "74100", EmailBilling = "mo@uticamed.org", PhoneBilling = "2085551234", FaxBilling = "2085559687", AddressOther = "", CityOther = "", StateOther = "", PostalCodeOther = "", EmailContracting = "charles@uticamed.org", EmailOfficeManager = "mo@uticamed.org", MedDocCollectionNo = "32454325987", PractitionerGender = "M", PractitionerContractDcn = "9765654435", PractitionerContractStatus = "Good", PractitionerContractStartOn = DateTime.Now.AddYears(-1), PractitionerContractEndOn = DateTime.Now.AddYears(1), PractitionerSpecialty = "Laparoscopy", PractitionerAcceptingPatients = true, GroupContractDcn = "9765654435", GroupContractStatus = "Good", GroupContractStartOn = DateTime.Now.AddYears(-1), GroupContractEndOn = DateTime.Now.AddYears(1), GroupSpecialty = "Laparoscopy", GroupAcceptingPatients = true, HoursOfOperation = "Mon, Wed, Fri: 7:00 - 15:00 Tues, Thur: 9:00 - 18:00", SameDayAppointing = "Yes", UrgentCare = "No" }
                            }
                        }
                    },
                    new Veteran
                    {
                        Id = 3,
                        FirstName = "Lyndon",
                        LastName = "Johnson",
                        Gender = "M",
                        MemberNumber = "98351",
                        Addresses = new List<Address>() { new Address { Street = "322 N. Central", City = "Stonewall", State = "TX", PostalCode = "78671", AddressType = "Default" } },
                        DateOfBirth = DateTime.Parse("8/27/1908"),
                        Phones = new List<Phone>() { new Phone { PhoneNumber = "555-707-4521", PhoneType = "Home" } },
                        Program = "Wait Time",
                        SsnLast4 = "2132",
                        VamcId = 13,
                        Vamc = "Dallas VAMC",
                        CountOfAuths = 1,
                        CountOfProviders = 2,
                        CountOfPrescriptions = 3,
                        CountOfAppointments = 6,
                    },
                    new Veteran
                    {
                        Id = 4,
                        FirstName = "Harry",
                        LastName = "Truman",
                        Gender = "M",
                        MemberNumber = "10553",
                        Addresses = new List<Address>() { new Address { Street = "9000 Lamar Blvd", City = "Lamar", State = "MO", PostalCode = "64759", AddressType = "Default" } },
                        DateOfBirth = DateTime.Parse("5/8/1884"),
                        Phones = new List<Phone>() { new Phone { PhoneNumber = "417-682-2279", PhoneType = "Home" } },
                        Program = "Choice",
                        SsnLast4 = "5678",
                        VamcId = 37,
                        Vamc = "Montana VAMC",
                        CountOfAuths = 2,
                        CountOfProviders = 2,
                        CountOfPrescriptions = 3,
                        CountOfAppointments = 6,
                    },
                    new Veteran
                    {
                        Id = 5,
                        FirstName = "Herbert",
                        LastName = "Hoover",
                        Gender = "M",
                        MemberNumber = "99944",
                        Addresses = new List<Address>() { new Address { Street = "505 I St.", City = "West Branch", State = "IA", PostalCode = "52358", AddressType = "Default" } },
                        DateOfBirth = DateTime.Parse("8/10/1874"),
                        Phones = new List<Phone>() { new Phone { PhoneNumber = "555-330-7944", PhoneType = "Home" } },
                        Program = "Another",
                        SsnLast4 = "1312",
                        VamcId = 6,
                        Vamc = "Big Spring VAMC",
                        CountOfAuths = 1,
                        CountOfProviders = 2,
                        CountOfPrescriptions = 3,
                        CountOfAppointments = 6,
                    },
                    new Veteran
                    {
                        Id = 6,
                        FirstName = "Ronald",
                        LastName = "Reagan",
                        Gender = "M",
                        MemberNumber = "55390",
                        Addresses = new List<Address>() { new Address { Street = "983 Hollywood Blvd", City = "Tampico", State = "IL", PostalCode = "61283", AddressType = "Default" } },
                        EmailAddress = "gipper@yahoo.com",
                        DateOfBirth = DateTime.Parse("10/1/1924"),
                        DateOfDeath = DateTime.Parse("06/05/2004"),
                        VamcId = 19,
                        PhoneNumber = "815-468-2130",
                        Program = "Choice",
                        SsnLast4 = "8321",
                        Vamc = "Greater Los Angeles VAMC",
                        CountOfAuths = 4,
                        CountOfProviders = 2,
                        CountOfPrescriptions = 3,
                        CountOfAppointments = 6,
                        VeteranOHIList = new List<VeteranOHI>() {
                            //new VeteranOHI { CareClassification = "Commercial Med",    CarrierName = "Blue Cross",   MemberId = "", EffectiveDate = DateTimeOffset.Parse("12/12/2016").Date, GroupId = "", PlanId = "", EndDate = null },
                            //new VeteranOHI { CareClassification = "Commercial Dental", CarrierName = "Delta Dental", MemberId = "", EffectiveDate = DateTimeOffset.Parse("01/01/2017").Date, GroupId = "", PlanId = "", EndDate = null }
                        }
                    },
                    new Veteran
                    {
                        Id = 7,
                        FirstName = "Calvin",
                        LastName = "Coolidge",
                        Gender = "M",
                        MemberNumber = "72234",
                        Addresses = new List<Address>() { new Address { Street = "Parks and Recreation Build #4012B", City = "Plymouth Notch", State = "VT", PostalCode = "05056", AddressType = "Default" } },
                        DateOfBirth = DateTime.Parse("7/4/1872"),
                        Phones = new List<Phone>() { new Phone { PhoneNumber = "555-323-5555", PhoneType = "Mobile" } },
                        Program = "Distance",
                        SsnLast4 = "7913",
                        VamcId = 47,
                        Vamc = "Poplar Bluff VAMC",
                        CountOfAuths = 2,
                        CountOfProviders = 2,
                        CountOfPrescriptions = 3,
                        CountOfAppointments = 6,
                    },
                    new Veteran
                    {
                        Id = 8,
                        FirstName = "Warren",
                        LastName = "Harding",
                        Gender = "M",
                        MemberNumber = "22009",
                        Addresses = new List<Address>() { new Address { Street = "2001 E. Solar Dr", City = "Blooming Grove", State = "OH", PostalCode = "44833", AddressType = "Permanent" } },
                        DateOfBirth = DateTime.Parse("11/2/1865"),
                        Phones = new List<Phone>() { new Phone { PhoneNumber = "555-991-5849", PhoneType = "Work" } },
                        Program = "Wait Time",
                        SsnLast4 = "8016",
                        VamcId = 55,
                        Vamc = "San Francisco VAMC",
                        CountOfAuths = 3,
                        CountOfProviders = 2,
                        CountOfPrescriptions = 3,
                        CountOfAppointments = 6,
                    }
                );
            }
            #endregion

            #region Providers
            if (!context.Providers.Any())
            {
                context.Providers.AddRange(
                    new Provider { Id = 1, ProviderName = "Charles Rogers", GroupName = "Utica Medical Clinic", TaxId = "200923219", GroupTaxId = "200923219", Npi = "9123456789", PractitionerNpi = "9123456789", GroupNpi = "1987654321", AddressPrimary = "1439 Utica Ave", CityPrimary = "Tulsa", StatePrimary = "OK", PostalCodePrimary = "74100", PhonePrimary = "2085551234", FaxPrimary = "2085559687", EmailPrimary = "charles@uticamed.org", AddressBilling = "1439 Utica Ave", CityBilling = "Tulsa", StateBilling = "OK", PostalCodeBilling = "74100", EmailBilling = "mo@uticamed.org", PhoneBilling = "2085551234", FaxBilling = "2085559687", AddressOther = "", CityOther = "", StateOther = "", PostalCodeOther = "", EmailContracting = "charles@uticamed.org", EmailOfficeManager = "mo@uticamed.org", MedDocCollectionNo = "32454325987", PractitionerGender = "M", PractitionerContractDcn = "9765654435", PractitionerContractStatus = "Good", PractitionerContractStartOn = DateTime.Now.AddYears(-1), PractitionerContractEndOn = DateTime.Now.AddYears(1), PractitionerSpecialty = "Laparoscopy", PractitionerAcceptingPatients = true, GroupContractDcn = "9765654435", GroupContractStatus = "Good", GroupContractStartOn = DateTime.Now.AddYears(-1), GroupContractEndOn = DateTime.Now.AddYears(1), GroupSpecialty = "Laparoscopy", GroupAcceptingPatients = true, HoursOfOperation = "Mon, Wed, Fri: 7:00 - 15:00 Tues, Thur: 9:00 - 18:00", SameDayAppointing = "Yes", UrgentCare = "No" },
                    new Provider { Id = 2, ProviderName = "Margaret Smith", GroupName = "Super Doctors", TaxId = "564326985", GroupTaxId = "556699654", Npi = "9553456789", PractitionerNpi = "9553456789", GroupNpi = "5987654321", AddressPrimary = "5050 W. Congress St.", CityPrimary = "Lafayette", StatePrimary = "LA", PostalCodePrimary = "70506", PhonePrimary = "6065559654", FaxPrimary = "6065552314", EmailPrimary = "ms@supdoc,org", AddressBilling = "5050 W. Congress St.", CityBilling = "Lafayette", StateBilling = "LA", PostalCodeBilling = "70506", EmailBilling = "billing@supdoc.org", PhoneBilling = "6065558523", FaxBilling = "6065552314", AddressOther = "5052 W. Congress St.", CityOther = "Lafayette", StateOther = "LA", PostalCodeOther = "70506", EmailContracting = "contracts@supdoc.org", EmailOfficeManager = "bjones@supdoc.org", MedDocCollectionNo = "99685445", PractitionerGender = "F", PractitionerContractDcn = "665231", PractitionerContractStatus = "Good", PractitionerContractStartOn = DateTime.Now.AddDays(-543), PractitionerContractEndOn = DateTime.Now.AddDays(121), PractitionerSpecialty = "Sports, Feet", PractitionerAcceptingPatients = false, GroupContractDcn = "700125", GroupContractStatus = "Good", GroupContractStartOn = DateTime.Now.AddDays(-1000), GroupContractEndOn = DateTime.Now.AddDays(309), GroupSpecialty = "Foot, Sports, Throat", GroupAcceptingPatients = true, HoursOfOperation = "Mon, Tues, Wed, Thur, Fri: 7:00 - 15:30", SameDayAppointing = "No", UrgentCare = "No" },
                    new Provider { Id = 3, ProviderName = "Larry Mills", GroupName = "Super Doctors", TaxId = "650336521", GroupTaxId = "556699654", Npi = "25145", PractitionerNpi = "25145", GroupNpi = "987654", AddressPrimary = "5050 W. Congress St.", CityPrimary = "Lafayette", StatePrimary = "LA", PostalCodePrimary = "70506", PhonePrimary = "6065559654", FaxPrimary = "6065552314", EmailPrimary = "dr.larry@supdoc,org", AddressBilling = "5050 W. Congress St.", CityBilling = "Lafayette", StateBilling = "LA", PostalCodeBilling = "70506", EmailBilling = "billing@supdoc.org", PhoneBilling = "6065558523", FaxBilling = "6065552314", AddressOther = "5052 W. Congress St.", CityOther = "Lafayette", StateOther = "LA", PostalCodeOther = "70506", EmailContracting = "contracts@supdoc.org", EmailOfficeManager = "bjones@supdoc.org", MedDocCollectionNo = "99685445", PractitionerGender = "M", PractitionerContractDcn = "300024", PractitionerContractStatus = "Good", PractitionerContractStartOn = DateTime.Now.AddDays(-243), PractitionerContractEndOn = DateTime.Now.AddDays(321), PractitionerSpecialty = "Sports, Throat", PractitionerAcceptingPatients = true, GroupContractDcn = "700125", GroupContractStatus = "Good", GroupContractStartOn = DateTime.Now.AddDays(-1000), GroupContractEndOn = DateTime.Now.AddDays(309), GroupSpecialty = "Foot, Sports, Throat", GroupAcceptingPatients = true, HoursOfOperation = "Mon, Wed, Fri: 7:00 - 16:00 Tues, Thur: 9:00 - 18:00", SameDayAppointing = "Yes", UrgentCare = "No" },
                    new Provider { Id = 4, ProviderName = "Deborah Williams", GroupName = "Deborah Williams", TaxId = "6521023", GroupTaxId = "6521023", Npi = "66098", PractitionerNpi = "66098", GroupNpi = "", AddressPrimary = "6932 Elelupe Pl", CityPrimary = "Honolulu", StatePrimary = "HI", PostalCodePrimary = "96820", PhonePrimary = "9155550024", FaxPrimary = "", EmailPrimary = "d.williams@williamsmd.org", AddressBilling = "6932 Elelupe Pl", CityBilling = "Honolulu", StateBilling = "HI", PostalCodeBilling = "96820", EmailBilling = "d.williams@williamsmd.org", PhoneBilling = "9155550024", FaxBilling = "", AddressOther = "", CityOther = "", StateOther = "", PostalCodeOther = "", EmailContracting = "", EmailOfficeManager = "", MedDocCollectionNo = "2521400", PractitionerGender = "F", PractitionerContractDcn = "555222", PractitionerContractStatus = "Good", PractitionerContractStartOn = DateTime.Now.AddDays(-1243), PractitionerContractEndOn = DateTime.Now.AddDays(421), PractitionerSpecialty = "Family", PractitionerAcceptingPatients = true, GroupContractDcn = "", GroupContractStatus = "", GroupContractStartOn = DateTime.MinValue, GroupContractEndOn = DateTime.MinValue, GroupSpecialty = "", GroupAcceptingPatients = false, HoursOfOperation = "Mon, Wed, Fri: 7:00 - 15:00 Tues, Thur: 9:00 - 18:00", SameDayAppointing = "Yes", UrgentCare = "Yes" },
                    new Provider { Id = 5, ProviderName = "Mikhail Lamb", GroupName = "Lamb Medical Center", TaxId = "654321", GroupTaxId = "789654", Npi = "1223411556", PractitionerNpi = "1223411556", GroupNpi = "5432105432", AddressPrimary = "1100 Ethan Way", CityPrimary = "Sacramento", StatePrimary = "CA", PostalCodePrimary = "95825", PhonePrimary = "2185553696", FaxPrimary = "2185551239", EmailPrimary = "mik.lamb@lmc.org", AddressBilling = "1100 Ethan Way", CityBilling = "Sacramento", StateBilling = "CA", PostalCodeBilling = "95825", EmailBilling = "accounts@lmc.org", PhoneBilling = "2185553696", FaxBilling = "2185551239", AddressOther = "", CityOther = "", StateOther = "", PostalCodeOther = "", EmailContracting = "contract@lmc.org", EmailOfficeManager = "nora.lamb@lmc.org", MedDocCollectionNo = "980650", PractitionerGender = "M", PractitionerContractDcn = "203010", PractitionerContractStatus = "Good", PractitionerContractStartOn = DateTime.Now.AddDays(-43), PractitionerContractEndOn = DateTime.Now.AddDays(450), PractitionerSpecialty = "Family, Foot", PractitionerAcceptingPatients = true, GroupContractDcn = "400052", GroupContractStatus = "Good", GroupContractStartOn = DateTime.Now.AddDays(-43), GroupContractEndOn = DateTime.Now.AddDays(450), GroupSpecialty = "Family, Foot, Dental", GroupAcceptingPatients = true, HoursOfOperation = "Mon, Tues, Wed, Thur, Fri: 8:00 - 18:00", SameDayAppointing = "Yes", UrgentCare = "No" },
                    new Provider { Id = 6, ProviderName = "Melinda Cross", GroupName = "Lamb Medical Center", TaxId = "60052", GroupTaxId = "789654", Npi = "1234512345", PractitionerNpi = "1234512345", GroupNpi = "5432105432", AddressPrimary = "1100 Ethan Way", CityPrimary = "Sacramento", StatePrimary = "CA", PostalCodePrimary = "95825", PhonePrimary = "2185553696", FaxPrimary = "2185551239", EmailPrimary = "melindac@lmc.org", AddressBilling = "1100 Ethan Way", CityBilling = "Sacramento", StateBilling = "CA", PostalCodeBilling = "95825", EmailBilling = "accounts@lmc.org", PhoneBilling = "2185553696", FaxBilling = "2185551239", AddressOther = "", CityOther = "", StateOther = "", PostalCodeOther = "", EmailContracting = "contract@lmc.org", EmailOfficeManager = "nora.lamb@lmc.org", MedDocCollectionNo = "980650", PractitionerGender = "F", PractitionerContractDcn = "1999853", PractitionerContractStatus = "Good", PractitionerContractStartOn = DateTime.Now.AddDays(-43), PractitionerContractEndOn = DateTime.Now.AddDays(450), PractitionerSpecialty = "Family, Dental", PractitionerAcceptingPatients = false, GroupContractDcn = "400052", GroupContractStatus = "Good", GroupContractStartOn = DateTime.Now.AddDays(-43), GroupContractEndOn = DateTime.Now.AddDays(450), GroupSpecialty = "Family, Foot, Dental", GroupAcceptingPatients = true, HoursOfOperation = "Mon, Tues, Wed, Thur, Fri: 8:00 - 18:00", SameDayAppointing = "Yes", UrgentCare = "No" },
                    new Provider { Id = 7, ProviderName = "Joshua Flip", GroupName = "Lamb Medical Center", TaxId = "200367", GroupTaxId = "789654", Npi = "0123498765", PractitionerNpi = "0123498765", GroupNpi = "5432105432", AddressPrimary = "1100 Ethan Way", CityPrimary = "Sacramento", StatePrimary = "CA", PostalCodePrimary = "95825", PhonePrimary = "2185553696", FaxPrimary = "2185551239", EmailPrimary = "jflip@lmc.org", AddressBilling = "1100 Ethan Way", CityBilling = "Sacramento", StateBilling = "CA", PostalCodeBilling = "95825", EmailBilling = "accounts@lmc.org", PhoneBilling = "2185553696", FaxBilling = "2185551239", AddressOther = "PO Box 2284", CityOther = "Boston", StateOther = "MA", PostalCodeOther = "02284", EmailContracting = "contract@lmc.org", EmailOfficeManager = "nora.lamb@lmc.org", MedDocCollectionNo = "980650", PractitionerGender = "M", PractitionerContractDcn = "962597", PractitionerContractStatus = "Good", PractitionerContractStartOn = DateTime.Now.AddDays(-43), PractitionerContractEndOn = DateTime.Now.AddDays(450), PractitionerSpecialty = "Foot, Dental", PractitionerAcceptingPatients = true, GroupContractDcn = "400052", GroupContractStatus = "Good", GroupContractStartOn = DateTime.Now.AddDays(-43), GroupContractEndOn = DateTime.Now.AddDays(450), GroupSpecialty = "Family, Foot, Dental", GroupAcceptingPatients = true, HoursOfOperation = "Mon, Tues, Wed, Thur, Fri: 8:00 - 18:00", SameDayAppointing = "Yes", UrgentCare = "No" },
                    new Provider { Id = 8, ProviderName = "Melinda Smith", GroupName = "Smith MD", TaxId = "985115544", GroupTaxId = "985115544", Npi = "11111", PractitionerNpi = "11111", GroupNpi = "11111", AddressPrimary = "234 Colonial St.", CityPrimary = "Boston", StatePrimary = "MA", PostalCodePrimary = "01524", PhonePrimary = "5154529960", FaxPrimary = "5154529961", EmailPrimary = "drsmith@smithmd.org", AddressBilling = "234 Colonial St.", CityBilling = "Boston", StateBilling = "MA", PostalCodeBilling = "01524", EmailBilling = "drsmith@smithmd.org", PhoneBilling = "5154529960", FaxBilling = "5154529961", AddressOther = "", CityOther = "", StateOther = "", PostalCodeOther = "", EmailContracting = "drsmith@smith.org", EmailOfficeManager = "lindasmith@smithmd.org", MedDocCollectionNo = "52488", PractitionerGender = "F", PractitionerContractDcn = "66256", PractitionerContractStatus = "Good", PractitionerContractStartOn = DateTime.Now.AddDays(-543), PractitionerContractEndOn = DateTime.Now.AddDays(75), PractitionerSpecialty = "Family", PractitionerAcceptingPatients = true, GroupContractDcn = "66256", GroupContractStatus = "Good", GroupContractStartOn = DateTime.Now.AddDays(-543), GroupContractEndOn = DateTime.Now.AddDays(75), GroupSpecialty = "Family", GroupAcceptingPatients = true, HoursOfOperation = "Mon, Tues, Wed, Thur, Fri: 7:00 - 16:00", SameDayAppointing = "Yes", UrgentCare = "No" }
                );
            }
            #endregion

            #region VAMC
            if (!context.Vamcs.Any())
            {
                context.Vamcs.AddRange(
                    new Vamc { Id = 1, Name = "Albuquerque VAMC" },
                    new Vamc { Id = 2, Name = "Alexandria VAMC" },
                    new Vamc { Id = 3, Name = "Amarillo VAMC" },
                    new Vamc { Id = 4, Name = "Anchorage VAMC" },
                    new Vamc { Id = 5, Name = "Asheville VAMC" },
                    new Vamc { Id = 6, Name = "Big Spring VAMC" },
                    new Vamc { Id = 7, Name = "Biloxi VAMC" },
                    new Vamc { Id = 8, Name = "Boise VAMC" },
                    new Vamc { Id = 9, Name = "Bonham VAMC" },
                    new Vamc { Id = 10, Name = "Chillicothe VAMC" },
                    new Vamc { Id = 11, Name = "Cincinnati VAMC" },
                    new Vamc { Id = 12, Name = "Columbia VAMC" },
                    new Vamc { Id = 13, Name = "Dallas VAMC" },
                    new Vamc { Id = 15, Name = "Denver VAMC" },
                    new Vamc { Id = 16, Name = "El Paso VAMC" },
                    new Vamc { Id = 17, Name = "Fayetteville VAMC" },
                    new Vamc { Id = 18, Name = "Fresno VAMC" },
                    new Vamc { Id = 19, Name = "Greater Los Angeles VAMC" },
                    new Vamc { Id = 20, Name = "Harlingen VAMC" },
                    new Vamc { Id = 21, Name = "Honolulu VAMC" },
                    new Vamc { Id = 22, Name = "Houston VAMC" },
                    new Vamc { Id = 23, Name = "Huntington VAMC" },
                    new Vamc { Id = 24, Name = "Jackson VAMC" },
                    new Vamc { Id = 25, Name = "Kansas City VAMC" },
                    new Vamc { Id = 26, Name = "Kerrville VAMC" },
                    new Vamc { Id = 27, Name = "Leavenworth VAMC" },
                    new Vamc { Id = 28, Name = "Lexington VAMC" },
                    new Vamc { Id = 29, Name = "Little Rock VAMC" },
                    new Vamc { Id = 30, Name = "Livermore VAMC" },
                    new Vamc { Id = 31, Name = "Loma Linda VAMC" },
                    new Vamc { Id = 32, Name = "Long Beach VAMC" },
                    new Vamc { Id = 33, Name = "Louisville VAMC" },
                    new Vamc { Id = 34, Name = "Marion VAMC" },
                    new Vamc { Id = 35, Name = "Memphis VAMC" },
                    new Vamc { Id = 36, Name = "Menlo Park VAMC" },
                    new Vamc { Id = 37, Name = "Montana VAMC" },
                    new Vamc { Id = 38, Name = "Mountain Home VAMC" },
                    new Vamc { Id = 39, Name = "Murfreesboro VAMC" },
                    new Vamc { Id = 40, Name = "Muskogee VAMC" },
                    new Vamc { Id = 41, Name = "New Orleans VAMC" },
                    new Vamc { Id = 42, Name = "Northern California Health Care System" },
                    new Vamc { Id = 43, Name = "Oklahoma City VAMC" },
                    new Vamc { Id = 44, Name = "Omaha VAMC" },
                    new Vamc { Id = 45, Name = "Palo Alto VAMC" },
                    new Vamc { Id = 46, Name = "Phoenix VAMC" },
                    new Vamc { Id = 47, Name = "Poplar Bluff VAMC" },
                    new Vamc { Id = 48, Name = "Portland VAMC" },
                    new Vamc { Id = 49, Name = "Prescott VAMC" },
                    new Vamc { Id = 50, Name = "Puget Sound VAMC" },
                    new Vamc { Id = 51, Name = "Reno VAMC" },
                    new Vamc { Id = 52, Name = "Roseburg VAMC" },
                    new Vamc { Id = 53, Name = "San Antonio VAMC" },
                    new Vamc { Id = 54, Name = "San Diego VAMC" },
                    new Vamc { Id = 55, Name = "San Francisco VAMC" },
                    new Vamc { Id = 56, Name = "Shreveport VAMC" },
                    new Vamc { Id = 57, Name = "Las Vegas VAMC" },
                    new Vamc { Id = 58, Name = "Spokane VAMC" },
                    new Vamc { Id = 59, Name = "St Louis VAMC" },
                    new Vamc { Id = 60, Name = "Temple VAMC" },
                    new Vamc { Id = 61, Name = "Tenessesse Valley VAMC" },
                    new Vamc { Id = 62, Name = "Topeka VAMC" },
                    new Vamc { Id = 63, Name = "Tucson VAMC" },
                    new Vamc { Id = 64, Name = "Vancouver VAMC" },
                    new Vamc { Id = 65, Name = "Waco VAMC" },
                    new Vamc { Id = 66, Name = "Walla Walla VAMC" },
                    new Vamc { Id = 67, Name = "White City Sorcc VAMC" },
                    new Vamc { Id = 68, Name = "Wichita VAMC" }
                );
            }
            #endregion

            #region Announcements
            if (!context.Announcements.Any())
            {
                var baseDate = new DateTime(2017, 8, 4);
                context.Announcements.AddRange(
                    new Announcement { Id = 1, CreatedOn = baseDate.AddDays(-1).Date, Content = "Brad Gushue reads a <a target=\"_blank\" href=\"onenote:///O:\\TriNet\\Department%20Docs%20and%20Forms\\Quality\\CCO%20and%20MMOPS\">One Note Document</a>", Title = "Team Gushue wins Worlds", Hub = "Corporate" },
                    new Announcement { Id = 2, CreatedOn = baseDate.AddDays(-4).Date, Content = "Team Jacobs and Team Homan win the 2017 Champions Cup", Title = "2017 Champions Cup Winners Announced", Hub = "Phoenix" },
                    new Announcement { Id = 3, CreatedOn = baseDate.AddDays(-6).Date, Content = "Team Laycock picks up Matt Dunstone", Title = "Team Laycock Lineup Change", Hub = "Phoenix" },
                    new Announcement { Id = 4, CreatedOn = baseDate.AddDays(-12).Date, Content = "Team Horsman has finally accepted that they are wasting money on tour", Title = "Team Horsman breaks up", Hub = "Corporate" },
                    new Announcement { Id = 5, CreatedOn = baseDate.AddDays(-11).Date, Content = "Hal has been an integral part of the creation of our club", Title = "Coyotes Curling honors founding member", Hub = "Corporate" },
                    new Announcement { Id = 6, CreatedOn = baseDate.AddDays(-10).Date, Content = "The itsy bitsy spider went down the waterspout", Title = "Itsy Bitsy Spider", Hub = "Corporate" },
                    new Announcement { Id = 7, CreatedOn = baseDate.AddDays(-9).Date, Content = "Mary had a little lamb, his fur was white as snow, yeah Everywhere the child went, the lamb, the lamb was sure to go yeah", Title = "Mary had a little lamb", Hub = "Phoenix" },
                    new Announcement { Id = 8, CreatedOn = baseDate.AddDays(-8).Date, Content = "Hopscotch is a children's game that can be played with several players or alone", Title = "Hop Scotch", Hub = "Corporate" },
                    new Announcement { Id = 9, CreatedOn = baseDate.AddDays(-7).Date, Content = "is a children's counting rhyme, used to select a person in games such as tag", Title = "Eeny, meeny, miny, moe", Hub = "Corporate" },
                    new Announcement { Id = 10, CreatedOn = baseDate.AddDays(-6).Date, Content = "Take (#) steps forward Take (#) giant steps forward (usually a small number, due to large step size)", Title = "Mother May I?", Hub = "Corporate" },
                    new Announcement { Id = 11, CreatedOn = baseDate.AddDays(-5).Date, Content = "Bake me a cake as fast as you can;", Title = "Paddycake, Paddycake, Baker's Man", Hub = "Corporate" },
                    new Announcement { Id = 12, CreatedOn = baseDate.AddDays(-4).Date, Content = "Down by the roller coaster (accompanied by the hand making a horizontal wave motion)", Title = "Down Down Baby", Hub = "Corporate" },
                    new Announcement { Id = 13, CreatedOn = baseDate.AddDays(-3).Date, Content = "This is the song that never ends, yes it goes on and on my friend. Some people started singing it, not knowing what it was, and they'll continue singing it forever just because...This is the song that never ends, yes it goes on and on my friend.", Title = "This is the song that never ends", Hub = "Corporate" },
                    new Announcement { Id = 14, CreatedOn = baseDate.AddDays(-2).Date, Content = "I'll love you forever, I'll like you for always, As long as I'm living my baby you'll be. ", Title = "Love You Forever", Hub = "Corporate" },
                    new Announcement { Id = 15, CreatedOn = baseDate.AddDays(-1).Date, Content = @"A Skip who had played poorly was asked after the game how he had done. His answer: I made four friends and three enemies!", Title = "CURLING ... A SOCIAL SPORT?", Hub = "Corporate" },
                    new Announcement { Id = 16, CreatedOn = baseDate.Date, Content = @"Trophy: The prize given to a winning team. Usually, it will not fit inside a mini-van, takes 4 gloating grown-ups to carry it, takes up 3/4 of a photograph and has not been engraved for the past 12 years. Smaller varieties fill attics, garages and basements everywhere.", Title = "Funny Curling Terminology", Hub = "Corporate" }
                );
            }
            #endregion

            #region TrainingMessages
            if (!context.TrainingMessages.Any())
            {
                var baseDate = DateTime.Now;
                context.TrainingMessages.AddRange(
                    new TrainingMessage
                    {
                        Id = 10,
                        Title = "Windstrom",
                        Message = "<p>We invite you to hear firsthand what our physicians, medical experts and patients have to say about the cutting-edge procedures, " +
                                "innovative treatments and quality of care that happen on a daily basis here. <a target=\"_blank\" href=\"http://www.triwest.com\">www.triwest.com</a> </p>",
                        CreatedOn = baseDate.AddDays(0).Date
                    },
                     new TrainingMessage
                     {
                         Id = 11,
                         Title = "PCT Training",
                         Message = "<p>Students who complete and successfully pass the PCT Tech training course can work as a Patient Care Technician in any healthcare facilities " +
                         "such as laboratories, hospitals, blood banks, private phlebotomy services, doctors offices, clinics, etc..   . <a target=\"_blank\" href=\"http://www.triwest.com\">www.triwest.com</a> </p>",
                         CreatedOn = baseDate.AddDays(-2).Date
                     },
                      new TrainingMessage
                      {
                          Id = 12,
                          Title = "Windstrom 2",
                          Message = "<p>An individual, who assist physicians in diagnosing as well as treating heart or cardiac, and blood vessel or peripheral vascular ailments. " +
                          "They are also referred to as cardiovascular technicians or electrocardiograph technician.  They operate and are responsible for the total care of test devices or equipments. " +
                          "They also explain procedures and processes to patients, and compare findings to the standards to determine any problems. <a target=\"_blank\" href=\"http://www.triwest.com\">www.triwest.com</a> </p>",
                          CreatedOn = baseDate.AddDays(-3).Date
                      }

                );
            }
            #endregion

            #region Authorizations
            if (!context.Authorizations.Any())
            {
                context.Authorizations.AddRange(
                    new Authorization { Id = 1,  VeteranId = 1, ProviderId = 1, Provider = "Charles Rogers"  , VeteranLastName = "Carter",  VeteranFirstName = "Jimmy",   SsnLast4 = "4321", ReferralNumber = "ASD123OJDA11", CreatedOn = DateTime.Now.AddDays(-411).ToString("d"), Profile = "Chiropractic"                             , Program = "Wait Time", Vamc = "Albuquerque VAMC", VamcId = 1 , VeteranZipCode = "34211", MemberNumber = "99473", CategoryOfCare = "Allergy and Immunology", ReasonCode = "Care In Process: Care Ongoing" },
                    new Authorization { Id = 2,  VeteranId = 1, ProviderId = 1, Provider = "Charles Rogers"  , VeteranLastName = "Carter",  VeteranFirstName = "Jimmy",   SsnLast4 = "4321", ReferralNumber = "JCF543OJ6YR0", CreatedOn = DateTime.Now.AddDays(-325).ToString("d"), Profile = "Chiropractic"                             , Program = "Wait Time", Vamc = "Albuquerque VAMC", VamcId = 1 , VeteranZipCode = "34211", MemberNumber = "99473", CategoryOfCare = "Audiology"             , ReasonCode = "Care In Process: Care Ongoing" },
                    new Authorization { Id = 3,  VeteranId = 1, ProviderId = 1, Provider = "Charles Rogers"  , VeteranLastName = "Carter",  VeteranFirstName = "Jimmy",   SsnLast4 = "4321", ReferralNumber = "PLO3O77J6Y22", CreatedOn = DateTime.Now.AddDays(-311).ToString("d"), Profile = "Allergy Consult"                          , Program = "Wait Time", Vamc = "Albuquerque VAMC", VamcId = 1 , VeteranZipCode = "34211", MemberNumber = "99473", CategoryOfCare = "Biofeedback"           , ReasonCode = "Multiple-See Services" },
                    new Authorization { Id = 4,  VeteranId = 2, ProviderId = 2, Provider = "Margaret Smith"  , VeteranLastName = "Ford",    VeteranFirstName = "Gerald",  SsnLast4 = "5465", ReferralNumber = "LK98O7EJ6Y51", CreatedOn = DateTime.Now.AddDays(-711).ToString("d"), Profile = "Outpatient Hospital - Physical Therapy"   , Program = "Distance",  Vamc = "Lexington VAMC"  , VamcId = 28, VeteranZipCode = "68007", MemberNumber = "34254", CategoryOfCare = "Audiology"             , ReasonCode = "Cancelled" },
                    new Authorization { Id = 5,  VeteranId = 2, ProviderId = 4, Provider = "Deborah Williams", VeteranLastName = "Ford",    VeteranFirstName = "Gerald",  SsnLast4 = "5465", ReferralNumber = "SD98O7EJ6YKK", CreatedOn = DateTime.Now.AddDays(-701).ToString("d"), Profile = "Outpatient Hospital - Physical Therapy"   , Program = "Distance",  Vamc = "Lexington VAMC"  , VamcId = 28, VeteranZipCode = "68007", MemberNumber = "34254", CategoryOfCare = "Cardiology Imaging"    , ReasonCode = "Cancelled" },
                    new Authorization { Id = 6,  VeteranId = 2, ProviderId = 2, Provider = "Margaret Smith"  , VeteranLastName = "Ford",    VeteranFirstName = "Gerald",  SsnLast4 = "5465", ReferralNumber = "LO98O7EJ6YS3", CreatedOn = DateTime.Now.AddDays(-698).ToString("d"), Profile = "Outpatient Hospital - Physical Therapy"   , Program = "Distance",  Vamc = "Lexington VAMC"  , VamcId = 28, VeteranZipCode = "68007", MemberNumber = "34254", CategoryOfCare = "Cardiology Rehab"      , ReasonCode = "Cancelled" },
                    new Authorization { Id = 7,  VeteranId = 2, ProviderId = 2, Provider = "Margaret Smith"  , VeteranLastName = "Ford",    VeteranFirstName = "Gerald",  SsnLast4 = "5465", ReferralNumber = "CF98O77E6Y51", CreatedOn = DateTime.Now.AddDays(-600).ToString("d"), Profile = "Outpatient Hospital - Physical Therapy"   , Program = "Distance",  Vamc = "Lexington VAMC"  , VamcId = 28, VeteranZipCode = "68007", MemberNumber = "34254", CategoryOfCare = "Cardiology Stress Test", ReasonCode = "Cancelled" },
                    new Authorization { Id = 8,  VeteranId = 2, ProviderId = 3, Provider = "Larry Mills"     , VeteranLastName = "Ford",    VeteranFirstName = "Gerald",  SsnLast4 = "5465", ReferralNumber = "AA98O7EJU651", CreatedOn = DateTime.Now.AddDays(-412).ToString("d"), Profile = "Chiropractic"                             , Program = "Distance",  Vamc = "Lexington VAMC"  , VamcId = 28, VeteranZipCode = "68007", MemberNumber = "34254", CategoryOfCare = "Biofeedback"           , ReasonCode = "Cancelled" },
                    new Authorization { Id = 9,  VeteranId = 3, ProviderId = 2, Provider = "Margaret Smith"  , VeteranLastName = "Johnson", VeteranFirstName = "Lyndon",  SsnLast4 = "2132", ReferralNumber = "LF98O7EJ6YI9", CreatedOn = DateTime.Now.AddDays(-388).ToString("d"), Profile = "Outpatient Hospital - Physical Therapy"   , Program = "Distance",  Vamc = "Phoenix VAMC"    , VamcId = 46, VeteranZipCode = "78671", MemberNumber = "98351", CategoryOfCare = "Biofeedback"           , ReasonCode = "Multiple-See Services" },
                    new Authorization { Id = 10, VeteranId = 3, ProviderId = 1, Provider = "Charles Rogers"  , VeteranLastName = "Johnson", VeteranFirstName = "Lyndon",  SsnLast4 = "2132", ReferralNumber = "MM98S5EJ6Y99", CreatedOn = DateTime.Now.AddDays(-50 ).ToString("d"), Profile = "Outpatient Hospital - Physical Therapy"   , Program = "Distance",  Vamc = "Phoenix VAMC"    , VamcId = 46, VeteranZipCode = "78671", MemberNumber = "98351", CategoryOfCare = "Biofeedback"           , ReasonCode = "Care In Process: Reschedule Requested" },
                    new Authorization { Id = 18, VeteranId = 3, ProviderId = 4, Provider = "Deborah Williams", VeteranLastName = "Johnson", VeteranFirstName = "Lyndon",  SsnLast4 = "2132", ReferralNumber = "MM98S5EJ6Y99", CreatedOn = DateTime.Now.AddDays(-35 ).ToString("d"), Profile = "Chiropractic"                             , Program = "Wait Time", Vamc = "Phoenix VAMC"    , VamcId = 46, VeteranZipCode = "78671", MemberNumber = "98351", CategoryOfCare = "Biofeedback"           , ReasonCode = "Initial Appointing: Self appointing" },
                    new Authorization { Id = 19, VeteranId = 3, ProviderId = 2, Provider = "Margaret Smith"  , VeteranLastName = "Johnson", VeteranFirstName = "Lyndon",  SsnLast4 = "2132", ReferralNumber = "MM57NGEJ6Y23", CreatedOn = DateTime.Now.AddDays(-40 ).ToString("d"), Profile = "Outpatient Hospital - Physical Therapy"   , Program = "Distance",  Vamc = "Phoenix VAMC"    , VamcId = 46, VeteranZipCode = "78671", MemberNumber = "98351", CategoryOfCare = "Biofeedback"           , ReasonCode = "Cancelled" },
                    new Authorization { Id = 20, VeteranId = 3, ProviderId = 1, Provider = "Charles Rogers"  , VeteranLastName = "Johnson", VeteranFirstName = "Lyndon",  SsnLast4 = "2132", ReferralNumber = "MM98S5EJ6G85", CreatedOn = DateTime.Now.AddDays(-67 ).ToString("d"), Profile = "Outpatient Hospital - Physical Therapy"   , Program = "Wait Time", Vamc = "Phoenix VAMC"    , VamcId = 46, VeteranZipCode = "78671", MemberNumber = "98351", CategoryOfCare = "Biofeedback"           , ReasonCode = "Initial Appointing: Searching for Provider" },
                    new Authorization { Id = 21, VeteranId = 3, ProviderId = 2, Provider = "Margaret Smith"  , VeteranLastName = "Johnson", VeteranFirstName = "Lyndon",  SsnLast4 = "2132", ReferralNumber = "MM98S5EJ3Q17", CreatedOn = DateTime.Now.AddDays(-175).ToString("d"), Profile = "Outpatient Hospital - Physical Therapy"   , Program = "Distance",  Vamc = "Phoenix VAMC"    , VamcId = 46, VeteranZipCode = "78671", MemberNumber = "98351", CategoryOfCare = "Biofeedback"           , ReasonCode = "Initial Appointing: Pending Re-Appoint" },
                    new Authorization { Id = 11, VeteranId = 4, ProviderId = 3, Provider = "Larry Mills"     , VeteranLastName = "Truman",  VeteranFirstName = "Harry",   SsnLast4 = "5678", ReferralNumber = "JU11SW098D44", CreatedOn = DateTime.Now.AddDays(-65 ).ToString("d"), Profile = "Outpatient Hospital - Physical Therapy"   , Program = "Wait Time", Vamc = "Dallas VAMC"     , VamcId = 13, VeteranZipCode = "64759", MemberNumber = "10553", CategoryOfCare = "Cardiology Imaging"    , ReasonCode = "Multiple-See Services" },
                    new Authorization { Id = 12, VeteranId = 4, ProviderId = 1, Provider = "Charles Rogers"  , VeteranLastName = "Truman",  VeteranFirstName = "Harry",   SsnLast4 = "5678", ReferralNumber = "AA98O7EJU651", CreatedOn = DateTime.Now.AddDays(-42 ).ToString("d"), Profile = "Abdominal Aortic Anuerysm (AAA) Screening", Program = "Distance",  Vamc = "Houston VAMC"    , VamcId = 22, VeteranZipCode = "64759", MemberNumber = "10553", CategoryOfCare = "Cardiology Imaging"    , ReasonCode = "Cancelled" },
                    new Authorization { Id = 13, VeteranId = 5, ProviderId = 4, Provider = "Deborah Williams", VeteranLastName = "Hoover",  VeteranFirstName = "Herbert", SsnLast4 = "1312", ReferralNumber = "PPL1SW098D44", CreatedOn = DateTime.Now.AddDays(-565).ToString("d"), Profile = "Outpatient Hospital - Physical Therapy"   , Program = "Wait Time", Vamc = "Billings VAMC"   , VamcId = 28, VeteranZipCode = "52358", MemberNumber = "99944", CategoryOfCare = "Colonoscopy"           , ReasonCode = "Cancelled" },
                    new Authorization { Id = 14, VeteranId = 5, ProviderId = 2, Provider = "Margaret Smith"  , VeteranLastName = "Hoover",  VeteranFirstName = "Herbert", SsnLast4 = "1312", ReferralNumber = "DE41SW098S43", CreatedOn = DateTime.Now.AddDays(-465).ToString("d"), Profile = "Allergy Consult"                          , Program = "Wait Time", Vamc = "Billings VAMC"   , VamcId = 28, VeteranZipCode = "52358", MemberNumber = "99944", CategoryOfCare = "Colonoscopy"           , ReasonCode = "Cancelled" },
                    new Authorization { Id = 15, VeteranId = 5, ProviderId = 1, Provider = "Charles Rogers"  , VeteranLastName = "Hoover",  VeteranFirstName = "Herbert", SsnLast4 = "1312", ReferralNumber = "L991SW087Y44", CreatedOn = DateTime.Now.AddDays(-365).ToString("d"), Profile = "Abdominal Aortic Anuerysm (AAA) Screening", Program = "Wait Time", Vamc = "Billings VAMC"   , VamcId = 28, VeteranZipCode = "52358", MemberNumber = "99944", CategoryOfCare = "Colonoscopy"           , ReasonCode = "Cancelled" },
                    new Authorization { Id = 16, VeteranId = 5, ProviderId = 4, Provider = "Deborah Williams", VeteranLastName = "Hoover",  VeteranFirstName = "Herbert", SsnLast4 = "1312", ReferralNumber = "SX31SW011W44", CreatedOn = DateTime.Now.AddDays(-265).ToString("d"), Profile = "Outpatient Hospital - Physical Therapy"   , Program = "Wait Time", Vamc = "Billings VAMC"   , VamcId = 28, VeteranZipCode = "52358", MemberNumber = "99944", CategoryOfCare = "Colonoscopy"           , ReasonCode = "Cancelled" },
                    new Authorization { Id = 17, VeteranId = 6, ProviderId = 5, Provider = "Melinda Cross"   , VeteranLastName = "Reagan",  VeteranFirstName = "Ronald",  SsnLast4 = "8321", ReferralNumber = "HUU1SW098D44", CreatedOn = DateTime.Now.AddDays(-200).ToString("d"), Profile = "Abdominal Aortic Anuerysm (AAA) Screening", Program = "Wait Time", Vamc = "Chicago VAMC"    , VamcId = 28, VeteranZipCode = "61283", MemberNumber = "55390", CategoryOfCare = "Cardiology Rehab"      , ReasonCode = "Cancelled" },
                    new Authorization { Id = 22, VeteranId = 7, ProviderId = 4, Provider = "Deborah Williams", VeteranLastName = "Coolidge",VeteranFirstName = "Calvin",  SsnLast4 = "7913", ReferralNumber = "K3434KJJJ232", CreatedOn = DateTime.Now.AddDays(-565).ToString("d"), Profile = "Outpatient Hospital - Physical Therapy"   , Program = "Wait Time", Vamc = "Billings VAMC"   , VamcId = 28, VeteranZipCode = "05056", MemberNumber = "72234", CategoryOfCare = "Colonoscopy"           , ReasonCode = "Cancelled" },
                    new Authorization { Id = 23, VeteranId = 7, ProviderId = 2, Provider = "Margaret Smith"  , VeteranLastName = "Coolidge",VeteranFirstName = "Calvin",  SsnLast4 = "7913", ReferralNumber = "K3434KJJJ233", CreatedOn = DateTime.Now.AddDays(-465).ToString("d"), Profile = "Allergy Consult"                          , Program = "Wait Time", Vamc = "Billings VAMC"   , VamcId = 28, VeteranZipCode = "05056", MemberNumber = "72234", CategoryOfCare = "Colonoscopy"           , ReasonCode = "Cancelled" },
                    new Authorization { Id = 24, VeteranId = 7, ProviderId = 1, Provider = "Charles Rogers"  , VeteranLastName = "Coolidge",VeteranFirstName = "Calvin",  SsnLast4 = "7913", ReferralNumber = "K3434KJJJ234", CreatedOn = DateTime.Now.AddDays(-365).ToString("d"), Profile = "Abdominal Aortic Anuerysm (AAA) Screening", Program = "Wait Time", Vamc = "Billings VAMC"   , VamcId = 28, VeteranZipCode = "05056", MemberNumber = "72234", CategoryOfCare = "Colonoscopy"           , ReasonCode = "Cancelled" },
                    new Authorization { Id = 25, VeteranId = 7, ProviderId = 4, Provider = "Deborah Williams", VeteranLastName = "Coolidge",VeteranFirstName = "Calvin",  SsnLast4 = "7913", ReferralNumber = "K3434KJJJ235", CreatedOn = DateTime.Now.AddDays(-265).ToString("d"), Profile = "Outpatient Hospital - Physical Therapy"   , Program = "Wait Time", Vamc = "Billings VAMC"   , VamcId = 28, VeteranZipCode = "05056", MemberNumber = "72234", CategoryOfCare = "Colonoscopy"           , ReasonCode = "Cancelled" },
                    new Authorization { Id = 26, VeteranId = 8, ProviderId = 4, Provider = "Deborah Williams", VeteranLastName = "Harding", VeteranFirstName = "Warren",  SsnLast4 = "8016", ReferralNumber = "K3434KJJJ232", CreatedOn = DateTime.Now.AddDays(-565).ToString("d"), Profile = "Outpatient Hospital - Physical Therapy"   , Program = "Wait Time", Vamc = "Billings VAMC"   , VamcId = 28, VeteranZipCode = "44833", MemberNumber = "22009", CategoryOfCare = "Colonoscopy"           , ReasonCode = "Cancelled" },
                    new Authorization { Id = 27, VeteranId = 8, ProviderId = 2, Provider = "Margaret Smith"  , VeteranLastName = "Harding", VeteranFirstName = "Warren",  SsnLast4 = "8016", ReferralNumber = "K3434KJJJ233", CreatedOn = DateTime.Now.AddDays(-465).ToString("d"), Profile = "Allergy Consult"                          , Program = "Wait Time", Vamc = "Billings VAMC"   , VamcId = 28, VeteranZipCode = "44833", MemberNumber = "22009", CategoryOfCare = "Colonoscopy"           , ReasonCode = "Cancelled" },
                    new Authorization { Id = 28, VeteranId = 8, ProviderId = 1, Provider = "Charles Rogers"  , VeteranLastName = "Harding", VeteranFirstName = "Warren",  SsnLast4 = "8016", ReferralNumber = "K3434KJJJ234", CreatedOn = DateTime.Now.AddDays(-365).ToString("d"), Profile = "Abdominal Aortic Anuerysm (AAA) Screening", Program = "Wait Time", Vamc = "Billings VAMC"   , VamcId = 28, VeteranZipCode = "44833", MemberNumber = "22009", CategoryOfCare = "Colonoscopy"           , ReasonCode = "Cancelled" },
                    new Authorization { Id = 29, VeteranId = 8, ProviderId = 4, Provider = "Deborah Williams", VeteranLastName = "Harding", VeteranFirstName = "Warren",  SsnLast4 = "8016", ReferralNumber = "K3434KJJJ235", CreatedOn = DateTime.Now.AddDays(-265).ToString("d"), Profile = "Outpatient Hospital - Physical Therapy"   , Program = "Wait Time", Vamc = "Billings VAMC"   , VamcId = 28, VeteranZipCode = "44833", MemberNumber = "22009", CategoryOfCare = "Colonoscopy"           , ReasonCode = "Cancelled" }
                );
            }

            #endregion


            #region CareRadiusNotes
            if (!context.CareRadiusNotes.Any())
            {
                context.CareRadiusNotes.AddRange(
                    new CareRadiusNote { Id = 1, VeteranId = 1, NoteType = "Assessment", NoteCategory = "Review", CreatedOn = DateTime.Now.AddDays(-411), Note = "This is a short review." },
                    new CareRadiusNote { Id = 2, VeteranId = 1, NoteType = "Note", NoteCategory = "Survey", CreatedOn = DateTime.Now.AddDays(-321), Note = "A nice guy." },
                    new CareRadiusNote { Id = 3, VeteranId = 1, NoteType = "Note", NoteCategory = "Case Management Enrollment", CreatedOn = DateTime.Now.AddDays(-320), Note = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus nibh quis magna malesuada, quis egestas lectus ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam quam, blandit non mauris non, semper commodo risus. Vestibulum dui metus, eleifend id ex eget, dignissim feugiat nisi. Vestibulum ac risus et." },
                    new CareRadiusNote { Id = 4, VeteranId = 1, NoteType = "Assessment", NoteCategory = "Review", CreatedOn = DateTime.Now.AddDays(-221), Note = "More crazy notes. Awesome." },
                    new CareRadiusNote { Id = 5, VeteranId = 1, NoteType = "Note", NoteCategory = "Disease Management 2000", CreatedOn = DateTime.Now.AddDays(-201), Note = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velit mi, congue et placerat id, facilisis eu dui. Sed vel sem lobortis, vulputate turpis at, aliquam diam. Integer egestas enim a facilisis cursus. Maecenas viverra tempus tristique. Vivamus feugiat mauris eget eros pretium lacinia. Vestibulum sit amet nunc a nisl ultricies finibus in in orci. Fusce placerat magna varius ligula consectetur efficitur. Praesent velit metus, tristique nec interdum non, imperdiet egestas leo. Nam fringilla, elit non bibendum finibus, tellus lectus malesuada risus, ac vulputate sem metus sit amet neque. Integer cursus eget tortor ut pretium. Nulla vel pharetra nibh, tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velit mi, congue et placerat id, facilisis eu dui. Sed vel sem lobortis, vulputate turpis at, aliquam diam. Integer egestas enim a facilisis cursus. Maecenas viverra tempus tristique. Vivamus feugiat mauris eget eros pretium lacinia. Vestibulum sit amet nunc a nisl ultricies finibus in in orci. Fusce placerat magna varius ligula consectetur efficitur. Praesent velit metus, tristique nec interdum non, imperdiet egestas leo. Nam fringilla, elit non bibendum finibus, tellus lectus malesuada risus, ac vulputate sem metus sit amet neque. Integer cursus eget tortor ut pretium. Nulla vel pharetra nibh, tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velit mi, congue et placerat id, facilisis eu dui. Sed vel sem lobortis, vulputate turpis at, aliquam diam. Integer egestas enim a facilisis cursus. Maecenas viverra tempus tristique. Vivamus feugiat mauris eget eros pretium lacinia. Vestibulum sit amet nunc a nisl ultricies finibus in in orci. Fusce placerat magna varius ligula consectetur efficitur. Praesent velit metus, tristique nec interdum non, imperdiet egestas leo. Nam fringilla, elit non bibendum finibus, tellus lectus malesuada risus, ac vulputate sem metus sit amet neque. Integer cursus eget tortor ut pretium. Nul." },
                    new CareRadiusNote { Id = 6, VeteranId = 1, NoteType = "Note", NoteCategory = "Case Management Enrollment", CreatedOn = DateTime.Now.AddDays(-198), Note = "More assessment." },
                    new CareRadiusNote { Id = 7, VeteranId = 1, NoteType = "Note", NoteCategory = "Review", CreatedOn = DateTime.Now.AddDays(-160), Note = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velit mi, congue et placerat id, facilisis eu dui. Sed vel sem lobortis, vulputate turpis at, aliquam diam. Integer egestas enim a facilisis cursus. Maecenas viverra tempus tristique." },
                    new CareRadiusNote { Id = 8, VeteranId = 1, NoteType = "Assessment", NoteCategory = "Disease Management Enrollment", CreatedOn = DateTime.Now.AddDays(-90), Note = "Yet another." },

                    new CareRadiusNote { Id = 9, VeteranId = 2, NoteType = "Note", NoteCategory = "Disease Management Enrollment", CreatedOn = DateTime.Now.AddDays(-100), Note = "Fusce placerat magna varius ligula consectetur efficitur." },
                    new CareRadiusNote { Id = 10, VeteranId = 2, NoteType = "Note", NoteCategory = "Survey", CreatedOn = DateTime.Now.AddDays(-99), Note = "Praesent velit metus, tristique nec interdum non, imperdiet egestas leo. Nam fringilla, elit non bibendum finibus, tellus lectus malesuada risus, ac vulputate sem metus sit amet neque." },
                    new CareRadiusNote { Id = 11, VeteranId = 2, NoteType = "Note", NoteCategory = "Case Management Enrollment", CreatedOn = DateTime.Now.AddDays(-98), Note = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus nibh quis magna malesuada, quis egestas lectus ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam quam, blandit non mauris non, semper commodo risus. Vestibulum dui metus, eleifend id ex eget, dignissim feugiat nisi. Vestibulum ac risus et." }
                );
            }
            #endregion

            #region Claims
            if (!context.Claims.Any())
            {
                //Ford", MemberNumber = "34254", City = "Omaha", State = "NE", DateOfBirth = DateTime.Parse("4/14/1913"), PhoneNumber = "555-112-9572", PostalCode = "68007", Program = "Choice, Another", SsnLast4 = "5465"
                context.Claims.AddRange(
                    new Claim { Id = 1, ClaimNumber= "1azbc568", VeteranId = 1, VeteranNumber = "99473", SsnLast4 = "4321", DateOfBirth = DateTime.Parse("10/1/2010"), ProviderId = 1, TaxId = "200923219", ProviderName = "Charles Rogers", VeteranFirstName = "Jimmy", VeteranLastName = "Carter", Npi = "9123456789", PractitionerNpi = "9123456789", GroupNpi = "1987654321", City = "Nashville", State = "TN", Zip = "34211", Charges = 2345.65m, PaidAmount = 2345.65m, PaidDate = DateTime.Now.AddDays(-23), BeginDate = DateTime.Now.AddDays(-36), Status = "Completed", Vamc = "Albuquerque VAMC", VamcId = 1},
                    new Claim { Id = 2, ClaimNumber = "2", VeteranId = 1, VeteranNumber = "99473", SsnLast4 = "4321", DateOfBirth = DateTime.Parse("10/1/2010"), ProviderId = 1, TaxId = "200923219", ProviderName = "Charles Rogers", VeteranFirstName = "Jimmy", VeteranLastName = "Carter", Npi = "9123456789", PractitionerNpi = "9123456789", GroupNpi = "1987654321", City = "Nashville", State = "TN", Zip = "34211", Charges = 1786.55m, PaidAmount = 1786.55m, PaidDate = DateTime.Now.AddDays(-20), BeginDate = DateTime.Now.AddDays(-34), Status = "Completed", Vamc = "Albuquerque VAMC", VamcId = 1 },
                    new Claim { Id = 10, ClaimNumber = "3", VeteranId = 1, VeteranNumber = "99473", SsnLast4 = "4321", DateOfBirth = DateTime.Parse("10/1/2010"), ProviderId = 1, TaxId = "200923219", ProviderName = "Charles Rogers", VeteranFirstName = "Jimmy", VeteranLastName = "Carter", Npi = "9123456789", PractitionerNpi = "9123456789", GroupNpi = "1987654321", City = "Nashville", State = "TN", Zip = "34211", Charges = 982.45m, PaidAmount = null, PaidDate = null, BeginDate = DateTime.Now.AddDays(-62), Status = "Pending", Vamc = "Phoenix VAMC", VamcId = 46 },
                    new Claim { Id = 12, ClaimNumber = "3A", VeteranId = 1, VeteranNumber = "99473", SsnLast4 = "4321", DateOfBirth = DateTime.Parse("10/1/2010"), ProviderId = 1, TaxId = "200923219", ProviderName = "Charles Rogers", VeteranFirstName = "Jimmy", VeteranLastName = "Carter", Npi = "9123456789", PractitionerNpi = "9123456789", GroupNpi = "1987654321", City = "Nashville", State = "TN", Zip = "34211", Charges = 11234.15m, PaidAmount = 11234.15m, PaidDate = DateTime.Now.AddDays(-114), BeginDate = DateTime.Now.AddDays(-142), Status = "Completed", Vamc = "Houston VAMC", VamcId = 22 },
                    new Claim { Id = 20, ClaimNumber = "3B", VeteranId = 1, VeteranNumber = "99473", SsnLast4 = "4321", DateOfBirth = DateTime.Parse("10/1/2010"), ProviderId = 1, TaxId = "200923219", ProviderName = "Charles Rogers", VeteranFirstName = "Jimmy", VeteranLastName = "Carter", Npi = "9123456789", PractitionerNpi = "9123456789", GroupNpi = "1987654321", City = "Nashville", State = "TN", Zip = "34211", Charges = 8714.65m, PaidAmount = null, PaidDate = null, BeginDate = DateTime.Now.AddDays(-267), Status = "In Review", Vamc = "Phoenix VAMC", VamcId = 46 },
                    new Claim { Id = 15, ClaimNumber = "3ABC5689", VeteranId = 1, VeteranNumber = "99473", SsnLast4 = "4321", DateOfBirth = DateTime.Parse("10/1/2010"), ProviderId = 1, TaxId = "200923219", ProviderName = "Charles Rogers", VeteranFirstName = "Jimmy", VeteranLastName = "Carter", Npi = "9123456789", PractitionerNpi = "9123456789", GroupNpi = "1987654321", City = "Nashville", State = "TN", Zip = "34211", Charges = 486.55m, PaidAmount = 0, PaidDate = DateTime.Now.AddDays(-240), BeginDate = DateTime.Now.AddDays(-365), Status = "Denied", Vamc = "Billings VAMC", VamcId = 28 },

                    new Claim { Id = 4, ClaimNumber = "50255hgf", VeteranId = 2, VeteranNumber = "34254", SsnLast4 = "5465", DateOfBirth = DateTime.Parse("4/14/1913"), ProviderId = 2, TaxId = "564326985", ProviderName = "Margaret Smith", VeteranFirstName = "Gerald", VeteranLastName = "Ford", Npi = "9553456789", PractitionerNpi = "9553456789", GroupNpi = "5987654321", City = "Omaha", State = "NE", Zip = "68007", Charges = 664.25m, PaidAmount = 664.25m, PaidDate = DateTime.Now.AddDays(-611), BeginDate = DateTime.Now.AddDays(-711), Status = "Completed", Vamc = "Lexington VAMC", VamcId = 28 },
                    new Claim { Id = 7, ClaimNumber = "6", VeteranId = 2, VeteranNumber = "34254", SsnLast4 = "5465", DateOfBirth = DateTime.Parse("4/14/1913"), ProviderId = 2, TaxId = "564326985", ProviderName = "Margaret Smith", VeteranFirstName = "Gerald", VeteranLastName = "Ford", Npi = "9553456789", PractitionerNpi = "9553456789", GroupNpi = "5987654321", City = "Omaha", State = "NE", Zip = "68007", Charges = 9843.45m, PaidAmount = 9843.45m, PaidDate = DateTime.Now.AddDays(-551), BeginDate = DateTime.Now.AddDays(-600), Status = "Completed", Vamc = "Lexington VAMC", VamcId = 28 },
                    new Claim { Id = 9, ClaimNumber = "7", VeteranId = 2, VeteranNumber = "34254", SsnLast4 = "5465", DateOfBirth = DateTime.Parse("4/14/1913"), ProviderId = 2, TaxId = "564326985", ProviderName = "Margaret Smith", VeteranFirstName = "Gerald", VeteranLastName = "Ford", Npi = "9553456789", PractitionerNpi = "9553456789", GroupNpi = "5987654321", City = "Omaha", State = "NE", Zip = "68007", Charges = 108.48m, PaidAmount = null, PaidDate = DateTime.Now.AddDays(-411), BeginDate = DateTime.Now.AddDays(-388), Status = "In Review", Vamc = "Phoenix VAMC", VamcId = 46 },
                    new Claim { Id = 14, ClaimNumber = "8D", VeteranId = 2, VeteranNumber = "34254", SsnLast4 = "5465", DateOfBirth = DateTime.Parse("4/14/1913"), ProviderId = 2, TaxId = "564326985", ProviderName = "Margaret Smith", VeteranFirstName = "Gerald", VeteranLastName = "Ford", Npi = "9553456789", PractitionerNpi = "9553456789", GroupNpi = "5987654321", City = "Omaha", State = "NE", Zip = "68007", Charges = 265.75m, PaidAmount = null, PaidDate = DateTime.Now.AddDays(-411), BeginDate = DateTime.Now.AddDays(-465), Status = "In Review", Vamc = "Billings VAMC", VamcId = 28 },
                    new Claim { Id = 19, ClaimNumber = "9", VeteranId = 2, VeteranNumber = "34254", SsnLast4 = "5465", DateOfBirth = DateTime.Parse("4/14/1913"), ProviderId = 2, TaxId = "564326985", ProviderName = "Margaret Smith", VeteranFirstName = "Gerald", VeteranLastName = "Ford", Npi = "9553456789", PractitionerNpi = "9553456789", GroupNpi = "5987654321", City = "Omaha", State = "NE", Zip = "68007", Charges = 1432.45m, PaidAmount = 0, PaidDate = DateTime.Now.AddDays(-20), BeginDate = DateTime.Now.AddDays(-40), Status = "Denied", Vamc = "Phoenix VAMC", VamcId = 46 },
                    
                    new Claim { Id = 8, ClaimNumber = "10", VeteranId = 3, VeteranNumber = "98351", SsnLast4 = "2132", DateOfBirth = DateTime.Parse("8/27/1908"), ProviderId = 3, TaxId = "650336521",  ProviderName = "Larry Mills", VeteranFirstName = "Lyndon", VeteranLastName = "Johnson", Npi = "25145", PractitionerNpi = "25145", GroupNpi = "987654", City = "Stonewall", State = "TX", Zip = "78671", Charges = 1, PaidAmount = 1, PaidDate = DateTime.Now.AddDays(-411), BeginDate = DateTime.Now.AddDays(-412), Status = "Completed", Vamc = "Lexington VAMC", VamcId = 28 },
                    new Claim { Id = 11, ClaimNumber = "11", VeteranId = 3, VeteranNumber = "98351", SsnLast4 = "2132", DateOfBirth = DateTime.Parse("8/27/1908"), ProviderId = 3, TaxId = "650336521", ProviderName = "Larry Mills", VeteranFirstName = "Lyndon", VeteranLastName = "Johnson", Npi = "25145", PractitionerNpi = "25145", GroupNpi = "987654", City = "Stonewall", State = "TX", Zip = "78671", Charges = 1, PaidAmount = null, PaidDate = null, BeginDate = DateTime.Now.AddDays(-65), Status = "Denied", Vamc = "Dallas VAMC", VamcId = 13 },

                    new Claim { Id = 3, ClaimNumber = "14", VeteranId = 4, VeteranNumber = "10553", SsnLast4 = "5678", DateOfBirth = DateTime.Parse("5/8/1884"), ProviderId = 1, TaxId = "200923219", ProviderName = "Charles Rogers", VeteranFirstName = "Harry", VeteranLastName = "Truman", Npi = "9123456789", PractitionerNpi = "9123456789", GroupNpi = "1987654321", City = "Lamar", State = "MO", Zip = "64759", Charges = 456.75m, PaidAmount = 0, PaidDate = DateTime.Now.AddDays(-28), BeginDate = DateTime.Now.AddDays(-58), Status = "Denied", Vamc = "Albuquerque VAMC", VamcId = 1 },
                    new Claim { Id = 6, ClaimNumber = "15BC", VeteranId = 5, VeteranNumber = "99944", SsnLast4 = "1312", DateOfBirth = DateTime.Parse("8/10/1874"), ProviderId = 2, TaxId = "564326985", ProviderName = "Margaret Smith", VeteranFirstName = "Gerald", VeteranLastName = "Ford", Npi = "9553456789", PractitionerNpi = "9553456789", GroupNpi = "5987654321", City = "West Branch", State = "IA", Zip = "52358", Charges = 143.15m, PaidAmount = 143.15m, PaidDate = DateTime.Now.AddDays(-623), BeginDate = DateTime.Now.AddDays(-698), Status = "Completed", Vamc = "Lexington VAMC", VamcId = 28 },

                    new Claim { Id = 21, ClaimNumber = "16DEF", VeteranId = 6, VeteranNumber = "55390", SsnLast4 = "8321", DateOfBirth = DateTime.Parse("10/1/1924"), ProviderId = 2, TaxId = "564326985", ProviderName = "Margaret Smith", VeteranFirstName = "Gerald", VeteranLastName = "Ford", Npi = "9553456789", PractitionerNpi = "9553456789", GroupNpi = "5987654321", City = "Tampico", State = "IL", Zip = "61283", Charges = 225.25m, PaidAmount = 0, PaidDate = DateTime.Now.AddDays(-155), BeginDate = DateTime.Now.AddDays(-175), Status = "Denied", Vamc = "Phoenix VAMC", VamcId = 46 },
                    new Claim { Id = 17, ClaimNumber = "16AZ", VeteranId = 6, VeteranNumber = "55390", SsnLast4 = "8321", DateOfBirth = DateTime.Parse("10/1/1924"), ProviderId = 5, TaxId = "654321",  ProviderName = "Mikhail Lamb", VeteranFirstName = "Ronald", VeteranLastName = "Reagan", Npi = "1223411556", PractitionerNpi = "66098", GroupNpi = "", City = "Tampico", State = "IL", Zip = "61283", Charges = 1, PaidAmount = 1, PaidDate = DateTime.Now.AddDays(-411), BeginDate = DateTime.Now.AddDays(-200), Status = "Completed", Vamc = "Chicago VAMC", VamcId = 28 },


                    new Claim { Id = 13, ClaimNumber = "16ABC", VeteranId = 7, VeteranNumber = "72234", SsnLast4 = "7913", DateOfBirth = DateTime.Parse("7/4/1872"), ProviderId = 4, TaxId = "6521023", ProviderName = "Deborah Williams", VeteranFirstName = "Calvin", VeteranLastName = "Coolidge", Npi = "66098", PractitionerNpi = "66098", GroupNpi = "", City = "Plymouth Notch", State = "VT", Zip = "05056", Charges = 1, PaidAmount = 1, PaidDate = DateTime.Now.AddDays(-411), BeginDate = DateTime.Now.AddDays(-565), Status = "Completed", Vamc = "Billings VAMC", VamcId = 28 },
                    new Claim { Id = 18, ClaimNumber = "17", VeteranId = 7, VeteranNumber = "72234", SsnLast4 = "7913", DateOfBirth = DateTime.Parse("7/4/1872"), ProviderId = 4, TaxId = "6521023", ProviderName = "Deborah Williams", VeteranFirstName = "Calvin", VeteranLastName = "Coolidge", Npi = "66098", PractitionerNpi = "66098", GroupNpi = "", City = "Plymouth Notch", State = "VT", Zip = "05056", Charges = 1, PaidAmount = 1, PaidDate = DateTime.Now.AddDays(-411), BeginDate = DateTime.Now.AddDays(-35), Status = "Completed", Vamc = "Phoenix VAMC", VamcId = 46 },
                    new Claim { Id = 5, ClaimNumber = "18", VeteranId = 7, VeteranNumber = "72234", SsnLast4 = "7913", DateOfBirth = DateTime.Parse("7/4/1872"), ProviderId = 4, TaxId = "6521023", ProviderName = "Deborah Williams", VeteranFirstName = "Calvin", VeteranLastName = "Coolidge", Npi = "66098", PractitionerNpi = "66098", GroupNpi = "", City = "Plymouth Notch", State = "VT", Zip = "05056", Charges = 1, PaidAmount = 1, PaidDate = DateTime.Now.AddDays(-411), BeginDate = DateTime.Now.AddDays(-701), Status = "In Review", Vamc = "Lexington VAMC", VamcId = 28 },
                    new Claim { Id = 16, ClaimNumber = "18GHA", VeteranId = 7, VeteranNumber = "72234", SsnLast4 = "7913", DateOfBirth = DateTime.Parse("7/4/1872"), ProviderId = 4, TaxId = "6521023", ProviderName = "Deborah Williams", VeteranFirstName = "Calvin", VeteranLastName = "Coolidge", Npi = "66098",PractitionerNpi = "66098", GroupNpi = "", City = "Plymouth Notch", State = "VT", Zip = "05056", Charges = 1, PaidAmount = null, PaidDate = null, BeginDate = DateTime.Now.AddDays(-265), Status = "Denied", Vamc = "Billings VAMC", VamcId = 28 }

                   
                    );
            }

            //populate banner for veteran home page
            if (!context.Banners.Any())
            {
                context.Banners.AddRange(
                    new Banner { Id = 1, Source = "http://www.triwest.com/globalassets/images/slider-images/slider-2017-october-flu-season.jpg", Alternate = "Random 1st slide", Header = "First slide label", Message = "<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> " },
                    new Banner { Id = 2, Source = "http://www.triwest.com/globalassets/images/slider-images/slideshow_va_staff.jpg", Alternate = "Random 2nd slide", Header = "Second slide label", Message = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> " },
                    new Banner { Id = 3, Source = "http://www.triwest.com/globalassets/images/slider-images/slideshow_veterans_services.jpg", Alternate = "Random 3rd slide", Header = "Third slide label", Message = " <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> " }
                                        );

            }
            #endregion

            #region VeteranPrograms
            if (!context.VeteranPrograms.Any())
            {
                context.VeteranPrograms.AddRange(
                    new VeteranProgram { Id = 101011, Name = "Distance" },
                    new VeteranProgram { Id = 202021, Name = "Wait Time" }
                );
            }
            #endregion

            #region Profiles
            if (!context.VeteranProfiles.Any())
            {
                context.VeteranProfiles.AddRange(
                    new VeteranProfile { Id = 101012, Name = "Outpatient Hospital - Physical Therapy" },
                    new VeteranProfile { Id = 202022, Name = "Chiropractic" },
                    new VeteranProfile { Id = 303032, Name = "Allergy Consult" },
                    new VeteranProfile { Id = 404042, Name = "Abdominal Aortic Anuerysm (AAA) Screening" }
                );
            }
            #endregion

            #region CategoryOfCareItems
            if (!context.CategoryOfCareItems.Any())
            {
                context.CategoryOfCareItems.AddRange(
                    new CategoryOfCareItem { Id = 101013, Name = "Allergy and Immunology" },
                    new CategoryOfCareItem { Id = 202023, Name = "Audiology" },
                    new CategoryOfCareItem { Id = 303033, Name = "Biofeedback" },
                    new CategoryOfCareItem { Id = 404043, Name = "Cardiology Imaging" },
                    new CategoryOfCareItem { Id = 505053, Name = "Colonoscopy" },
                    new CategoryOfCareItem { Id = 606063, Name = "Cardiology Rehab" },
                    new CategoryOfCareItem { Id = 707073, Name = "Cardiology Stress Test" }
                );
            }
            #endregion

            #region ReasonCodes
            if (!context.ReasonCodes.Any())
            {
                context.ReasonCodes.AddRange(
                    new ReasonCode { Id = 101014, Name = "Care In Process: Care Ongoing" },
                    new ReasonCode { Id = 202024, Name = "Care In Process: Reschedule Requested" },
                    new ReasonCode { Id = 303034, Name = "Initial Appointing: Self appointing" },
                    new ReasonCode { Id = 404044, Name = "Initial Appointing: Searching for Provider" },
                    new ReasonCode { Id = 505054, Name = "Initial Appointing: Pending Re-Appoint" },
                    new ReasonCode { Id = 606064, Name = "Cancelled" },
                    new ReasonCode { Id = 707074, Name = "Multiple-See Services" }
                );
            }
            #endregion

            #region Notifications

            if (!context.Notifications.Any())
            {
                context.Notifications.AddRange(
                    new Notification { Id = 1, Date = DateTime.Now, Contact = "PHONE", Customer = "PROVIDER", Name = "Dr. Justin Smyth", Phone = "(602) 264 -5978", Category = "Appointment", Notes = "Provider called to..." },
                    new Notification { Id = 2, Date = DateTime.Now, Contact = "EMAIL", Customer = "PROVIDER", Name = "Dr. Justin Smyth", Phone = "(602) 264 -5978", Category = "Survey", Notes = "Provider called to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus nibh quis magna malesuada, quis egestas lectus ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam quam, blandit non mauris non, semper commodo risus. Vestibulum dui metus, eleifend id ex eget, dignissim feugiat nisi. Vestibulum ac risus et." },
                    new Notification { Id = 3, Date = DateTime.Now, Contact = "EMAIL", Customer = "PROVIDER", Name = "Dr. Justin Smyth", Phone = "(602) 264 -5978", Category = "Referral", Notes = "Provider called to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus nibh quis magna malesuada, quis egestas lectus ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam quam, blandit non mauris non, semper commodo risus. Vestibulum dui metus, eleifend id ex eget, dignissim feugiat nisi. Vestibulum ac risus et." },
                    new Notification { Id = 4, Date = DateTime.Now, Contact = "EMAIL", Customer = "PROVIDER", Name = "Dr. Justin Smyth", Phone = "(602) 264 -5978", Category = "Care Management", Notes = "Provider called to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus nibh quis magna malesuada, quis egestas lectus ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam quam, blandit non mauris non, semper commodo risus. Vestibulum dui metus, eleifend id ex eget, dignissim feugiat nisi. Vestibulum ac risus et." },
                    new Notification { Id = 5, Date = DateTime.Now, Contact = "EMAIL", Customer = "PROVIDER", Name = "Dr. Justin Smyth", Phone = "(602) 264 -5978", Category = "CCN Account", Notes = "Provider called to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus nibh quis magna malesuada, quis egestas lectus ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam quam, blandit non mauris non, semper commodo risus. Vestibulum dui metus, eleifend id ex eget, dignissim feugiat nisi. Vestibulum ac risus et." },
                    new Notification { Id = 6, Date = DateTime.Now, Contact = "EMAIL", Customer = "PROVIDER", Name = "Dr. Justin Smyth", Phone = "(602) 264 -5978", Category = "CCN Account", Notes = "Provider called to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus nibh quis magna malesuada, quis egestas lectus ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam quam, blandit non mauris non, semper commodo risus. Vestibulum dui metus, eleifend id ex eget, dignissim feugiat nisi. Vestibulum ac risus et." },
                    new Notification { Id = 7, Date = DateTime.Now, Contact = "EMAIL", Customer = "PROVIDER", Name = "Dr. Justin Smyth", Phone = "(602) 264 -5978", Category = "CCN Account", Notes = "Provider called to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus nibh quis magna malesuada, quis egestas lectus ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam quam, blandit non mauris non, semper commodo risus. Vestibulum dui metus, eleifend id ex eget, dignissim feugiat nisi. Vestibulum ac risus et." },
                    new Notification { Id = 8, Date = DateTime.Now, Contact = "EMAIL", Customer = "PROVIDER", Name = "Dr. Justin Smyth", Phone = "(602) 264 -5978", Category = "CCN Account", Notes = "Provider called to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus nibh quis magna malesuada, quis egestas lectus ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam quam, blandit non mauris non, semper commodo risus. Vestibulum dui metus, eleifend id ex eget, dignissim feugiat nisi. Vestibulum ac risus et." },
                    new Notification { Id = 9, Date = DateTime.Now, Contact = "EMAIL", Customer = "PROVIDER", Name = "Dr. Justin Smyth", Phone = "(602) 264 -5978", Category = "CCN Account", Notes = "Provider called to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus nibh quis magna malesuada, quis egestas lectus ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam quam, blandit non mauris non, semper commodo risus. Vestibulum dui metus, eleifend id ex eget, dignissim feugiat nisi. Vestibulum ac risus et." }

                );
            }
            #endregion

            context.SaveChanges();
        }
    }
}
