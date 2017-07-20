'use strict';

exports.request = {
  url: 'http://www2.yapo.cl/ai/verify/0',
  method: 'POST',
  headers: {
    'Origin': 'http://www2.yapo.cl',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
    'Content-Type': 'application/application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest',
  },
  formData: {
    ai_accept_conditions: 'on',
    area_code: 2,
    body: 'Prueba Santiago 06',
    category_group: 6120,
    check_type_diff: 0,
    communes: 306,
    company_ad: 0,
    'digest_present[]': 0,
    email: 'sistema@sensacional.cl',
    email_confirm: 'sistema@sensacional.cl',
    geoposition_is_precise:0,
    'image[]': '5962627464.jpg',
    name: 'Usuario prueba',
    passwd: 'Alvarosensacional',
    passwd_ver: 'Alvarosensacional',
    phone: 98751283,
    phone_type: 'm',
    price: 19990,
    region:15,
    sub_category: 0,
    subject: 'Prueba Santiago 06',
    'thumbnail_digest[]': '2f6eff1a9e3d089807fabecc6a8132f9',
  }
}
