module.exports = {
    function (client) {
        client
            .url('https://www.google.com')
            .pause(5 * 1000)
            .element('css selector', 'iframe[src]', result => {
                client.frame(result.value).click('#introAgreeButton');
            })
            .setValue('input[title="Search"]','Test')
            .pause(5 * 1000);
    }
};