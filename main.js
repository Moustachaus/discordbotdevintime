const Discord = require('discord.js');
const token = process.env.toek;

var bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Bot Ready");
});

bot.login(token).catch(err => console.log(err));