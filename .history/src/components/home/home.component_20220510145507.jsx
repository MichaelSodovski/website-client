import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        debugger;
        fetch('http://localhost:3000/users').then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(jsonResponse => setInitialState(jsonResponse))
    }, [])

    console.log(initialState);

    return (
        <div>

        </div>
    );
}