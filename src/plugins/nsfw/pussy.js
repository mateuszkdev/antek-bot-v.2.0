const request = require('request')
const wh = require('./src/whitelist.js')
module.exports.run = async (bot, message, args, ob) => {

    
    if(!wh.includes(message.author.id)) return ob.snap({msg: 'Nie jestes na białej liście nsfw'})

    if(!message.channel.nsfw) return ob.snap({msg: 'Ten kanal nie jest nsfw'})
    request(
        `https://nekos.life/api/v2/img/pussy`,
        function(error, response, body){
            let json = JSON.parse(body)
            if(json.error) return ob.snap({msg: `Body error: ${json.error}`})

            return ob.snap({
                image: json.url
            })
        }
    
    )

}

module.exports.help = {
    name: 'pussy',
    aliases: ["pusy"],
    description: 'Random photo of a pussy',
    usage: '',
    category: 'nsfw',
}