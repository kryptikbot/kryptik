const commando = require('discord.js-commando');
const Discord = require('discord.js');

class QueueList extends commando.Command{
    constructor(client){
        super(client, {
            name: 'queue',

            group: 'music',

            memberName: 'queue',

            description: 'Shows the list of songs in a queue'
        });
    }

    async run(message, args){
        const server = servers[message.guild.id];
        if (server.queue && server.queue !== null) {
            if (server.queue.length > 1) {
                    let res = '';
                    for (let i=1; i < servers[message.guild.id].queue.length; i++){
                        res +=`${i} : ${server.queue[i].title} requested by ${server.queue[i].requestor}\n`;
                    }

                    const embed = new Discord.RichEmbed()
                        .addField("__**Now Playing**__:", `${server.queue[0].title} | requested by ${server.queue[0].requestor}`)
                        .addField("__**Queue**__", res);

                    return message.channel.send(embed);
            } else {
                const embed = new Discord.RichEmbed()
                        .addField("__**Now Playing**__:", `${server.queue[0].title} | requested by ${server.queue[0].requestor}`);

                return message.channel.send(embed);
            }
        } else {
            return message.channel.send("There currently isn't any music playing in this guild");
        }
    }

}