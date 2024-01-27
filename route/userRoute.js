const express = require('express')
const router = express.Router()
const {userGet} = require('../handlers/databaseQueries')
const {validateID} = require('../helpers/schemaValidation')
const { string } = require('joi')
//get user
router.get('/:id', async (req, res, next) => {
    try{
        if(typeof validateID(req.params.id) == 'string'){
            throw new Error(validateID(req.params.id))
        }
        const user = await userGet(req.db, req.params.id)
        return res.send(user)
    } catch (err) {
        next(err)
    }

})

//create user

//modify user

module.exports = router