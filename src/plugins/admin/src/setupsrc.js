module.exports.helps = (message, ob) => async function help(){
    return ob.snap({
        author: 'Setup help',
        footer: 'Antek setup plugin',
        msg: [
            `**Functions**:`,
            `\`basic\` -> Create basic channels and roles on your guild`,
            
            `**Usage**:`,
            `${ob.data.prefix}setup <function> (args?)`,
            `Simple usage: *a!setup basic*`,
        ].join('\n')
    })
}

module.exports.basic = (message, ob) => async function channels_basic(){
    let total = ''
    message.guild.channels.create('basic', {type: 'category'})
    total += '*Added ? for ? to ? \n'
    message.guild.channels.create('hesssllo', {type: 'text', topic: 'Notification about join and leave', position: 1, })
    total += '*Added Hello channel for handling join and leave events. \n'
    message.guild.channels.create('rules', {type: 'Server rules', topis: 'Rules in this guild! Do not broke!'})
    total += '*Added rules channel, add rules!'

    return ob.snap({
        author: 'Basic server setup',
        msg: `Succesfull setup this server to basic type!\n**Actions**:\n${total}`,
        color: '#00ff00',
        footer: 'Antek setup plugin'
    })
}