const commando = require('discord.js-commando');

class FunMirrorCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'fun_mirror',
            group: 'simple',
            memberName: 'fun_mirror',
            description: 'Looks at your reflection in a mirror!'
        }); 
    }

    async run(message,args)
    {
        message.reply(message.author.avatarURL);
    }
}

module.exports = FunMirrorCommand;