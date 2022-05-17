import React from 'react';
import { useEffect, useState } from 'react';
import '../register/register.component.css'
import Payment from '../payment-info/payment.component'

export default function Register() {

    const [isPaymentVisible, setisPaymentVisible] = useState(false);

    return (
        <div className="main-container">
            <div className="register-form-container">
                <label>First Name: </label>
                <input></input>
                <br></br>
                <label>Last Name: </label>
                <input></input>
                <br></br>
                <label>User Name: </label>
                <input></input>
                <br></br>
                <label>Password: </label>
                <input></input>
                <br></br>
                <label>Email: </label>
                <input></input>
                <br></br>
                <label>Date Of Birth: </label>
                <input></input>
                <br></br>
                <label>Gender: </label>
                <input></input>
                <br></br>
                <label>Image: </label>
                <input></input>
                <br></br>
                <button onClick={(e) => setisPaymentVisible(true)} >Submit</button>
            </div>

            <div>
                {isPaymentVisible == true &&
                    <Payment></Payment>
                }
            </div>
        </div>
    );
}