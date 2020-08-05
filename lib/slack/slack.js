const { IncomingWebhook } = require('@slack/webhook');

module.exports = {
    send_message: async (url, text) => {
        const webhook = new IncomingWebhook(url);
        const result = await webhook.send(text);
    }
};