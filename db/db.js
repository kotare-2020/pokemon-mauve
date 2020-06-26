const knex = require('knex')
const config = require('../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getPeople(db = connection) {
  return db('people').select()
    .then(people => {
      return people.map(person => {

        person.favouriteColour = person.favourite_colour
        delete person.favourite_colour

        return person
      })
    })
}

function getUsers(db = connection) {
    return db('users').select()
}

function getUser(user, db = connection) {
    return db('users').where({name:user}).first()
}

// function checkIfUserExists(user, db = connection) {
//     return db('users').where({name:user}).first()
// }

function addUser(user, db = connection) {
    return db('users').insert({name:user})
}

function saveOutcome(result, db = connection) {
    return db('users').update(result)
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    saveOutcome,
}


// User submits form
// check database if that user exists   - getUser, if undefined - addUser
// if user doesnt exist, insert it      

// keep name in state



// After battle, update db with that users result  // if win:
// {name:{nameFromForm}, win:{+1}, loss:{}}

// if loss:
// {name:{nameFromForm}, win:{}, loss:{+1}}