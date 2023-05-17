namespace SignalR.Demo.Domain
{
    public interface IRoomRepository
    {
        public Task<ulong> CreateRoomAsync(CancellationToken cancellationToken);
    }
}
