import React from 'react';
import '../admin/admin.css'
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default function Admin(props) {
    if (!props.jwt) {
        return <Redirect to="/signin" />
    }

    return (
        <React.Fragment>
            <div className='admin-main-container'>
                <div className='admin-nav-bar'>
                <Link className='link-btn' to="/users">Users</Link>
                <Link className='link-btn' to="/articles">Articles</Link>
                <Link className='link-btn' to="/users">Users</Link>
                <Link className='link-btn' to="/users">Users</Link>
                </div>
            </div>
        </React.Fragment>
    )
}