import ChatBubbleLeft from "./ChatBubbleLeft";
import ChatBubbleRight from "./ChatBubbleRight";

function ChatHistory() {
  return (
    <div className="chat-history-container">
      <ChatBubbleLeft text={"ajk"}/>
      <ChatBubbleRight text={"right"}/>
    </div>
  );
}
export default ChatHistory;