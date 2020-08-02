module.exports.run = async (bot, message, args, ob) => {
    const whitelist = ["395266229436153868", "355347763271041024"]

    //if(whitelist.includes(message.author.id))

    
    if(!whitelist.includes(message.author.id)) return ob.snap({msg: 'You dont have permission to that! Required bot owner id or owner must **like** you.'})

    const command = args.slice(0).join(" ")
    if(!command) return ob.snap({msg: 'Podaj kod `usage: kod w js`'})

    try{
        let result = [
            "**Kod JS:**",
            ` \`\`\` ${command} \`\`\` `,
            "**Rezultat:**",
            ` \n\`\`\`js\n ${eval(command)}\n \`\`\` `
        ].join('\n')
    
        return ob.snap({
            msg: result,
        })
    }catch(e){
        return ob.snap({
            msg: `\`\`\`js\n.. catch(e) {
${e}
    
}\n\`\`\``
        })
    }
}
module.exports.help = {
    name: "eval",
    aliases: [""],
    description: "Eval",
    usage: "kod w js",
    category: "Dev",
}