using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SignalR.Demo.Domain;

namespace SignalR.Demo.EF
{
    public class RoomConfiguration : IEntityTypeConfiguration<Room>
    {
        public void Configure(EntityTypeBuilder<Room> builder)
        {
            builder.HasKey(p => p.Id);

            builder.Property(p => p.Id)
                   .IsRequired();
        }
    }
}
