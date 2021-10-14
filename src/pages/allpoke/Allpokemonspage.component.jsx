import React,{Component} from 'react'
import CardList from '../../components/cartlist/Cartlist.component';
import SearchBox from '../../components/searchbox/searchbox.component';

class AllPokemonPage extends Component {
    constructor(){
        super();

        this.state = {
            pokemons: [],
            type:[],
            search: '',
        };
    }

    componentDidMount(){
        fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
        .then(response => response.json())
        .then(name => this.setState({pokemons: name.results}))

        fetch("https://pokeapi.co/api/v2/type")
        .then(response => response.json())
        .then(type => this.setState({type: type.results})) 
    }
    
    handleChange=(e) => {
        this.setState({search: e.target.value}); 
    }
    
    
    render(){
    const {pokemons, search} = this.state;
    const types = this.state.type
    const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))
        console.log(this.state.type[1])
        if(this.state.type.length === 0){
        return <div>loadings</div>
        }
        return( 
            <div>
                <SearchBox placeholder="Search Pokemon" handleChange={this.handleChange} />
               <CardList type={types} pokemons={filteredPokemons} /> 
            </div>)
    }
}
 
export default AllPokemonPage;
