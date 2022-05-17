import React from 'react';
import { useEffect, useState } from 'react';
import '../signIn/signIn.component.css'
import { Link } from 'react-router-dom';

export default function SignIn() {

    return (
        <div className="navBar-main-container">
            <div className="navigationBar-form-container">
                <Link to="/register">
                    <button >Register</button>
                </Link>
                <Link to="/signin">
                    <button >Sign in</button>
                </Link>

            </div>
        </div>
    );
}