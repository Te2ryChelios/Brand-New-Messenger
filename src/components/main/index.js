import React, {useState, useEffect} from 'react';
import Profile from '../windows/chat/profile';
import Chat from '../windows/chat';
import Footer from '../footer';
import Contacts from '../windows/contacts';
import Desktop from '../desktop';
import { supabase } from '../../server';
import { Routes, Route, Link } from "react-router-dom";
import Home from './home';

const Main = ({session, alert, setAlert, resetAlert,}) => {
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [website, setWebsite] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)

    const [contactsIsOpen, setContactsIsOpen] = useState(false)
    const [chatIsOpen, setChatIsOpen] = useState(false)
    const [profileIsOpen, setProfileIsOpen] = useState(false)

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
            
            setWebsite(data.website)
            setAvatarUrl(data.avatar_url)
            await setUsername(data.username)
            if(!data.username){
              setUsername(session.user.email)
            }
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
        <>
        <Desktop openContacts={openContacts}  />
        <div className="center">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={
            <Contacts 
              session={session} username={username} website={website}
            />
          }/>
          <Route path="/contacts/:id" element={
            <Chat
            session={session} username={username} website={website}
          />
          }/>
            
            {profileIsOpen && 
            <Profile 
            loading={loading} setLoading={setLoading}
            setLoading={setLoading} setUsername={setUsername} setWebsite={setWebsite} setAvatarUrl={setAvatarUrl} 
            session={session} username={username} website={website} avatar_url={avatar_url} 
            setProfileIsOpen={setProfileIsOpen} setAlert={setAlert} resetAlert={resetAlert} />}
          </Routes>
        </div>
        <Footer username={username} website={website} avatar_url={avatar_url} openContacts={openContacts} openProfile={openProfile} session={session} />
        </>
    );
};

export default Main;
