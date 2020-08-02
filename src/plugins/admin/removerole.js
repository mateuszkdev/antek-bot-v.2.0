module.exports.run = async (bot, message, args, ob) => {

    if(!message.member.permissions.has("MANAGE_ROLES")) return ob.snap({msg: ob.lang.basic.noperms + '`MANAGE_ROLES`'})

    const aMember = message.mentions.members.first()
    if(!aMember) return ob.snap({msg: `${ob.lang.removerole[1]} \`${ob.data.prefix}help removerole\``})

    let aRola = message.mentions.roles.first()
    if(!aRola){
        const aRolatofind = args.slice(1).join(" ")
        if(aRolatofind == '') return ob.snap({msg: `${ob.lang.removerole[2]}\`${ob.data.prefix}help removerole\``})
        aRola = message.guild.roles.cache.find(role => role.name === aRolatofind)
        if(!aRola){
            aRola = message.guild.roles.cache.get(aRolatofind)
            if(!aRola){
                return ob.snap({msg: `${ob.lang.removerole[3]}`})
            }
        }
    }

    if(!aMember.roles.cache.get(aRola.id)) return ob.snap({msg: `${ob.lang.removerole[4]} \`${aRola.name}\``})

    aMember.roles.remove(aRola.id)
    return ob.snap({
        author: `${ob.lang.removerole[5]} ${aMember.user.tag}`,
        msg: `${ob.lang.removerole[6]} \`${aRola.name}\` \n **Admin**: ${message.author}`,
    })

}

module.exports.help = {
    name: "removerole",
    aliases: ["zabierzrole"],
    description: "Remove member role",
    usage: "<@mention> <role @mention / id / name>",
    category: "admin",
}