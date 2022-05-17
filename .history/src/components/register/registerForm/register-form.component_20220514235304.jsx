import '../registerForm'

export default function Form() {

    return (
        <div>
            <form className="register-form-container" action="/adduser" method="POST">
                <label>First Name: </label>
                <input type="text" name="firstName" required></input>
                <label>Last Name: </label>
                <input type="text" name="lastName" required></input>
                <label>User Name: </label>
                <input type="text" name="userName" required></input>
                <label>Password: </label>
                <input type="password" name="passWord" required autoComplete="on"></input>
                <label>Email: </label>
                <input type="email" name="email" required></input>
                <label>Date Of Birth: </label>
                <input type="date" name="birthDate" required></input>
                <label>Gender: </label>
                <select name="gender">
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                </select>
                <br></br>
                <input type="submit" value="Submit" ></input>
            </form>
        </div>
    );
}

