module.exports = (client)=>{
    client.user.setPresence( {
        activity: {
            name: `!help | A esta hora salen duendes👻`,
            type: "STREAMING",
            url: "https://www.twitch.tv/distortedemerald"
        },
        status: "online"
      });
}