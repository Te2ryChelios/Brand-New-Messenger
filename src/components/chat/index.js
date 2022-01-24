import React, {useState} from 'react';
import ChatBody from './body';
import ChatHeader from './header';
import ChatMenu from './menu';

const Chat = () => {
  const [fullscreen, setFullscreen] = useState(false);
  return (
    <div className={`window ${fullscreen ? "fullscreen" : ""}`}>
    <ChatHeader setFullscreen={setFullscreen} fullscreen={fullscreen} />

    <ChatMenu />
      
    <ChatBody />
  </div>
    );
};

export default Chat;
