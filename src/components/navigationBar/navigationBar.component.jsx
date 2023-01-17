import React from 'react';
import '../navigationBar/navigationBar.component.css'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

export default function NavigationBar(props) {
    let history = useHistory();
    console.log(props.jwt)

    return (
        <React.Fragment>
            <div className="navBar-main-container">
                <div className="navigationBar-right-container">
                    <Link to="/home">
                        <a href="/#" className="btn"> Home </a>
                    </Link>
                </div>
                {!props.jwt &&
                    <div className="navigationBar-left-container">
                        <Link to="/register">
                            <a href="/#" className="btn">Register</a>
                        </Link>
                        <Link to="/signin">
                            <a href="/#" className="btn">Sign in</a>
                        </Link>
                    </div>
                }
                {props.jwt &&
                    <div className="navigationBar-left-container">
                        <Link to="/signin" onClick={() => {
                                window.localStorage.removeItem('Authorization');
                                window.localStorage.removeItem('Refresh');
                                history.push("/signin");
                                window.location.reload(true);
                            }}>
                            <a href="/#" className="btn" >Sign out</a>
                        </Link>
                    </div>
                }
            </div>
        </React.Fragment>
    );
}