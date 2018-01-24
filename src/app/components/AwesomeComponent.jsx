import React from 'react';

import chatbot from '../stylesheets/chatbot.css';
import { MessageList } from 'react-chat-elements';
import { Input } from 'react-chat-elements';
import { ChatItem } from 'react-chat-elements';


class AwesomeComponent extends React.Component {
  
   constructor() {
    super();
    this.state = {
      showReply: false
    }
  }
  onClick(e){
    e.preventDefault();
    this.setState({showReply: !this.state.showReply})
  }
  render() {
    return (
      <div id="mybutton">
        <a onClick={this.onClick.bind(this)} href='#'> <button className="feedback"> Chat </button></a>
        {this.state.showReply && < ReplyForm /> }
      </div>
    )
  }

}

export default AwesomeComponent;

class ReplyForm extends React.Component {
  constructor() {
    super()
  }
  render(){
    return(
    <div className="chat_boundary">
    <div className="chat_box">
    <MessageList
        className='message-list'
        lockable={true}
        toBottomHeight={'100%'}
        dataSource={[
            {
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
            }
    ]} /></div>

    </div>
    )
  }
}