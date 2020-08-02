module.exports.run = async (bot, message, args, ob) => {
    console.log("nowy report")
    let rep = args.slice(0).join(" ")
    if(!rep) return ob.snap({msg: `${ob.lang.report[1]} \`${ob.data.prefix}help report\``})
    const invite = await message.channel.createInvite({ temporary: true, reason: 'Invite'})
    ob.snap({
        author: `${ob.lang.report[2]}`, 
        msg: [
        `Discord: [invite](https://discord.gg/ceJCM5Q)`,
        `**${ob.lang.report[3]}**:`,
        `${rep}`,
        ].join("\n"),
        color: "#00FF00"
    })
    const repchannel = bot.guilds.cache.find(guild => guild.name === 'A&IT').channels.cache.get('679684013434208312')
    ob.snap({
        author: 'New report.',
        msg: [
            `**From**:\n ${message.guild.name} *(ID: ${message.guild.id})*`,
            `**Member**:\n ${message.author.tag} *(ID: ${message.author.id})*`,
            `**Invite**: [link](https://discord.gg/${invite.code})`,
            `**Content**:`,
            `${rep}`,
        ].join("\n"),
        kanal: repchannel,
        thumbnail: repchannel.guild.iconURL(),
        color: "#FF0000",
    })
    
}

module.exports.help = {
    name: "report",
    aliases: ["blad", "bug"],
    description: "Do you see any error? Be sure to report it!",
    usage: "<content>",
    category: "basic",
}