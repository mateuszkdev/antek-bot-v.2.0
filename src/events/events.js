const req = (event) => require(`./src/${event}`)
module.exports = event = async (bot) => {

    bot.on('ready', () => req('ready')(bot))
    bot.on('message', (message) => req('message')(bot, message))

}