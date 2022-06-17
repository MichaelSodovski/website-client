import React from 'react';
import '../EmailVerificationSent/EmailVerificationSent.css'
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function EmailVerificationSent() {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setRedirect(true);
        }, 4000)
    }, [])

    return (
        <React.Fragment>
            <div className="email-verification-container">
            <h1>Email has been sent</h1>
            <p>an email with a 5 digit code has been sent to your email.</p>
            <p>please check your mail box and follow the instructions of the email.</p>
            </div>
            {redirect &&
                <Redirect to='/emailVerification' />
            }
        </React.Fragment>
    );
}