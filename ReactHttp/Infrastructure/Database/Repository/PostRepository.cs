using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReactHttp.Core.Data.Entity;
using ReactHttp.Core.Data.Repository;

namespace ReactHttp.Infrastructure.Database.Repository
{
    public class PostRepository : IPostRepository
    {
        private readonly ReactHttpDbContext _context;

        public PostRepository(ReactHttpDbContext context)
        {
            _context = context;
        }

        public async Task<List<PostEntity>> GetPosts()
        {
            return await _context.Posts.ToListAsync();
        }

        public async Task<PostEntity> GetPost(int id)
        {
            return await _context.Posts.FindAsync(id);
        }

        public void Add(PostEntity post)
        {
            _context.Posts.Add(post);
        }

        public void Remove(PostEntity post)
        {
            _context.Remove(post);
        }
    }
}
