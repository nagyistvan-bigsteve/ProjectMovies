using System;

namespace ProjectMovies.Models
{
    public class Movie
    {
        public Guid ID { get; set; }
        public string name { get; set; }
        public string genre { get; set; }
        public int star { get; set; }
    }
}
