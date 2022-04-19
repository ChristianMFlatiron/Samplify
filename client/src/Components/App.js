import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import UserContainer from "./UserContainer";
import InstrumentContainer from "./InstrumentContainer";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import InstrumentUsers from "./InstrumentUser";
import Login from "./Login";
import UserBandContainer from "./UserBandContainer";
import Signup from "./SignUp";

function App() {
  const [userList, setUserList] = useState([]);
  const [instrumentList, setInstrumentList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bandList, setBandList] = useState([]);

  //Users URL Fetch
  //const userUrl = "https://localhost:3000/users";

  useEffect(() => {
    fetch("/users")
      .then((resp) => resp.json())
      .then((users) => setUserList(users));
  }, []);

  //Instruments URL Fetch
  //const instrumentUrl = ;

  useEffect(() => {
    fetch("/instruments")
      .then((resp) => resp.json())
      .then((instruments) => setInstrumentList(instruments));
  }, []);

  //Auto Login
  useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);
  console.log(instrumentList);
  // if (!currentUser) return <Login setCurrentUser={setCurrentUser} />;

  return (
    <div>
      <h3>SAMPLIFY</h3>
      {/* <Banner user={currentUser} /> */}
      <NavBar user={currentUser} />
      <Routes>
        <Route exact path="/" element={<Home user={currentUser} />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route
          path="/userband"
          element={<UserBandContainer bandList={bandList} />}
        />
        <Route path="/users" element={<UserContainer userList={userList} />} />
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/instruments"
          element={<InstrumentContainer instrumentList={instrumentList} />}
        />
        <Route path="/instrumentusers/:id" element={<InstrumentUsers />} />
      </Routes>
    </div>
  );
}

export default App;
