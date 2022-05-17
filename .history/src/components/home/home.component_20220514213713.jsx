import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [usersArr, setUsersArr] = useState([]);

    useEffect(() => {
        fetch('/getUSers').then(response => response.json())
            .then(users => {
                
                setInitialState(users[0].user_name);
            });
    }, [])

    return (
        <div>
            {initialState}
        </div>
    );
}