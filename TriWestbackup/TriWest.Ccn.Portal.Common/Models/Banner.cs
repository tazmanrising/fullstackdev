using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;


namespace TriWest.Ccn.Portal.Common.Models
{
   public class Banner
    {
        public int Id { get; set; }

        [Display(Name = "Source")]
        public string Source { get; set; }

        [Display(Name = "Alternate Image Text")]
        public string Alternate { get; set; }
   
        [Display(Name = "Header")]
        public string Header { get; set; }

        [Display(Name = "Message")]
        public string Message { get; set; }
    }
}
