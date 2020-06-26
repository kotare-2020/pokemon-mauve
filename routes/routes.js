const express = require('express')
const router = express.Router()

const db = require('../db/db')

// On form send - Object like this is posted {"name": "Rose"}
// Check database if that user exists - getUser, if undefined - addUser

router.post('/', (req, res) => {
    const name = req.body.name

    db.getUser(name)
        .then(user => {
            if(user == undefined){
                console.log(`User does not exist - add ${name} to db`)
                db.addUser(name)
            } else console.log(`User ${name} exists`)
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
})

module.exports = router
