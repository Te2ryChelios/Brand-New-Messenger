import React, {useState} from 'react';
import ChatBody from './body';
import WindowMenu from '../menu';
import WindowHeader from '../header';

const Chat = ({setChatIsOpen}) => {
  const [fullscreen, setFullscreen] = useState(false);
  return (
    <div className={`window window-chat ${fullscreen ? "fullscreen" : ""}`}>
    <WindowHeader title={"Messenger"} setFullscreen={setFullscreen} fullscreen={fullscreen} setIsOpen={setChatIsOpen} />
    <WindowMenu />
    <ChatBody 
    />
  </div>
    );
};

export default Chat;
