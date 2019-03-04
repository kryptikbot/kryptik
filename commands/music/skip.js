
const commando = require('discord.js-commando');



class SkipSong extends commando.Command{

    constructor(client){

        super(client,{

            name: 'skip',

            group: 'music',

            memberName: 'skip',

            description: 'skips the currently playing song'

        });

    }

    async run(message, args){

        var server = servers[message.guild.id];

        if (!server.queue[0]) {

            message.channel.send('There currently isn\'t any song playing to skip');

            console.log('no song to skip');

        } else {

            if (message.member.voiceChannel != message.guild.me.voiceChannel) {

                message.reply("Sorry you aren't in the same voice channel")

                console.log('no same channel');

            } else {

                message.channel.send("**Successfully skipped**");

                server.dispatcher.end();

                console.log('skipped song')

            }

    }

}

}



module.exports = SkipSong;