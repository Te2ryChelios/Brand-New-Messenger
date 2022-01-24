import React from 'react';
import { AiOutlineWifi, AiFillSound} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <button className="start-button"><img src="/windows.svg" />Start</button>
            <div className="footer-icons">
                <AiFillSound />
                <AiOutlineWifi />
                <span><a href="http://chelios.herokuapp.com">© Chelios</a></span>
            </div>
        </footer>
    );
};

export default Footer;
