import React from 'react';
import { useEffect, useState } from 'react';
import '../navigationBar/navigationBar.component.css'

export default function NavigationBar() {

    const [isPaymentVisible, setisPaymentVisible] = useState(false);


    return (
        <div className="navBar-main-container">
            <div className="navigationBar-form-container">
            <Link to="/Register">
                    <button >Register</button>
                </Link>
                <button>Sign up</button>
                
            </div>
        </div>
    );
}