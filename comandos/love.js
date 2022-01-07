const talkedRecently = new Set();

module.exports = (client,message,args)=>{
    let Discord = require("discord.js");
  
    var embed1 = new Discord.MessageEmbed()
  .setAuthor("Amor", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription(
    `**${message.author}** \n \n · Deberas mencionar a 2 personas para calcular el porcentaje de amor`
  )
  .setFooter(message.author.tag, message.author.avatarURL)
  .setTimestamp(message.createdAt);

  
    
    if (talkedRecently.has(message.author.id)) {
            message.channel.send(message.author.username +", Bájale dos a los comandos, espera un poco." );
    } else {
           // the user can type the command ... your command code goes here :)
          
          let users = message.mentions.users.map(m => m).join(" y ");
          if (!users) return message.channel.send(embed1);

          const random = Math.floor(Math.random() * 100);
          let heard = "";
          let image = "";

          if (random < 50) {
          image = "https://data.whicdn.com/images/105027102/original.gif";
          heard =
            "**┊** Hmm, creo que esto no llegara lejos. ¡Podrían ser amigos!...";
          } else if (random < 89) {
            heard = " **┊** ¡Podrían intertarlo!...";
            image = "https://media.tenor.com/images/583fec688ba8b6a02a0f10ceb8b9a91e/tenor.gif";
          } else if (random < 101) {
            heard = " **┊** ¡Podrían ser novios/as!";
            image = "https://media.tenor.com/images/816ebcd1165532d7a72027c331faed90/tenor.gif";
            }        
            const embed = new Discord.MessageEmbed()
            .setColor(0x00ae86)
            .setImage(image)
            .setTimestamp()
            .setAuthor("Amor", client.user.avatarURL)
            .setDescription(
            "Calculando el amor de dos personas \n \n" +
              "**┊** " +
              `${users} \n \n` +
              "Porcentaje de Amor: " +
              random +
              "% \n" +
              `\n ${heard}`
              );
              message.channel.send({ embed });
        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 600000);

}  



}