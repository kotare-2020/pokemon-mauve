const knex = require('knex')
const config = require('../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getUsers(db = connection) {
    return db('users').select()
}

function getUser(user, db = connection) {
    return db('users').where({name:user}).first()
}

function addUser(user, db = connection) {
    return db('users').insert({name:user, wins:0, losses:0}).then(ids => {
        console.log(ids[0])
    })
}

function saveOutcome(result, db = connection) {
    return db('users').update(result)
}

function getUserAndSaveOutcome(result, db = connection) {
    // console.log('result')
    // Result looks like this:
    // {
    //     "name": "Rose",
    //     "won": false
    //   }
    return db('users').where({name:result.name}).first().then(user => {
        if(result.won == true){
            return db('users').update({wins:++user.wins}).where({name:user.name})
        } else {
            return db('users').update({losses:++user.losses}).where({name:user.name})
        }
    })
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    saveOutcome,
    getUserAndSaveOutcome
}


// User submits form
// check database if that user exists   - getUser, if undefined - addUser
// if user doesnt exist, insert it      

// keep name in state



// After battle, update db with that users result  // if win:
// {name:{nameFromForm}, win:{+1}, loss:{}}

// if loss:
// {name:{nameFromForm}, win:{}, loss:{+1}}