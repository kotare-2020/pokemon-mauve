import React from 'react'
import ResultButton from "./ResultsButton"
import HomeButton from "./HomeButton"
import { HashRouter as Router, Route } from 'react-router-dom'
import { saveResult } from '../api/index'

class CombatSystem extends React.Component {

  state = {
    userHP : 100,
    aiHP : 100,
    isUserTurn : true,
    name: this.props.name,
    won: true
  }




  componentDidMount = () => {
    console.log('did mount')
  }
  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  generateAttack = () => {
    return this.getRandomInt(1, 20)
  }

  subtractHP = (userAttackPoints, aiAttackPoints) => {
    this.setState({
      // userHP: this.state.userHP -= aiAttackPoints,
      aiHP: this.state.aiHP -= userAttackPoints,
      isUserTurn: false
    }, () => {
      console.log('attacked: isUserTurn =', this.state.isUserTurn)
      window.setTimeout(() => {this.aiAttack(aiAttackPoints)}, 1000)
    }
    )
  }

  aiAttack = (aiAttackPoints) => {
    console.log('aiAttack start', this.state.isUserTurn)
    this.setState({
      userHP: this.state.userHP -= aiAttackPoints,
      isUserTurn: true
    }, () => {
      console.log('aiAttack end', this.state.isUserTurn)
    })
  }

  handleClick = () => {
    this.subtractHP(this.generateAttack(), this.generateAttack())
  }

  isUnconscious = (userHP, aiHP) => {
    if ( userHP <= 0 || aiHP <= 0 ){
      return true
    }
    return false
  }

  setButton = (buttons, isUserTurn, userHP, aiHP) => {
    if ( isUserTurn == true && this.isUnconscious(userHP, aiHP) == false ){
      return buttons.attack
    }
    else if ( isUserTurn == false && this.isUnconscious(userHP, aiHP) == false ){
      return buttons.aiAttack
    }
    else if ( this.isUnconscious(userHP, aiHP) ) {
      saveResult(this.state.name, this.state.won)
      return buttons.unconscious
    }
  }

  render(){
    const userHP = this.state.userHP
    const aiHP = this.state.aiHP
    const isUserTurn = this.state.isUserTurn
    const buttons = {
      attack: <button className='attackButton' onClick={this.handleClick}>Attack!</button>,
      unconscious: <button className='attackButton'>They're unconscious!</button>,
      aiAttack: <button className='attackButton'>They're attacking!</button>,
    }
    let button

    console.log('render', 'aiHP', aiHP, 'userHP', userHP, 'isUsersTurn', isUserTurn)

    button = this.setButton(buttons, isUserTurn, userHP, aiHP)

    return(
      <Router>
      <div className='text-box'>
      {button}
      <HomeButton/>
      <ResultButton/>
      </div>
      </Router>
    )
  }
}

export default CombatSystem

// basic combat system component:

// once ai or player reaches less than zero health, win sequence/screen should be loaded (stretch)

// whoever reaches 0 first will disapear
// The problem now is that they can both die.
  // Can this be fixed by damage numbers being lowered?
// Make combat turned based like the real thing.
  // ai will attack after user has attacked
  // AND after a short delay

// If someone is 'unconscious', change button to win or lose state:

// write pseudocode


// Is it users turn?

//o check true or false
//o if true, user can press attack
//o user will press attack
  //o remove ai attack from button.attack...and so on
//o set userTurn to false and start timer
//o **(Timer is stretch)**
//o after timer, user can attack again (ai attack can be made later)


// combat animations stretch:

// in combat system component:
// onclick, a function that was imported from App will be run so that a css animation will play in arena component.


// Completed stuff

//o ai and player will have state hp of 100 on mount
//o attack button
//o on button click, a player attack number and ai attack number between between 10 and 20 will be randomly generated.
//o these numbers will be set in state
//o health will have the attack values generated subtracted.

//o button will disapear. User can still kill their self
//o have if statement check whetehr user AND ai are alive so they can't click the button otherwise
  //o have button disapear after click so user can't spam?
//o will button clicks stack? Browser/React seem very quick so this might not be an issue afaik.
  //o test by removing button upon either pokemon's hp going below or equal to 0. if they both go because of stacked click events, then I'll need to fix that somehow.