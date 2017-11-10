using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TriWest.Ccn.Portal.Common.Models
{
    [Table("CustomerTypes")]
    public class CustomerType
    {   
        [Key]
        [Column("Id")]
        public int CustomerTypeId { get; set; }

        [StringLength(50)]
        public string CustomerTypeName { get; set; }

        public virtual List<Category> ChildCategories { get; set; }
    }
}
