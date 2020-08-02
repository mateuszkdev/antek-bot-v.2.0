module.exports.run = async (bot, message, args, ob) => {

    const src = ob.lang.Oball[1]

    if(!args[2]) return ob.snap({msg: `${ob.lang.Oball[2]} \`${ob.data.prefix}help 8ball\`\n${ob.lang.Oball[3]}`})
    const result = Math.floor((Math.random() * src.length))
    const pytanie = args.slice(0).join(" ")
    return ob.snap({
        msg: [
            `**${ob.lang.Oball[4]}**: \`${pytanie}\`\n`,
            `**${ob.lang.Oball[5]}**: \`${src[result]}\``,
        ].join('\n')
    })
}

module.exports.help = {
    name: "8ball",
    aliases: ["question"],
    description: "ask me a question! I'll answer",
    usage: '<question',
    category: "fun",
}