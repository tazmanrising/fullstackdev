using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace TriWest.Ccn.Portal.Common.Models
{
    [Table("CsrInteractions")]
    public class CsrInteraction
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Id")]
        public int SessionId { get; set; }

        [StringLength(80)]
        public string FirstName { get; set; }

        [StringLength(80)]
        public string LastName { get; set; }

        public DateTime? TimerStart { get; set; }

        public DateTime? TimerEnd { get; set; }

        [StringLength(4000)]
        public string SessionNote { get; set; }

        [DataType(DataType.PhoneNumber)]
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$",
            ErrorMessage = "Invalid Phone number")]
        public string Phone { get; set; }

        public string PhoneExtension { get; set; }

        public int? ContactTypeId { get; set; }

        public virtual ContactType ContactType { get; set; }

        public int? SubCategoryId { get; set; }

        public virtual SubCategory SubCategory { get; set; }

    }

}
