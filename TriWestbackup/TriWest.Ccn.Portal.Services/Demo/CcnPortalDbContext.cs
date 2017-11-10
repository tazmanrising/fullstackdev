using Microsoft.EntityFrameworkCore;
using System;
using TriWest.Ccn.Portal.Common.Models;

namespace TriWest.Ccn.Portal.Services.Demo
{
    public class CcnPortalDbContext : DbContext
    {
        public CcnPortalDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Veteran> Veterans { get; set; }
        public DbSet<Announcement> Announcements { get; set; }
        public DbSet<TrainingMessage> TrainingMessages { get; set; }
        public DbSet<Vamc> Vamcs { get; set; }
        public DbSet<Provider> Providers { get; set; }
        public DbSet<Authorization> Authorizations { get; set; }
        public DbSet<Claim> Claims { get; set; }
        public DbSet<MedicalClaim> MedicalClaims { get; set; }
        public DbSet<CareRadiusNote> CareRadiusNotes { get; set; }
        public DbSet<Banner> Banners { get; set; }
        public DbSet<VeteranProgram> VeteranPrograms { get; set; }
        public DbSet<VeteranProfile> VeteranProfiles { get; set; }
        public DbSet<CategoryOfCareItem> CategoryOfCareItems { get; set; }
        public DbSet<ReasonCode> ReasonCodes { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<Referral> Referrals { get; set; }




    }
}