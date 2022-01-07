const Discord = require("discord.js");
const megadb = require("megadb");
const warns = new megadb.crearDB("warns");
const razon = new megadb.crearDB("warnrazon");

module.exports = async (client, message, args) => {
  
  message.delete();
  const db = require("megadb");

  
  let feo = message.mentions.members.first()
  const X = new db.crearDB("canallogs");
  let canal = await X.obtener(`${message.guild.id}`).catch(e => console.log(e));
  let user = message.mentions.users.first();
  let autor = message.author;
  if (!user) return message.channel.send("Mencione a un usuario porfavor");
  let razones = args.slice(1).join(" ") || "Razón no definida";
  if (!X.tiene(`${message.guild.id}`)) {
    message.channel.send(
      ":warning: Defina primero un canal de logs con `<prefix>setlogs canal`"
    );
  }

  if(feo.hasPermission("ADMINISTRATOR"))
    return message.channel.send(":warning: No puedes advertir a un Administrador");
  
  
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(
      "Perdon, pero no tienes permisos de `Administrador`"
    );
  }

  if (message.author.id === user.id)
    return message.channel.send(":warning: No puedes darte warn a ti mismo.");

  if (!warns.tiene(`${message.guild.id}.${user.id}`)) {
    await warns.establecer(`${message.guild.id}.${user.id}`, 0);
  }
  await warns.sumar(`${message.guild.id}.${user.id}`, 1);
  let conteo = await warns.obtener(`${message.guild.id}.${user.id}`);
  await razon.establecer(`${message.guild.id}.${user.id}`, razones);
  let razón = razon.obtener(`${message.guild.id}.${user.id}`);
  const embed = new Discord.MessageEmbed()
    .setTitle(
      ":warning: He advertido al usuario: **__" + user.username + "__**"
    )
    .addField("**Advertencias:**", conteo)
    .addField("**Razón:**", razones)
    .addField("**Admin/mod responsable:**", autor)
    .setColor("#feec00")
    .setFooter(conteo + "/4")
    .setTimestamp();
    client.channels.cache.get('708030735373565953').send(embed)
  
    
  }