using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TriWest.Ccn.Portal.Common.Models
{
    [Table("Categories")]
    public class Category
    {
        [Key]
        [Column("Id")]
        public int CategoryId { get; set; }

        [StringLength(50)]
        public string CategoryName { get; set; }

        public int CustomerTypeId { get; set; }

        public virtual CustomerType ParentCustomerType { get; set; }

        public virtual List<SubCategory> ChildSubCategories { get; set; }
    }
}
