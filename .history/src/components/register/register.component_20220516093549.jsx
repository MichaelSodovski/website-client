import React from 'react';
import { useState } from 'react';
import '../register/register.component.css'
import Payment from '../payment-info/payment.component'
import Form from './registerForm/register-form.component';
import User from '../../'

export default function Register() {
    const [isPaymentVisible, setisPaymentVisible] = useState(false);

    return (
        <React.Fragment>
            <div>
                <div>
                    <Form ></Form>
                </div>
                <div>
                    {isPaymentVisible === true &&
                        <Payment></Payment>
                    }
                </div>
            </div>
        </React.Fragment>
    );
}