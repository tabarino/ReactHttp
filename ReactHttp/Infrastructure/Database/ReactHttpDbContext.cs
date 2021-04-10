using System;
using Microsoft.EntityFrameworkCore;
using ReactHttp.Core.Data.Entity;

namespace ReactHttp.Infrastructure.Database
{
    public class ReactHttpDbContext : DbContext
    {
        public DbSet<PostEntity> Posts { get; set; }

        public ReactHttpDbContext(DbContextOptions<ReactHttpDbContext> options) : base(options)
        {
        }
    }
}
