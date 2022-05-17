import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('/getUSers').then(response => {
            for (const user of response.type.) {
                console.log(user);
            }
        })
    }, [])

    return (
        <div>
            { }
        </div>
    );
}