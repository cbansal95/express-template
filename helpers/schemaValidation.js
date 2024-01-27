const Joi = require('joi')

const idSchema = Joi.number().greater(0)
const usernameSchema = Joi.string().min(2)
const useremailSchema = Joi.string().email()
const userObjSchema = Joi.object({
    id: idSchema.required(),
    name: usernameSchema.required(),
    email: useremailSchema.required()
})

function validateID(id) {
    try {
        Joi.assert(id, idSchema)
        return true
    } catch (err) {
        return "Invalid ID: " + err.details[0].message
    }
}

function validateUserObject(userObj) {
    try{
        Joi.assert(userObj, userObjSchema)
        return true
    } catch (err) {
        return "Invalid user object: " + err.details[0].message
    }
}

module.exports = {validateID, validateUserObject}
