import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('/getUSers').then(res => {
            if (res.ok) {
                let user = res.json([body]);
                console.log(JSON.stringify(user));
            }
        })
    }, [])

    return (
        <div>
            { }
        </div>
    );
}