const db = require('megadb')
//let Discord = require("discord.js");
const warns = new db.crearDB('warns'); // <db> reemplazarlo por el nombre de la database que has creado con megadb 
const razon = new db.crearDB("warnrazon");
module.exports = async(client, message, args) =>{
  if(!message.member.hasPermission("ADMINISTRATOR")){
    return message.channel.send("Perdon, no tienes permiso para usar este comando")
}
   let usuario = message.mentions.users.first();
  if(!usuario) return message.channel.send('Menciona a alguien para reiniciar sus advertencias.')
  if(warns.tiene(`${message.guild.id}.${usuario.id}`)) { //Verificamos si tiene o no algo guardado
let xd = await warns.obtener(`${message.guild.id}.${usuario.id}`) //si lo tiene lo obtenemos
} else { //de lo contrario
warns.establecer(`${message.guild.id}.${usuario.id}`, args[0]) //aunque no tenga reinicia la canidad de warns xd
razon.eliminar(`${message.guild.id}.${usuario.id}`) //borra las razones de warning
let conteo = await warns.obtener(`${message.guild.id}.${usuario.id}`);
}
  
warns.establecer(`${message.guild.id}.${usuario.id}`, 0)  //le reinicia la cantidad de warns al usuario
client.channels.cache.get('701251595887453').send(`**Las Advertencias de ${usuario} han sido reestablecidas**`)
                      
}