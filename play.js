const commando = require('discord.js-commando');

const search = require('yt-search');

const YTDL = require('ytdl-core');



function Playsong(connection, message, finalResult){

    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL('https://www.youtube.com' + server.queue[0].url,{filter: 'audioonly'}));

    message.channel.send('Playing '+ server.queue[0].title + ', Duration: ' + server.queue[0].timestamp);

    console.log('playing');

    server.dispatcher.on("end", function(){

        var server = servers[message.guild.id];

        server.queue.shift();

        console.log('shifted');

        if(server.queue[0]){

            Playsong(connection, message, finalResult);

        } else {

            connection.disconnect();

        }

    });

}



function queue(connection, finalResult, message){

    if(!servers[message.guild.id])// checking if server already has a queue or not

    {

        servers[message.guild.id] = {queue: []};//assigning queue to the server

        console.log('queue inserted');

    }

    var server = servers[message.guild.id];

    server.queue.push(finalResult);//pushing the search result of video inside queue

    console.log('pushed');

    if(!server.dispatcher){

        Playsong(connection, message, finalResult);

    } else {

        message.channel.send(finalResult.title + ' added to the queue');

    }

}



function getURL(message, finalResult){

    if (message.member.voiceChannel)// checking if member is inside voice channel or not

    {

        console.log(finalResult.url);

        if (!message.guild.voiceConnection)// checking if bot inside the channel or not

        {

            message.member.voiceChannel.join().then(connection => {

                queue(connection, finalResult, message);

            });

        } else {

            queue(message.member.voiceChannel.connection, finalResult, message);

        }

    } else {

        message.reply(":crossed_swords: You must be inside a voice channel to summon me!");

    }

}



class PlaySong extends commando.Command{

    constructor(client){

        super(client,{

            name:'play',

            group: 'music',

            memberName: 'play',

            description: 'play the song of the user choice'

        });

    }

    async run(message, args){

        if(!args){

            message.reply(" Song name can't be empty");

        } else {

        //searching a video

        search(args, function (err, res) {

            if (err) return message.channel.send('Sorry something went wrong!');



            let videos = res.videos;

            let finalResult = videos[0];

            finalResult.requestor = message.author.tag;

            getURL(message, finalResult);

        });

    }

    }

}



module.exports = PlaySong;