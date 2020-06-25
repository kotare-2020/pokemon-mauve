import React from "react";
import Form from "./Form";
import Arena from "./Arena";
import CombatSystem from "./CombatSystem";
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

  // get random enemy function:
  // This should be done after form page, ya?
  // For arena:
  // get ai data: name, front-sprite,

  render() {
    return (
      <Router>
        <Route path="/" component={ResultsButton} />
        <Route path="/" component={HomeButton} />
        <h1>Pokemon</h1>
        <Route exact path="/" component={() => <Form setName={this.setName} />} />
        <Route exact path="/arena" component={Arena} />
        <Route exact path="/arena" component={CombatSystem} />
        <Route exact path="/results" component={Results} />
      </Router>
    );
  }
}

export default App;
