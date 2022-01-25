import {useState} from 'react'
import './App.css';
import Chat from './components/windows/chat';
import Footer from './components/footer';
import Contacts from './components/windows/contacts';
import Desktop from './components/desktop';
import Sign from './components/sign';

function App() {
  const [contactsIsOpen, setContactsIsOpen] = useState(false)
  const [chatIsOpen, setChatIsOpen] = useState(false)

  
  const openContacts = (e) => {
    e.preventDefault()
    if(!contactsIsOpen){
        setContactsIsOpen(true)
    }
}


  return (
    <div className="App">
      <Sign />
      {/* <Desktop openContacts={openContacts} />
      <div className="center">
        {chatIsOpen &&  <Chat setChatIsOpen={setChatIsOpen} />}
        {contactsIsOpen && <Contacts setContactsIsOpen={setContactsIsOpen} setChatIsOpen={setChatIsOpen}/>}
      </div>
      <Footer openContacts={openContacts} /> */}
    </div>
  );
}

export default App;
