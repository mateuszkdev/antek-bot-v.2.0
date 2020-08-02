const { readdirSync } = require("fs");
const { sep } = require("path");
module.exports = load = async (dir) => {
	readdirSync('./').forEach(dirs => {
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
}