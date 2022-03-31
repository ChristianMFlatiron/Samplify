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
    <li><NavLink to ="/login">Login</NavLink></li>
    <li><NavLink to ="/">Home</NavLink></li>
    <li><NavLink to ="/users">Users</NavLink></li>
    <li><NavLink to ="/disciplines">Disciplines</NavLink></li>
    <li><NavLink to ="/instruments">Instruments</NavLink></li>
    <li><NavLink to ="/signup">Sign Up</NavLink></li>
    <br></br>
    </MenuBar>)

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

`