const commando = require('discord.js-commando');

class BanCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'ban',
            group: 'moderation',
            memberName: 'ban',
            description: 'Bans an user'
        }); 
    }

    async run(message, args)
    {
        let bannedUser = message.guild.member(message.mentions.users.first());
        if(!bannedUser)
        {
            message.channel.send("Sorry, I couldn't find that user");
            return;
        }
        if(message.member.hasPermissions("BAN_MEMBERS"))
        {
            message.channel.send("You don't have privileges to ban other users!")
            return;
        }
        let words = args.split(' ');
        let reason = args.slice(1).join(' ');
        message.guild.member(bannedUser).ban(reason)
            .then(console.log)
            .catch(console.error);
    }
}

module.exports = BanCommand;