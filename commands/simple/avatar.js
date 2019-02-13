const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === ';pfp') {
    message.reply(message.author.avatarURL);
  }
});

client.login('NTQwNzQ3MzMwOTc0OTA4NDM2.DzVdkg.PgccsUvyjyHyQb2EWKBP18ASc7Y');