module.exports.run = async (bot, message, args, ob) => {

    if(!message.member.permissions.has("MANAGE_CHANNELS")) return ob.snap({msg: `${ob.lang.basic.noperms} \`MANAGE_CHANNELS\``})
        const arg = args.slice(0).join(" ")

        if(!arg) return ob.snap({msg: `${ob.lang.channel[1]}`})

        message.channel.setName(arg)
        return ob.snap({
            author: `${ob.lang.channel[2]}`,
            msg: `${ob.lang.channel[3]} \n \`${arg}\``,
        })

}

module.exports.help = {
    name: 'channel',
    aliases: ["kanal"],
    description: 'Change message channel name',
    usage: '<new name>',
    category: 'admin',
}