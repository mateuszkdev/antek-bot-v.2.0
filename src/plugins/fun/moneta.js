module.exports.run = (bot, messages, args, ob) => {

    const replies = [`${ob.lang.coin[1]}`, `${ob.lang.coin[2]}`]

    const result = Math.floor((Math.random() * replies.length))

    const mMember = messages.mentions.members.first()

    if(!mMember){
        return ob.snap({
            author: `${ob.lang.coin[5]}`,
            msg: `\`${replies[result]}\``,
        })
    } else {
        const wartosc = Math.floor((Math.random() * 600 ) + 1 )
        return ob.snap({
            author: `${mMember.user.tag} ${ob.lang.coin[3]}:`,
            msg: `**$${wartosc} ${ob.lang.coin[4]}**`,
        })
    }

}

module.exports.help = {
    name: "coinflip",
    aliases: ["moneta"],
    description: "Flip a coin!",
    usage: '(@mention)',
    category: "fun",
}