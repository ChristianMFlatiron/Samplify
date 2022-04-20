import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp({ onLogin, setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [userInstrument, setUserInstrument] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  let navigate = useNavigate();

  const profile_imageUrl =
    "https://thumbs.dreamstime.com/z/heavy-metal-devil-horns-hand-sign-15034009.jpg";

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
        navigate("/users");
      });
    // .then(onLogin);
  }
  const handleChange = (event) => {
    setUserInstrument(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="first_name">First Name:</label>
      <input
        type="text"
        id="first_name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="last_name">Last Name:</label>
      <input
        type="text"
        id="last_name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password_confirmation">Confirm Password:</label>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <label htmlFor="instrument">Instrument:</label>
      <select onChange={handleChange}>
        <option value={7}>Acoustic Guitar</option>
        <option value={8}>Electric Guitar</option>
        <option value={9}>Drums</option>
        <option value={10}>Bass</option>
        <option value={11}>Keyboard</option>
        <option value={12}>Vocals</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUp;

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
