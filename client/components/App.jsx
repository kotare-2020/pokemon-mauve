import React from "react";
import Form from "./Form";
import Arena from "./Arena";
import { HashRouter as Router, Route } from "react-router-dom";
import Results from "./Results";
import ResultsButton from "./ResultsButton"
import HomeButton from "./HomeButton"
import StartBattle from "./StartBattle"

class App extends React.Component {
  state = {
    name: "",
    pokemonName: "",
    aiPokemon: "",
  };

  setName = (name, pokemonName, aiPokemon) => {
    this.setState({
      name: name,
      pokemonName: pokemonName,
      aiPokemon: aiPokemon,
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <Router>
        {/* <Route path="/" component={ResultsButton} /> */}
        {/* <Route path="/" component={HomeButton} /> */}
       
        <Route exact path="/" component={() => <Form setName={this.setName} />} />
        <Route exact path="/arena" component={() => <Arena pokemonName={this.state.pokemonName} aiPokemon={this.state.aiPokemon} /> } />
        <Route exact path="/results" component={Results} />
      </Router>
    );
  }
}

export default App;
