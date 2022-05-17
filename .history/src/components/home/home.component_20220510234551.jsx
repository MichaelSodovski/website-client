import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        debugger;
        fetch('http://localhost:3100/getUSers', headers {
            "Access-Control-Allow-Origin": "*"
        }).then(res => {
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