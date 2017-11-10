using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using TriWest.Ccn.Portal.Common.Models;

namespace TriWest.Ccn.Portal.Services.Demo
{
    public class CcnDbContext : DbContext
    {
        public CcnDbContext(DbContextOptions<CcnDbContext> options): base(options)
        { }
        
        public DbSet<CsrInteraction> CsrInteractions { get; set; }

        public DbSet<ContactType> ContactTypes { get; set; }

        public DbSet<CustomerType> CustomerTypes { get; set; }

        public DbSet<Category> Categories { get; set; }

        public DbSet<SubCategory> SubCategories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CsrInteraction>().ToTable("CsrInteractions", "dbo");
            modelBuilder.Entity<ContactType>().ToTable("ContactTypes", "dbo");
            modelBuilder.Entity<CustomerType>().ToTable("CustomerTypes", "dbo");
            modelBuilder.Entity<Category>().ToTable("Categories", "dbo");
            modelBuilder.Entity<SubCategory>().ToTable("SubCategories", "dbo");
        }
    }
}
