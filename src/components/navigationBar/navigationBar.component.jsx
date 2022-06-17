import React from 'react';
import '../navigationBar/navigationBar.component.css'
import { Link } from 'react-router-dom';

export default function NavigationBar() {


    return (
        <React.Fragment>
            <div className="navBar-main-container">
                <div className="navigationBar-right-container">
                    <Link to="/home">
                        <button className="btn" >Home</button>
                    </Link>
                </div>
                <div className="navigationBar-left-container">
                    <Link to="/register">
                        <button className="btn">Register</button>
                    </Link>
                    <Link to="/signin">
                        <button className="btn">Sign in</button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
}