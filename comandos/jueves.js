  const talkedRecently = new Set();

module.exports = (client,message,args)=>{
    message.delete();
    let Discord = require("discord.js");
  
  
      const embed = new Discord.MessageEmbed()
  .setColor(0x00ae86)
  .setImage('https://thumbs.gfycat.com/GoldenSharpBrontosaurus-size_restricted.gif')
  .setTitle(
    "¡ES JUEVES DE ACARICIAR LAPPYS! ( ‘́⌣’̀)/(˘̩̩ε˘̩ƪ)");
  
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