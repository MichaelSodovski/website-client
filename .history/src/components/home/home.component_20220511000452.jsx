import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        debugger;
        fetch('/getUSers').then(res => {
            if (res.ok) {
                console.log(res.body)
            }
        })
    }, [])

    return (
        <div>
            { }
        </div>
    );
}