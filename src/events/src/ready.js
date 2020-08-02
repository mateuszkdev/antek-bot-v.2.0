module.exports = ready = (bot) => {
    bot.user.setActivity('a!help', { type: "LISTENING"})
    console.log("Zalogowano!");
}