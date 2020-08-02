const request = require('request')
module.exports.run = async (bot, message, args, ob) => {

    request(
        `https://aws.random.cat/meow`,
        function(error, response, body){
            let json = JSON.parse(body)
            if(json.error) return ob.snap({msg: `Body error: ${json.error}`})

            return ob.snap({
                image: json.file
            })
        }
    
    )

}

module.exports.help = {
    name: 'meow',
    aliases: ["cat"],
    description: 'Random photo of a cat',
    usage: '',
    category: 'picture',
}