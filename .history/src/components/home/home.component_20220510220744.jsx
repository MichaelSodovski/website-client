import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        debugger;
        fetch('http://localhost:3306/home').then(res => {
            if (res.ok) {
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