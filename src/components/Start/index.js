import React from 'react';
import "./start.css"
import { supabase } from '../../server';
import {Link} from 'react-router-dom'

const Start = ({username, website, avatar_url, session}) => {

    return (
        <div className="start">

            <div className="start-header">
                <img src="https://picsum.photos/150" alt="" className="start-header-avatar" />
                <p className="start-header-username">{username || session.user.email}</p>
            </div>

            <div className="start-body">
                <Link className="start-body-item" to="/contacts">
                    <img src="./icons/msn.png" alt="" />
                    <div className="start-body-item-text">
                        <h4 className="start-body-item-title">MSN</h4>
                        <h4 className="start-body-item-subtitle">Messenger</h4>
                    </div>
                </Link>

                <div className="start-body-item">
                    <img src="./icons/msn.png" alt="" />
                    <div className="start-body-item-text">
                        <h4 className="start-body-item-title">Profile</h4>
                        <h4 className="start-body-item-subtitle">Edit profile</h4>
                    </div>
                </div>
            </div>

            <div className="start-footer">
                <div className="start-footer-button" onClick={() => supabase.auth.signOut()}>
                    <img src="./icons/logoff.png" className="start-footer-icon"  alt="Log Off" />
                    <span className="start-footer-button-label">Log Off</span>
                </div>
                <div className="start-footer-button" onClick={() => window.close()}>
                    <img src="./icons/logout.png" className="start-footer-icon"  alt="Turn Off" />
                    <span className="start-footer-button-label">Turn off Computer</span>
                </div>
            </div>
        </div>
    );
};

export default Start;
