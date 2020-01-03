class Response {

    static sendResponse(isSuccess, result, message, statusCode) {

        let response = {};

        if (isSuccess) {

            response.statusCode = statusCode;
            response.success = true;
            response.message = message;
            response.data = result;
        } else {

            response.statusCode = statusCode;
            response.success = false;
            response.message = message;
            response.data = result;

        }
        return response;
    }

    static internalServerError(message) {

        let response = {};

        response.statusCode = STATUS_CODE.INTERNAL_SERVER_ERROR;
        response.success = false;
        response.message = message;
        response.data = result;
        return response;
    }
}

module.exports = Response;
