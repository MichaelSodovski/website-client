import axios from 'axios';

// export async function submitFormSignIn() {
//     debugger;
//     Event.preventDefault();
//     var bodyFormData = new FormData();
//     bodyFormData.append('userName', "sd");
//     bodyFormData.append('passWord', "sdf");
//     axios({
//         method: "POST",
//         url: "http://localhost:3100/login",
//         data: bodyFormData,
//         headers: { "Content-Type": "multipart/form-data" },
//     }).then(function (response) {
//         console.log(response);
//     }).catch(function (response) {
//         console.log(response);
//     });
// }

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

export async function storeExpense(expenseData) {

    const response = await axios.post('/api/expenses/store/', expenseData).catch(function (error) {
        if (error.response) {
            return error.response.data;

        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
    });
    return response;
}