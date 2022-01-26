import React, {useState, useEffect} from 'react';
import { supabase } from '../../../server';

const ContactsBody = ({session, username, website}) => {
  const [users, setUsers] = useState([])


  const getUsers = async () => {
    const {data} = await supabase
      .from('profiles')
      .select()
      .not('id', 'eq', session.user.id)
    setUsers(data)
    console.log(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <div className="window-body column">
        <div className="window-contacts-header">
          <img src="https://picsum.photos/150" className="window-contacts-header-avatar" />
          <div className="window-contacts-header-text">
            <p className="window-contacts-header-text-username">{username || session.user.email } <span>(online)</span></p>
            <p className="window-contacts-header-text-mail">{session.user.email}</p>
            </div>
        </div>
        <div className="window-contacts-list">
          <p className='window-contacts-list-title'>Users ({users.length})</p>
          <ul>
              {users.map((user) => (
                <li><a href="" onClick={handleClick}><img src="./icons/msn-online.png" alt="" />{user.username}</a></li>
              ))}
          </ul>
        </div>
    </div>
    );
};

export default ContactsBody;
