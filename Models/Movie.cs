using System;

namespace ProjectMovies.Models
{
    public class Movie
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public string Genre { get; set; }
        public int Star { get; set; }
    }
}
