using CSharpFunctionalExtensions;
using MediatR;
using SignalR.Demo.Domain;

namespace SignalR.Demo.Application
{
    public class CreateRoomResponse
    {
        public string RoomId { get; set; }

        public CreateRoomResponse(string roomId)
        {
            RoomId = roomId;
        }
    }

    public class CreateRoomCommand : IRequest<Result<CreateRoomResponse>>
    { }

    public class CreateRoomCommandHandler : IRequestHandler<CreateRoomCommand, Result<CreateRoomResponse>>
    {
        private readonly IRoomRepository _roomRepository;

        public CreateRoomCommandHandler(
            IRoomRepository roomRepository
        )
        {
            _roomRepository = roomRepository;
        }

        public async Task<Result<CreateRoomResponse>> Handle(CreateRoomCommand request, CancellationToken cancellationToken)
        {
            var id = await _roomRepository.CreateRoomAsync(cancellationToken);

            return new CreateRoomResponse(id.ToString());
        }
    }
}