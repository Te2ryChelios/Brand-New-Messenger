import React, {useState} from 'react';
import WindowHeader from '../header';
import WindowMenu from '../menu';
import ContactsBody from './body';

const Contacts = ({session, username, website}) => {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <div className={`window ${fullscreen ? "fullscreen" : ""}`}>
      <WindowHeader title={"Messenger - Contacts"} setFullscreen={setFullscreen} fullscreen={fullscreen}  />
      <WindowMenu />
      <ContactsBody session={session} username={username} website={website} />
    </div>
    );
};

export default Contacts;
