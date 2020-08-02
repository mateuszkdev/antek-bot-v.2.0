module.exports.run = async (bot, message, args, ob) => {

    if(!message.member.permissions.has("BAN_MEMBERS")) return ob.snap({msg: ob.lang.basic.noperms + `BAN_MEMBERS`})

    const bMember = message.mentions.members.first()
    if(!bMember) return ob.snap({msg: `${ob.lang.ban[1]} \`${ob.data.prefix}help ban\``})
    if(!bMember.bannable) return ob.snap({msg: `${ob.lang.ban[2]}`})
    if(bMember.user.id == `395266229436153868`) return ob.snap({msg: `${ob.lang.ban[3]}`})
    if(bMember.user.id === message.author.id) return ob.snap({msg: `${ob.lang.ban[4]}`})
    
    const p = args.slice(1).join(" ")
    p ? powod = p : powod = `\`${ob.lang.ban[5]}\``

    bMember.ban(powod)
    return ob.snap({
        author: `${ob.lang.ban[6]} ${bMember.user.tag}`,
        msg: `**${ob.lang.ban[7]}**: ${powod} . \n **${ob.lang.ban[8]}**: ${message.author}`,
    })

}

module.exports.help = {
    name: "ban",
    aliases: ["b"],
    description: "Ban member.",
    usage: "<@mention> (reason)",
    category: "moderation",
}