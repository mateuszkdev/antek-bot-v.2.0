const request = require('request')
module.exports.run = async (bot, message, args, ob) => {

    request(
        `https://randomfox.ca/floof/`,
        function(error, response, body){
            let json = JSON.parse(body)
            if(json.error) return ob.snap({msg: `Body error: ${json.error}`})

            console.log(json)
            return ob.snap({
                image: json.image
            })
        }
    
    )

}

module.exports.help = {
    name: 'fox',
    aliases: ["floof"],
    description: 'Random photo of a fox',
    usage: '',
    category: 'picture',
}