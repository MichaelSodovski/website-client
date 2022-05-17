import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        debugger;
        fetch("http://localhost:3000", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            return response.json();
        }).then(function (muutuja) {
            document.getElementById('väljund').innerHTML = JSON.stringify(muutuja);
        });
    }, [])

return (
    <div>
        { }
    </div>
);
}