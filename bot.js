const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("609427674645135428")
setInterval(function() {
channel.send(`ZRaidحط الكلام اللي تبغاه هناSDDDhahhahhahahhhhhhhhhhhhhsssa111111`);
}, 30)
})

client.login(process.env.BOT_TOKEN);