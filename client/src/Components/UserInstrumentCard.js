import React from "react";
import styled from "styled-components";

function UserInstrumentCard({
  user,
  user: { profile_imageUrl, username, first_name, last_name, instrument_name },
}) {
  console.log(user.profile_imageUrl);
  return (
    <Cards>
      <br></br>
      <h2>Stage name: {username}</h2>
      <br></br>
      <img src={profile_imageUrl} alt={username} />
      <h2>
        Name: {first_name} {last_name}
      </h2>
      {/* <p>Plays {instrument_name}</p> */}
      <button>Invite to Gig</button>
    </Cards>
  );
}

export default UserInstrumentCard;

const Cards = styled.div`
    margin 5rem;
    width: 150px;
    height: 50%;
    text-align: auto;
    padding-right: 3em;
    font-family: 'Special Elite', cursive;
    padding-right: 8em;
    


    img{
      float: left;
      width:  300px;
      height: 300px;
      object-fit: cover;
      padding-bottom: 1em;
    }
    

`;
