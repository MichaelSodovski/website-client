import React from 'react';
import { useEffect, useState } from 'react';
import '../users/users.component.css'
import { format } from 'date-fns'

export default function Users() {
    const [usersData, setusersData] = useState([]);

    useEffect(() => {
        let usersArr = [];
        fetch('/getUSers').then(response => response.json())
            .then(users => {
                for (var i in users) {
                    usersArr.push(users[i]);
                }
                setusersData(usersArr);
            });
    }, [])

    const parseGender = (gender) => {
        return gender === 'm' ? 'female' : 'male'
    }

    return (
        <div>
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
                                <td>{user.id}</td>
                                <td>{user.userName}</td>
                                <td>{user.passWord}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.birthDate}</td>
                                <td>{parseGender(user.birthDate)}</td>
                                <td>{user.roleId}</td>
                                <td>{user.imageFileName}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}