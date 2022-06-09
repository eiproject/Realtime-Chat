import React, { Component } from "react";

class ChatBubbleRight extends Component {
  constructor (props){
    super(props)
    this.state = {

    }
  }
  render() {
    const {
      text
    } = this.props;

    return (
      <React.Fragment>
      <div className="chat-bubble-right-container">
        <p className="chat-bubble-right-text">{ text }</p>
      </div>
      </React.Fragment>
    )
  }
}
export default ChatBubbleRight;