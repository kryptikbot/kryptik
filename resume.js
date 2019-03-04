const commando = require('discord.js-commando');

const YTDL = require('ytdl-core');



class ResumeSong extends commando.Command{

    constructor(client){

        super(client, {

            name: 'resume',

            group: 'music',

            memberName: 'resume',

            description: 'Resume the paused song'

        });

    }

    async run(message, args){

        if (!servers[message.guild.id].queue[0]) {

            message.channel.send('There is no song to pause');

            console.log('no song');

        } else {

            if (message.member.voiceChannel != message.guild.me.voiceChannel) {

                message.reply("Sorry you aren't in the same voice channel")

                console.log('No same channel');

            } else {

                console.log('Entered in resume menu');

                if (!servers[message.guild.id].dispatcher.paused) {

                    message.reply('Current song is not paused');

                    console.log('song resumed');

                } else {

                    servers[message.guild.id].dispatcher.paused = false;

                    message.channel.send(servers[message.guild.id].queue[0].title + " is resumed");

                    console.log('resumed');

                }

            }

        }

    }

}



module.exports = ResumeSong;