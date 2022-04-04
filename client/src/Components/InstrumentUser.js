import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserInstrumentCard from "./UserInstrumentCard";
// import UserCards from "./UserCards";

function InstrumentUsers() {
  const [thisInstrument, setThisInstrument] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/instruments/${id}`)
      .then((res) => res.json())
      .then((instrument) => {
        setThisInstrument(instrument);
        // console.log(instrument);
      });
  }, [id]);

  console.log(thisInstrument);
  if (thisInstrument.length === 0) {
    return "Loading...";
  }

  const showThisInstrument = thisInstrument.users.map((i) => {
    console.log(i);
    return (
      <div key={i.id}>
        <UserInstrumentCard user={i} instrument={i.instruments} />
      </div>
    );
    // return console.log("WORK!!!");
  });

  //   showThisInstrument();

  return <div>{showThisInstrument}</div>;
}

export default InstrumentUsers;
