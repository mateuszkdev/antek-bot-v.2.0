module.exports.run = async (bot, message, args, ob) => {

    const user = message.mentions.members.first() || message.member 
    return ob.snap({
        author: `ID: ${user.user.tag}`,
        msg: user.user.id,
    })
}

module.exports.help = {
    name: "id",
    aliases: ["identyfikator"],
    description: "Id acount",
    usage: "(@mention)",
    category: "tools",
}