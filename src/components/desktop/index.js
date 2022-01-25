import React from 'react';

const Desktop = ({setContactsIsOpen, contactsIsOpen}) => {

    const handleButton = (e) => {
        e.preventDefault()
        if(!contactsIsOpen){
            setContactsIsOpen(true)
        }
    }

  return (
        <div className="desktop">
            <button onClick={handleButton} className="desktop-item">
                <img className="desktop-item-icon" src="./icons/msn.png" alt="" />
                <p className="desktop-item-text">Messenger</p>
            </button>
        </div>
  );
};

export default Desktop;
