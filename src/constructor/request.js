const request = require('request')
module.exports = class http{
    constructor(url){

            this.url = url

            request(
                this.url,
                function(error, response, body){
                    let json = JSON.parse(body)
                    if(json.error) return console.log('err' + json.error)
                    
                    return JSON.parse(body)
                }
            )

    }
}