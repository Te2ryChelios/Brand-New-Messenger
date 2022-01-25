import React from 'react';

const Desktop = ({openContacts}) => {

  return (
        <div className="desktop">
            <button onClick={openContacts} className="desktop-item">
                <img className="desktop-item-icon" src="./icons/msn.png" alt="" />
                <p className="desktop-item-text">Messenger</p>
            </button>
        </div>
  );
};

export default Desktop;
