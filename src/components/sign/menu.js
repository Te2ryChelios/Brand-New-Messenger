import React from 'react';

const SignMenu = () => {
    return (
        <div className="sign-menu">
            <div className="sign-menu-item">
                <img src="https://picsum.photos/60" alt="" className="sign-menu-item-image" />
                <p className="sign-menu-item-text">Create an account</p>
            </div>

            <div className="sign-menu-item">
                <img src="https://picsum.photos/60" alt="" className="sign-menu-item-image" />
                <p className="sign-menu-item-text">Sign In</p>
            </div>
        </div>
    );
};

export default SignMenu;
