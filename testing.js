const request = require('superagent');

request
  .post('https://sso.airmap.io/oauth/ro')
  .send({
    grant_type: 'password',
    client_id: 'Y862HXMmHLifzYbpRH65oGpRtXkrjxr7',
    connection: 'Username-Password-Authentication',
    username: 'maaaashin324',
    password: 'uxssCyVuGtqnae4kBUfhgkCM',
    scope: 'openid offline_access',
    device: 'Chrome',
  })
  .redirects(0)
  .end((err, res) => {
    if (err || !res.ok) {
      console.log(err);
    } else {
      console.log(JSON.stringify(res.body));
    }
  });
