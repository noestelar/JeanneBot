module.exports = (client,message,args) => {
  let Discord = require('discord.js');

  const embed = new Discord.MessageEmbed() //creamos un embed para darle mas estilo xD.
    .setTitle(`No olvides seguir las redes de Distorted Emerald`)
    .setThumbnail(`https://scontent.fpbc2-2.fna.fbcdn.net/v/t1.0-9/90875590_195938371855062_3350231733927673856_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_eui2=AeEHR8mz92Bn4VRSfkhbKWjC1lBPTLntrrPWUE9Mue2us_2KGLJDbpyrnlONjgo3OCKpv8lKVN0ytRkNzucIgNzt&_nc_ohc=JJFaglx0b6EAX_FEjgE&_nc_ht=scontent.fpbc2-2.fna&oh=0b2e86ba6e2ce7028d658af5ccf9494f&oe=5ED7275E`)
    .addField('Youtube: 🎥', '[youtube.com/DistortedEmerald](https://www.youtube.com/channel/UCwf5MvZrRVv3mc47Qd4wmmQ)', true)
    .addField('Twitch:💜', '[twitch.tv/DistortedEmerald](https://www.twitch.tv/distortedemerald)', true)
    .addField('Facebook:🌎', '[facebook.com/DistortedEmerald](https://www.facebook.com/DistortedEmerald-115134719935428)', true)
    
    .setFooter("Distorted Emerald Community")
    .setColor(0xff00ff)

    message.channel.send(embed);
    }