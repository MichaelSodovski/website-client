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
            <h1>Email has been sent</h1>
            <p>an email with the credentials has been sent to your email.</p>
            <p>please check your mail box and follow the instructions of the email.</p>
            {redirect &&
                <Redirect to='/signin' />
            }
        </React.Fragment>
    );
}