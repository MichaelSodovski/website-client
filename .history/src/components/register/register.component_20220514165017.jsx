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
                <label >First Name: </label>
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
                <Link>
                    <button onClick={(e) => setisPaymentVisible(true)}>Submit</button>
                </Link>
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