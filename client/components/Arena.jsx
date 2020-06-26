import React from 'react'
import request from 'superagent'
import HealthDisplay from './HealthDisplay'
import CombatSystem from './CombatSystem'
// import HomeButton from "./HomeButton"


class Arena extends React.Component {
  state = {
    userSprite: '',
    userPokemonName: '',
    aiSprite: '',
    aiPokemonName: '',
    hitpoints: {
      userHP: 100,
      aiHP: 100
    },
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
    request.get('https://pokeapi.co/api/v2/pokemon/1/')
      .then(res => {
        this.setState({
          userSprite: res.body.sprites.back_default,
        })
      })
  }

  getMyPokemonName = () => {
    // take input from form and put at end of URL
    request.get('https://pokeapi.co/api/v2/pokemon/1/')
      .then(res => {
        this.setState({
          userPokemonName: res.body.name,
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

  getAiPokemonName = () => {
    // take input from form and put at end of URL
    request.get('https://pokeapi.co/api/v2/pokemon/1/')
      .then(res => {
        this.setState({
          aiPokemonName: res.body.name,
        })
      })
  }

  getHitPoints = (userHPFromCombatSystem, aiHPFromCombatSystem) => {
    this.setState({
      hitpoints: {
        userHP: userHPFromCombatSystem,
        aiHP: aiHPFromCombatSystem
      }
    })
  }
  //o get data from combat system
  //o set state: object with data
  //o pass state data into HealthDisplay

  // 'stateful' component is the word I wanted to remember

  render() {
    return (
      <>
      <div>
        <h1>This is the arena for fighting pokemon</h1>
        <div className='userPokemon'>
          <img className='userPokemonSprite' src={this.state.userSprite} alt="userSprite"/>
          <p>{this.state.userPokemonName}</p>
          <HealthDisplay healthPoints={this.state.hitpoints.userHP}/>
        </div>
        <div classname='aiPokemon'>
          <img className='aiPokemonSprite' src={this.state.aiSprite} alt="aiSprite"/>
          <p>{this.state.aiPokemonName}</p>
          <HealthDisplay healthPoints={this.state.hitpoints.aiHP}/>
        </div>
      </div>
      <CombatSystem getHitPoints={this.getHitPoints} />
      </>
    )
  }
}



export default Arena
