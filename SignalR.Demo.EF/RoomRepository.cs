using Microsoft.EntityFrameworkCore;
using SignalR.Demo.Domain;

namespace SignalR.Demo.EF
{
    public class RoomRepository : GenericRepositoryBase<Room>, IRoomRepository
    {
        public RoomRepository(IApiDbContext apiDbContext)
            : base(apiDbContext)
        { }

        public async Task<ulong> CreateRoomAsync(CancellationToken cancellationToken)
        {
            var availableId = (ulong)(await GenericRepository.Context.Set<Room>().LongCountAsync(cancellationToken)) + 1;
            var room = new Room(availableId);

            var entityEntry = await GenericRepository.Context.Set<Room>().AddAsync(room, cancellationToken);

            await GenericRepository.Context.SaveChangesAsync(cancellationToken);

            return entityEntry.Entity.Id;
        }
    }
}