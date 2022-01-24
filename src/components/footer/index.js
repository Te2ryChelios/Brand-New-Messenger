import React, {useState} from 'react';
import { AiOutlineWifi, AiFillSound} from 'react-icons/ai'
import Start from '../Start';

const Footer = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const handleStart = (e) => {
        e.preventDefault()
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <footer>
            <button onClick={handleStart} className="start-button"><img src="/windows.svg" />Start</button>
            <div className="footer-icons">
                <AiFillSound />
                <AiOutlineWifi />
                <span><a href="http://chelios.herokuapp.com">© Chelios</a></span>
            </div>
            {menuIsOpen && <Start />}
        </footer>
    );
};

export default Footer;
