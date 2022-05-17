import React from 'react';
import { useState } from 'react';
import '../register/register.component.css'
import Payment from '../payment-info/payment.component'
import { Link } from 'react-router-dom';

export default function Register() {

    const [isPaymentVisible, setisPaymentVisible] = useState(false);


    return (
        <div className="main-container">
            <div>
                <form className="register-form-container" action="/getUsers">
                <label for="firstName">First Name: </label>
                <input type="text" required></input>
                <br></br>
                <label for="lastName">Last Name: </label>
                <input type="text" required></input>
                <br></br>
                <label for="userName">User Name: </label>
                <input type="text" required></input>
                <br></br>
                <label for="password">Password: </label>
                <input type="password" required></input>
                <br></br>
                <label for="email">Email: </label>
                <input type="email" required></input>
                <br></br>
                <label >Date Of Birth: </label>
                <input></input>
                <br></br>
                <label>Gender: </label>
                <input></input>
                <br></br>
                <label>Image: </label>
                <input></input>
                <br></br>
                    <button onClick={(e) => setisPaymentVisible(true)}>Submit</button>
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