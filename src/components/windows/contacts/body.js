import React from 'react';

const ContactsBody = ({isOpen, setChatIsOpen, session, username, website}) => {

  const openChat = (e) => {
    e.preventDefault()
    isOpen(false)
    setChatIsOpen(true)
  }

  return (
    <div className="window-body column">
        <div className="window-contacts-header">
          <img src="https://picsum.photos/150" className="window-contacts-header-avatar" />
          <div className="window-contacts-header-text">{username || session.user.email } <span>(online)</span> <br /> {website && website} </div>
        </div>
        <div className="window-contacts-list">
          <p className='window-contacts-list-title'>Online (5)</p>
          <ul>
            <li><a href="" onClick={openChat}><img src="./icons/msn-online.png"/> John Doe</a></li>
            <li><a href=""><img src="./icons/msn-online.png"/> John Doe</a></li>
            <li><a href=""><img src="./icons/msn-online.png"/> John Doe</a></li>
            <li><a href=""><img src="./icons/msn-online.png"/> John Doe</a></li>
            <li><a href=""><img src="./icons/msn-online.png"/> John Doe</a></li>
          </ul>
        </div>
    </div>
    );
};

export default ContactsBody;
