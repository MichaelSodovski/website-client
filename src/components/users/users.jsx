import React from 'react';
import { useEffect, useState, useRef } from 'react';
import '../users/users.css'
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import {
    TableHeader,
    HeaderRow,
    HeaderCell,
    Cell,
    Body,
    Row,
    Table,
    Header
} from '@table-library/react-table-library/table';

export default function Users(props) {
    const [usersData, setusersData] = useState([]);
    const [expanded, setExpanded] = useState(false);

    // fetch users from DB
    useEffect(() => {
        let usersArr = [];
        fetch('/getUSers', { headers: { "Authorization": `Bearer ${props.jwt}` } }).then(response => response.json())
            .then(users => {
                for (var i in users) {
                    usersArr.push(users[i]);
                }
                setusersData(usersArr);
            });
    }, [props.jwt])

    if (!props.jwt) {
        return <Redirect to="/signin" />
    }

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
    // toggle expand the row to make an accordion like table. 
    const togglExpandedHandler = (e) => {
        (!expanded) ? setExpanded(true) : setExpanded(false)
        console.log(expanded);
    };

    const deleteUser = () => {
        fetch('/deleteUser', {
            method: "DELETE",
            mode: 'cors',
            headers: {
                "Authorization": `Bearer ${props.jwt}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            //body: JSON.stringify(selectedUser)
        }).then(response => response.json())
            .then(response => {
                // handle success or failure messages. 
            });
    }

    return (
        <React.Fragment>
            {/* <div className='users-nav-bar'>
                <Link className='link-btn' to="/admin">Admin area</Link>
                <Link className='link-btn' to="/admin">Add user</Link>
                <Link className='link-btn' to="/admin">Update user</Link>
                <Link className='link-btn' onClick={deleteUser} >Delete user</Link>
            </div>
            <table className="table-users">
                <thead className="table-thead">
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
                            </tr>
                        );
                    })}

                </tbody>
            </table> */}

            

            <Table data={usersData}>


                <Body>
                    {usersData.map((user) => (
                        <Row key={user.id} user={user}>
                            <Cell>{user.userName}</Cell>
                            <Cell>
                                {user.userName.toLocaleDateString(
                                    'en-US',
                                    {
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit',
                                    }
                                )}
                            </Cell>
                            <Cell>{user.firstName}</Cell>
                            <Cell>{user.userName.toString()}</Cell>
                        </Row>
                    ))}
                </Body>
            </Table>
        </React.Fragment>

    );
}