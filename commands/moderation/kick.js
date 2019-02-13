const commando = require('discord.js-commando');

class KickCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'kick',
            group: 'moderation',
            memberName: 'kick',
            description: 'Kicks an user'
        }); 
    }

    async run(message, args)
    {
        let kickedUser = message.guild.member(message.mentions.users.first());
        if(!kickedUser)
        {
            message.channel.send("Sorry, I couldn't find that user");
            return;
        }
        if(message.member.hasPermissions("KICK_MEMBERS"))
        {
            message.channel.send("You don't have privileges to kick other users!")
            return;
        }
        let words = args.split(' ');
        let reason = args.slice(1).join(' ');
        message.guild.member(kickedUser).kick(reason)
            .then(console.log)
            .catch(console.error);
    }
}

module.exports = KickCommand;