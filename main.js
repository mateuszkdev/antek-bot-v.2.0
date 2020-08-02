const { Collection, Client } = require("discord.js");
const database = require('./src/database/data.js')
const { readdirSync } = require('fs')
const { sep } = require('path')
const ytdl = require('ytdl-core')

const messageSpam = new Set()

const data = {
    token: database.data.token,
	prefix: database.data.prefix,
	color: database.data.color,
	perms: database.data.permissions,
	asp: messageSpam
}
const bot = new Client();

const queue = new Map();

["commands", "aliases"].forEach(x => bot[x] = new Collection());
var i = 1
const load = (dir = "./src/plugins/") => {
	
	readdirSync(dir).forEach(dirs => {
		const commands = readdirSync(`${dir}${sep}${dirs}${sep}`).filter(files => files.endsWith(".js"));
		for (const file of commands) {
				const pull = require(`${dir}/${dirs}/${file}`);
				if (pull.help && typeof (pull.help.name) === "string" && typeof (pull.help.category) === "string") {
					if (bot.commands.get(pull.help.name)) return console.warn(`Za duzo komend ma taka sama nazwe. ${pull.help.name}.`);
					bot.commands.set(pull.help.name, pull);
					console.log(`${i}. Zaladowano komende ${pull.help.name}`);
					i++
					bot.i = i
				} else {
					console.log(` Blad. Ladowania komendy w ${dir}${dirs}. Masz blad nazyw help.name albo help.name nie jest w typie string. Ewentualnie brakuje cos w help.category albo help.category nie jest w typie string.`);
					continue;
				}
				if (pull.help.aliases.forEach(alias => {
					if (bot.aliases.get(alias)) return console.warn(`dwie komendy lub wiecej, maja takie samo aliases!: ${alias}`);
					bot.aliases.set(alias, pull.help.name);
				}));
		}
	});
	
};
load();

const event = require('./src/events/events.js')
event(bot)

bot.login(data.token).catch(console.error());
module.exports.data = data
module.exports.queue = queue

/*const load = require('./src/handlers/plugins.js')
*/