module.exports.run = async (bot, message, args, ob) => {

    const channel = message.channel
    const fmes = await channel.messages.fetch({after:1 , limit:1})
    const msg = fmes.first()

    return ob.snap({
        msg: `${ob.lang.firstmessage[1]}\`${msg.author.tag}\`.\n ${ob.lang.firstmessage[2]} \n > ${msg.content} \n [${ob.lang.firstmessage[3]}](${msg.url})`,
    })

}

module.exports.help = {
    name: "firstmessage",
    aliases: [""],
    description: "First message in message channel.",
    usage: "",
    category: "information",
}