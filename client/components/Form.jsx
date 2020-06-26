import React from 'react'
import Results from './Results'
import StartBattle from "./StartBattle"
import { HashRouter as Router, Route } from "react-router-dom";
import {savePerson} from '../api/index'



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
  savePerson(this.state.name)
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
      <label>
        Trainer Name:
        <input type="text" name="name" onChange={this.handleChange}/>
      </label>

      <label>
        Pokemon Name:
        <input type="text" name="pokemonName" onChange={this.handleChange}/>
      </label>

      <input type="submit" value="Select apponent" />
    </form>
    <Route exact path="/" component={StartBattle} />
    </Router>
  )
}
}

export default Form
