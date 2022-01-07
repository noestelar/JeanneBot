  const talkedRecently = new Set();

module.exports = (client,message,args)=>{
    message.delete();
    let Discord = require("discord.js");
  
  
      const embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setImage('https://i2.wp.com/www.playcorner.it/wp-content/uploads/2018/02/21535959_1466507176769792_4364583222604988416_n.gif')
  .setTitle(
    "¡Es Sabado de Abrazar Bayos! (Ɔ˘⌣˘)(˘⌣˘)˘⌣˘ C)");
  
  if (talkedRecently.has(message.author.id)) {
            message.channel.send(message.author.username +", Bájale dos a los comandos, espera un poco. " );
    } else {
           // the user can type the command ... your command code goes here :)
        message.channel.send({ embed });
        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 600000);

}
}