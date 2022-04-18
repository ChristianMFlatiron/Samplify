import { NavLink } from "react-router-dom";
import styled from "styled-components";

function NavBar({ onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }
  return (
    <MenuBar>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
      <li>
        <NavLink to="/signup">SignUp</NavLink>
      </li>
      <li>
        <NavLink to="/Instruments">Instruments</NavLink>
      </li>
      <li>
        <NavLink to="/Login">Login</NavLink>
      </li>
      <li>
        <Button onClick={handleLogout}>Logout</Button>
      </li>
    </MenuBar>
  );
}

export default NavBar;

const MenuBar = styled.ul`
   padding: 3%;
   display:flex;
   justify-content:space-around;
   font-family: 'Special Elite', cursive;
   
   li{
       list-style: none;

       a {
        color:black;
        text-decoration: none;
        font-size: 28px;
        border: 2px solid black;
        padding: 7px;
        
    } 

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
