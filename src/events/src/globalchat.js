const Discord = require('discord.js')
module.exports = async (message) => {

    let url = ''

    message.attachments.forEach(a => {
        console.log(a.attachment)
        url = a.attachment
    })

    if(message.content.includes('@everyone') || message.content.includes('@here')) return 
    
    
    const weebhook = new Discord.WebhookClient('690238468403625991', 'ojojoj')
    
    if(url == ""){
    weebhook.send(`${message.content}`, {
        username: `${message.author.tag} (${message.guild.name})`,
        avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`,
    })
    }else{
        weebhook.send(`${message.content}`, {
            username: `${message.author.tag} (${message.guild.name})`,
            avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`,
            files: [url]
    })

    }
}
