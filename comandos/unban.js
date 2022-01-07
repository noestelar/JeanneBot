module.exports = async (client, message, args) => {

    let formembers = args[0];
    let reason1 = args.slice(1).join(" ") || 'No definida';
    let modlog='71251595887453';
  
  
   
    if (!message.guild.me.permissions.has('BAN_MEMBERS'))  return message.channel.send("No tengo permisos.");
  
    if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send("No tienes permisos.");
    
    if (!formembers) return client.channels.cache.get(modlog)('Escriba la id del usuario a desbanear.');

    const member = await client.users.fetch(formembers)
    
    const ban = await message.guild.fetchBans()
  
    if (member.id == message.author.id) return message.channel.send('Tu no estás baneado.');
  
    if (!ban.get(member.id)) return client.channels.cache.get('7012515958874565953')("Este usuario no se encuentra baneado.")

    var user = ban.get(member.id)
    message.guild.members.unban(member);

client.channels.cache.get(modlog).send('He desbaneado al usuario. **' + user.user.username +"#"+user.user.discriminator+ '** \n**ID:** ' + member.id + '\n**Razón:** ' + reason1)

  .catch(err => {
     return message.channel.send(`Ha ocurrido un error.\n${err}`);
     return client.channels.cache.get(modlog).send(`Ha ocurrido un error.\n${err}`)
     })  
};