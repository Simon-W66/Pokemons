import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.style.scss"



const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
            </div>
            <div className="alllinks">
                <div className="item-link">
                    <li>
                        <Link to="/">Homepage</Link>
                    </li>
                </div>
                <div className="item-link">
                    <li>
                        <Link to="/random">Random Pokemon</Link>
                    </li>
                </div>
                <div className="item-link">
                    <li>
                        <Link to="/allpokemons">All Pokemons</Link>
                    </li>
                </div>
            </div>
            
        </div>
     );
}
 
export default Navbar;