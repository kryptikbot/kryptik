const commando = require('discord.js-commando');



class RemoveSong extends commando.Command{

    constructor(client){

        super(client, {

            name: 'remove',

            group: 'music',

            memberName: 'remove',

            description: 'remove the song from the queue'

        });

    }

    async run(message, args){

        var server = servers[message.guild.id];

        if(args > 1 && args < server.queue.length){

            message.channel.send(server.queue[args].title + ' removed from the queue --Requested by- '+server.queue[args].requestor);

            server.queue.splice(args,1);

        } else {

            message.channel.send('Please choose the valid option');

        }

    }

}



module.exports = RemoveSong;