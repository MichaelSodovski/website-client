import React from 'react';
import { useEffect, useState } from 'react';
import '../users/users.component.css'

export default function Users() {
    const [usersData, setusersData] = useState([]);

    useEffect(() => {
        let usersArr = [];
        fetch('/getUSers').then(response => response.json())
            .then(users => {
                for (var i in users) {
                    usersArr.push(users[i]);
                }
            });
        setusersData(usersArr);
    }, [])

    return (
        <div>
            <table className="table-users">
                <tr className="table-users-tr">
                    <th>
                        id
                    </th>
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

            <table className="table-users">
                <thead>
                    <tr className="table-users-tr">
                        <th>
                            id
                        </th>
                        <th>
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
                </thead>
                <tbody>
                    {usersData.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.userName}</td>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.userName}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}