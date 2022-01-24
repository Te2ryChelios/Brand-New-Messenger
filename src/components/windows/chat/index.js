import React, {useState} from 'react';
import ChatBody from './body';
import WindowMenu from '../menu';
import WindowHeader from '../header';

const Chat = () => {
  const [fullscreen, setFullscreen] = useState(false);
  return (
    <div className={`window ${fullscreen ? "fullscreen" : ""}`}>
    <WindowHeader title={"Messenger"} setFullscreen={setFullscreen} fullscreen={fullscreen} />
    <WindowMenu />
    <ChatBody />
  </div>
    );
};

export default Chat;
