using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProjectMovies.Models;

namespace ProjectMovies.Data
{
    public class ProjectMoviesContext : DbContext
    {
        public ProjectMoviesContext (DbContextOptions<ProjectMoviesContext> options)
            : base(options)
        {
        }

        public DbSet<ProjectMovies.Models.Movie> Movie { get; set; }
    }
}
