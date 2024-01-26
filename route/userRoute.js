const express = require('express')
const router = express.Router()

//get user
router.get('/:id', (req, res) => {
    res.send('Lorem ipsum')
})

//create user

//modify user

module.exports = router