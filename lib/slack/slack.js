const { IncomingWebhook } = require('@slack/webhook');

async function sendMessage(url, text) {
    const webhook = new IncomingWebhook(url);
    return await webhook.send(text);  
}

exports.sendMessage = sendMessage;