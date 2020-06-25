import React from 'react'
import Form from './Form'

class App extends React.Component {

  state = {
    name: '',
    pokemonName: ''
  }

setName = (name, pokemonName) => {
  this.setState({name: name, pokemonName: pokemonName})
}

componentDidUpdate() {
  console.log(this.state);
}

  render() {
    return (
      <>
      <h1>Pokemon</h1>
      <Form setName={this.setName}/>
      </>
    )
  }
  }

export default App
