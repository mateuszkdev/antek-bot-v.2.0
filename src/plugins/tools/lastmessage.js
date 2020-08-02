module.exports.run = async (bot, message, args, ob) => {
 
    const who = message.mentions.members.first()
    if(!who) return ob.snap({msg: `${ob.lang.lastmessage[1]} \`${ob.data.prefix}help lastseen\``})
    if(who.id == message.author.id) return snap({msg: `${ob.lang.lastmessage[2]}`})
    let lastseen = Date.now() - who.lastMessage.createdAt
    let seconds = lastseen/1000
    let days = parseInt(seconds/86400)
    seconds = seconds % 86400
    let hours = parseInt(seconds/3600)
    seconds = seconds % 3600
    let minutes = parseInt(seconds/60)
    seconds = parseInt(seconds % 60)

    lastseen = `${seconds}${ob.lang.lastmessage[8]}`
    if(days){
        lastseen = `${days}${ob.lang.lastmessage[5]} ${hours}${ob.lang.lastmessage[6]} ${minutes}${ob.lang.lastmessage[7]} ${seconds}${ob.lang.lastmessage[8]}`
    } else if (hours){
        lastseen = `${hours}${ob.lang.lastmessage[6]} ${minutes}${ob.lang.lastmessage[7]} ${seconds}${ob.lang.lastmessage[8]}`
    } else if (minutes){
        lastseen = `${minutes}${ob.lang.lastmessage[7]} ${seconds}${ob.lang.lastmessage[8]}`
    }
    return ob.snap({
        author: `${ob.lang.lastmessage[3]} ${who.user.tag}`,
        msg: `${lastseen} ${ob.lang.lastmessage[4]}`,
    })
}

module.exports.help = {
    name: "lastseen",
    aliases: ["seen"],
    description: "Informacion about member last message timestamp.",
    usage: "<@mention>",
    category: "tools",
}