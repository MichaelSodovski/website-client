import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('/getUSers').then(res => {
            if (res.ok) {
                let response = res.json([body]);
            }
        }).then( => {
            for (const user of data.products) {
              let listItem = 
            }
        }
    }, [])

    return (
        <div>
            { }
        </div>
    );
}