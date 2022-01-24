import React from 'react';
import {AiOutlineLine, AiOutlineClose, AiOutlineBorder} from 'react-icons/ai'

const ChatHeader = ({setFullscreen, fullscreen}) => {
    return (
        <div className="window-header">
            <div className="window-header-text">
                <span className="window-header-title-icon"><img src="/msn.svg" alt="" /></span>
                <h3 className="window-header-title">Messenger</h3>
            </div>
            <div className="window-header-icons">
                <span className="window-header-icon minimize">
                <AiOutlineLine />
                </span>
                <span className="window-header-icon fullscreen" onClick={(e) => {setFullscreen(!fullscreen)}}>
                <AiOutlineBorder />
                </span>
                <span className="window-header-icon exit">
                <AiOutlineClose />
                </span>
            </div>
        </div>
    );
};

export default ChatHeader;
