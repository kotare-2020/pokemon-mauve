import React from 'react'
import Form from './Form'
import Arena from './Arena'
import CombatSystem from './CombatSystem'

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

// get random enemy function:
// This should be done after form page, ya?
// For arena:
// get ai data: name, front-sprite,

  render() {
    return (
      <>
      <h1>Pokemon</h1>
      <Form setName={this.setName}/>
      <Arena/>
      <CombatSystem/>
      </>
    )
  }
  }

export default App
