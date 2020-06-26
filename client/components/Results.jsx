import React from 'react'
import HomeButton from "./HomeButton"

const Results = () => {
  return (
    <React.Fragment>
      <HomeButton />
      <h1>This is the results (stretch)</h1>
    </React.Fragment>
  )
}

export default Results



// User wins or loses
// Results are saved in the database

// if win:
// {name:{nameFromForm}, win:{+1}, loss:{}}

// if loss:
// {name:{nameFromForm}, win:{}, loss:{+1}}



// Or save the battle to the db
// {battleId:1, name:{nameFromForm}, myPokemonName:{}, gymleaderPokemonName:{}, win/loss:{}}