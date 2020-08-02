module.exports.run = async (bot, message, args, ob) => {

    const osoba = message.mentions.members.first()

    if(!osoba) return ob.snap({msg: `${ob.lang.kiss[1]} \`${ob.data.prefix}help kiss\``})

    return ob.snap({
        msg: `${message.author} ${ob.lang.kiss[2]} ${osoba.user}`
    })

}

module.exports.help = {
    name: "kiss",
    aliases: [""],
    description: "Kiss someone",
    usage: "<@mention>",
    category: "fun",
}