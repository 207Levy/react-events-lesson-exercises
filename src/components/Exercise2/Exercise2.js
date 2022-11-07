import React, { Component } from "react";
import Conversation from "./Conversation";
import List from "./List";

class Exercise2 extends Component {
  constructor() {
    super();
    this.state = {
      displayConversation: null,
      conversations: [
        {
          with: "Laura",
          convo: [
            { text: "Hi", sender: "self" },
            { text: "You there?", sender: "self" },
            { text: "Yeah, hi, what's up?", sender: "other" },
          ],
        },
        {
          with: "Dad",
          convo: [
            {
              text: "Have you finished your school work yet?",
              sender: "other",
            },
            { text: "Yes.", sender: "self" },
            { text: "What do you mean, yes?", sender: "other" },
            { text: "??", sender: "self" },
          ],
        },
        {
          with: "Shoobert",
          convo: [
            { text: "Shoobert!!!", sender: "self" },
            { text: "Dude!!!!!!!!", sender: "other" },
            { text: "Shooooooooo BERT!", sender: "self" },
            { text: "You're my best friend", sender: "other" },
            { text: "No, *you're* my best friend", sender: "self" },
          ],
        },
      ],
    };
  }

  sendConvo(){
    let item =  this.state.conversations.filter(c => c.with === this.state.displayConversation)
    console.log(item[0]["convo"])
    return item[0]["convo"]
  }
  displayConvo = (name) => {
    this.setState({ displayConversation: name });
  };
  makeListOfContacts() {
    return this.state.conversations.map((c) => c.with);
  }
  render() {
    return (
      <div>
        {this.state.displayConversation === null ? (
          <div>
            <List
              btn={this.displayConvo}
              contacts={this.makeListOfContacts()}
            />
            <div></div>
          </div>
        ) : (
          <Conversation btn={this.displayConvo} sender={this.state.displayConversation} convo={this.sendConvo()}/>
        )}
      </div>
    );
  }
}

export default Exercise2;
