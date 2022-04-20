import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import UserCards from "./UserCards";
import { useState, useEffect } from "react";

function MyBandContainer({ bandList, currentUser, userList, instrumentList }) {
  const [bandName, setBandName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/myband", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bandName, currentUser),
    })
      .then((r) => r.json())
      .then((json) => {
        console.log("Post completed");
        console.log(json);
      });
  }

  let navigate = useNavigate();
  console.log("this is the current user");
  console.log(currentUser);
  if (!currentUser) {
    //redirect to homepage
    navigate("/");
    return null;
  } else if (currentUser.band.length < 1) {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Band Name:
          <input
            type="text"
            name="name"
            value={bandName}
            onChange={(e) => setBandName(e.target.value)}
          />
        </label>
        <input type="submit" value="Create a Band!" />
      </form>
    );
  } else {
    const currentBand = bandList.find(
      (band) => band.id === currentUser.band[0].id
    );
    const playerIds = currentBand.band_players.map((player) => player.user_id);
    const bandPlayers = userList.filter((user) => playerIds.includes(user.id));
    console.log(playerIds);
    console.log(bandPlayers);
    console.log(userList.map((user) => user.id));
    console.log(currentBand);
    const myBandCards = bandPlayers.map((player) => (
      // <MyBandCard key={player.id} player={player} userList={userList} />
      <UserCards
        user={player}
        instrumentList={instrumentList}
        currentUser={currentUser}
      />
    ));
    console.log("user band container");
    return (
      <div>
        <p>{currentBand.band_name}</p>
        <CardContainer>{myBandCards}</CardContainer>;
      </div>
    );
  }
}

export default MyBandContainer;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
