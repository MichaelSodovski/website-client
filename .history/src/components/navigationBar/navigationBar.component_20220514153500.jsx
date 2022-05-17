import React from 'react';
import { useEffect, useState } from 'react';
import '../navigationBar/navigationBar.component.css'
import { Link } from 'react-router-dom';

export default function NavigationBar() {

    const [isPaymentVisible, setisPaymentVisible] = useState(false);


    return (
        <div className="navBar-main-container">
        
            <div className="navigationBar-right-form-container">
                <Link to="/register">
                    <button>Register</button>
                </Link>
                <Link to="/signin">
                    <button>Sign in</button>
                </Link>
            </div>

            <div className="navigationBar-left-form-container">
            <Link to="/register">
                    <button>Register</button>
                </Link>
                <Link to="/signin">
                    <button>Sign in</button>
                </Link>
                <Link to="/home">
                    <button >Home</button>
                </Link>
            </div>
        </div>
    );
}