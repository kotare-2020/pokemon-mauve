import React from 'react'
import HomeButton from "./HomeButton"
import { HashRouter as Router, Route } from 'react-router-dom'

const Results = () => {
  return (
    <Router>
      <HomeButton />
      <h1>This is the results (stretch)</h1>
    </Router>
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