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
                    userName
                    </td>
                    <td>
                    passWord
                    </td>
                    <td>
                    firstName
                    </td>
                    <td>
                    lastName
                    </td>
                </tr>
            </table>
        </div>
    );
}