import './App.css';
import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Home from '../src/components/home/home.component'

export default function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
            <div>
                
            </div>
            <main className="App-main">
                <Switch>
                    <Route path="/Home">
                        <Home></Home>
                    </Route>
                </Switch>
            </main>
            <aside className="App-left-side_menu"></aside>
            <aside className="App-right-side_menu"></aside>
        </div>
    );
}
