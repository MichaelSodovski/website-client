import React from 'react';
import { useState, useRef } from 'react';
import '../register/register.component.css'
import Payment from '../payment-info/payment.component'

export default function Register() {
    const [isPaymentVisible, setisPaymentVisible] = useState(false);
    const formRef = useRef(null);

    const fileInputRef = useRef(null);
    const currentFileRef = useRef(null);

    const onFileChange = (event) => {
        if (fileInputRef.current?.files.length > 0) {
            currentFileRef.current = fileInputRef.current?.files[0];
        }
        var fileName = event.target.value.toLowerCase();
    }

    const onFormSubmit = () => {
        const formData = new FormData();
        formData.append('firstName', upoloadRef.current);
        formData.append('file', currentFileRef.current);
        fetch('/saveUser', {
          body: formData
        });
    }

    return (
        <div className="main-container">
            <div>
                <form encType="multipart/form-data" action="/saveUser" method="POST" id="uploadForm" ref={formRef}>
                    <label>First Name: </label>
                    <input type="text" name="firstName" required></input>
                    <br></br>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" required></input>
                    <br></br>
                    <label>User Name: </label>
                    <input type="text" name="userName" required></input>
                    <br></br>
                    <label>Password: </label>
                    <input type="password" name="passWord" required></input>
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
                    <label>Image: </label>
                    <input ref={fileInputRef} type="file" name="imageFileName" id="imageFileName" accept=".jpg" onChange={onFileChange}></input>
                    <br></br>
                    <button onClick={(e) => setisPaymentVisible(true)} onSubmit={onFormSubmit}>Submit</button>
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