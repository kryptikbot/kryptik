const commando = require ('discord.js-commando');
const discord = require('discord.js')

class PurgeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'purge',
            group: 'moderation',
            memberName: 'purge',
            description: 'Clears a selected amount of messages from a channel.'
        });
    }

    async run(message)
    {
      if(message.channel.type === "dm") return message.channel.send('You cannot use this command in Direct Messages!')  
      let number = message.content.split(' ').slice(1,2).join(' ');
        let num = parseInt(number);
        if(!message.member.permissions.has(8))return message.reply('You do not have permission to perform this command. Only ``ADMINSTRATORS`` can use this command.');
        if(!num||num === null||num === undefined)return message.channel.send('You need to specify an amount of messages to delete!');
        if(num > 99||num < 2)return message.reply('I can only clear 2-100 messages');
        message.channel.bulkDelete(num + 1).then(() => {
            message.channel.send(`Cleared ${num} messages.`).then(msg => msg.delete(5000));
        });
    }
}

module.exports = PurgeCommand;