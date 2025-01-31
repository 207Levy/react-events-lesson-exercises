import React, { Component } from "react";

class Task extends Component {
  complete = () => {
    this.props.mark(this.props.task.text);
  };

  render() {
    return (
      <div>
        <div>
          {this.props.task.text} -{" "}
          <button onClick={this.complete}>Complete</button>
        </div>
      </div>
    );
  }
}

export default Task;
