const express = require('express')
const router = express.Router()
const {userGet} = require('../handlers/databaseQueries')
const {validateID, validateUserObject} = require('../helpers/schemaValidation')
const {userInputValidationError, fetchedObjectValidationError} = require('../helpers/errorObjects')
//get user
router.get('/:id', async (req, res, next) => {
    try{
        if(typeof validateID(req.params.id) == 'string'){
            //throw new Error(validateID(req.params.id))
            throw userInputValidationError(validateID(req.params.id))
        }
        const user = await userGet(req.db, req.params.id)
        if(typeof validateUserObject(user) == 'string'){
            //throw new Error(validateUserObject(user))
            throw fetchedObjectValidationError(validateUserObject(user))
        }
        return res.send(user)
    } catch (err) {
        next(err)
    }

})

//create user

//modify user

module.exports = router