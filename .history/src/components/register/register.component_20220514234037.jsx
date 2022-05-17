import React from 'react';
import { useState, useRef } from 'react';
import '../register/register.component.css'
import Payment from '../payment-info/payment.component'

export default function Register() {
    const [isPaymentVisible, setisPaymentVisible] = useState(false);
    const formRef = useRef(null);
    const fileInputRef = useRef(null);

    return (
        <div className="main-container">
            <div>
                <form className="register-form-container" action="/adduser" method="POST" ref={formRef}>
                    <label>First Name: </label>
                    <input type="text" name="firstName" required></input>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" required></input>
                    <label>User Name: </label>
                    <input type="text" name="userName" required></input>
                    <label>Password: </label>
                    <input type="password" name="passWord" required autoComplete="on"
                    ></input>
                    <br></br>
                    <label>Email: </label>
                    <input type="email" name="email" required></input>
                    <br></br>
                    <label>Date Of Birth: </label>
                    <input type="date" name="birthDate" required></input>
                    <br></br>
                    <label>Gender: </label>
                    <select name="gender">
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                    </select>
                    <br></br>
                    <input type="submit" value="Submit" ></input>
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