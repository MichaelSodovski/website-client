import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        debugger;
        fetch('/users').then(res => {
            if (res.ok) {
                debugger;
                console.log("ok")
            }
        })
    }, [])

    return (
        <div>
            { }
        </div>
    );
}