const src = require('./src/src.js')
module.exports.run = async (bot, message, args, ob) => {

    const l1 = parseFloat(args.slice(0))
    const l2 = parseFloat(args.slice(1))

    const _1 = src.rp(l1)
    const _2 = src.rp(l2)

    const s = l1 / l2 
    const c = `${_1} : ${_2}`

    if(isNaN(s)) return ob.snap({msg:  `${ob.lang.calc[2]} Error: \`NaN\``})
    if(l2 == 0) return ob.snap({msg: `${ob.lang.calc[5]}`})

    ob.snap({
        msg: [
            `**${ob.lang.calc[3]}**:`,
            `\`${c} =\``,
            `**${ob.lang.calc[4]}**:`,
            `${s}`,
        ].join('\n')
    })

}

module.exports.help = {
    name: 'divide',
    aliases: [''],
    description: 'Divide two numbers.',
    usage: '<number 1> <number 2>',
    category: 'calc'
}