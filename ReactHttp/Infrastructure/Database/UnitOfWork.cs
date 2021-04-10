using System;
using System.Threading.Tasks;
using ReactHttp.Core.Data;

namespace ReactHttp.Infrastructure.Database
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ReactHttpDbContext _context;

        public UnitOfWork(ReactHttpDbContext context)
        {
            _context = context;
        }

        public async Task CompleteAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
