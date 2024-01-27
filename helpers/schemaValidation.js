const Joi = require('joi')

const idSchema = Joi.number().greater(0)

function validateID(id) {
    try {
        Joi.assert(id, idSchema)
        return true
    } catch (err) {
        return err.details[0].message
    }
}

module.exports = {validateID}
