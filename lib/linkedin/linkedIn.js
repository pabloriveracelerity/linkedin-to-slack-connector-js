const axios = require('axios');

async function accessToken(client_id, client_secret) {
    // https://docs.microsoft.com/en-us/linkedin/shared/authentication/client-credentials-flow?context=linkedin/context
    const response = await axios.post(
        'https://www.linkedin.com/oauth/v2/accessToken',
        {
            'client_id': client_id,
            'client_secret': client_secret,
            'grant_type': 'client_credentials'
        });

    return await response.data;
}

async function profile(token) {
    // https://docs.microsoft.com/en-us/linkedin/shared/integrations/people/profile-api
    const url = 'https://api.linkedin.com/v2/me';
    const response = await axios.post(url, {headers: {'Authorization': `Bearer ${token}`}});
    return await response.data;
}

exports.accessToken = accessToken ;
exports.profile = profile;
