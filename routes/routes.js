const express = require('express')
const router = express.Router()

const db = require('../db/db')

// On form send - This is posted "Rose"
// Check database if that user exists - getUser, if undefined - addUser

router.post('/', (req, res) => {
    console.log('posting')
    const name = req.body.name
    console.log("name", name)

    db.getUser(name)
        .then(user => {
            if(user == undefined){
                console.log(`User does not exist - add ${name} to db`)
                db.addUser(name)
            } else {
                console.log(`User ${name} exists`)
            }
            return 
        })
        .then(() => {
            res.sendStatus(200)
        })
})

// On game end - this data is posted:
// {
//     "name": "Rose",
//     "won": false
// }
router.post('/result', (req, res) => {
    const result = req.body
    console.log(req.body)
    db.getUserAndSaveOutcome(result)
        .then(() => {
            res.sendStatus(200)
        })
})

module.exports = router

