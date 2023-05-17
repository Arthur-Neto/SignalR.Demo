using MediatR;
using Microsoft.AspNetCore.Mvc;
using SignalR.Demo.Application;

namespace SignalR.Demo.Controllers
{
    [Route("api/rooms")]
    public class RoomController : BaseController
    {
        public RoomController(IMediator mediator)
            : base(mediator)
        { }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> CreateRoomAsync(CancellationToken cancellationToken)
        {
            var result = await Mediator.Send(new CreateRoomCommand(), cancellationToken);

            return HandleResult(result);
        }
    }
}
