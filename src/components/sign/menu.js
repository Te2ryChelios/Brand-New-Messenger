import React, {useState} from 'react';
import SignForm from './form';

const SignMenu = ({setAlert, resetAlert}) => {
    const [signUpForm, setSignUpForm] = useState(false)
    const [signInForm, setSignInForm] = useState(false)

    const handleSignUpForm = () => {
        if(!signUpForm){
            if(signInForm){
                setSignInForm(false)
            }
            setSignUpForm(!signUpForm)
        }
    }

    const handleSignInForm = () => {
        if(!signInForm){
            if(signUpForm){
                setSignUpForm(false)
            }
            setSignInForm(!signInForm)
        }
    }

    return (
        <div className="sign-menu">
            <div className="sign-menu-item">
                <img src="https://picsum.photos/60" alt="" className="sign-menu-item-image" onClick={handleSignUpForm} />
                <div>
                    <p className="sign-menu-item-text" onClick={handleSignUpForm}>Sign in</p>
                    {signUpForm && 
                        <SignForm setAlert={setAlert} resetAlert={resetAlert} />
                    }
                </div>
            </div>
        </div>
    );
};

export default SignMenu;
