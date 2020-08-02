module.exports.run = async (bot, message, args, ob) => {

    if(!message.member.permissions.has('ADMINISTRATOR')) return ob.snap({ msg:  `${ob.lang.basic.noperms} \`ADMINISTRATOR\` `})

    const name = args.slice(0).join(" ")
    if(!name) return ob.snap({msg: `${ob.lang.clonechannel[1]} \`${ob.data.prefix}help clone\``})

    message.channel.clone({name: name})

    return ob.snap({
        author: `${ob.lang.clonechannel[2]}`,
        msg: `${ob.lang.clonechannel[3]} \`${name}\``
    })

}

module.exports.help = {
    name: "clone",
    aliases: ["klonuj"],
    description: "Make message channel clone.",
    usage: "<name>",
    category: 'admin',
}