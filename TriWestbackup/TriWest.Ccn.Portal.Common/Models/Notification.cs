using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TriWest.Ccn.Portal.Services
{
    public class Notification
    {
        public int Id { get; set; }
        public DateTime? Date { get; set; }
        public string Contact { get; set; }
        public string Customer { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Category { get; set; }
        public string Notes { get; set; }
    }
}
