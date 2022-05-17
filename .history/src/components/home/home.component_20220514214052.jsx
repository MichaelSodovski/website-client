import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {

    useEffect(() => {
        fetch('/getUSers').then(response => response.json())
            .then(users => {
                let usersArr = [];
                users.forEach((user) => {
                    usersArr.push(users[i])
                })
            });
    }, [])

    return (
        <div>
            {initialState}
        </div>
    );
}