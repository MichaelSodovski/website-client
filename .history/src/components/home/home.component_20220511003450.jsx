import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('/getUSers').then(response => response.json())
            .then(data => {
                
            });
    }, [])

    return (
        <div>
            { }
        </div>
    );
}