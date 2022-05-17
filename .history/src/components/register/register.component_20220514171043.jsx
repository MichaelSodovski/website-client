import React from 'react';
import { useState } from 'react';
import '../register/register.component.css'
import Payment from '../payment-info/payment.component'

export default function Register() {

    const [isPaymentVisible, setisPaymentVisible] = useState(false);

    


    return (
        <div className="main-container">
            <div>
                <form className="register-form-container" action="/saveUser" method="POST">
                    <label for="firstName">First Name: </label>
                    <input type="text" name="firstName" required></input>
                    <br></br>
                    <label for="lastName">Last Name: </label>
                    <input type="text" name="lastName" required></input>
                    <br></br>
                    <label for="userName">User Name: </label>
                    <input type="text" name="userName" required></input>
                    <br></br>
                    <label for="password">Password: </label>
                    <input type="password" name="passWord" required></input>
                    <br></br>
                    <label for="email">Email: </label>
                    <input type="email" name="email" required></input>
                    <br></br>
                    <label for="DateOfBirth">Date Of Birth: </label>
                    <input type="date" name="birthDate" required></input>
                    <br></br>
                    <label>Gender: </label>
                    <select name="gender">
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                    </select>
                    <br></br>
                    <label>Image: </label>
                    <input type="file" name="imageFileName" id="imageFileName" accept=".dwg,.zip"></input>
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