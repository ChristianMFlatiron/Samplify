import React from 'react';
import Home from "./Home";
import NavBar from "./NavBar";
import UserContainer from"./UserContainer"
import InstrumentContainer from "./InstrumentContainer";
import { Route , Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import InstrumentUsers from './InstrumentUser';

function App() {
  const [userList, setUserList] = useState([]);
  const [instrumentList, setInstrumentList] = useState([]);


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

  return (
    <div>
      <h3>SAMPLIFY</h3>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users" element={<UserContainer userList={userList} />} />
        <Route exact path="/instruments" element={<InstrumentContainer instrumentList = {instrumentList} />}/>
        <Route exact path="/instrumentusers/:id" element={<InstrumentUsers />} />
      </Routes>
    </div>
  );
};

export default App;