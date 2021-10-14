import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from './components/navbar/Navbar.component';

//pages importing
import Homepage from './pages/homepage/Homepage.component';
import Randompage from './pages/random/Randompage.component';
import AllPokemonPage from './pages/allpoke/Allpokemonspage.component';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/random" component={Randompage} />
        <Route path="/allpokemons" component={AllPokemonPage} />
      </Switch>
    </Router>
  );
}

export default App;
