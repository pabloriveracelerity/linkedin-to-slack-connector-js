const axios = require('axios');

async function accessToken(client_id, client_secret) {
    // https://docs.microsoft.com/en-us/linkedin/shared/authentication/client-credentials-flow?context=linkedin/context
    data = `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`;
    const response = await axios.post(
        'https://www.linkedin.com/oauth/v2/accessToken',
         data,
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });

    return await response.data;
}
// remember to copy paste the values below
accessToken(process.env.LINKEDIN_CLIENT_ID, process.env.LINKEDIN_CLIENT_SECRET)
.then((data) => console.log(data))
.catch((error) => console.log(error));

async function profile(token) {
    // https://docs.microsoft.com/en-us/linkedin/shared/integrations/people/profile-api
    const url = 'https://api.linkedin.com/v2/me';
    const response = await axios.post(url, {headers: {'Authorization': `Bearer ${token}`}});
    return await response.data;
}

exports.accessToken = accessToken ;
exports.profile = profile;
