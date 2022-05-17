import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {

    useEffect(() => {
        let usersArr = [];
        fetch('/getUSers').then(response => response.json())
            .then(users => {
                for(var i in users) {
                    usersArr.push()
                }
            });
            console.log(usersArr);
    }, [])

    return (
        <div>
        </div>
    );
}