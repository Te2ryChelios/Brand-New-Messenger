import {useState, useEffect} from 'react'
import './App.css';
import Sign from './components/sign';
import {MdClose} from 'react-icons/md'
import Main from './components/main';
import { supabase } from './server';
import { BrowserRouter } from "react-router-dom";

function App() {

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



  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  
  

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
      <BrowserRouter>
        <Main session={session} alert={alert} setAlert={setAlert} resetAlert={resetAlert}/>
      </BrowserRouter>
      :
      <Sign setAlert={setAlert} resetAlert={resetAlert}/>

      }
      
    </div>
  );
}

export default App;
