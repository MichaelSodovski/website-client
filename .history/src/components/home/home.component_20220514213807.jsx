import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {

    useEffect(() => {
        fetch('/getUSers').then(response => response.json())
            .then(users => {
                let usersArr = [];
                usersArr.forEach(()=>{
                    
                })
                
            });
    }, [])

    return (
        <div>
            {initialState}
        </div>
    );
}