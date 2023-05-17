using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace SignalR.Demo.EF
{
    public interface IApiDbContext : IDatabaseContext
    { }

    public class ApiContext : DbContext, IApiDbContext
    {
        public ApiContext()
        { }

        public ApiContext(DbContextOptions<ApiContext> options)
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetAssembly(typeof(IApiDbContext))!);

            base.OnModelCreating(modelBuilder);
        }
    }
}
