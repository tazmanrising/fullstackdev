using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TriWest.Ccn.Portal.Common.Models
{
    public class TrainingMessage
    {
        public int Id { get; set; }

        [Display(Name = "Title")]
        public string Title { get; set; }

        [Display(Name = "Message")]
        public string Message { get; set; }

        [Display(Name = "CreatedOn")]
        public DateTimeOffset CreatedOn { get; set; }
    }
}
