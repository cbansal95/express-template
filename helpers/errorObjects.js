class BaseError extends Error {
    constructor(message, errorType, responseCode) {
        super(message)
        this.errorType = errorType
        this.responseCode = responseCode
    }
}

function generateUserInputValidationError(message){
    return new BaseError(message, 'InputValidation', 400)
}

function fetchedObjectValidationError(message){
    return new BaseError(message, 'ObjectValidation', 500)
}

return {generateUserInputValidationError, fetchedObjectValidationError}