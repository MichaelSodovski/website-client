import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('/getUSers').then(res => {
            if (res.ok) {
                let response = res.json();
            }
        }).then(response => {
            for (const user of response.) {
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