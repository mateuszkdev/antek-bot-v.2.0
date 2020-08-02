const polski = require('./src/pl.json')
const angielsi = require('./src/en.json')
const lang = {
    pl: polski,
    en: angielsi
}
module.exports = (message) => {

    //roboczo bez sql -> do przerobienia

    return lang.pl
    
}
module.exports.lang = lang
