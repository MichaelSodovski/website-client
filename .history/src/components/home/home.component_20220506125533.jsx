import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('/userApi/').then(res => {
            if (res.ok) {
                return res;
            }
        }).then(() => {
            console.log(res);
        })
    }, [])

    return (
        <div>

        </div>
    );
}