import './App.css';
import React from "react";
import { Route, Switch } from 'react-router-dom';
// import { useState } from "react";
import Home from '../src/components/home/home'
// import Menu from '../src/components/menu/menu';
import Register from '../src/components/register/register';
import NavigationBar from '../src/components/navigationBar/navigationBar';
import SignIn from '../src/components/signIn/signIn';
import Users from '../src/components/users/users';
import PasswordRecovery from '../src/components/password-recovery/passwordRecovery';
import Admin from './components/admin/admin';
import EmailVerification from '../src/components/password-recovery/emailVerification/emailVerification'
import UpdatePassword from '../src/components/password-recovery/passwordUpdate/passwordUpdate'
import UsernameRecovery from '../src/components/username-recovery/username-recovery'
import EmailSent from '../src/components/notificationPages/emailSent/emailSent';
import EmailVerificationSent from '../src/components/notificationPages/EmailVerificationSent/EmailVerificationSent'
import PasswordSucceessUpdated from '../src/components/notificationPages/PasswordSucceessUpdated/PasswordSucceessUpdated';

export default function App() {
    let jwt = localStorage.getItem('Authorization');

    return (
        <React.Fragment>
            <div className="App">
                <header className="App-header">
                    <NavigationBar jwt={jwt}></NavigationBar>
                </header>
                <div className="layout-flexbox-container">
                    <aside className="App-right-side_menu">
                        {/* some section to be filled */}
                    </aside>
                    <main className="App-main">
                        <Switch>
                            <Route path="/home">
                                <Home></Home>
                            </Route>
                            <Route path="/register">
                                <Register></Register>
                            </Route>
                            <Route path="/signin">
                                <SignIn></SignIn>
                            </Route>

                            <Route exact path="/users" component={() => <Users jwt={jwt} />}></Route>

                            <Route path="/passwordRecovery">
                                <PasswordRecovery></PasswordRecovery>
                            </Route>

                            <Route exact path="/admin" component={() => <Admin jwt={jwt} />}></Route>

                            <Route path="/emailVerification">
                                <EmailVerification></EmailVerification>
                            </Route>
                            <Route path="/passwordUpdate">
                                <UpdatePassword></UpdatePassword>
                            </Route>
                            <Route path="/userNameRecovery">
                                <UsernameRecovery></UsernameRecovery>
                            </Route>

                            <Route path="/emailSent">
                                <EmailSent></EmailSent>
                            </Route>
                            <Route path="/emailVerificationSent">
                                <EmailVerificationSent></EmailVerificationSent>
                            </Route>
                            <Route path="/passwordRecoveryEmailVerificationSent">
                                <EmailVerificationSent></EmailVerificationSent>
                            </Route>
                            <Route path="/PasswordSucceessUpdated">
                                <PasswordSucceessUpdated></PasswordSucceessUpdated>
                            </Route>
                        </Switch>
                    </main>
                    <aside className="App-left-side_menu">
                        {/* some section to be filled */}
                    </aside>
                </div>
            </div>
        </React.Fragment>
    );
}
