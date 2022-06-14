import './App.css';
import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from '../src/components/home/home.component'
// import Menu from '../src/components/menu/menu.component';
import Register from '../src/components/register/register.component';
import NavigationBar from '../src/components/navigationBar/navigationBar.component';
import SignIn from '../src/components/signIn/signIn.component';
import Users from '../src/components/users/users.component';
import PasswordRecovery from '../src/components/password-recovery/passwordRecovery.component';
import Admin from '../src/components/admin/admin.component'
import EmailVerification from '../src/components/password-recovery/emailVerification/emailVerification.component'
import UpdatePassword from '../src/components/password-recovery/passwordUpdate/passwordUpdate.component'
import UsernameRecovery from '../src/components/username-recovery/username-recovery.component'

export default function App() {
    return (
        <React.Fragment>
            <div className="App">
                <header className="App-header">
                    <NavigationBar></NavigationBar>
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
                            <Route path="/users">
                                <Users></Users>
                            </Route>
                            <Route path="/passwordRecovery">
                                <PasswordRecovery></PasswordRecovery>
                            </Route>
                            <Route path="/admin">
                                <Admin></Admin>
                            </Route>
                            <Route path="/emailVerification">
                                <EmailVerification></EmailVerification>
                            </Route>
                            <Route path="/passwordUpdate">
                                <UpdatePassword></UpdatePassword>
                            </Route>
                            <Route path="/userNameRecovery">
                                <UsernameRecovery></UsernameRecovery>
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
