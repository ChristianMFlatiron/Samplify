import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import UserCards from "./UserCards";
import { useState, useEffect } from "react";

function MyBandContainer({
  setCurrentUser,
  setBandList,
  bandList = [],
  currentUser,
  userList,
  instrumentList,
}) {
  const [bandName, setBandName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newBand = {
      user_id: currentUser.id,
      band_name: bandName,
    };
    fetch("/myband", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBand),
    })
      .then((r) => r.json())
      .then((json) => {
        console.log("Post completed");
        console.log(json);
        setBandList([...bandList, json]);
      });
  }

  let navigate = useNavigate();
  console.log("this is the current user");
  console.log(currentUser);
  if (currentUser.band.length > 0) {
    console.log(bandList);
    const currentBand = bandList?.find(
      (band) => band.id === currentUser.band[0].id
    );
    console.log("this is the current band");
    console.log(currentBand);
    const playerIds = currentBand?.band_players.map((player) => player.user_id);
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
        <h1>Your Band Name: {currentBand.band_name}</h1>
        <CardContainer>{myBandCards}</CardContainer>;
      </div>
    );
  } else if (currentUser) {
    return (
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <label>
            Band Name:
            <Input
              type="text"
              name="name"
              value={bandName}
              onChange={(e) => setBandName(e.target.value)}
            />
          </label>
          <Button type="submit">Create a Band!</Button>
        </Form>
      </Wrapper>
    );
  } else {
    //redirect to homepage
    navigate("/");
    return null;
  }
}

export default MyBandContainer;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

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
