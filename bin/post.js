require('dotenv').config();
const slack = require("../lib/slack/index.js");

const text = "Hola señor Chong. ¿Cómo esta?";
const send = slack.send_message(process.env.SLACK_TOKEN, process.env.SLACK_CHANNEL_ID, text);
//send.then(console.log('This ran.'));
