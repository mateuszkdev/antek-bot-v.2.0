const { readdirSync } = require('fs')
module.exports.run = (bot, message, args, ob) => {

    if(args[0]){

        if(args[0] == 'all'){
            let total = ''
            const categories = readdirSync("./src/plugins")
            categories.forEach(category => {
                const dir = bot.commands.filter(c => c.help.category.toLowerCase() === category.toLowerCase())
                const capitalise = category
                try{
                    let j = 0
                    if(dir.size === 0) return
                    if(category !== "Dev") {
                        for(j in dir){
                            j++
                        }
                       // kom += dir.map(c => `\`${c.help.name}\``, j++).join(', ')
                        //kat += `\n** ${capitalise}** (${j})\n`
                        total += (`\n** ${capitalise}**    \n` + dir.map(c => `\`${c.help.name}\``).join(", "))
                        //total += kat + kom
                    }
                }catch(e){
                    console.log(e)
                }
            })
            return ob.snap({
                author: `${ob.lang.help[1]} (${bot.i})`,
                msg: total,
                footer: `${ob.data.prefix}${ob.lang.help[2]}`
            })
        }


        let command = args[0]
        let cmd
       const plugins = readdirSync('./src/plugins')
        if(plugins.includes(command)){
                var dir
                let total
            plugins.forEach(plugin => {
                dir = bot.commands.filter(c => c.help.category.toLowerCase() === command.toLowerCase())
                total = dir.map(c => `\`${c.help.name}\``).join(', ')
            })

            return ob.snap({
                author: `${ob.lang.help[3]} ${command}`,
                msg: total
            })

        } else if(bot.commands.has(command)) {
            cmd = bot.commands.get(command)
        } else if(bot.aliases.has(command)){
            cmd = bot.commands.get(bot.aliases.get(command))
        }
        if(!cmd){
            return ob.snap({
                msg: `${ob.lang.help[4]} \`${ob.data.prefix} ${ob.lang.help[5]}\``
            })
        }
        return ob.snap({
            author: `${cmd.help.name.slice(0, 1).toUpperCase() + cmd.help.name.slice(1)} ${ob.lang.help[14]}`,
            msg: [
                `**${ob.lang.help[6]}**: ${cmd.help.name.slice(0, 1).toUpperCase()+ cmd.help.name.slice(1)}`,
                `**${ob.lang.help[7]}**: ${cmd.help.usage ? `\`${ob.data.prefix}${cmd.help.name} ${cmd.help.usage}\`` : `${ob.lang.help[9]}`}`,
                `**${ob.lang.help[8]}**: ${cmd.help.aliases ? cmd.help.aliases.join(', ') : `${ob.lang.help[9]}`}`,
                `**${ob.lang.help[10]}**: ${cmd.help.description ? cmd.help.description : `${ob.lang.help[1]}`}`,
                `**${ob.lang.help[12]}**: \`${cmd.help.category ? cmd.help.category : `${ob.lang.help[13]}`}\``,
            ].join('\n')
        })
    }
    const categories = readdirSync('./src/plugins')
    let j = 0
    let total = ''
    categories.forEach(category => {
        const dir = bot.commands.filter(c => c.help.category.toLowerCase() === category.toLowerCase())
        const capitalise = category
        try{
                
                if(dir.size === 0) return 
                if(category !== 'Dev'){
                total += `**${capitalise}** - \`${ob.data.prefix}${ob.lang.help[14]} ${capitalise}\` \n\n`
                j++

            }
        }catch(e){
            console.warn(e)
        }
    })
    total += `[Dodaj mnie](https://discordapp.com/oauth2/authorize?client_id=544180497522098177&permissions=8&scope=bot)`
    return ob.snap({
        author: `${ob.lang.help[15]} (${j}) | ${ob.lang.help[1]} (${bot.i})`,
        msg: total,
        footer: `${ob.data.prefix}${ob.lang.help[5]}`,
    })
}

module.exports.help = {
    name: "help",
    aliases: ["h", "p", "pomoc"],
    description: 'Plugins and commands list',
    usage: '<plugin / command>',
    category: 'basic',
}
