const { WebClient } = require('@slack/web-api');

module.exports = {
    send_message: async (token, channelId, text) => {
        const web = new WebClient(token);
        const result = await web.chat.postMessage(
            {text: text, channel: channelId,});
    }
}

