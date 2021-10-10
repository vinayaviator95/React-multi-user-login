import React from "react";
import { users } from "./api/UserList";
import "./CSS/style.css";

const Form = ({ loginUser }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const authenticate = (e) => {
    e.preventDefault();
    let loggedUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (loggedUser) {
      loginUser(loggedUser);
    } else {
      setEmail("");
      setPassword("");
      setErrorMsg("Invalid email/password");
    }
  };
  const handleEmailChange = (e) => {
    let emailValue = e.target.value;
    if (!validEmailRegex.test(emailValue)) {
      setEmailError("Provide a valid email");
    } else {
      setEmailError("");
    }
    // console.log(validEmailRegex.test(emailValue), "message");
    setEmail(emailValue);
  };
  const handlePasswordChange = (e) => {
    let passwordValue = e.target.value;
    if (
      !(validPasswordRegex.test(passwordValue) && passwordValue.length >= 8)
    ) {
      setPasswordError(
        "Your Password should be greater then 8 and must contain any of these [@,!,$]"
      );
    } else {
      setPasswordError("");
    }
    setPassword(passwordValue);
    console.log(
      validPasswordRegex.test(passwordValue),
      passwordValue.length,
      passwordValue,
      validPasswordRegex.test(passwordValue) && passwordValue.length >= 8,
      passwordValue.length >= 8,
      "message"
    );
  };
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validPasswordRegex = RegExp(/[@,!,$]/i);

  return (
    <div>
      <form onSubmit={authenticate} className="form-main">
        <div>
          <div>
            <label htmlFor="username">Email</label>
          </div>
          <div>
            <input
              type="email"
              name="username"
              id="username"
              required
              value={email}
              onChange={handleEmailChange}
              //
            />
          </div>
        </div>
        {emailError ? <div className="error-div">{emailError}</div> : null}
        <div>
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              minLength="8"
              // pattern="/[@,!,$]/i"
              required
              // onChange={(e) => setPassword(e.target.value)}
              onChange={handlePasswordChange}
            />
          </div>
        </div>

        {passwordError ? (
          <div className="error-div">{passwordError}</div>
        ) : null}

        <br />
        <button className="login-btn" type="submit">Login</button>
        {errorMsg ? <div className="error-div">{errorMsg}</div> : null}
      </form>
    </div>
  );
};

export default Form;
