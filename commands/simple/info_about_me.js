const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoAboutMeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Learn about me!'
        });
    }

    async run(message, args) {
        var myInfo = new discord.RichEmbed()
            .addField("About Me", "Hello, I am Kryptik. My owner's name is Chad, he is 16 and he is from the USA. If you find any errors, please contact the owner, chad#7134")
            .addField("My Functions", "If you ever need help, please say !help and I will send you a DM with my information")
            .setColor("0x0c3ff")
            .setThumbnail("https://cdn.discordapp.com/avatars/540747330974908436/5ce7df2bdd8bb6f6dce603d5de6261d6.png?size=256")
            .setFooter("Thanks for reading! Hope you find this bot useful!")

        message.channel.sendEmbed(myInfo);
    }
}

module.exports = InfoAboutMeCommand;