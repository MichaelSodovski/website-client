import React from 'react';
import '../admin/admin.component.css'
import { Link } from "react-router-dom";

export default function Admin() {

    return (
        <React.Fragment>
            <div className='admin-main-container'>
                <p>Admin area</p>
                <Link className='nav-btn' to="/users">Users</Link>
            </div>
        </React.Fragment>
    )
}