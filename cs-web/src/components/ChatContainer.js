import ChatHistory from "./ChatHistory";
import ChatInput from "./ChatInput";


function ChatContainer() {
  return (
    <div className="chat-container">
      <ChatHistory />
      <ChatInput />
    </div>
  );
}

export default ChatContainer;