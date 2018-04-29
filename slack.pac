var slack = [
    '*.slack.com',
    '*.slack-msgs.com',
    '*.slack-files.com',
    '*.slack-imgs.com',
    '*.slack-edge.com',
    '*.slack-core.com',
    '*.slack-redir.net.'
];

function FindProxyForURL(url, host) {
    for (let i = 0; i < slack.length; i++) {
        if (shExpMatch(host, slack[i])) {
            return "PROXY 178.62.220.232:3128";
        }
    }

    return "DIRECT";
}