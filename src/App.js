import {useState, useEffect} from 'react'
import './App.css';
import Chat from './components/windows/chat';
import Footer from './components/footer';
import Contacts from './components/windows/contacts';
import Desktop from './components/desktop';
import Sign from './components/sign';
import { supabase } from './server';
import {MdClose} from 'react-icons/md'
import Profile from './components/windows/chat/profile';

function App() {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  const [contactsIsOpen, setContactsIsOpen] = useState(false)
  const [chatIsOpen, setChatIsOpen] = useState(false)
  const [profileIsOpen, setProfileIsOpen] = useState(false)
  const [session, setSession] = useState(null)
  const [alert, setAlert] = useState({
    isActive: false,
    type: '',
    message: ''
})

const resetAlert = (e) => {
    setAlert({
        isActive: false,
        type: '',
        message: ''
    })
}

const getProfile = async () => {
  try {
    setLoading(true)
    resetAlert()
    const user = supabase.auth.user()

    let { data, error, status } = await supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single()

    if (error && status !== 406) {
      throw error
    }

    if (data) {
      setUsername(data.username)
      setWebsite(data.website)
      setAvatarUrl(data.avatar_url)
    }
  } catch (error) {
    setAlert({
      isActive: true,
      type: 'error',
      message: error.message
  })
  } finally {
    setLoading(false)
  }
}

  useEffect(() => {
    getProfile()
  }, [session])

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  
  const openContacts = (e) => {
    e.preventDefault()
    if(!contactsIsOpen){
        setChatIsOpen(false)
        setProfileIsOpen(false)
        setContactsIsOpen(true)
    }
  }

  
  const openProfile = (e) => {
    e.preventDefault()
    if(!profileIsOpen){
        setChatIsOpen(false)
        setContactsIsOpen(false)
        setProfileIsOpen(true)
    }
  }


  return (
    <div className="App">
      {alert && alert.type === "success" &&
          <div className="alert alert-success">
              {alert.message}
              <div onClick={resetAlert} className="alert-close"><MdClose /></div>
          </div>
      }
      {alert && alert.type === "error" &&
          <div className="alert alert-error">
              {alert.message}
              <div onClick={resetAlert} className="alert-close"><MdClose /></div>
          </div>
      }
      {session ?
      <>
        <Desktop openContacts={openContacts}  />
        <div className="center">
          {chatIsOpen &&  
          <Chat 
            setChatIsOpen={setChatIsOpen} 
            session={session} username={username} website={website}
          />
          }
          {contactsIsOpen && 
            <Contacts 
              setContactsIsOpen={setContactsIsOpen} setChatIsOpen={setChatIsOpen}
              session={session} username={username} website={website}
            />
            }
          {profileIsOpen && 
          <Profile 
          loading={loading} setLoading={setLoading}
          setLoading={setLoading} setUsername={setUsername} setWebsite={setWebsite} setAvatarUrl={setAvatarUrl} 
          session={session} username={username} website={website} avatar_url={avatar_url} 
          setProfileIsOpen={setProfileIsOpen} setAlert={setAlert} resetAlert={resetAlert} />}
        </div>
        <Footer username={username} website={website} avatar_url={avatar_url} openContacts={openContacts} openProfile={openProfile} session={session} />
      </>
      :
      <Sign setAlert={setAlert} resetAlert={resetAlert}/>

      }
      
    </div>
  );
}

export default App;
