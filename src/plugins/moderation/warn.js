module.exports.run = (bot, message, args, ob) => {

    if(!message.member.permissions.has("MANAGE_MEMBERS")) return ob.snap({msg: ob.lang.basic.noperms + '`MANAGE_MEMBERS`'})

    const u = message.mentions.members.first()
    if(!u) return ob.snap({msg: `${ob.lang.warn[1]}`})
    let powod = ''
    const p = args.slice(1).join(" ")
    if(!p) {
        powod = `\`${ob.lang.warn[2]}\``
    } else {
        powod = p
    }

    return ob.snap({
        msg: [
            `${ob.lang.warn[3]}: **${u.user.tag}**\n`,
            `**${ob.lang.warn[4]}**: ${powod} \n`,
            `${ob.lang.warn[5]} : ${message.author.tag}`,
        ].join('\n')
    })

}

module.exports.help = {
    name: "warn",
    aliases: ["w", "ostrzezenie"],
    description: "Warn member if he broke the rules",
    usage: "<@mention> (reason)",
    category: "moderation",
}