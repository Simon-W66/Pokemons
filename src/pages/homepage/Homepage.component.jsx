import React from 'react'
import { Link } from 'react-router-dom';
import "./Homepage.style.scss"

const Homepage = () => {
    return ( 
        <div className="homepage">
            
            <h1 className="header">Pokemon go!</h1>


            <div className="buttons">
                <button className="button-h"><Link to="/allpokemons"> Click, and see all Pokemons </Link></button>
                <button className="button-h"><Link to="/random"> Click, and see random Pokemon </Link></button>
            </div>
            
        </div>
     );
}
 
export default Homepage;