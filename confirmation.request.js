'use strict';

exports.request = {
  url: 'http://www2.yapo.cl/ai/check_duplicates/0',
  method: 'POST',
  headers: {
    'Origin': 'http://www2.yapo.cl',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
    'Content-Type': 'application/application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest',
  },
  formData: {
    create: 'Publicar',
  }
}
