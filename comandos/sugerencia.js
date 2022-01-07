const { MessageEmbed } = require("discord.js"), { crearDB } = require("megadb"), db = new crearDB("sugerencias")

// La expresión await provoca que la ejecución de una función asíncrona sea aguardada hasta que una promesa termine o rechace 

module.exports = async (client,message,args) => { // abres
    message.delete();
const sg = args.join(" "), // Aclaración del argumento de sugerencia
rCa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", // Usamos los caracteres que se eligirán de forma aleatoria
alea = rCa.charAt(Math.floor(Math.random() * rCa.length)), // Usamos la función Math.random para aleatorizar los caracteres
au = message.author, // Definición opcional de un usuario, en mi caso lo uso para no provocar errores
ca = client.channels.cache.get('612125159588745454') // Definición opcional de un canal, en mi caso lo uso para no provocar errores

  if (!sg) { message.channel.send(new MessageEmbed().setDescription("Debes de enviar tu sugerencia")) } // Si no hay sugerencia, que envíe el mensaje, si hay sugerencia, que envíe lo que toma la condición 'else'

  else { message.channel.send(new MessageEmbed()
      .setDescription(`${message.member}, tu sugerencia se ha enviado al canal`)) // Parte opcional si quieres avisar que se ha enviado la sugerencia al canal

// Envías la sugerencia al canal definido
  ca.send(new MessageEmbed().addField("Sugerente", au)
      .addField("Estado", "Pendiente").addField("Sugerencia:", sg)).then(async function(message) { await message.react('⬆'), await message.react('⬇'), 
  await db.set(alea, { autor: au.id, id: ca.lastMessageID, sug: sg }, ".") })}

// Usas función asíncrona en 'then' para aguardar las reacciones 'opcionales' que hará el bot, esto para que voten 'sí' o 'no' y luego, establecer en una clave aleatoria los valores de la ID del autor, ID del mensaje y la sugerencia que daría como ejemplo la estructura:

/* { "0": {
    "autor": "1125159588745",
    "id": "91251595887451",
    "sug": "Agacháte y conocélo"
  } */

} // cierras