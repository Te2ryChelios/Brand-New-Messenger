import React from 'react';
import "./start.css"
import { AiOutlineLogout} from 'react-icons/ai'
import {BsKeyFill} from 'react-icons/bs'

const Start = () => {
    return (
        <div className="start">

            <div className="start-header">
                <img src="https://picsum.photos/150" alt="" className="start-header-avatar" />
                <p className="start-header-username">John Doe</p>
            </div>

            <div className="start-body">
                <div className="start-body-item">
                    <img src="./icons/msn.png" alt="" />
                    <div className="start-body-item-text">
                        <h4 className="start-body-item-title">MSN</h4>
                        <h4 className="start-body-item-subtitle">Messenger</h4>
                    </div>
                </div>
            </div>

            <div className="start-footer">
                <div className="start-footer-button">
                    <img src="./icons/logoff.png" className="start-footer-icon"  alt="Log Off" />
                    <span className="start-footer-button-label">Log Off</span>
                </div>
                <div className="start-footer-button">
                    <img src="./icons/logout.png" className="start-footer-icon"  alt="Turn Off" />
                    <span className="start-footer-button-label">Turn off Computer</span>
                </div>
            </div>
        </div>
    );
};

export default Start;
