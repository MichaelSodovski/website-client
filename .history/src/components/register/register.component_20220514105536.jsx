import React from 'react';
import { useEffect, useState } from 'react';
import '../register/register.component.css' 

export default function Register() {



    return (
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
            <button>Submit</button>
        </div >
    );
}