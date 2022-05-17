import React from 'react';
import { useState } from 'react';
import '../register/register.component.css'
import Payment from '../payment-info/payment.component'
import { Link } from 'react-router-dom';

export default function Register() {

    const [isPaymentVisible, setisPaymentVisible] = useState(false);


    return (
        <div className="main-container">
            <div className="register-form-container">
                <form>

                </form>
                
            </div>

            <div>
                {isPaymentVisible === true &&
                    <Payment></Payment>
                }
            </div>
        </div>
    );
}