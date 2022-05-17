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
            <label>card Typer: </label>
            <input></input>
            <br></br>
            <label>Password: </label>
            <input></input>
            <br></br>
            <label>Email: </label>
            <input></input>
            <br></br>
            <label>Date Of Birth: </label>
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