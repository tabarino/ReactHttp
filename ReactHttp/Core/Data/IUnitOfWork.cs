using System;
using System.Threading.Tasks;

namespace ReactHttp.Core.Data
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
    }
}
