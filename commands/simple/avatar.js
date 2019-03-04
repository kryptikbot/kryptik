const commando = require('discord.js-commando');
const discord = require('discord.js');

class AvatarCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'avatar',
            group: 'simple',
            memberName: 'avatar',
            description: 'Shows you your profile picture'
        }); 
      }

      async run(message,args)
      {
        let user = message.mentions.users.first()
        if (!user){
          user = message.author
          }
        let embed = new discord.RichEmbed()
        .setColor('0x0c3ff')
        .setTitle(`${user.tag}`)
        .setImage(user.displayAvatarURL)
        message.channel.send(embed)
      }
  }

  module.exports = AvatarCommand;
