import styled from "styled-components";
//import { useNavigate } from "react-router-dom";

function UserCards({
  user: { id, profile_imageUrl, username, first_name, last_name },
}) {
  // let history = useNavigate();
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   history.push(`/users/${id}`);
  // };

  return (
    <Cards>
      <h1>{username}</h1>
      <img src={profile_imageUrl} alt={username} />
      <h2>
        Name: {first_name} {last_name}
      </h2>
      <button>Invite to Gig</button>
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

    img{
      float: left;
      width:  300px;
      height: 300px;
      object-fit: cover;
      padding-bottom: 1em;
    }

`;
