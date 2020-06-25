import React from 'react'

class Form extends React.Component {
  state = {
    name: '',
    pokemonName: ''
  }

handleSubmit = event => {
  event.preventDefault()

  this.props.setName(this.state.name, this.state.pokemonName)
}

handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value,
    [event.target.pokemonName]: event.target.value
  })
}


render() {
  return (
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
