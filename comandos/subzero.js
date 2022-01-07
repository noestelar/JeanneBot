  const talkedRecently = new Set();

module.exports = (client,message,args)=>{
    message.delete();
    let Discord = require("discord.js");
  
  
      const embed = new Discord.MessageEmbed()
  .setColor(0x00ae86)
  .setImage('https://66.media.tumblr.com/9905c9eb7784e8e337cb877d12d046fc/72f51b956dec3ae4-66/s540x810/b8a2c76477fcf511e98b4c47014c8bf882390ab1.gif');
  
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