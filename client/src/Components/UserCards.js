import styled from "styled-components";
//import { useNavigate } from "react-router-dom";

function UserCards({
  user,
  user: { id, profile_imageUrl, username, first_name, last_name, instruments },
}) {
  return (
    <Cards>
      <h4>Stage name: {username}</h4>
      <img src={profile_imageUrl} alt={username} />
      <h2>
        Name: {first_name} {last_name}
      </h2>
      {/* <p>{instruments[0].instrument_name}</p> */}
      <button onClick={() => alert("User Invited to Gig!")}>
        Invite to Gig
      </button>
    </Cards>
  );
}

export default UserCards;

const Cards = styled.div`
    margin 5rem;
    width: 150px;
    height: 50%;
    text-align: auto;
    padding-right: 3em;
    font-family: 'Special Elite', cursive;
    padding-right: 8em;
    background-color: grey;

    img{
      float: center;
      width:  250px;
      height: 250px;
      object-fit: cover;
      padding-bottom: 1em;
    }

`;

//Old Code just in case
// }) {
//   // let history = useNavigate();
//   // const handleClick = (e) => {
//   //   e.preventDefault();
//   //   history.push(`/users/${id}`);
//   // };
//   // console.log(instruments[0]);
//   return (
