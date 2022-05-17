import React from 'react';
import { useEffect, useEffect } from 'react';

export default function Home() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('/api/').then(res => {
            if(res.ok) {
                return res.json
            }
        })
    }, [])

    return (
        <div>

        </div>
    );
}