const express = require('express')
const router = express.Router()
const {userGet} = require('../handlers/databaseQueries')
//get user
router.get('/:id', async (req, res) => {
    const user = await userGet(req.db, req.params.id)
    res.send(user)
})

//create user

//modify user

module.exports = router