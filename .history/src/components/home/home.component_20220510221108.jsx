import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        debugger;
        var myVar = {"id" : 1};
        fetch("http://localhost:3000", {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            body: JSON.stringify(myVar)
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