import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('/userApi/').then(response => {
            if (response.ok) {
                return response;
            }
        }).then(() => {
            console.log(JSON.stringify(response.body.json()));
        })
    }, [])

    return (
        <div>

        </div>
    );
}