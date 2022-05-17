import React from 'react';
import '../signIn/signIn.component.css'
import { Link } from 'react-router-dom';

export default function SignIn() {

    return (
        <React.Fragment>
            <div>

            </div>
            <div className="signIn-form-container">
                <label>User Name: </label>
                <input></input>
                <br></br>
                <label>Password: </label>
                <input></input>
                <br></br>
                <Link>
                    <button to="/home">Sign in</button>
                </Link>
            </div>
        </React.Fragment>
    );
}