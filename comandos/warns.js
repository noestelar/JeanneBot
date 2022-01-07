module.exports = async (client, message, args) => {
    const Discord = require("discord.js");
    const db = require("megadb");
    const X = new db.crearDB("warns");
    const razon = new db.crearDB("warnrazon");

    if(!message.member.hasPermission("SEND_MESSAGES")){
        return message.channel.send("Perdon, no tienes permiso para usar este comando")
    }
  let user = message.mentions.users.first();
  let autor = message.author;
  
  if (!user) return message.channel.send("Mencione a un usuario porfavor");
  
  let razones = args.slice(1).join(" ");
  let conteo = await X.obtener(`${message.guild.id}.${user.id}`);
  if (!X.tiene(`${message.guild.id}.${user.id}`)) {
    await X.establecer(`${message.guild.id}.${user.id}`, {
      warns: 0,
      razon: razon,
      autor: autor,
      servidor: message.guild.id
    });
  }
  if (!razon.tiene(`${message.guild.id}.${user.id}`)) {
    await razon.establecer(`${message.guild.id}.${user.id}`, razones);
  }

  let razón = await razon.obtener(`${message.guild.id}.${user.id}`);
  const em = new Discord.MessageEmbed()
    .setTitle(":coffee: | Warns de: **__" + user.username + "__**")
    .addField("Cantidad de advertencias:", conteo)
    .setColor("#13ec12")
    .setFooter(conteo + "/3")
    .setTimestamp();
  message.channel.send(em);
  
};