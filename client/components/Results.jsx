import React from 'react'
import HomeButton from "./HomeButton"
import { getUsers } from '../api/index'
import { get } from 'superagent'

class Results extends React.Component {

  state = {
    users: {},
    lis: []
  }

  componentDidMount() {
    getUsers()
      .then(users => {
        this.setState({
          users: users
        })
      })
      .then(() =>{
        this.setState({
          lis: this.makeResultsTable()
        })

      })
 
  }
  
  makeResultsList() {
    return this.state.users.map(user => {
        return<li>{user.name} {user.wins} {user.losses}</li>
          })
  }

  makeResultsTable() {
    return this.state.users.map(user => {
        return<tr>
        <td>{user.name}</td>
        <td>{user.wins}</td>
        <td>{user.losses}</td>
        </tr>
          })
  }




  render() {
    return (
      <React.Fragment >
        <HomeButton />
        <h1>This is the results (stretch)</h1>
        <table>
          <tr>
            <td>Name</td>
            <td>Wins</td>
            <td>Losses</td>
          </tr>
        {this.state.lis}
          
        </table>
      </React.Fragment >
    )
  }

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