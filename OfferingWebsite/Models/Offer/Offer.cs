using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OfferingWebsite.Models
{
    [Table("Offer")]
    public class Offer
    {
        [Key]
        [Required]
        public long Id { get; set; }

        public DateTime DateCreated { get; set; }

        [StringLength(50)]
        public string Title { get; set; }

        [StringLength(150)]
        public string Description { get; set; }

        public Offer(string title, string description)
        {
            Title = title;
            Description = description;
        }
    }
}
