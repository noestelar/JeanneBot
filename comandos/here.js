module.exports = (client,message,args)=>{
    let Discord = require('discord.js');
    message.delete();
    let perms = message.member.hasPermission("MANAGE_GUILD"); //Sino tiene permisos el autor
    if(!perms) return message.channel.send('X | No tienes permisos para publicar el anuncio');
    
    let anuncio = args.join(" ").split(" ;; ")
    const [titulo, descripcion, imagen] = anuncio;

    if(!anuncio) return message.channel.send('X | Falta el anuncio')

 

    let autor = message.author;
  
  const embed = new Discord.MessageEmbed() //Creamos un embed
    .setTitle(titulo)
    .setDescription(descripcion)
    .setFooter(message.author.username, message.author.avatarURL())
    .setImage(imagen)
    .setColor(10181046)
    .setTimestamp(new Date())
  client.channels.cache.get('6125159588745').send('@here')
  client.channels.cache.get('6125159588745').send(embed); //Enviamos el embed (anuncio) a un canal por ID
   //Para que mencione a los miembros con un everyone
 
}