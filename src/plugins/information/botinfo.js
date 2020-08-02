module.exports.run = async (bot, message, args, ob) => {

    const res = [
                `${ob.lang.botinfo[1]} ${bot.user.tag} ${ob.lang.botinfo[2]}`,
                `${ob.lang.botinfo[3]}`,
                `${ob.lang.botinfo[4]} ${bot.user.id} [${ob.lang.botinfo[5]}](https://discord.gg/ceJCM5Q)`,
                `${ob.lang.botinfo[6]} **Mateusz*\`#4711\` ${ob.lang.botinfo[7]}`,
                `${ob.lang.botinfo[8]}`,
                `${ob.lang.botinfo[9]}`
            ].join ( '\n')

    return ob.snap({
        author: bot.user.tag + `${ob.lang.botinfo[10]}`,
        thumbnail: bot.displayAvatarURL,
        msg: res,
        footer: ob.data.prefix+`${ob.lang.botinfo[11]}`
    })

}

module.exports.help = {
    name: "botinfo",
    aliases: ["infoobocie"],
    description: "Informacion about bot",
    usage: "",
    category: "information",
}