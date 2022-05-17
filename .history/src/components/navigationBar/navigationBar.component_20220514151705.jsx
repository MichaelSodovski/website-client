import React from 'react';
import { useEffect, useState } from 'react';
import '../navigationBar/navigationBar.component.css'
import { Link } from 'react-router-dom';

export default function NavigationBar() {

    const [isPaymentVisible, setisPaymentVisible] = useState(false);


    return (
        <div className="navBar-main-container">
            <div className="navigationBar-form-container">
                <Link to="/Register">
                    <button >Register</button>
                </Link>
                <Link to="/signup">
                    <button >Sign up</button>
                </Link>

            </div>
        </div>
    );
}