import React from "react";
import styled from "styled-components";

function UserInstrumentCard({ user, user: { profile_imageUrl, username } }) {
  console.log(user.profile_imageUrl);
  return (
    <Cards>
      <img src={profile_imageUrl} alt={username} />
      <br />
      <h1>{username}</h1>
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
