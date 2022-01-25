import React from 'react';

const ChatBody = () => {
  return (
    <div className="window-body window-chat-grid">
    <div className="window-body-chat">
      <div className="window-body-chat-container">
        <div className="window-body-chat-header">
          To :
        </div>
        <div className="window-body-chat-content">
          <div className="window-chat-message">
            <span className="window-chat-message-username">John doe says:</span>
            <span className="window-chat-message-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a in facere, officia totam voluptas distinctio natus culpa molestias, eum incidunt quisquam. A ipsum illo dolorum molestias nostrum, vel voluptatibus!</span>
          </div>

          <div className="window-chat-message">
            <span className="window-chat-message-username">You say:</span>
            <span className="window-chat-message-content">officia totam voluptas distinctio natus culpa molestias, eum incidunt quisquam. A ipsum illo dolorum molestias nostrum, vel voluptatibus!</span>
          </div>
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
          // Icons, wizz etc
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
