const talkedRecently = new Set();

module.exports = (client,message,args)=>{
    message.delete();
    let Discord = require("discord.js");
  
  const random = Math.floor(Math.random() * 100);
  let image = "";
  if (random <= 10) {
          image = "https://66.media.tumblr.com/b534a79fc629988b313b2cb7f9b26520/tumblr_nmre7vquZ11r61mabo2_500.gif";
          } else if (random >10 && random <= 20) {
            image = "https://pa1.narvii.com/6150/6f969775196fec0d41686881c5255440d54265bf_00.gif";
          } else if (random >20 && random <= 30) {
            image = "https://46.media.tumblr.com/f69a283a9ea1a80e4bdc864065f82769/tumblr_pa80r1S1n61sff0xeo1_400.gif";
            } else if (random >30 && random <= 40) {
            image = "https://66.media.tumblr.com/0f92fdf7845144a9d85b54e66d24792c/tumblr_pk5cdmEMaj1re793ao2_500.gif";
            } else if (random >50 && random <= 60) {
            image = "https://i.pinimg.com/originals/4b/d9/4c/4bd94cbb0d84c222b6e3b466f34b2dd9.gif";
            }else if (random >60 && random <= 70) {
            image = "https://66.media.tumblr.com/ec9495260c0034e770d5aa20905a6e66/tumblr_ppv83mXk6Z1txj8weo3_500.gif";
            } else if (random >70 && random <= 80) {
            image = "https://66.media.tumblr.com/3c7908dd44e715b220adf6d76a2d0fd1/a1aa0327c9e68d17-1c/s540x810/3690a2d789f59944d0a258136172bab9e44984a3.gif";
            }else if (random >90 && random <= 101) {
            image = "https://66.media.tumblr.com/d88392123137dcde4e2ee7a64449e6e8/a1aa0327c9e68d17-f6/s540x810/ac2d4990ea49bb5865425c1732678e80a1116cfb.gif";
            }                                                
  
  
      const embed = new Discord.MessageEmbed()
  .setColor(0x00ae86)
  .setImage(image);
  
  if (talkedRecently.has(message.author.id)) {
            message.channel.send(message.author.username +", Bájale dos a los comandos, espera un poco. " );
    } else {
           // the user can type the command ... your command code goes here :)
        message.channel.send({ embed }, );
        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 600000);

}
}