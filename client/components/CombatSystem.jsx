import React from 'react'

class CombatSystem extends React.Component {

  state = {
    userHP : 100,
    aiHP : 100,
    isUserTurn : true,
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

  subtractHP = (userAttack, aiAttack) => {
    this.setState({
      userHP: this.state.userHP -= aiAttack,
      aiHP: this.state.aiHP -= userAttack
    })
  }

  handleClick = () => {
    this.subtractHP(this.generateAttack(), this.generateAttack())
  }

  checkConsciousness = (userHP, aiHP) => {
    if ( userHP <= 0 || aiHP <= 0 ){
      return <button>They're unconscious!</button>
    }
  }

  render(){
    const userHP = this.state.userHP
    const aiHP = this.state.aiHP
    const isUserTurn = this.state.isUserTurn
    let button

    console.log('render', 'aiHP', aiHP, 'userHP', userHP, 'isUsersTurn', isUserTurn)

    button = this.checkConsciousness(userHP, aiHP)

    if ( isUserTurn == true && userHP > 0 && aiHP > 0 ){
      button = <button onClick={this.handleClick}>Attack!</button>
    }

    return(
      <>
      {button}
      </>
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

// check true or false
// if true, user can press attack
// else ai will attack after short delay


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