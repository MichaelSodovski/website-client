import React from 'react';
import { useEffect, useState } from 'react';
import '../register/register.component.css' 
import Payment from '../payment-info/payment.component'

export default function Register() {

const [isPaymentVisible, setisPaymentVisible] = useState(false);

    return (
        <div >
            <div className="register-form-container">

            </div>
            
        </div >

        <div>
            {isPaymentVisible == true &&
                <Payment></Payment>
            }
        </div>
    );
}