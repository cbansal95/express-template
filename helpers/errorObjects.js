class BaseError extends Error {
    constructor(message, errorType, responseCode) {
        super(message)
        this.errorType = errorType
        this.responseCode = responseCode
    }
}

function userInputValidationError(message){
    return new BaseError(message, 'InputValidation', 400)
}

function fetchedObjectValidationError(message){
    return new BaseError(message, 'ObjectValidation', 500)
}

module.exports = {userInputValidationError, fetchedObjectValidationError}