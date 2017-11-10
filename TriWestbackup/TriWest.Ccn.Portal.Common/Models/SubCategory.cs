using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TriWest.Ccn.Portal.Common.Models
{
    [Table("SubCategories")]
    public class SubCategory
    {
        [Key]
        [Column("Id")]
        public int SubCategoryId { get; set; }

        [StringLength(50)]
        public string SubCategoryName { get; set; }
        
        public int CategoryId { get; set; }

        public virtual Category ParentCategory { get; set; }
    }
}
