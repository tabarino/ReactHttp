using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ReactHttp.Core.Data.Entity;

namespace ReactHttp.Core.Data.Repository
{
    public interface IPostRepository
    {
        Task<List<PostEntity>> GetPosts();
        Task<PostEntity> GetPost(int id);
        void Add(PostEntity post);
        void Remove(PostEntity post);
    }
}
