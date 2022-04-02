import React from 'react';
import Home from "./Home";
import NavBar from "./NavBar";
import UserContainer from"./UserContainer"
import DisciplineContainer from "./DisciplineContainer";
import InstrumentContainer from "./InstrumentContainer";
import { Route , Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import Login from './Login';
import SignUp from './SignUp';

function App() {
  const [userList, setUserList] = useState([]);
  const [disciplineList, setDisciplineList] = useState([]);
  const [instrumentList, setInstrumentList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  

  //Users URL Fetch
  const userUrl = "http://localhost:3000/users";

  useEffect(() => {
    fetch(userUrl)
      .then((resp) => resp.json())
      .then(setUserList);
  }, []);

  //Disciplines URL Fetch
  const disciplineUrl = "http://localhost:3000/disciplines";

  useEffect(() => {
    fetch(disciplineUrl)
      .then((resp) => resp.json())
      .then(setDisciplineList);
  }, []);

  //Instruments URL Fetch
  const instrumentUrl = "http://localhost:3000/instruments";

  useEffect(() => {
    fetch(instrumentUrl)
      .then((resp) => resp.json())
      .then(setInstrumentList);
  }, []);

  return (
    <div>
      <h3>SAMPLIFY 2</h3>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users" element={<UserContainer userList={userList} />} />
        <Route exact path="/disciplines" element={<DisciplineContainer disciplineList={disciplineList} setDisciplineList={setDisciplineList} />}/>
        <Route exact path="/instruments" element={<InstrumentContainer instrumentList = {instrumentList} />}/>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />}/>
      </Routes>
    </div>
  );
};

export default App;