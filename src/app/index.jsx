import React from 'react';
import {render} from 'react-dom';
import ChatBotComponent from './components/ChatBotComponent.jsx';

window.React = React

class App extends React.Component {
  render () {
    return (
      <div>
        <ChatBotComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));