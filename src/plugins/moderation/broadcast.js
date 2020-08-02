module.exports.run = async (bot, message, args, ob) => {

    if(!message.member.permissions.has("MANAGE_MESSAGES")) return ob.snap({msg: ob.lang.basic.noperms + '`MANAGE_MESSAGES`'})

    const title = args[0]

    if(!title) return ob.snap({msg: `${ob.lang.broadcast[1]} \`${ob.data.prefix}help broadcast\``})
    
    title == 'none' ? t = `${ob.lang.broadcast[2]}` : t = title.replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ")

    const tresc = args.slice(1).join(" ")
    if(!tresc) return ob.snap({msg: `${ob.lang.broadcast[3]} \`${ob.data.prefix}help broadcast\``})

    return ob.snap({
        author: t,
        msg: tresc,
        footer: message.author.tag,
    })

}

module.exports.help = {
    name: "broadcast",
    aliases: ['bc', 'ogloszenie'],
    description: "Send broadcast in message channel, if you need 'none' title, enter 'none' as first args",
    usage: "<title> <text>",
    category: "moderation",
}