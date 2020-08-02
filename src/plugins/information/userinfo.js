module.exports.run = async (bot, message, args, ob) => {

    const mMember = message.mentions.members.first() || message.member

    let perms = false
    if (args.includes('-perms')) {
        args = args.filter(function(arg){
          return arg != '-perms'
        })
        perms = true
      }

      if (!mMember) {
        mMember = message.guild.members.cache.find(user => user.id === args.slice(1))
        mMember = mMember.member
      }
      if (!mMember) {
          return ob.snap({
              msg: `${ob.lang.userinfo[1]}`
          })
      }

      let i = 1
      let permissions = []
      if (perms) {
        const serial = mMember.permissions.serialize()
        for (let permission in serial) {
          if (serial[permission]) {
            permissions.push(`**${i}.** \`${permission.replace(/_/g, ' ')}\``)
              i++
          }
        }
      }

      if(perms){
          return ob.snap({
              author: `${ob.lang.userinfo[2]} ${mMember.user.tag}`,
              msg: permissions.join('\n')
          })
      } else {
        let status = {
            online: `${ob.lang.userinfo[3]}`,
            idle: `${ob.lang.userinfo[4]}`,
            dnd: `${ob.lang.userinfo[5]}`,
            offline: `${ob.lang.userinfo[6]}`
        }

        const ins = mMember.user.presence.activities ? `\`${mMember.user.presence.activities}\`` : '`Nigdzie`'

        const ms = [
            `**${ob.lang.userinfo[7]}**: ${mMember.user.username}`,
            `**${ob.lang.userinfo[8]}**: ${mMember}`,
            `**${ob.lang.userinfo[9]}**: ${mMember.user.id}`,
            `**${ob.lang.userinfo[25]}**: ${mMember.user.tag}`,
            `**${ob.lang.userinfo[10]}**: ${mMember.nickname ? mMember.nickname : `\`${ob.lang.userinfo[11]}\``}`,
            `**${ob.lang.userinfo[12]}**: \`${mMember.displayHexColor}\``,
            `**${ob.lang.userinfo[13]}**: \`${mMember.bannable ? `\`${ob.lang.userinfo[14]}\`` : `\`${ob.lang.userinfo[15]}\``}\``,
            `**${ob.lang.userinfo[16]}**: ${status[mMember.user.presence.status]}`,
            `**${ob.lang.userinfo[17]}**: ${mMember.presence.activities ? mMember.presence.activities : `${ob.lang.userinfo[18]}`}`,
            `**${ob.lang.userinfo[19]}**: ${mMember.user.bot ? `\`${ob.lang.userinfo[20]}\`` : `\`${ob.lang.userinfo[21]}\``}`,
            `**${ob.lang.userinfo[22]}**: ${mMember.lastMessage ? mMember.lastMessage : `\`${ob.lang.userinfo[23]}\``}`,
           // `**Role**: ${mMember.user.roles.get(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Brak ról"}`,

        ].join('\n')

        const png = mMember.user.displayAvatarURL().replace('.webp', '.png?size=2048')
        return ob.snap({
            author: `${mMember.user.tag} ${ob.lang.userinfo[24]}`,
            msg: ms,
            thumbnail: png,
        })
      }

}

module.exports.help = {
  name: 'whois',
  aliases: ['userinfo'],
  description: 'User information \n Add the `-perms` flag to see its permissions.',
  usage: '<@mention / id> (`-perms`)',
  category: 'information',
}