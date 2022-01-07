module.exports = async(client, message, args) => {
  
    const db = require('megadb');
    const X = new db.crearDB('canallogs');
    let canal = message.mentions.channels.first()
    
    if(!message.member.hasPermission('ADMINISTRATOR')){
      return message.channel.send('Perdon, pero no tienes permisos.')
  
  };
    
    const d = require('discord.js')
    X.establecer(`${message.guild.id}`, `${canal}.id`)
  
    const e = new d.MessageEmbed()
    .setThumbnail(message.guild.iconURL)
    .setTitle(`:white_check_mark: Logs actualizados`)
    .setDescription(`Canal de logs actualizado a : ${canal}`)
    .setFooter(message.guild.name, message.guild.iconURL)
    .setColor("RANDOM")
    
  message.channel.send(e);
    
      
  };