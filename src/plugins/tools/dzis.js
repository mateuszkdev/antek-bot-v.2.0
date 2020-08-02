const data_switch = require('./src/data_switchs.js')
const ds = data_switch
module.exports.run = async (bot, message, args, ob) => {

    const now = new Date()

    const des = [
        `${ds.sd(now.getDay())} ${ds.rn(now.getDate())} ${ds.sm(now.getMonth())} ${now.getFullYear()} `,
        `**${ds.rn(now.getHours())}**:**${ds.rn(now.getMinutes())}**:${ds.rn(now.getSeconds())} `,
    ].join('\n')

    return ob.snap({author: `${ob.lang.today[1]}`, msg: des})

}

module.exports.help = {
    name: "today",
    aliases: ["dzis"],
    description: "Informacion about today",
    usage: "",
    category: "tools",
}