import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div >
        <div>{this.props.name}</div>
        {/* should render a "name" recieved in props */}
        {/* Should also reieve the displayConvo prop, and call the function onClick */}
      </div>
    );
  }
}

export default Contact;
