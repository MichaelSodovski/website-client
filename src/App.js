import './App.css';
import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from '../src/components/home/home.component'
import Menu from '../src/components/menu/menu.component';
import Register from '../src/components/register/register.component';
import NavigationBar from '../src/components/navigationBar/navigationBar.component';
import SignIn from '../src/components/signIn/signIn.component'
import Users from '../src/components/users/users.component'

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
                        </Switch>
                    </main>
                    <aside className="App-left-side_menu">
                        <Menu></Menu>
                    </aside>
                </div>
            </div>
        </React.Fragment>
    );
}
