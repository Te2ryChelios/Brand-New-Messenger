import React from 'react';
import { Link } from "react-router-dom";


const Desktop = ({openContacts}) => {

  return (
        <div className="desktop">
            <Link to="/contacts" className="desktop-item">
                <img className="desktop-item-icon" src="./icons/msn.png" alt="" />
                <p className="desktop-item-text">Messenger</p>
            </Link>
        </div>
  );
};

export default Desktop;
