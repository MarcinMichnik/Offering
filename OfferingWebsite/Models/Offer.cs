using System;

namespace OfferingWebsite.Models
{
    public class Offer
    {
        public Offer(string title, string owner)
        {
            Title = title;
            Owner = owner;
        }

        public long Id { get; set; }
        public DateTime DateCreated { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Owner { get; set; }
    }
}
