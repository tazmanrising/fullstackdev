using System;
using System.Collections.Generic;
using System.Text;

namespace TriWest.Ccn.Portal.Common.Models
{
    public class Address
    {
        public int Id { get; set; }
        public string Street { get; set; }         
        public string City { get; set; }
        public string State { get; set; }
        public string PostalCode { get; set; }
        public string AddressType { get; set; }
    }
}
