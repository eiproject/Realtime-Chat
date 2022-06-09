import ChatBubbleLeft from "./ChatBubbleLeft";
import ChatBubbleRight from "./ChatBubbleRight";

function ChatHistory() {
  return (
    <div className="chat-history-container">
      <ChatBubbleLeft />
      <ChatBubbleRight />
    </div>
  );
}
export default ChatHistory;