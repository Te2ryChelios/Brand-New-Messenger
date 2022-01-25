import React from 'react';

const ContactsBody = () => {
  return (
    <div className="window-body column">
        <div className="window-contacts-header">
          <img src="https://picsum.photos/150" className="window-contacts-header-avatar" />
          <div className="window-contacts-header-text">John Doe <span>(online)</span> </div>
        </div>
        <div className="window-contacts-list">
          <p className='window-contacts-list-title'>Online (5)</p>
          <ul>
            <li><a href=""><img src="./icons/msn-online.png"/> John Doe</a></li>
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
