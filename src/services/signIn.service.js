import axios from 'axios';

export function submitFormSignIn(userName, passWord) {
    var bodyFormData = new FormData();
    bodyFormData.append('userName', userName);
    bodyFormData.append('passWord', passWord);
    axios({
        method: "POST",
        url: "http://localhost:3100/login",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    }).then(function (response) {
        console.log(response);
    }).catch(function (response) {
        console.log(response);
    });
}

export async function sendRequestHandler(userName, passWord) {
    var bodyFormData = new FormData();
    bodyFormData.append('userName', userName);
    bodyFormData.append('passWord', passWord);
    await fetch('http://localhost:3100/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "http://localhost:3100"
        },
        body: JSON.stringify(bodyFormData),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

