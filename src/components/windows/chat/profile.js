import React, {useState, useEffect} from 'react';
import WindowMenu from '../menu';
import WindowHeader from '../header';
import { supabase } from '../../../server';

const Profile = ({loading, setLoading, username, website, avatar_url, setUsername, setWebsite, setAvatarUrl, setProfileIsOpen, session, setAlert, resetAlert}) => {
    const [fullscreen, setFullscreen] = useState(false);

     const updateProfile = async ({ username, website, avatar_url }) => {
        try {
          setLoading(true)
          const user = supabase.auth.user()
    
          const updates = {
            id: user.id,
            username,
            website,
            avatar_url,
            updated_at: new Date(),
          }
    
          let { error } = await supabase.from('profiles').upsert(updates, {
            returning: 'minimal', // Don't return the value after inserting
          })
    
          if (error) {
            throw error
          }

          
          setAlert({
            isActive: true,
            type: 'success',
            message: 'Your account has been updated !'
            })
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

  return (
      <div className={`window ${fullscreen ? "fullscreen" : ""}`}>
        <WindowHeader title={"Edit Profile"} setFullscreen={setFullscreen} fullscreen={fullscreen} setIsOpen={setProfileIsOpen} />
        <WindowMenu />
        <div className="window-body window-body-profile">
            <img src={avatar_url || 'https://picsum.photos/150'} alt="" className="profile-avatar" />
            <div className="profile-item">
                <label className="profile-label">Username</label>
                <input className='profile-input' type="text" value={username ||'' } onChange={(e) => {setUsername(e.target.value)}} />
            </div>

            <div className="profile-item">
                <label className="profile-label">Website</label>
                <input className='profile-input' type="text" value={website||'' } onChange={(e) => {setWebsite(e.target.value)}} />
            </div>

            <div className="profile-item">
                <button className="profile-button" onClick={() => updateProfile({ username, website, avatar_url })} disabled={loading}>Submit</button>
            </div>
        </div>
      </div>
  );
};

export default Profile;
