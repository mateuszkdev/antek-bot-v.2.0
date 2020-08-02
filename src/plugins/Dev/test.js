module.exports.run = async (bot, message, args, ob) => {


    return ob.snap({
        msg: ob.lang.test[1]
    })


}

module.exports.help = {
    name: 'test',
    aliases: ["ttttt"],
    description: 'not',
    usage: '',
    category: "Dev"
}