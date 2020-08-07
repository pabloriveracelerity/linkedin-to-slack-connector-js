require('dotenv').config();
const {sendMessage} = require("./slack");

jest.mock('@slack/webhook');

test('slack.sendMessage should return text', async () => {
    const text = 'test';
    const url = process.env.SLACK_WEBHOOK_URL;
    return sendMessage(url, text).then(data => expect(data).toBeUndefined());
  
  });

