const Discord = require('discord.js')
module.exports = (message, prefix) => async function snap(data){

    data = await Object.assign({
        title: '',
        thumbnail: null,
        image: null,
        footer: message.author.tag,
        author: [``, null],
        title: '',
        url: null,
        msg: '',
        kanal: message.channel,
        czas: undefined,
        color: '#99CCCC'
    }, data)

    const embed = new Discord.MessageEmbed()
        .setTitle(data.title)
        .setThumbnail(data.thumbnail)
        .setImage(data.image)
        .setFooter(data.footer)
        .setAuthor(data.author)
        .setTitle(data.title)
        .setURL(data.url)
        .setDescription(data.msg)
        .setTimestamp()
        .setColor(data.color);
        return message.channel.send(embed)
}

/*module.exports = (message, bot, data) => function snap(title ,description){
    this.title = title
    this.opis = description
    const embed = {
        author: {
            name: this.title,
            icon_url: bot.user.displayAvatarURL
        },
        description: this.opis,
        timestamp: new Date(),
    }
    return message.channel.send({embed: embed})
}*/