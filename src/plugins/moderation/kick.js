module.exports.run = async (bot, message, args, ob) => {

    if(!message.member.permissions.has("KICK_MEMBERS")) return ob.snap({msg: ob.lang.basic.noperms + '`KICK_MEMBERS`'})

    const kMember = message.mentions.members.first()
    if(!kMember) return ob.snap({msg: `${ob.lang.kick[1]} \`${ob.data.prefix}help kick\``})

    if(!kMember.kickable) return ob.snap({msg: `${ob.lang.kick[2]}`})

    if(kMember.user.id == message.author.id) return ob.snap({msg: `${ob.lang.kick[3]}`})

    const p = args.slice(1).join(" ")
    p ? powod = p : powod = `\`${ob.lang.kick[4]}\``

    kMember.kick(powod)
    return ob.snap({
        author: `${ob.lang.kick[5]} ${kMember.user.tag}`,
        msg: `**${ob.lang.kick[6]}**: ${powod} \n **${ob.lang.kick[7]}**: ${message.author}`,
    })

}

module.exports.help = {
    name: "kick",
    aliases: ["k"],
    description: "Kick member.",
    usage: "<@mention> (reason)",
    category: "moderation",
}