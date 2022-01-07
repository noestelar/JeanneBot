module.exports=(client,message,args)=> {
    message.delete();
    let Discord = require('discord.js')
    let perms = message.member.hasPermission("MANAGE_GUILD"); //Sino tiene permisos el autor
    if(!perms) return message.channel.send('X | No tienes permisos para ver este comando');


  const embed = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL())
  .addField('redes', 'Muestra las redes de la comunidad', true)
  //.addField('aprobar', 'Rechazar una sugerencia \n Syntaxis: !aprobar IDsugerencia Razon(opcional)', true)
  //.addField('rechazar', 'Rechazar una sugerencia \nSyntaxis: !aprobar IDsugerencia Razon(opcional)', true)
  .addField('anuncio', 'Publicar (anuncios∥🎙) para todos\n Syntaxis: !everyone ANUNCIO ;; CuerpoAnuncio ;; URLdeImagen(opcional)', true)
  .addField('everyone', 'Publicar (#anuncios-server∥👑) para todos\n Syntaxis: !everyone ANUNCIO ;; CuerpoAnuncio ;; URLdeImagen(opcional)', true)
  .addField('here', 'Publicar (#anuncios-server∥👑) para miembros conectados \nSyntaxis: !here ANUNCIO ;; CuerpoAnuncio ;; URLdeImagen(opcional)', true)
  .addField('modlogs', 'Elegir canal de logs de moderación(Se usa solo una vez) \n Syntaxis:', true)
  .addField('ban', 'Banear a un usuario del servidor incluye razon.', true)
  .addField('mute', 'Mutear un usuario \n Syntaxis: !mute @usuario tiempo(1s,1h,1d)', true)
  .addField('warn', 'Advertencia a un usuario del servidor incluye razon.', true)
  .addField('unwarn', 'Quitar advertencia a un usuario del servidor \n Syntaxis: !warn @usuario', true)
  .addField('warns', 'Consultar las advertencias de un usuario', true)
  .addField('kick', 'Expulsar a un usuario del servidor incluye razon.', true)
  .addField('suggest', 'Agrega una sugerencia para el server o el canal de YT', true)
  .addField('Invitacion', '[Link de invitacion](https://discord.com/invite/yw4BTVc)', true)
  .addField('COMANDOS DE EMERALD', true)
  .addField('approve numero de sugerencia  razón ', 'Añade un mensaje de aprobada sugerencia', true)
  .addField('deny  numero de sugerencia  razón ', 'Añade un mensaje de rechazada sugerencia', true)
  .addField('implemented numero de sugerencia  razón ', 'Añade un mensaje de  sugerencia ya implementada', true)
  .setFooter("Version 1.8 Final")
  .setColor(7419530)

  client.channels.cache.get('7125159588745').send(embed);
}