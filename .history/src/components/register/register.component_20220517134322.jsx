import React from 'react';
import { useState } from 'react';
import '../register/register.component.css'
import Payment from '../payment-info/payment.component'
import Form from './registerForm/register-form.component';

export default function Register() {

    return (
        <React.Fragment>
            <div>
                <Form></Form>
            </div>
        </React.Fragment>
    );
}