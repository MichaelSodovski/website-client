import React from 'react';
import '../payment-info/payment.component.css' 

export default function Payment() {


    return (
        <div className="payment-form-container">
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
            <label>exp yeAR: </label>
            <input></input>
            <br></br>
            <label>Gender: </label>
            <input></input>
            <br></br>
            <label>Image: </label>
            <input></input>
            <br></br>
            <button>Submit</button>
        </div >
    );
}