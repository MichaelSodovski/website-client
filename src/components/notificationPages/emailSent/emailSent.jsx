import React from 'react';
import '../emailSent/emailSent.css'
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function EmailSent() {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setRedirect(true);
        }, 4000)
    }, [])

    return (
        <React.Fragment>
            <div className="email-sent-container">
            <h1 className="h1-header">Email has been sent</h1>
            <p>an email with the credentials has been sent to your email.</p>
            <p>please check your mail box and follow the instructions of the email.</p>
            </div>
            {redirect &&
                <Redirect to='/signin' />
            }
        </React.Fragment>
    );
}