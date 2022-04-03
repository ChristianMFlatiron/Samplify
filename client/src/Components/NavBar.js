import { NavLink } from 'react-router-dom';


function NavBar () {
    return (
        <ul>
           <li><NavLink to ="/">Home</NavLink></li>
           <li><NavLink to ="/users">Users</NavLink></li>
           <li><NavLink to ="/Instruments">Instruments</NavLink></li>
           

        </ul>
    )
}

export default NavBar
