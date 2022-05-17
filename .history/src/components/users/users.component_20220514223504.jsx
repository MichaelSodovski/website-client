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
                        </th>
                        <th>
                            Password
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Birth Date
                        </th>
                        <th>
                            Gender
                        </th>
                        <th>
                            Role
                        </th>
                        <th>
                            Image
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {usersData.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.userName}</td>
                                <td>{user.passWord}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.birthDate}</td>
                                <td>{user.gender}</td>
                                <td>{user.userName}</td>
                                <td>{user.userName}</td>
                                <td>{user.id}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}