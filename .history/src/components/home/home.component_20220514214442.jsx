import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {

    useEffect(() => {
        let usersArr = [];
        fetch('/getUSers').then(response => response.json())
            .then(users => {
                users.push(users)
            });
            console.log(usersArr);
    }, [])

    return (
        <div>
        </div>
    );
}