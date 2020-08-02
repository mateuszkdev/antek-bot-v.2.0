const request = require('request')
module.exports.run = async(bot, message, args, ob) => {
    
    const arg = args.slice(0).join(" ")

    if(arg){
        request(
            `https://corona.lmao.ninja/countries/${arg}`,
            function(error, response, body){
                let json = JSON.parse(body)
                if(json.error) return ob.snap({msg: `Body error: ${json.error}`})
    
                return ob.snap({
                    author: 'Coronavirus COVID-19 information - '+json.country,
                    msg: [
                        `**${ob.lang.corona[1]}**: \`${json.cases}\`\n`,
                        `**${ob.lang.corona[2]}**: \`${json.deaths}\`\n`,
                        `**${ob.lang.corona[3]}**: \`${json.recovered}\`\n`,
                        `**${ob.lang.corona[7]}**: \`${json.todayCases}\`\n`,
                        `**${ob.lang.corona[8]}**: \`${json.todayDeaths}\`\n`,
                        `**${ob.lang.corona[4]}**: \`${json.active}\`\n`,
                        `**${ob.lang.corona[5]}**: \`${json.critical}\`\n`,
                        `**${ob.lang.corona[6]}**: \`${json.casesPerOneMillion}\`\n`
                    ].join('\n')
                })
            }
        
        )
    } else {
    request(
        `https://corona.lmao.ninja/all`,
        function(error, response, body){
            let json = JSON.parse(body)
            if(json.error) return ob.snap({msg: `Body error: ${json.error}`})

            return ob.snap({
                author: 'Coronavirus COVID-19 information - Global',
                msg: [
                    `**${ob.lang.corona[1]}**: \`${json.cases}\`\n`,
                    `**${ob.lang.corona[2]}**: \`${json.deaths}\`\n`,
                    `**${ob.lang.corona[3]}**: \`${json.recovered}\`\n`,
                ].join('\n')
            })
        }
    
    )
    }
}


module.exports.help = {
    name: 'corona',
    aliases: ["virus"],
    description: "Infomation about corona virus",
    usage: '(country?)',
    category: 'information'
}