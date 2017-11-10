using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TriWest.Ccn.Portal.Common.Models
{
    [Table("ContactTypes")]
    public class ContactType
    {
        [Key]
        [Column("Id")]
        public int ContactTypeId { get; set; }

        [StringLength(50)]
        public string ContactTypeName { get; set; }

    }
}
