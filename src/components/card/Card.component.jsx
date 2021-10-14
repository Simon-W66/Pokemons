import React from 'react'
import "./card.style.scss"
const Card = props => {
    //console.log(props.pokemon.type.name)
    console.log(props.type.name)
    
    return ( 
        <div className="card-container">
            <a href={`https://www.pokemon.com/us/pokedex/${props.pokemon.name}`}>
                <div className="div-img">
                    <img src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`} alt={props.pokemon.name} />
                </div>
                <div className="name">
                <h2 className="poke-name"><span>Name: </span> {props.pokemon.name[0].toUpperCase()+props.pokemon.name.slice(1)}</h2>
                </div>
                <div className="type">
                    <h4 className="poke-type"><span>Type: </span>  {props.type.name}</h4>
                </div>
                
            </a>
        </div>
     );
}
 
export default Card;