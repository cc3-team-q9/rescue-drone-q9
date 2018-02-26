var request = require('superagent');

request
  .post('https://sso.airmap.io/oauth/ro')
  .send({
    "grant_type": "password",
    "client_id": "{KjhdQeaNaPcTnWEKKY67a0abTYx3421U}",
    "connection": "Username-Password-Authentication",
    "username": "{alpenfritz}",
    "password": "{PASSWORD}",
    "scope": "openid offline_access",
    "device": "{DEVICE}"
  })
  .redirects(0)
  .end(function (err, res) {
    if (err || !res.ok) {
      console.log(err);
    } else {
      console.log(JSON.stringify(res.body));
    }
  });