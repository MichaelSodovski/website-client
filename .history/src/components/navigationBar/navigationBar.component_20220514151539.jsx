import React from 'react';
import { useEffect, useState } from 'react';
import '../navigationBar/navigationBar.component.css'

export default function NavigationBar() {

    const [isPaymentVisible, setisPaymentVisible] = useState(false);


    return (
        <div className="navBar-main-container">
            <div className="navigationBar-form-container">
                <button >Register</button>
                <button>Sign up</button>
                <Link to="/Home" className="navBtn">
                    <button type="button" className="navBtn"> <span>Home</span> </button>
                </Link>
            </div>
        </div>
    );
}