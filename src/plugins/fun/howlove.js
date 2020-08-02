module.exports.run = async (bot, message, args, ob) => {

    const user = message.mentions.users.first()
    if(!user) return ob.snap({
                        msg: `${ob.lang.howlove[1]}, \`${ob.data.prefix}help howlove\``,
                    })
    
    let procent = Math.floor((Math.random()*70)+10)
    const des = [
        `**UwU** ${user} ${ob.lang.howlove[2]}`,
        `\\>> **${procent}%** <<`,
    ].join("\n")
    return ob.snap({
        author: `${ob.lang.howlove[3]}`,
        msg: des,
    })

}

module.exports.help = {
    name: "howlove",
    aliases: ["jakkochany"],
    description: "Check how much% someone loves you.",
    usage: "<@mention>",
    category: "fun",
}