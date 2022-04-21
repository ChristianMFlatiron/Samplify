import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function SignUp({ onLogin, setCurrentUser, userList, setUserList }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [userInstrument, setUserInstrument] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  let navigate = useNavigate();

  const profile_imageUrl =
    "https://static8.depositphotos.com/1448232/921/v/950/depositphotos_9210265-stock-illustration-rock-on.jpg";

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      password,
      profile_imageUrl,
      first_name: firstName,
      last_name: lastName,
      instrument_id: userInstrument,
    };
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((r) => r.json())
      .then((user) => {
        setCurrentUser(user);
        if (!userList.includes(user)) setUserList([...userList, user]);
        navigate("/users");
      });
    // .then(onLogin);
  }
  const handleChange = (event) => {
    setUserInstrument(event.target.value);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="first_name">First Name:</label>
        <Input
          type="text"
          id="first_name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="last_name">Last Name:</label>
        <Input
          type="text"
          id="last_name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password_confirmation">Confirm Password:</label>
        <Input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <label htmlFor="instrument">Instrument:</label>
        <select onChange={handleChange}>
          <option value={1}>Acoustic Guitar</option>
          <option value={2}>Electric Guitar</option>
          <option value={3}>Drums</option>
          <option value={4}>Bass</option>
          <option value={5}>Keyboard</option>
          <option value={6}>Vocals</option>
        </select>
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
}

export default SignUp;

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

// Then Statement Old rework?
//.then((r) => r.json().then(setCurrentUser))

//Old code:
// const userUrl = "http://localhost:3001/users";

// const Signup = ({ setCurrentUser }) => {
//   // controlled form for user details
//   const [userForm, setUserForm] = useState({
//     username: "",
//     password: "",
//     confirm: "",
//   });
//   const handleChange = (e) => {
//     setUserForm({ ...userForm, [e.target.name]: e.target.value });
//   };
//   // errors for when username or password are not correct
//   const [errors, setErrors] = useState([]);

//   // Pass reference to useHistory hook
//   const history = useHistory();

//   // sends user signup info to back end and handles validation errors
//   const sendAuthInfo = () => {
//     const config = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         username: userForm.username,
//         password: userForm.password,
//       }),
//     };
//     fetch(userUrl, config)
//       .then((r) => r.json())
//       .then((data) => {
//         if (data.error) {
//           // console.log(data)
//           const newErrors = [];
//           data.error.forEach((error) => newErrors.push(error));
//           setErrors(newErrors);
//         } else {
//           // console.log(data.user)
//           setCurrentUser(data.user);
//           localStorage.setItem("jwt", data.jwt);
//           history.replace("/user");
//         }
//       });
//   };

//   // checks for errors on the front end
//   const frontendErrorCheck = () => {
//     const newErrors = [];
//     if (userForm.password !== userForm.confirm) {
//       newErrors.push(
//         "The password you have entered does not match the password confirmation"
//       );
//     }
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).+$/;
//     if (!passwordRegex.test(userForm.password)) {
//       newErrors.push(
//         "Passwords must include a capital letter, a lowercase letter and a number."
//       );
//     }
//     setErrors(newErrors);
//     //returns true for 0 errors
//     return !newErrors.length;
//   };

//   // checks for errors on frontend, then sends info to back end
//   const handleSignup = (e) => {
//     e.preventDefault();
//     const errorCheck = frontendErrorCheck();
//     if (errorCheck) {
//       sendAuthInfo();
//     }
//   };

//   return (
//     <div className="flex-container">
//       <h2>Sign Up</h2>
//       <form onSubmit={(e) => handleSignup(e)}>
//         <label htmlFor="username">Create a username</label>
//         <input
//           onChange={(e) => handleChange(e)}
//           value={userForm.username}
//           id="username"
//           name="username"
//           className="input-text"
//           required
//         />
//         <label htmlFor="password">Create a password</label>
//         <input
//           onChange={(e) => handleChange(e)}
//           value={userForm.password}
//           id="password"
//           name="password"
//           type="password"
//           className="input-text"
//           required
//         />
//         <label htmlFor="confirm">Confirm your password</label>
//         <input
//           onChange={(e) => handleChange(e)}
//           value={userForm.confirm}
//           id="confirm"
//           name="confirm"
//           type="password"
//           className="input-text"
//           required
//         />
//         <button className="btn" type="submit">
//           Create account
//         </button>
//         {errors.length ? (
//           <div className="error-container">
//             <h2>{errors.length > 1 ? "Errors" : "Error"}</h2>
//             <ul>
//               {errors.map((error, idx) => {
//                 return <li key={idx}>{error}</li>;
//               })}
//             </ul>
//           </div>
//         ) : null}
//         <p>Already have an account?</p>
//         <Link to="/login" className="btn link">
//           Login
//         </Link>
//       </form>
//     </div>
//   );
// };
