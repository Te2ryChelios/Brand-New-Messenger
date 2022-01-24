import React from 'react';

const ChatBody = () => {
  return (
    <div className="window-body">
    <div className="window-body-chat">
      <div className="window-body-chat-container">
        <div className="window-body-chat-header">
          To :
        </div>
        <div className="window-body-chat-content">
        test
        </div>
      </div>
    </div>

    <div className="window-body-sidebar">
      <img className="window-body-sidebar-avatar" src="https://picsum.photos/150" alt="" />
      <img  className="window-body-sidebar-avatar"src="https://picsum.photos/150" alt="" />
    </div>

    <div className="window-body-form">
      <div className="window-body-form-container">
        <div className="window-body-form-header">
          test
        </div>
        <div className="window-body-form-content">
          <textarea name="" id="" rows="4"></textarea>
          <button className="window-body-form-submit">Send</button>
        </div>
        <div className="window-body-form-footer">
      </div>
      </div>
    </div>
  </div>
  );
};

export default ChatBody;
