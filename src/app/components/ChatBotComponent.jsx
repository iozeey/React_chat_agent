import React from 'react';

import chatbot from '../stylesheets/chatbot.css';
import { MessageList } from 'react-chat-elements';
import { Input } from 'react-chat-elements';
import { ChatItem } from 'react-chat-elements';

class ChatBot extends React.Component {
  
   constructor() {
    super();
    this.state = {
      showReply: true,
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
var items = { position: 'left',
              type: 'text',
              text: 'Sample Message ',
              date: new Date(),
            };

class ReplyForm extends React.Component {
  constructor() {
    super();
    this.state={
      agent: {
        name: "Jhone cena"
      },
      images: {
        head: 'public//webchat-ava.svg'
      },
      dataSource: []
    },

    this.state.dataSource.push(items);
  }

  handleChange(event) {
    if(event.key =='Enter'){
      var message = {position:'right',type: 'text', text: event.target.value, date: new Date()};
      var list = this.state.dataSource;
      list.push(message)
      list.push(items)

      this.setState({
          dataSource: list,
      });

      this.refs.input_field.value = '';
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
            dataSource={this.state.dataSource} />
      </div>

      <div className="chat-footer">
        <div className="input_area">
            <input type="text" placeholder="Write a message" className="input_form" ref="input_field" value={this.state.value} onKeyPress={this.handleChange.bind(this)} />
        </div>
      </div>

    </div>
    )
  }
}