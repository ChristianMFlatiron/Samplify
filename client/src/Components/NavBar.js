import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';


function NavBar () {
    // function handleLogout() {
    //     fetch("/logout", {
    //       method: "DELETE",
    //     }).then(() => onLogout());
    //   }
    // function onLogout() {
    //     setUser(null);
    //   }
  return (
    <MenuBar>
   <li><NavLink to ="/">Home</NavLink></li>
    <li><NavLink to ="/users">Users</NavLink></li>
    <li><NavLink to ="/disciplines">Disciplines</NavLink></li>
    <li><NavLink to ="/instruments">Instruments</NavLink></li>
    <li><NavLink to ="/signup">Sign Up</NavLink></li>
    <li><NavLink to ="/login">Login</NavLink></li>
    </MenuBar>)

}

export default NavBar;

const MenuBar = styled.ul`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;