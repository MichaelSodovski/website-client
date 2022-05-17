import React from 'react';
import { useEffect, useState } from 'react';
import '../navigationBar/navigationBar.component.css'

export default function NavigationBar() {

    const [isPaymentVisible, setisPaymentVisible] = useState(false);
    

    return (
        <div className="main-container">
            <div className="navigationBar-form-container">
                <button></button>
            </div>
        </div>
    );
}