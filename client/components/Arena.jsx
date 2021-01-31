import React from 'react'
import request from 'superagent'
import HealthDisplay from './HealthDisplay'
import CombatSystem from './CombatSystem'
import ResultButton from "./ResultsButton"
import Sound from 'react-sound'
// import HomeButton from "./HomeButton"
import { HashRouter as Router, Route } from 'react-router-dom'


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
    userPokemonName: this.props.pokemonName,
    // aiSprite: this.props.pokemonValues,
    aiPokemonName: this.props.aiPokemon,
    name: this.props.name
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
      <React.Fragment>
      <Sound
                url="/audio/Pokemon Red, Yellow, Blue Battle Music- Trainer.mp3"
                playStatus={Sound.status.PLAYING}
                // playFromPosition={300 /* in milliseconds */}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
            />
      <div>
        <h1>Arena</h1>
        <div className='fightArena'>
            <div className='aiPokemon'>
              <p>{this.state.aiPokemonName}</p>
              <HealthDisplay healthPoints={this.state.hitpoints.aiHP}/>
              <img className='aiPokemonSprite' src={this.state.aiSprite} alt="aiSprite"/>
            </div>
            <div className='userPokemon'>
              <img className='userPokemonSprite' src={this.state.userSprite} alt="userSprite"/>
              <p>{this.state.userPokemonName}</p>
              <HealthDisplay healthPoints={this.state.hitpoints.userHP}/>
            </div>
          </div>
      </div>
      <CombatSystem getHitPoints={this.getHitPoints} name={this.props.name} />
      </React.Fragment>
    )
  }
}



export default Arena
