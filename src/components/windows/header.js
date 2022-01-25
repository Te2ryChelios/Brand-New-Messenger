import React from 'react';
import {AiOutlineLine, AiOutlineClose, AiOutlineBorder} from 'react-icons/ai'

const WindowHeader = ({setFullscreen, fullscreen, title, setIsOpen}) => {

    

  const handleClose = (e) => {
    e.preventDefault()
    setIsOpen(false)
  }

    return (
        <div className="window-header">
            <div className="window-header-text">
                <span className="window-header-title-icon"><img src="/icons/msn.png" alt="" /></span>
                <h3 className="window-header-title">{title}</h3>
            </div>
            <div className="window-header-icons">
                <span className="window-header-icon minimize">
                <AiOutlineLine />
                </span>
                <span className="window-header-icon fullscreen" onClick={(e) => {setFullscreen(!fullscreen)}}>
                <AiOutlineBorder />
                </span>
                <span className="window-header-icon exit" onClick={handleClose}>
                <AiOutlineClose />
                </span>
            </div>
        </div>
    );
};

export default WindowHeader;
