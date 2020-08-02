module.exports.run = async (bot, message, args, ob) => {

    return ob.snap({
        msg: [
            `roboczo`,
            `Język: ${ob.lang.name}`,
            `Tłumaczenie:`,
            `${ob.lang.translate.name} , *id: ${ob.lang.translate.id}*`
        ].join("\n")
    })

}

module.exports.help = {
    name: "lang",
    aliases: ["language"],
    description: "Get information about language on this guild",
    usage: "now not have",
    category: "tools"
}