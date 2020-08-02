module.exports.run = async (bot, message, args, ob) => {

    return ob.snap({
        author: ob.lang.ping[1],
        msg: `\`${bot.ws.ping}\` **ms**`,
    })

}

module.exports.help = {
    name: 'ping',
    aliases: ['pong'],
    description: "Ping",
    usage: '',
    category: 'basic'
}