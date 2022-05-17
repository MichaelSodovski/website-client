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

    // convert CV
    const parseGender = (gender) => {
        return (gender === 'm' ? 'male' : 'female')
    }

    const parseBirthDate = (birthDate) => {
        let date = new Date();
        let ParseDate = date.getDate() + "/" + parseInt(date.getMonth() + 1) + "/" + date.getFullYear();
        return ParseDate
    }

    const parseRole = (roleId) => {
        return (roleId == '3' ? 'user' : 'admin')
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
                                <td>{parseBirthDate(user.birthDate)}</td>
                                <td>{parseGender(user.gender)}</td>
                                <td>{parseRole(user.roleId)}</td>
                                <td>{user.imageFileName}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}