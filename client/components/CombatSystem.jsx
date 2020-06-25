import React from 'react'

class CombatSystem extends React.Component {

  state = {
    userHP : 100,
    aiHP : 100
  }

  GenerateAttacks = () => {

  }

  subtractHP = (aiAttack, userAttack) => {
    this.setState({
      userHP: this.state.userHP -= 10,
      aiHP: this.state.aiHP -= 5
    })
  }

  handleClick = () => {
    this.subtractHP()
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
// attack button
// on button click, a player attack number and ai attack number between between 10 and 20 will be randomly generated.
// these numbers will be set in state
// health will have the attack values generated subtracted.
// once ai or player reaches less than zero health, win screen should be loaded (stretch)


// combat animations stretch:

// in combat system component:
// onclick, a function that was imported from App will be run so that a css animation will play in arena component.