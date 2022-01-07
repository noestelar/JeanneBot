const talkedRecently = new Set();

module.exports = async (client, message, args) => {
  
  
let Discord = require('discord.js'); //Agregamos Discord.js

var rpts = [
    "Si",
    "Probablemente",
    "No lo sé",
    "Probablemente no.",
    "No",
    "Prueba preguntando otra vez.", // AquÃ­ agregamos las posibles respuestas, si deseas agregar mas, aÃ±ade "Respuesta",
  ];
  
if (talkedRecently.has(message.author.id)) {
            message.channel.send(message.author.username +", Espera un poco para usar este comando otra vez." );
    } else {
  if (!args)
    return message.reply("`â| Nope!`, Debes escribir una pregunta!");// Si no hay argumentos
  message.channel.send({
    color: 0x0099ff,
    embed: {
      title: message.author.username + `, A tu pregunta:`,
      fields: [
        {
          name: "Pregunta:",
          value: "**" + args.join(" ") + "**" //La pregunta del Usuario
        },
        {
          name: "Mi respuesta es:",
          value: "```" + rpts[Math.floor(Math.random() * rpts.length)] + "```" // La respuesta aleatoria
        }
      ]
    }
  });

  //message.delete(); // Eliminamos el mensaje del usuario que hizo la pregunta
  }talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 420000);
}