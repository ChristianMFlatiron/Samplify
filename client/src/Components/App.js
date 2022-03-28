import Home from "./Home";
import NavBar from "./Navbar";
import UserContainer from"./UserContainer"
import DisciplineContainer from "./DisciplineContainer";
import InstrumentContainer from "./InstrumentContainer";
import { Routes ,Route } from 'react-router-dom';
import { useState, useEffect } from "react";

function App() {
  const [userContainer, setUserContainer] = useState([]);
  const [disciplineContainer, setDisciplineContainer] = useState([]);
  const [instrumentContainer, setInstrumentContainer] = useState([])


  //Users URL Fetch
  let userUrl = "http://localhost:3000/users";

  useEffect(() => {
    fetch(userUrl)
      .then((resp) => resp.json())
      .then(setUserContainer);
  }, []);

  //Disciplines URL Fetch
  let disciplineUrl = "http://localhost:3000/disciplines";

  useEffect(() => {
    fetch(disciplineUrl)
      .then((resp) => resp.json())
      .then(setDisciplineContainer);
  }, []);

  //Instruments URL Fetch
  let instrumentUrl = "http://localhost:3000/instruments";

  useEffect(() => {
    fetch(instrumentUrl)
      .then((resp) => resp.json())
      .then(setInstrumentContainer);
  }, []);

  return (
    <div>
      <NavBar />
      <Route>
        <Routes exact path="/">
          <Home />
        </Routes>
        <Routes exact path="/users">
          <UserContainer userContainer={userContainer} />
        </Routes>
        <Routes exact path="/disciplines">
          <DisciplineContainer disciplineContainer={disciplineContainer} setDisciplineContainer={setDisciplineContainer}/>
        </Routes>
        <Routes exact path="/instruments">
          <InstrumentContainer instrumentContainer = {instrumentContainer} />
        </Routes>
      </Route>
    </div>
  );
};

export default App;