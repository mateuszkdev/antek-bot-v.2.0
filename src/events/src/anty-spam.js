const { MessageEmbed } = require('discord.js')
module.exports = (message, data) => {

    const badWords = [
        'kurwa',
        'chuj',
        'pierdole',
        'spierdalaj',
        'fuck',
        'kurw',
        'pierd',
        'fuckoff'
      ];
    
      let word = message.content.toLowerCase().trim().match(/\w+|\s+|[^\s\w]+/g)
      let wykrywacz  = word.some(word => {
          return badWords.includes(word)
      })

      if(wykrywacz){
          message.delete()
          return message.channel.send(new MessageEmbed().setDescription(`${message.author} nie przeklinaj!`))
      }

    const messageSpam = data.asp

    if(messageSpam.has(message.author.id)){
        message.channel.send(new MessageEmbed().setDescription(' Nie spam!'))
        setTimeout(() => {
            message.channel.send(new MessageEmbed().setDescription(` ${message.author} pamiętaj żeby nie spamić!`))
        }, 6000)
    }

    messageSpam.add(message.author.id)
    setTimeout(() => {
        messageSpam.delete(message.author.id)
    }, 500);

}