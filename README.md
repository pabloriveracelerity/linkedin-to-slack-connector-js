### Connect LinkedIn to Slack through APIs

Packages:

- dotenv - https://github.com/motdotla/dotenv
- hapijs - https://hapi.dev/
- slack-webhook - https://slack.dev/node-slack-sdk/webhook
- http-client - https://github.com/hqoss/node-http-client

This is setup to run on Heroku.

Scripts:

`npm start` - Start the currently empty and unused hapijs server

`node bin/postMessage.js` - This is the script that connects slack and linkedin.

`npm run test` - Run jest tests.

#### Currently a very much work in progress 😁

TODO:

- Create linkedin app
- get api credentials for linkedin app
- test the credentials with code in `lib/linkedin`
- research which data from the profile is needed
- update code to get that data

- create integration itself
- decide if integraiton is going to be a function or an app











<img src="https://gvanrossum.github.io/images/internetdog.gif">














`Chong did it.` 👀