namespace SignalR.Demo.EF
{
    public abstract class GenericRepositoryBase<TEntity> : IDisposable where TEntity : class
    {
        protected GenericRepository<TEntity> GenericRepository;

        protected GenericRepositoryBase(IDatabaseContext context)
        {
            GenericRepository = new GenericRepository<TEntity>(context);
        }

        public void Dispose()
        {
            GenericRepository.Dispose();
        }
    }
}
