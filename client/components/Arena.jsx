import React from 'react'
import request from 'superagent'
import ResultButton from "./ResultsButton"
// import HomeButton from "./HomeButton"
import { HashRouter as Router, Route } from 'react-router-dom'


class Arena extends React.Component {
  state = {
    userSprite: '',
    userPokemonName: this.props.pokemonName,
    // aiSprite: this.props.pokemonValues,
    aiPokemonName: this.props.aiPokemon,
  }

  componentDidMount() {
    this.getMyPokemon()
    this.getMyPokemonName()
    this.getAiPokemon()
    this.getAiPokemonName()
  }

  // handleClick = () => {
  //   this.getMyQuote()
  // }

  getMyPokemon = () => {
    // take input from form and put at end of URL
    request.get(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}/`)
      .then(res => {
        this.setState({
          userSprite: res.body.sprites.back_default,
        })
      })
  }

  getMyPokemonName = () => {
    // take input from form and put at end of URL
    request.get(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}/`)
      .then(res => {
        this.setState({
          userPokemonName: res.body.name,
        })
      })
  }

  getAiPokemon = () => {
    // randomPokemonFunction outputs number to end of URL
    request.get(`https://pokeapi.co/api/v2/pokemon/${this.state.aiPokemonName}/`)
      .then(res => {
        this.setState({
          aiSprite: res.body.sprites.front_default
        })
      })
  }

  getAiPokemonName = () => {
    // take input from form and put at end of URL
    request.get(`https://pokeapi.co/api/v2/pokemon/${this.state.aiPokemonName}/`)
      .then(res => {
        this.setState({
          aiPokemonName: res.body.name,
        })
      })
  }

  render() {
    return (
      <React.Fragment>
      <div>
        <h1>This is the arena for fighting pokemon</h1>
        <div className='userPokemon'>
          <img className='userPokemonSprite' src={this.state.userSprite} alt="userSprite"/>
          <p>{this.state.userPokemonName}</p>
        </div>
        <div classname='aiPokemon'>
          <img className='aiPokemonSprite' src={this.state.aiSprite} alt="aiSprite"/>
          <p>{this.state.aiPokemonName}</p>
        </div>
      </div>
      </React.Fragment>
    )
  }
}



export default Arena
