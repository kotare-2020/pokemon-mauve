import React from 'react'
import request from 'superagent'


class Arena extends React.Component {
  state = {
    userSprite: '',
    aiSprite: '',
  }

  componentDidMount() {
    this.getMyPokemon()
    this.getAiPokemon()
  }

  // handleClick = () => {
  //   this.getMyQuote()
  // }

  getMyPokemon = () => {
    // take input from form and put at end of URL
    request.get('https://pokeapi.co/api/v2/pokemon/1/')
      .then(res => {
        this.setState({
          userSprite: res.body.sprites.back_default,
        })
      })
  }

  getAiPokemon = () => {
    // randomPokemonFunction outputs number to end of URL
    request.get('https://pokeapi.co/api/v2/pokemon/1/')
      .then(res => {
        this.setState({
          aiSprite: res.body.sprites.front_default
        })
      })
  }

  render() {
    return (
      <>
      <div>
        <h1>This is the arena for fighting pokemon</h1>
        <img src={this.state.userSprite} alt="userSprite"/>
        <img src={this.state.aiSprite} alt="aiSprite"/>
      </div>
      </>
    )
  }
}



export default Arena
