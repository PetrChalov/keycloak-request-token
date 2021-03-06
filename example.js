const tokenRequester = require('./');

const baseUrl = 'http://127.0.0.1:8080/auth';

const settings = {
  username: 'admin',
  password: 'admi',
  grant_type: 'password',
  client_id: 'admin-cli'
};

(async function () {
  try {
    const token = await tokenRequester(baseUrl, settings);
    console.log(token);
  } catch (err) {
    console.log('err', err);
  }
})();
