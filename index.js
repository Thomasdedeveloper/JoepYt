const discord = require("discord.js");
const botconfig = require("./botconfig.json");

const client = new discord.Client();
client.login(botconfig.token);

client.on("ready" , async () => {

    console.log(`${client.user.username} is online.`);
    client.user.setActivity("Reageert nog NIET op !help", {type: "PLAYING"});

});

client.on("message", async message =>{

if(message.author.bot) return

if (message.channel.type == "dm") return

var prefix = botconfig.prefix;

var messageArray = message.content.split(" ");

var command = messageArray[0];

if(!message.content.startsWith(prefix)) return;

if (command === `${prefix}hallo`);{
    return message.channel.send("Hoi Hoi");
}

});

bot.login(process.env.token)