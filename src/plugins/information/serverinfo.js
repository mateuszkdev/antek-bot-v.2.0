module.exports.run = async (bot, message, args, ob) => {

    const to = message.guild 

    return ob.snap({
        author: `${ob.lang.serverinfo[1]} ${to.name}`,
        thumbnail: to.iconURL(),

        msg: [
            `**${ob.lang.serverinfo[2]}**: ${to.name}`,
            `**${ob.lang.serverinfo[3]}**: ${to.id}`,
            `**${ob.lang.serverinfo[4]}**: ${to.owner}`,
            `**${ob.lang.serverinfo[5]}**: ${to.roles.cache.size}`,
            `**${ob.lang.serverinfo[6]}**: ${to.channels.cache.size}`,
            `**${ob.lang.serverinfo[7]}**: ${to.members.cache.size}`,
            `**${ob.lang.serverinfo[8]}**: ${to.afkChennel ? to.afkChennel : `${ob.lang.serverinfo[13]}`}`,
            `**${ob.lang.serverinfo[9]}**: ${to.mfaLevel}`,
            `**${ob.lang.serverinfo[10]}**: ${to.premiumTier}`,
            `**${ob.lang.serverinfo[11]}**: ${to.verificationLevel ? to.verificationLevel : `${ob.lang.serverinfo[14]}`}`,
            `**${ob.lang.serverinfo[12]}**: ${to.createdAt}`,
        ].join('\n')
    })

}

module.exports.help = {
    name: 'server',
    aliases: ['serverinfo'],
    description: 'Informacion about guild!',
    usage: '',
    category: 'information',
}