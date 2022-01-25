import React, {useState} from 'react';
import WindowHeader from '../header';
import WindowMenu from '../menu';
import ContactsBody from './body';

const Contacts = ({setContactsIsOpen, setChatIsOpen}) => {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <div className={`window ${fullscreen ? "fullscreen" : ""}`}>
      <WindowHeader title={"Messenger - Contacts"} setFullscreen={setFullscreen} fullscreen={fullscreen} setIsOpen={setContactsIsOpen} />
      <WindowMenu />
      <ContactsBody isOpen={setContactsIsOpen} setChatIsOpen={setChatIsOpen} />
    </div>
    );
};

export default Contacts;
