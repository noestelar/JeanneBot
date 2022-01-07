//Esta función se activara por cada mensaje enviado en un canal por el usuario:
module.exports = (client, message) => { 
    let prefix = process.env.PREFIX;
  
  
      if (message.channel.id === '61251595887455'){
  if(message.attachments.size > 0) {
    let findImage = message.attachments.find(attachment => attachment.filename.endsWith('png') || attachment.filename.endsWith('jpg') || attachment.filename.endsWith('gif'))
    if (findImage === null) {
      message.delete();
      //  .catch(console.error)
    }
  } else {
    message.delete();
     // .catch(console.error)
      }
        }else{
    if(message.content.startsWith('Jeanne, decime sape que me muero')) return message.channel.send(`¡SAPEEEEE!`); 
    if(message.content.startsWith('Sssíp')) return message.channel.send(`Hazlo reír, hazlo reír a carcajadas.`);
    if(message.content.startsWith('Bizarro culiaoo')) return message.channel.send(`¡QUE CHUCHAAAAA!`);       
          
    

    if(!message.content.startsWith(prefix)) return; 
    if(message.author.bot) return;
  
    // Definiendo los argumentos y comandos.
    const args = message.content.slice(prefix.length).trim().split(/ +/g);  
    const command = args.shift().toLowerCase()
  
    // Manejando los eventos.
    let cmd = client.comandos.get(command); // Obtiene el comando de la colección client.commandos
    if(!cmd) return; // Si no hay comandos no ejecute nada.
    
    // Ejecuta el comando enviando el client, el mensaje y los argumentos.
    cmd(client, message, args);
  }
}