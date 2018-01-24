import React from 'react';

import chatbot from '../stylesheets/chatbot.css';
import { MessageList } from 'react-chat-elements';
import { Input } from 'react-chat-elements';
import { ChatItem } from 'react-chat-elements';

class ChatBot extends React.Component {
  
   constructor() {
    super();
    this.state = {
      showReply: false,
    }
  }

  onClick(e){
    e.preventDefault();
    this.setState({showReply: !this.state.showReply});
    this.toggleTriggerBtnImage();
  }

  toggleTriggerBtnImage(){
    
    if(this.state.showReply){
      return 'public/webchat-chat.svg';
    }

    return 'public/webchat-close.svg';
  }

  render() {
    return (
      <div id="chat-bot">
        <div className="chat-window">
          { this.state.showReply && < ReplyForm /> }
          <div className="chat-footer"></div>
        </div>
        <div id="chat-bot-btn">
          <button className="material-button material-button-toggle bg-color" type="button" onClick={this.onClick.bind(this)}>
          <img src={this.toggleTriggerBtnImage()}></img>
          </button>
        </div>
      </div>
    )
  }
}

export default ChatBot;

class ReplyForm extends React.Component {
  constructor() {
    super();
    this.state={
      agent: {
        name: "Jhone cena"
      },
      images: {
        head: 'public/webchat-ava.svg'
      }
    }
  }
  render(){
    return(
    <div className="chat_boundary">
      <div className="chat-head bg-color">
        <span className="chat-head-img"><img src={this.state.images.head}></img></span>
        <span className="chat-head-name"><strong>{this.state.agent.name}</strong></span>
      </div>

      <div className="chat_box">
        <MessageList className='message-list' lockable={true} toBottomHeight={'100%'}
            dataSource={[
                {
                    position: 'left',
                    type: 'text',
                    text: 'Sample Message ',
                    date: new Date(),
                },
                {
                    position: 'right',
                    type: 'text',
                    text: 'Please Enter Your Message ',
                    date: new Date(),
                },
                {
                    position: 'right',
                    type: 'text',
                    text: 'How can I assist you ',
                    date: new Date(),
                }, {
                    position: 'right',
                    type: 'text',
                    text: 'Sample Message ',
                    date: new Date(),
                },
                {
                    position: 'right',
                    type: 'text',
                    text: 'Please Enter Your Message ',
                    date: new Date(),
                },
                {
                    position: 'right',
                    type: 'text',
                    text: 'How can I assist you ',
                    date: new Date(),
                }, {
                    position: 'right',
                    type: 'text',
                    text: 'Sample Message ',
                    date: new Date(),
                },
                {
                    position: 'right',
                    type: 'text',
                    text: 'Please Enter Your Message ',
                    date: new Date(),
                },
                {
                    position: 'right',
                    type: 'text',
                    text: 'How can I assist you ',
                    date: new Date(),
                }, {
                    position: 'right',
                    type: 'text',
                    text: 'Sample Message ',
                    date: new Date(),
                },
                {
                    position: 'right',
                    type: 'text',
                    text: 'Please Enter Your Message ',
                    date: new Date(),
                },
                {
                    position: 'right',
                    type: 'text',
                    text: 'How can I assist you ',
                    date: new Date(),
                }, {
                    position: 'right',
                    type: 'text',
                    text: 'Sample Message ',
                    date: new Date(),
                },
                {
                    position: 'right',
                    type: 'text',
                    text: 'Please Enter Your Message ',
                    date: new Date(),
                },
                {
                    position: 'right',
                    type: 'text',
                    text: 'How can I assist you ',
                    date: new Date(),
                },
          ]} />
      </div>
    </div>
    )
  }
}