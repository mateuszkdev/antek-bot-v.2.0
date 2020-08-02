const src = require('./src/setupsrc.js')
module.exports.run = async (bot, message, args, ob) => {

    if(!message.member.permissions.has("ADMINISTRATOR")) return ob.snap({msg: 'You need `ADMINISTRATOR` permission to that!'})

    const funcs = {
            help: src.helps(message, ob),
            basic: src.basic(message, ob)
    }

    const types = args.slice(0)
    if(!types) return ob.snap({msg: 'Enter type of acction! `a!setup help'})

    if(types == 'help'){
        funcs.help();
    } else if (types == 'basic'){
        funcs.basic()
    }
    else return ob.snap({msg: 'I dont have this category.. Enter `a!setup help`'})
}

module.exports.help = {
    name: "setup",
    aliases: [''],
    description: "Setup your guild! Enter 'help' as first arg",
    usage: '<usage> <args>',
    category: 'admin'
}