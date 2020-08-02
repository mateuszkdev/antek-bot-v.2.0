module.exports.run = async (bot, message, args, ob) => {

    let role = message.mentions.roles.first()
    let perms = false
  
    if (args.includes('-perms')) {
      args = args.filter(function(arg){
        return arg != '-perms'
      })
      perms = true
    }

    if (!role) role = message.guild.roles.cache.find(role => role.name === args.join(' '))
    if (!role) role = message.guild.roles.cache.find(role => role.id === args.join(' '))
    if (!role) {
        return ob.snap({
            msg: `${ob.lang.role[1]}`
        })
    }
    let i = 1
    let permissions = []
    if (perms) {
      const serial = role.permissions.serialize()
      for (let permission in serial) {
        if (serial[permission]) {
          permissions.push(`**${i}.** \`${permission.replace(/_/g, ' ')}\``)
            i++
        }
      }
    }

        if(!perms){
            let ms = [
                `**${ob.lang.role[2]}**: ${role.id}`,
                `**${ob.lang.role[3]}**: ${role.name}`,
                `**${ob.lang.role[4]}**: ${role.hoist ? `\`${ob.lang.role[5]}\`` : `\`${ob.lang.role[6]}\``}`,
                `**${ob.lang.role[7]}**: ${role.hexColor}`
            ].join('\n')
            return ob.snap({
                author: `${ob.lang.role[8]} ${role.name}`,
                msg: ms,
                thumbnail: `https://dummyimage.com/250/${role.hexColor.slice(1)}/&text=%20`
            })
        } else if (perms) {
            return ob.snap({
                author: `${role.name} ${ob.lang.role[9]}`,
                msg: permissions.join('\n')
            })
        }
    
}

module.exports.help = {
    name: "role",
    aliases: ["roleinfo"],
    description: 'Informacion about role. Enter \'-perms\' flag to see role permissions',
    usage: "<role @mention / id / name >",
    category: "tools",
}