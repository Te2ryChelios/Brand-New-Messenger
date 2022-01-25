import {useState} from 'react'
import './App.css';
import Chat from './components/windows/chat';
import Footer from './components/footer';
import Contacts from './components/windows/contacts';
import Desktop from './components/desktop';

function App() {
  const [contactsIsOpen, setContactsIsOpen] = useState(false)
  const [chatIsOpen, setChatIsOpen] = useState(false)

  return (
    <div className="App">
      <Desktop contactsIsOpen={contactsIsOpen} setContactsIsOpen={setContactsIsOpen} />
      <div className="center">
        {chatIsOpen &&  <Chat setChatIsOpen={setChatIsOpen} />}
        {contactsIsOpen && <Contacts setContactsIsOpen={setContactsIsOpen} setChatIsOpen={setChatIsOpen}/>}
      </div>
      <Footer />
    </div>
  );
}

export default App;
