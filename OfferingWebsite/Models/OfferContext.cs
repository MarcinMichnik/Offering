using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Sqlite;
using static System.Environment;

namespace OfferingWebsite.Models
{
    public class OfferContext : DbContext
    {
        public string DbPath { get; private set; }
        public DbSet<Offer> Offers { get; set; }
        public OfferContext(DbContextOptions<OfferContext> options)
            : base(options)
        {
            SpecialFolder folder = SpecialFolder.LocalApplicationData;
            var path = GetFolderPath(folder);
            DbPath = $"{path}{System.IO.Path.DirectorySeparatorChar}offering.db";
        }

        // The following configures EF to create a Sqlite database file in the
        // special "local" folder for your platform.
        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite($"Data Source={DbPath}");
    }
}
