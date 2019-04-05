/*
    jsonRpc-native.js
    An implementaiton of KBase's style of json-rpc using the native ajax client implementation
    found in this same directory.
    Exceptions are defined in the common module 'exceptions'.
    Design principles:
        - executes within a promise (via ajax lib)
        - presumes json response for all success cases
        - hopes for json response in error cases
        - many json-rpc services will return error status codes when errors are encountered
        - others will use success http status (200) and error values
        - this library is agnostic
        - underlying ajax library is exceptions-centric for all error conditions (unfortunately, I think...)
        - thus we catch and recast  underlying http errors as json rpc errors
        - one case that is handled specifically is "AttributeError" -- this was for a specific auth2 case
        - if the error is returned as json it will have this structure:
          error:
            message:
            error:
            name:
            code:
          the error.error is really the detailed error message
          error.code is a numeric code, not useful
          error.name functions as the error type
          error.message is the short, succinct message

    response:
    The json-rpc service response is clasically
        result:
        error:
            name:
            code:
            message:
            error:
    One of result or error will have a non-null value.
    It is possible that under some error conditions just text is returned.


*/
define([
    './ajax',
    './exceptions'
], function (
    ajax,
    exceptions
) {
    'use strict';

    function validJsonRpcError(error) {
        if (!error) {
            return false;
        }
        if (typeof error !== 'object') {
            return false;
        }
        if (typeof error.name !== 'string') {
            return false;
        }
        if (typeof error.message !== 'string' && error.message !== null) {
            return false;
        }
        if (typeof error.error !== 'string' && error.error !== null) {
            return false;
        }
        if (typeof error.code !== 'number') {
            return false;
        }
        return true;
    }

    function request(url, sdkModule, func, params, options) {
        // Aye -- a poor man's json rpc.
        const rpc = {
                params: params,
                method: sdkModule + '.' + func,
                version: '1.1',
                id: options.id || String(Math.random()).slice(2)
            },
            header = {
                'Content-Type': 'application/json; charset=utf-8'
            };

        if (options.rpcContext) {
            rpc.context = options.rpcContext;
        }

        if (options.authorization !== null) {
            header.Authorization = options.authorization;
        }

        return ajax.post({
            url: url,
            timeout: options.timeout,
            data: JSON.stringify(rpc),
            header: header
        })
            .then((response) => {
                try {
                    return JSON.parse(response).result;
                } catch (ex) {
                    throw new exceptions.ResponseValueError(sdkModule, func, params, response, 'Error processing response as json', ex.message);
                }
            })
            // Note that we now only filer for client and server errors. Other errors
            // should naturally propogate.
            // If the client or server error here does not conform to the kbase json-rpc standard
            // form it is just propogated.
            .catch(exceptions.ClientError, exceptions.ServerError, (err) => {
                let data;
                try {
                    // This handles an error message generated by many json-rpc services.
                    // We don't care what response code was used at this point, leaving that to
                    // the caller. We just want to get the error value.
                    data = JSON.parse(err.xhr.responseText);
                } catch (ex) {
                    // In the case of severe or unhandled service errors, the reponse will likely be
                    // plain text.
                    // throw new exceptions.RequestError(err.xhr.status, err.xhr.statusText, url, err.xhr.responseText);
                    // We simply allow client or server errors which don't conform to propogate.
                    throw err;
                }

                // Ensure we have a standard json-rpc error value.
                if (!validJsonRpcError(data.error)) {
                    throw new exceptions.JsonRpcNonconformingError(sdkModule, func, params, url, data);
                }

                // DANGER: This is highly dependent up on what is returned in
                // the "error.error" property of ... the error object.
                // It is assumed to be a newline separated list of strings
                // the penultimate one of which is a simple string expressing
                // the exception.
                let maybeStackTrace,
                    maybeErrorName;

                if (data.error && data.error.error && typeof data.error.error === 'string') {
                    maybeStackTrace = data.error.error.split('\n');

                    if (maybeStackTrace.length >= 2) {
                        maybeErrorName = maybeStackTrace[maybeStackTrace.length - 2];
                    }
                }
                switch (maybeErrorName) {
                case 'AttributeError':
                    throw new exceptions.AttributeError(sdkModule, func, data);
                default:
                    throw new exceptions.JsonRpcError(sdkModule, func, params, url, data.error);
                }
            });
    }

    return Object.freeze({
        request: request
    });
});