import styled from "styled-components";
//import { useNavigate } from "react-router-dom";


function UserCards({ user: { id, profile_imageUrl, username, first_name, last_name, userdescription} }) {

  // let history = useNavigate();
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   history.push(`/users/${id}`);
  // };
  function sayInvited() {
    alert('User has been Invited to your Band!');
  }
  
  
  return (
    <Cards>
      <img src={profile_imageUrl} alt={username} />
      <h1>{username}</h1>
      <h2>{first_name} {last_name}</h2>
      <p>{userdescription}</p>
      <Button onClick={sayInvited}>INVITE TO GIG</Button>
    </Cards>
  );
}


export default UserCards;

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;


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