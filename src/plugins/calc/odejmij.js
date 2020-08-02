const src = require('./src/src.js')
module.exports.run = async (bot, message, args, ob) => {

    if(!args[1]) return ob.snap({msg: `${ob.lang.calc[1]} \`${ob.data.prefix}help subtract\``})

    const liczby = args

    let c = ''
    let s = 0
    for(i in liczby){
        let x = Number(liczby[i])
        x = src.rp(x)
        c += `- ${x} `
        s -= Number(liczby[i])
    }

    if(isNaN(s)) return ob.snap({msg: `${ob.lang.calc[2]} Error: \`NaN\``})

    c = (c).replace('-', '')

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
    name: 'subtract',
    aliases: [''],
    description: 'Subtract numbers from the string.',
    usage: '< .. numbers >',
    category: 'calc'
}