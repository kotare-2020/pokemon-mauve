import React from 'react'
import Results from './Results'


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
    // <Resutls/>
    <form onSubmit={this.handleSubmit}>
      <label>
        Trainer Name:
        <input type="text" name="name" onChange={this.handleChange}/>
      </label>

      <label>
        Pokemon Name:
        <input type="text" name="pokemonName" onChange={this.handleChange}/>
      </label>

      <input type="submit" value="Save" />
    </form>
  )
}
}

export default Form
