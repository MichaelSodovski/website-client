import React from 'react';
import { useEffect, useState } from 'react';
import '../users/users.component.css'

export default function Users() {
    const [usersData, setusersData] = useState();

    useEffect(() => {
        let usersArr = [];
        fetch('/getUSers').then(response => response.json())
            .then(users => {
                for (var i in users) {
                    usersArr.push(users[i]);
                }
            });
        setusersData

    }, [])

    return (
        <div>
            <table className="table-users">
                <tr className="table-users-tr">
                    <td>
                        id
                    </td>
                    <td>
                        User Name
                    </td>
                    <td>
                        Password
                    </td>
                    <td>
                        First Name
                    </td>
                    <td>
                        Last Name
                    </td>
                    <td>
                        Email
                    </td>
                    <td>
                        Birth Date
                    </td>
                    <td>
                        Gender
                    </td>
                    <td>
                        Role
                    </td>
                    <td>
                        Image
                    </td>
                </tr>
            </table>

            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Password</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {arrayWithData.map(item => {
                        return (
                            <tr key={item.password}>
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                                <td>{item.password}</td>
                                <td>{item.email}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}