module.exports.run = async (bot, message, args, ob) => {

    let min = parseFloat(args.slice(0))
    let a = Number(min)
    let max = parseFloat(args.slice(1))
    let b = Number(max)

    if(!a || !b) return ob.snap({msg: `${ob.lang.random[1]} \`${ob.data.prefix}help random\``})

    if(isNaN(a) || isNaN(b)) return ob.snap({msg: `${ob.lang.random[2]} \`${ob.data.prefix}help random\``})

    const wynik = Math.floor((Math.random() * b ) + a )

    return ob.snap({
        author: `${ob.lang.random[3]}`,
        msg: `${ob.lang.random[4]} **${a}** ${ob.lang.random[5]} **${b}**: \n**${wynik}**`
    })
}

module.exports.help = {
    name: 'random',
    aliases: ['randomnumber', 'losowa', 'losowaliczba'],
    description: 'Rndom number from min to max',
    usage: '<min> <max>',
    category: 'fun',
}