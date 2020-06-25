import React from 'react'
import request from 'superagent'

// const Arena = () => {
//   return (
//     <h1>This is the arena for fighting pokemon</h1>
//   )
// }


class Arena extends React.Component {
  state = {
    userSprite: '',
    aiSprite: '',
  }

  componentDidMount() {
    this.getMyPokemon()
  }

  // handleClick = () => {
  //   this.getMyQuote()
  // }

  getMyPokemon = () => {
    request.get('https://pokeapi.co/api/v2/pokemon/1/')
      .then(res => {
        this.setState({
          userSprite: res.body.sprites.back_default,
          aiSprite: res.body.sprites.front_default
        })
      })
  }

  render() {
    return (
      <>
      <div>
        <h1>user pokemon test</h1>
        <img src={this.state.userSprite} alt="userSprite"/>
        <img src={this.state.aiSprite} alt="aiSprite"/>
        {/* <button className='button' onClick={this.handleClick}>Click here!</button> */}
        {/* <p className='quote' onClick={this.handleClick}>{this.state.quote}</p> */}
      </div>
      </>
    )
  }
}



export default Arena
