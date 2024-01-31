class apiError extends Error {
    constructor(
        statusCode,
        message = "Something Went Wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(this.stack){
            this.stack = this.stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {
    apiError
}