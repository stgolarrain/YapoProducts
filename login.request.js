'use strict';

exports.request = {
  uri: 'https://www2.yapo.cl/login/validate',
  method: 'POST',
  headers: {
    'Origin': 'http://www2.yapo.cl',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
    'Content-Type': 'application/json',
  },
  form: {
    email: 'sistema@sensacional.cl',
    password: 'Alvarosensacional',
  }
}
