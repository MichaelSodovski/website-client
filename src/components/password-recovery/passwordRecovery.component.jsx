import React from 'react';
import '../password-recovery/passwordRecovery.component.css'

export default function PasswordRecovery() {

    return (
        <React.Fragment>
            <form action="/recoverPassword" method="POST">
                <div>
                    <p>pass word recovery</p>
                </div>
            </form>
        </React.Fragment>
    );
}