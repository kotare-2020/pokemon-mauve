import React from 'react'

class CombatSystem extends React.Component {

  state = {
    userHP : 100,
    aiHP : 100
  }

  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  generateAttack = () => {
    return this.getRandomInt(10, 20)
  }

  subtractHP = (userAttack, aiAttack) => {
    this.setState({
      userHP: this.state.userHP -= aiAttack,
      aiHP: this.state.aiHP -= userAttack
    })
  }

  handleClick = () => {
    this.subtractHP(this.generateAttack(), this.generateAttack())
  }

  render(){
    return(
      <button onClick={this.handleClick}>yo</button>
    )
  }
}

export default CombatSystem

// basic combat system component:

//o ai and player will have state hp of 100 on mount
//o attack button
//o on button click, a player attack number and ai attack number between between 10 and 20 will be randomly generated.
//o these numbers will be set in state
//o health will have the attack values generated subtracted.

// once ai or player reaches less than zero health, win sequence/screen should be loaded (stretch)
  // whoever reaches 0 first will disapear
  // button will disapear so user can't kill themselves?
  // have if statement check whetehr user AND ai are alive so they can't click the button otherwise
    // have button disapear after click so user can't spam?
  // will button clicks stack?
    // test by removing button upon either pokemon's hp going below or equal to 0. if they both go because of stacked click events, then I'll need to fix that somehow.


// combat animations stretch:

// in combat system component:
// onclick, a function that was imported from App will be run so that a css animation will play in arena component.