import './App.css';
import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout.component/layout.component';

export default function App() {
    return (
        <div className="App">
            <header className="App-header">

            </header>
            <main className="App-main">
                <Switch>
                    <Route path="/Home">
                        <Layout>

                        </Layout>
                    </Route>
                </Switch>
            </main>
            <aside className="App-left-side_menu">

            </aside>
            <aside className="App-right-side_menu">

            </aside>
        </div>
    );
}
