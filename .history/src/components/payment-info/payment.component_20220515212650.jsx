import React from 'react';
import '../payment-info/payment.component.css' 

export default function Payment() {

    

    return (
        <React.Fragment className="register-form-container">
<label>Name on card: </label>
            <input></input>
            <br></br>
            <label>Card Number: </label>
            <input></input>
            <br></br>
            <label>card Type: </label>
            <input></input>
            <br></br>
            <label>CSC: </label>
            <input></input>
            <br></br>
            <label>Exp month: </label>
            <input></input>
            <br></br>
            <label>Exp year: </label>
            <input></input>
            <br></br>
            <label>billing address: </label>
            <input></input>
            <br></br>
            <button>Submit</button>
        </React.Fragment>

            

    );
}