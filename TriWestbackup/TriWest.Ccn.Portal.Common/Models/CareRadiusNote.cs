using System;
using System.Collections.Generic;
using System.Text;

namespace TriWest.Ccn.Portal.Common.Models
{
    public class CareRadiusNote
    {
        public int Id { get; set; }
        public int VeteranId { get; set; }
        public string NoteCategory { get; set; }
        public string NoteType { get; set; }
        public string Note { get; set; }
        public DateTimeOffset CreatedOn { get; set; }

    }
}
