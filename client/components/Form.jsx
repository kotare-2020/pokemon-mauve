import React from 'react'
import Results from './Results'
import StartBattle from "./StartBattle"
import ResultButton from "./ResultsButton"
import { HashRouter as Router, Route } from "react-router-dom";


class Form extends React.Component {
  state = {
    name: '',
    pokemonName: '',
    aiPokemon: ''
  }

componentDidMount() {
  this.setState ({
    aiPokemon: this.pokemonPicker(1, 150)
  })
}

handleSubmit = event => {
  event.preventDefault()

  this.props.setName(this.state.name, this.state.pokemonName, this.state.aiPokemon)
}

handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value,
  })
}

 pokemonPicker = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

render() {
  return (
    <Router>
    <form onSubmit={this.handleSubmit}>
    <div className="form">
      <img class="oak" src="./images/Lets_Go_Pikachu_Eevee_Professor_Oak.png" alt=""/>
      <div className="trainerForm">
        <label>
          Trainer Name:
          <input type="text" className="trainerForm" name="name" onChange={this.handleChange}/>
        </label>
      </div>

      <div className="pokemonForm">
        <label>
          Pokemon Name / Number:
          <input type="text" className="pokemonForm" name="pokemonName" onChange={this.handleChange}/>
        </label>
      </div>
      <input className="generateApponent" type="submit" value="Generate apponent" />
    <Route exact path="/" component={StartBattle} />
    </div>

    </form>
    <ResultButton/>
    </Router>
  )
}
}

export default Form
