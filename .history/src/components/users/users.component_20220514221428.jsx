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
                        asd
                    </td>
                    <td>
                        asd
                    </td>
                </tr>
            </table>
        </div>
    );
}