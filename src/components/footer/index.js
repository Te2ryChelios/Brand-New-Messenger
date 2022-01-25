import React, {useState, useEffect} from 'react';
import { AiOutlineWifi, AiFillSound} from 'react-icons/ai'
import Start from '../Start';

const Footer = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [time, setTime] = useState()

    const formatAMPM = (date) => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }

    useEffect(() => {
        setTime(formatAMPM(new Date()))
        const timer = setInterval(() => {
            setTime(formatAMPM(new Date()))
        }, 60 * 1000)

        return () => {
            clearInterval(timer);
          }
    }, [])
    
    const handleStart = (e) => {
        e.preventDefault()
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <footer>
            <button onClick={handleStart} className="start-button"><img src="/windows.svg" />Start</button>
            <div className="footer-icons">
                <img src="./icons/sound.png" alt="sound" />
                <img src="./icons/defender.png" />
                <span>{time}</span>
            </div>
            {menuIsOpen && <Start />}
        </footer>
    );
};

export default Footer;
