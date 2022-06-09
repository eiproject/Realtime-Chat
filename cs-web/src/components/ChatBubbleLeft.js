import React, { Component } from "react";

class ChatBubbleLeft extends Component {
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
      <div className="chat-bubble-left-container">
        <p className="chat-bubble-left-text">{ text }</p>
      </div>
      </React.Fragment>
    )
  }
}
export default ChatBubbleLeft;