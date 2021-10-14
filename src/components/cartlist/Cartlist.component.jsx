import React from 'react'
import Card from '../card/Card.component';
import "./cartlist.style.scss"
const CardList = props => {
    //console.log(props)
    
    return ( 
        <div className="card-list">
            {props.pokemons.map((pokemon, index) =>( 
                <Card key={pokemon.name} type={props.type[index]} pokemon={pokemon} />
            ))}
        </div>
     );
}
 
export default CardList;