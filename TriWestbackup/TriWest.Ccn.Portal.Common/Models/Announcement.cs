using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace TriWest.Ccn.Portal.Common.Models
{
    public class Announcement
    {
        public int Id { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public string Hub { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
    }
}
