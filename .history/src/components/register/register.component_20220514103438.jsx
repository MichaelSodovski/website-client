import React from 'react';
import { useEffect, useState } from 'react';

export default function Register() {

    useEffect(() => {
        fetch('/getUSers').then(response => response.json())
            .then(data => {
                setInitialState(data[0].user_name);
            });
    }, [])

    return (
        <div>
            {initialState}
        </div>
    );
}