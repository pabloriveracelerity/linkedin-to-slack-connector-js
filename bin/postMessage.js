require('dotenv').config();
const slack = require("../lib/slack/index.js");

const text = "Heroku Scheduler ran";
slack.send_message(process.env.SLACK_WEBHOOK_URL, text);

