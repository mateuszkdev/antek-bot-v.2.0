module.exports.run = async (bot, mesage, args, ob) => {

    if(args.length < 1) return ob.snap({msg: `${ob.lang.reverse[1]} \`${ob.data.prefix}help reverse\``})

    return ob.snap({
        msg: args.join(' ').split('').reverse().join(''),
    })

}

module.exports.help = {
    name: "reverse",
    aliases: [""],
    description: "reverse",
    usage: "<text>",
    category: "fun",
}