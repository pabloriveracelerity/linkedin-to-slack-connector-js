const linkedIn = require('./linkedIn');
const axios = require('axios');

jest.mock('axios');

test('should return linkedIn access token', async () => {
  const token = {
    'access_token': '12345',
    'expires_in': '1800'
  };
  const resp = {data: token};
  axios.post.mockResolvedValue(resp);
  return linkedIn.accessToken().then(data => expect(data).toEqual(token));
});


test('should return linkedin user profile data', async () => {
  const token = '123';
  const responseData = {'test': 'test'}
  const resp = {data: responseData}
  axios.post.mockResolvedValue(resp);
  return linkedIn.profile(token).then(data => expect(data).toEqual(responseData))
})
