module.exports.run = async (bot, message, args, ob) => {
 
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return ob.snap({msg: ob.lang.basic.noperms + '`MANAGE_MESSAGES`'})
    const x = args[0]
    if(!x) return ob.snap({msg: `${ob.lang.clear[1]}`})
    const y = Number(x)
    if(isNaN(y)) return ob.snap({msg: `${ob.lang.clear[2]}` + '`NaN`'})
    message.channel.bulkDelete(y+1)
    await   ob.snap({
                msg: `${ob.lang.clear[3]} \`${y}\` ${ob.lang.clear[4]}`,
            })

}

module.exports.help = {
    name: "clear",
    aliases: ["wyczysc", "cl", "prune"],
    description: "Delete x messeges from message channel",
    usage: "<number>",
    category: "moderation",
}