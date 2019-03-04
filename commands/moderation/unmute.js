const commando = require('discord.js-commando');

class MuteCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'unmute',
            group: 'moderation',
            memberName: 'unmute',
            description: 'Unmutes an user'
        }); 
    }

    async run(message, args)
    {
        let mutedUser = message.mentions.members.first();
        if(!mutedUser)
        {
            message.channel.send("Sorry, I couldn't find that user");
            return;
        }
        if(!message.member.hasPermissions("KICK_MEMBERS"))
        {
            message.channel.send("You don't have privileges to unmute other users!")
            return;
        }
        let mute_role = message.guild.roles.find(r => r.name === "Muted")
       mutedUser.removeRole(mute_role)
       .catch(console.error)
    }
}

module.exports = MuteCommand;