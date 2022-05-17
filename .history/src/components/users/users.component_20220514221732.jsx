import React from 'react';
import { useEffect, useState } from 'react';

export default function Users() {

    useEffect(() => {
        let usersArr = [];
        fetch('/getUSers').then(response => response.json())
            .then(users => {
                for (var i in users) {
                    usersArr.push(users[i]);
                }
            });
        console.log(usersArr);
    }, [])

    return (
        <div>
            <table>
                <tr>
                    <td>
                        id
                    </td>
                    <td>
                        User Name
                    </td>
                    <td>
                        PassWord
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
                        RoleId
                    </td>
                    <td>
                        imageFileName
                    </td>
                </tr>
            </table>
        </div>
    );
}