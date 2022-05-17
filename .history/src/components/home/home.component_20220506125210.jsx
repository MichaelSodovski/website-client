import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('/userApi/').then(response => {
            if (response.ok) {
                return res;
            }
        }).then(() => {
            console.log(JSON.stringify(res.body.json()));
        })
    }, [])

    return (
        <div>

        </div>
    );
}