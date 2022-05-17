import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('/users').then(res => {
            if (res.ok) {
                console.log();
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