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
                    <input type="text" name="firstName" required></input>
                    <br></br>
                    <label for="lastName">Last Name: </label>
                    <input type="text" name="lastName" required></input>
                    <br></br>
                    <label for="userName" name="userName">User Name: </label>
                    <input type="text" required></input>
                    <br></br>
                    <label for="password" name="password">Password: </label>
                    <input type="password" required></input>
                    <br></br>
                    <label for="email" name="email">Email: </label>
                    <input type="email" required></input>
                    <br></br>
                    <label for="DateOfBirth" name="dateOfBirth">Date Of Birth: </label>
                    <input type="date" required></input>
                    <br></br>
                    <label name="gender">Gender: </label>
                    <select>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                    </select>
                    <br></br>
                    <label name="imageFile">Image: </label>
                    <input type="file" name="file" id="inFile" accept=".dwg,.zip"></input>
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