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
        <NavLink to="/Instruments">Instruments</NavLink>
      </li>
      <li>
        <NavLink to="/Login">Login</NavLink>
      </li>
      <li>
        <button onClick={handleLogout}>Logout</button>
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
