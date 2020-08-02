module.exports.run = async (bot, message, args, ob) => {

    if(!message.member.permissions.has("MANAGE_MESSAGES")) return ob.snap({msg: `${ob.lang.basic.noperms} \`MANAGE_MESSAGES\``})
    const mMember = message.mentions.members.first()
    if(!mMember) return ob.snap({msg: `${ob.lang.mute[1]} \`${ob.data.prefix}help mute\``})

    if(mMember.permissions.has("MANAGE_MESSAGES")) return ob.snap({msg: `${ob.lang.mute[2]} \`MANAGE_MESSAGES\` || \`ADMINISTRATOR\``})

    if(mMember.id === message.author.id) return ob.snap({msg: `${ob.lang.mute[3]}`})

    let muterole = message.guild.roles.cache.find(role => role.name === 'mute')

    if(!muterole){
        try{

            message.guild.roles.create({
                data: {
                name: 'mute',
                color: '#000000',
                permissions: [],
                }
            })

            ob.snap({
                msg: `${ob.lang.mute[4]}`,
            })

        } catch(e){
            console.warn(e)
        }
    }

    const powod = args.slice(1).join(" ")
    powod ? pow = powod : pow = `\`${ob.lang.mute[5]}\``

    if(!mMember.roles.cache.get(muterole.id)){
        mMember.roles.add(muterole)
        return ob.snap({
            author: `${ob.lang.mute[6]} ${mMember.user.tag}`,
            msg: `**${ob.lang.mute[7]}**: ${pow} \n **${ob.lang.mute[8]}**: ${message.author}`,
        })
    } else {
        mMember.roles.remove(muterole)
        return ob.snap({
            author: `${ob.lang.mute[9]} ${mMember.user.tag}`,
            msg: `**${ob.lang.mute[8]}**: ${message.author}`,
        })
    }

}

module.exports.help = {
    name: "mute",
    aliases: ["m", "wycisz"],
    description: "Mute / unmute member",
    usage: "<@wmention> (reason)",
    category: "moderation",
}