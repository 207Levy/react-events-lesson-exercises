import React, { Component } from "react";

class Conversation extends Component {
  //should recieve the prop "convo"

  hide = () => this.props.btn(null);
  render() {
    return (
      <div>
        <button onClick={this.hide}>Back</button>
        {this.props.convo.map((conv) => {
          return (
            <div>
              <span className="sender">
                {conv.sender === "self" ? "Me: " : this.props.sender + ": "}
              </span>
              {conv.text}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Conversation;
