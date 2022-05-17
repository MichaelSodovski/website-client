import React from 'react';
import { useState, useRef } from 'react';
import '../register/register.component.css'
import Payment from '../payment-info/payment.component'
import Form from './register form/register-form.component';

export default function Register() {
    const [isPaymentVisible, setisPaymentVisible] = useState(false);
    const formRef = useRef(null);
    const fileInputRef = useRef(null);

    return (
        <div className="main-container">
            <div>
                
            </div>
            <div>
                {isPaymentVisible === true &&
                    <Payment></Payment>
                }
            </div>
        </div>
    );
}