import './App.css';
import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from '../src/components/home/home.component'
import Menu from '../src/components/menu/menu.component';
import Register from '../src/components/register/register.component';
import NavigationBar from '../src/components/navigationBar/navigationBar.component';

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavigationBar></NavigationBar>
            </header>
            <div className="layout-flexbox-container">
                <aside className="App-right-side_menu">

                </aside>
                <main className="App-main">
                    <Switch>
                        <Route path="/Home">
                            <Home></Home>
                        </Route>
                        <Route path="/register">
                            <Register></Register>
                        </Route>
                        <Route path="/Register">
                            <Register></Register>
                        </Route>
                    </Switch>
                </main>
                <aside className="App-left-side_menu">
                    <Menu></Menu>
                </aside>
            </div>
        </div>
    );
}
