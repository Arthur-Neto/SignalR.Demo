namespace SignalR.Demo.EF
{
    public class GenericRepository<TEntity> where TEntity : class
    {
        public IDatabaseContext Context { get; }

        public GenericRepository(IDatabaseContext context)
        {
            Context = context;
        }

        public void Dispose()
        {
            Context.Dispose();
        }
    }
}
