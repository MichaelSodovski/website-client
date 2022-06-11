import React from 'react';
import { useEffect, useState } from 'react';
import '../users/users.component.css'

export default function Users() {
    const [usersData, setusersData] = useState([]);
    const [expanded, setExpanded] = useState(false);
    // fetch users from DB
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
    // convert CHAR(1) format to string format
    const parseGender = (gender) => {
        return (gender === 'm' ? 'male' : 'female')
    }
    // convert default date format to MM/DD/YYYY 
    const parseBirthDate = (birthDate) => {
        let date = new Date();
        let ParseDate = date.getDate() + "/" + parseInt(date.getMonth() + 1) + "/" + date.getFullYear();
        return ParseDate
    }
    // convert id of the role to the role itself
    const parseRole = (roleId) => {
        return (roleId === '3' ? 'user' : 'admin')
    }

    const togglExpandedHandler = (e) => {
        (!expanded) ? setExpanded(true) : setExpanded(false)
        console.log(expanded);
    };

    return (
        <React.Fragment>
            <table className="table-users">
                <thead>
                    <tr className="table-users-tr">
                        <th>

                        </th>
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

                            <tr key={user.id} onClick={(e) => togglExpandedHandler(e)}>
                                <td><input type="checkbox"></input></td>
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
        </React.Fragment>
    );
}