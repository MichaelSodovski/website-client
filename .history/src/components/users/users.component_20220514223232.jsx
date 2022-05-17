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
                <thead>
                    <tr className="table-users-tr">
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Password</th>
                        <th>Email</th>
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