import React from 'react';
import '../PasswordSucceessUpdated/PasswordSucceessUpdated.css'
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function PasswordSucceessUpdated() {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setRedirect(true);
        }, 4000)
    }, [])

    return (
        <React.Fragment>
            <div className="password-updated-container">
            <h1>Password updated successfully</h1>
            <p>Now you can login with your new password.</p>
            </div>
            {redirect &&
                <Redirect to='/signin' />
            }
        </React.Fragment>
    );
}