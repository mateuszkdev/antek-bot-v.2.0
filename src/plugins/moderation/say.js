module.exports.run = async (bot, message, args, ob) => {

    if(!message.member.permissions.has("MANAGE_MESSAGES")) return ob.snap({msg: ob.lang.basic.noperms +' `MANAGE_MESSAGES`'})

    const x = args.join(" ")
    if(!x) return ob.snap({msg: `${ob.lang.say[1]}`})
    message.delete()
    return message.channel.send(x)

}

module.exports.help = {
    name: "say",
    aliases: ["napisz"],
    description: "Say message using bot",
    usage: "<message>",
    category: "moderation",
}