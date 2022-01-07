
module.exports=(client,message,args)=> {
  let Discord = require('discord.js')
  message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');

  const embed = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL())
  .addField('Redes', 'Muestra las redes de la comunidad', true)
  .addField('love', 'Muestra el porcentaje de amor entre dos usuarios', true)
  .addField('smash', 'Momento pelea', true)
  .addField('subzero', 'Heladito para todos', true)
  .addField('jueves', 'Mensaje especifico para los jueves', true)
  .addField('viernes', 'Mensaje especifico para los viernes', true)
  .addField('sabados', 'Mensaje especifico para los sabados', true)
  .addField('waifu', 'Invoca los amores del canal', true)
  .addField('guess', 'Preguntale a los Dioses Antiguos', true)
  //.addField('sugerencia', 'Agrega una sugerencia para el server o el canal de YT', true)
  .addField('marry', 'Casarte con un usuario del server [Solo una vez en tu vida!]', true)
  .addField('warns', 'Consultar las advertencias de un usuario', true)
  .addField('COMANDOS DE CARL-BOT', true)
  .addField('suggest', 'Agrega una sugerencia para el server o el canal de YT', true)
  .addField('clap + mensaje ', 'Agrega Aplausos a tu mensaje', true)
  
  .setFooter("Version 1.8.2Final")
  .setColor(7419530)

  message.author.send(embed);
}
