import './App.css';
import Chat from './components/windows/chat';
import Footer from './components/footer';
import Contacts from './components/windows/contacts';

function App() {

  return (
    <div className="App">
      <div className="center">
        <Chat />
        {/* <Contacts /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
