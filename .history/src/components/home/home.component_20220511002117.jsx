import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('/getUSers').then(() => {
            console.log(res.json());
        })
    }, [])

    return (
        <div>
            { }
        </div>
    );
}