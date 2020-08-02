module.exports.run = async (bot, message, args, ob) => {

    if(!message.member.permissions.has("MANAGE_ROLES")) return ob.snap({msg: `${ob.lang.basic.noperms} \`MANAGE_ROLES\``})

    const aMember = message.mentions.members.first()
    if(!aMember) return ob.snap({msg: `${ob.lang.addrole[1]} \`${ob.data.prefix}${ob.lang.addrole[2]}\``})

    let aRola = message.mentions.roles.first()
    if(!aRola){
        const aRolatofind = args.slice(1).join(" ")
        if(aRolatofind == '') return ob.snap({msg: `${ob.lang.addrole[3]} \`${ob.data.prefix}${ob.lang.addrole[2]}\``})
        aRola = message.guild.roles.cache.find(role => role.name === aRolatofind)
        if(!aRola){
            aRola = message.guild.roles.cache.get(aRolatofind)
            if(!aRola){
                return ob.snap({msg: `${ob.lang.addrole[4]}`})
            }
        }
    }

    if(aMember.roles.cache.get(aRola.id)) return ob.snap({msg: `${ob.lang.addrole[5]} \`${aRola.name}\``})

    aMember.roles.add(aRola.id)
    return ob.snap({
        author: `${ob.lang.addrole[6]} ${aMember.user.tag}`,
        msg: `${ob.lang.addrole[7]} \`${aRola.name}\` \n **Admin**: ${message.author}`,
    })

}

module.exports.help = {
    name: "addrole",
    aliases: ["dajrole"],
    description: "Add role to member using command",
    usage: "<@mention> <role @mention / id/ name>",
    category: "admin",
}