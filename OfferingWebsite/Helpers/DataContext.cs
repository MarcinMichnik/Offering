using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using OfferingWebsite.Entities.User;
using OfferingWebsite.Models;

namespace OfferingWebsite.Helpers
{
    public class DataContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public DataContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to sql server database
            options.UseSqlServer(Configuration.GetConnectionString("OfferingWebsiteContextConnection"));
        }

        public DbSet<User> Users { get; set; }

        public DbSet<Offer> Offers { get; set; }
    }
}
