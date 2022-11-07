import React, { Component } from 'react';

class Contact extends Component {
  Show = () => this.props.btn(this.props.name)
  render() {
    return (
      <div >
        <div onClick={this.Show}>{this.props.name}</div>
        {/* should render a "name" recieved in props */}
        {/* Should also reieve the displayConvo prop, and call the function onClick */}
      </div>
    );
  }
}

export default Contact;
