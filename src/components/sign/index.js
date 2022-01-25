import React, {useState} from 'react';
import SignMenu from './menu';
import "./sign.css"

const Sign = ({setAlert, resetAlert}) => {
    

    const turnOff = (e) => {
        e.preventDefault()
        window.close()
    }

    return (
        <div className='sign'>
            <div className="sign-header"></div>
            <div className="sign-body">
                
                <div className="sign-body-left">
                    <img src="./xp.png" alt="" />
                    <p>To begin, please sign in</p>
                </div>
                <div className="divider"></div>
                <div className="sign-body-right">
                    <SignMenu setAlert={setAlert} resetAlert={resetAlert} />
                </div>
            </div>

            <div className="sign-footer">
                <div onClick={turnOff} className="sign-footer-button"><img src="./icons/logout.png" alt="turnoff" /> Turn off STH</div>
                <p className="copyright">Created by <a href="https://chelios.herokuapp.com/">Chelios</a> </p>
            </div>
        </div>
    );
};

export default Sign;
