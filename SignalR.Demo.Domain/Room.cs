namespace SignalR.Demo.Domain
{
    public class Room
    {
        public ulong Id { get; set; }

        public Room(ulong id)
        {
            Id = id;
        }
    }
}