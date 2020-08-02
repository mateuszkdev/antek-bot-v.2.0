const Discord = require('discord.js')
module.exports.run = async (bot, message, args, ob) => {

    const who = message.mentions.members.first() || message.member 
    if(!who) return snap({msg: `${ob.lang.avatar[1]}`})


    const png = who.user.displayAvatarURL().replace('.webp', '.png?size=2048')

    return ob.snap({
        image: png,
        msg: `${who.user.tag} ${ob.lang.avatar[2]} [link](${who.user.displayAvatarURL()}) | [png](${png})`,
    })
}

module.exports.help = {
    name: "avatar",
    aliases: ["zdjecie", "zdj"],
    description: "Member display avatar",
    usage: "(@wmention)",
    category: "tools",
}