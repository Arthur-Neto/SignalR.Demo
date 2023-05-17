using Microsoft.AspNetCore.SignalR;

namespace SignalR.Demo.Hubs
{
    public interface IChatHub
    {
        Task DisplayMessage(string message);
    }

    public class ChatHub : Hub<IChatHub>
    {
        public void Hello()
        {
            Clients.Caller.DisplayMessage("Hello from the SignalrDemoHub!");
        }
    }
}
