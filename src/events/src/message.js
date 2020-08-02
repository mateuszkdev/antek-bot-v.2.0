const main = require('../../../main.js')
const data = main.data
const prefix = data.prefix
const snapEmbed = require('../../constructor/embed.js')
const globalchat = require('./globalchat.js')
const queue = main.queue
const wh = require('./whitelist.js')
const { MessageEmbed } = require('discord.js')
const http = require('../../constructor/request.js')
const sql = require('../../database/sql/db.js')
module.exports = msg = async(bot, message) => {

    /*if(message.author.id === '264133199381266436'){
       return message.delete()
        /*let XD = await message.channel.send('> XD')
        setTimeout(() => {
            XD.delete()
        }, 2000);
    }*/

	const db = sql(message)

    const whatlanguage = require('../../lang/handler.js')
    const lang = whatlanguage(message)

    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const cmd = args.shift().toLowerCase();
    let command;

    if (message.author.bot || !message.guild) return;


    if(message.guild.id != '686214837499330573'){
        globalchat(message)
    }

    //const antyspam = require('./anty-spam.js')
    //antyspam(message, data)



    if (!message.member) message.member = await message.guild.fetchMember(message.author);
    if (!message.content.startsWith(prefix)) return;

    //const nowh = new MessageEmbed().setDescription(/*lang.message[1]*/"**Close beta** \n This server is not whitelisted \n **Zamknięta BETA** \n Ten serwer nie jest na whitelist \n\n [Contact witch owner here / Skontaktuj sie z właścicielem tutaj](https://discord.gg/ceJCM5Q)")
   //if(message.author.id != '395266229436153868'){
    //    if(!wh.includes(message.guild.id)) return message.channel.send(nowh)
    //}
    
    if (cmd.length === 0) return message.channel.send(prefix + lang.message[2] + prefix + lang.message[3]);

    const snap = snapEmbed(message, data.prefix, command)

    if (bot.commands.has(cmd)) command = bot.commands.get(cmd);
    else if (bot.aliases.has(cmd)) command = bot.commands.get(bot.aliases.get(cmd));
    else return snap({msg: `${lang.message[4]} **${data.prefix}${lang.message[5]}`})

    const ob = {snap: snap, data: data, http: http, lang: lang, db: db}
	if (command) command.run(bot, message, args, ob);

}
