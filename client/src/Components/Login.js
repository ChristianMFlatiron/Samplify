import React, { useState } from "react";
//import { Link, useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((r) => r.json())
      .then((user) => user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br></br>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
// const URL = "http://localhost:3000/";

// const Login = ({ setBorrowsAndHistory, setCurrentUser }) => {
//   // controlled form for user details
//   const [userForm, setuserForm] = useState({ username: "", password: "" });
//   const handleInupt = (e) => {
//     setuserForm({ ...userForm, [e.target.name]: e.target.value });
//   };
//   // errors for when username or password are not correct
//   const [errors, setErrors] = useState([]);

//   // Pass reference to useHistory hook
//   const history = useHistory();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleLogin(userForm);
//   };

//   const handleLogin = (userObj) => {
//     const configObj = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userObj),
//     };
//     fetch(URL + "login", configObj)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.error) {
//           // console.log(data.error)
//           setErrors([data.error]);
//         } else {
//           // console.log(data)
//           localStorage.setItem("jwt", data.jwt);
//           setCurrentUser(data.user);
//           setBorrowsAndHistory(data.user.borrows);
//           history.push("/user");
//         }
//       });
//   };

//   const renderErrors = (regex) => {
//     if (errors) {
//       const errorRegex = new RegExp(regex);
//       const errMessage = errors.find((error) => errorRegex.test(error));
//       if (errMessage) {
//         return <span className="error">{errMessage}</span>;
//       }
//     }
//     return null;
//   };

//   return (
//     <div className="flex-container">
//       <h2>Sign In:</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           placeholder="Enter your username..."
//           className="input-text"
//           onChange={(e) => handleInupt(e)}
//           value={userForm.username}
//         />
//         {renderErrors("username")}
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           placeholder="Enter your password..."
//           className="input-text"
//           onChange={(e) => handleInupt(e)}
//           value={userForm.password}
//         />
//         {renderErrors("password")}
//         <input className="btn" type="submit" name="submit" value="Login" />
//         <p>Don't have an account?</p>
//         <Link to="/signup" className="btn link">
//           Sign up
//         </Link>
//       </form>
//     </div>
//   );
// };

export default Login;
