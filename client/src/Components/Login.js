import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Login({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => r.json())
      .then((user) => {
        setCurrentUser(user);
        navigate("/");
        console.log(user);
      });
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <label>
          Username:
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Password:
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Button type="submit">Login</Button>
      </Form>
      <br></br>
      <Link to="/signup" variant="body2">
        Don't have an account? SignUp here
      </Link>
    </Wrapper>
  );
}

export default Login;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
    
`;

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

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
//           onChange={(e) => handleInput(e)}
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
//           onChange={(e) => handleInput(e)}
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
