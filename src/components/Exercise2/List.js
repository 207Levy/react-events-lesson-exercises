import React, { Component } from 'react';
import Contact from './Contact';

class List extends Component {

  render() {
    return (
      <div >
        {this.props.contacts.map(contact => <Contact btn={this.props.btn} key={contact} name={contact}/>)}
      </div>
    );
  }
}

export default List;
