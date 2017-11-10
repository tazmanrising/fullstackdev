using System;
using System.Collections.Generic;
using System.Text;

namespace TriWest.Ccn.Portal.Common.Models
{
    public class HippaAlert
    {
        public int Id { get; set; }
        public string AlertType { get; set; }
        public DateTimeOffset BeginOn { get; set; }
        public DateTimeOffset EndOn { get; set; }
        public string Message { get; set; }
    }
}
