import React from 'react';
import { useEffect, useState } from 'react';
import '../signIn/signIn.component.css'
import { Link } from 'react-router-dom';

export default function SignIn() {

    return (
        <div className="signIn-main-container">
            <div className="signIn-form-container">
                <label>Gender: </label>
                <input></input>
                <br></br>
                <label>Image: </label>
                <input></input>
                <br></br>
                <button >Sign in</button>
            </div>
        </div>
    );
}