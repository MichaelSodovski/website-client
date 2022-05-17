import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('/getUSers').then(res => {
            if (res.ok) {
                var user = JSON.
                console.log(user)
            }
        })
    }, [])

    return (
        <div>
            { }
        </div>
    );
}