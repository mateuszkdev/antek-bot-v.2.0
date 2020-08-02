const request = require('request')
module.exports.run = async (bot, message, args, ob) => {

    request(
        `https://random.dog/woof.json`,
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
    name: 'dog',
    aliases: ["woof"],
    description: 'Random photo of a dog',
    usage: '',
    category: 'picture',
}