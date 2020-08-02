module.exports.run = async (bot, message, args, ob) => {
    const uzycie = `\`\`\`${ob.data.prefix}liczby <liczba1> <liczba2>\`\`\``
    let n1 = parseFloat(args.slice(0))
    let n2 = parseFloat(args.slice(1))
    if(!n1 || !n2) return ob.snap({msg: `${ob.lang.numbers[1]} \`${ob.data.prefix}help numbers\``})
    if(isNaN(n1) || isNaN(n2)) return ob.snap({msg: `${ob.lang.numbers[2]}`})

    if(n2 < n1 || n2 == n1) return ob.snap({msg: `${ob.lang.numbers[3]}`})

    if(n1 <-200 || n1 > 200 || n2 <-200 || n2 > 200) return ob.snap({msg: `${ob.lang.numbers[4]}`})

    const roznica = n2 - n1
    const suma = n1 + n2
    const iloraz = n1 / n2
    const iloczyn = n1 * n2
    let napis = ""
    for(i=n1; i<=n2; i++){
        napis += `${i}, `
    }
    const des = [`${ob.lang.numbers[5]} ${roznica}`, `${ob.lang.numbers[6]} ${suma}`, `${ob.lang.numbers[7]} ${iloraz}`, `${ob.lang.numbers[8]} ${iloczyn}`,`**${ob.lang.numbers[9]}**:`, napis].join("\n")
    return ob.snap({
        author: `${ob.lang.numbers[9]}`,
        msg: des,
    })
}

module.exports.help = {
    name: "numbers",
    aliases: ["liczby"],
    description: "Provide two numbers and see information.",
    usage: "<number 1> <number 2>",
    category: "fun",
}