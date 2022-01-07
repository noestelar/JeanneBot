  const talkedRecently = new Set();

module.exports = (client,message,args)=>{
    message.delete();
    let Discord = require("discord.js");
  
  
      const embed = new Discord.MessageEmbed()
  .setColor(0x00ae86)
  .setImage('https://66.media.tumblr.com/715728abec97d5a2bc98fd39b5896f02/tumblr_n3qr4uM3DE1t9pah5o3_250.gif')
  .setTitle(
    "¡Es Viernes de ahorcar Zero Suits! [○･｀Д´･○]");
  
  if (talkedRecently.has(message.author.id)) {
            message.channel.send(message.author.username +", Bájale dos a los comandos, estás spameando mucho. " );
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