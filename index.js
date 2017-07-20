'use strict';

const request = require('request').defaults({jar: true});
const product = require('./product.request');
const confirmation = require('./confirmation.request');

const HOST = 'http://www2.yapo.cl';

/**
 * Hanldes the response taking care of the status code
 * @param {Function} resolve - Resolve promise function
 * @param {Function} reject - Reject promise function
 */
function requestHandler(resolve, reject) {
  return (error, response, body) => {
    // Handle library error
    if (error) reject(error);

    const metaStatus = parseInt(response.statusCode / 100);

    // Reject if status is not 2xx or 3xx
    if (metaStatus === 4 || metaStatus === 5) {
      // TODO: Log error or exception (i.e. 4xx or 5xx)
      reject(response);
    }

    // Append body to response object
    response.body = body;
    resolve(response);
  }
}

/**
 * Makes a GET request to a server as a promise
 * @param {Object} url - URL object
 */
function get(url) {
  return new Promise((resolve, reject) => {
    request(url, requestHandler(resolve, reject));
  });
}

/**
 * Makes a POST request to a server as a promise
 * @param {Object} req - URL object
 */
function post(req) {
  return new Promise((resolve, reject) => {
      request.post(req, requestHandler(resolve, reject));
    })
    .then((res) => {
      // Handle redirect
      if (res.statusCode === 302) {
        const redirect = res.headers.location;
        req.url = `${HOST}${redirect}`;
        return post(req);
      }
      return res;
    });
}

/*
 * This script publish new products to yapo.cl by doing the following:
 * 1. GET http://www2.yapo.cl/ai/form/0
 * 2. POST http://www2.yapo.cl/ai/verify/0
 * 3. POST http://www2.yapo.cl/ai/check_duplicates/0
 * 
 * For some reason of the system, we must make the first GET in order to set the cookies by 
 * the server.
 */
get({
  url: 'http://www2.yapo.cl/ai/form/0',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
  }
})
  .then((res) => {
    const req = product.request;
    console.log(`POST [INIT] ${req.url}`);
    return post(req);
  })
  .then((res) => {
    const req = confirmation.request;
    console.log(`POST [STEP 2] ${req.url}`);
    return post(req);
  })
  .then((res) => {
    console.log('SUCCESS 3');
  })
  .catch((err) => {
    console.error('ERROR')
    console.error(`Status code: ${err.statusCode}`);
  });
