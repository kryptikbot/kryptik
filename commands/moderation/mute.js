const commando = require('discord.js-commando');

class MuteCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'mute',
            group: 'moderation',
            memberName: 'mute',
            description: 'Mutes an user',
            argsType: 'multiple'
        }); 
    }

    async run(message, args)
    {
        let mutedUser = message.mentions.members.first();
        let muteTime = args[1]
        if(!mutedUser)
        {
            message.channel.send("Sorry, I couldn't find that user");
            return;
        }
        if(!message.member.hasPermissions("KICK_MEMBERS"))
        {
            message.channel.send("You don't have privileges to mute other users!")
            return;
        }
        if(!muteTime) {
            muteTime = 1
        }
        let mute_role = message.guild.roles.find(r => r.name === "Muted")
        mutedUser.addRole(mute_role.id);
        message.channel.send(`${mutedUser} has been muted for ${muteTime} minute.`)
        setTimeout(() => {mutedUser.removeRole(mute_role.id);},  muteTime * 60000) 
    }
}

module.exports = MuteCommand;