const Discord = require('discord.js')
module.exports.run = async (bot, message, args, ob) => {
    
    const des = [
        `**Antek 2.0** - Work in progress on Antek Bot version **2**. 0!`,
        `Rewritten in discord.js **v.12** and with new functions for the new __structure__`,
         `Antek 1.8 is ~~still~~ hosted but soon **!**`,
         `[Discord server](https://discord.gg/ceJCM5Q)`,
    ].join("\n")


    return ob.snap({
        author: 'Informacion: Antek 2.0 Beta',
        msg: des,
        })

}

module.exports.help = {
    name: "info",
    aliases: ["informacje"],
    description: "Informacion about Antek v2 Beta",
    usage: "",
    category: "information",
}