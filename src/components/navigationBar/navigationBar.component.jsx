import React from 'react';
import '../navigationBar/navigationBar.component.css'
import { Link } from 'react-router-dom';

export default function NavigationBar() {

    return (
        <React.Fragment>
            <div className="navBar-main-container">
                <div className="navigationBar-right-container">
                    <Link to="/home">
                        <a className="btn"> Home </a>
                    </Link>
                </div>
                <div className="navigationBar-left-container">
                    <Link to="/register">
                        <a className="btn">Register</a>
                    </Link>
                    <Link to="/signin">
                        <a className="btn">Sign in</a>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
}