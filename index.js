const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
var fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});



bot.commands = new Discord.Collection();




bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Tell me your trades");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);



  //Trades
  if(cmd == `${prefix}open`){
    var data = message.author + JSON.stringify(args);
    fs.appendFile('trades.json', data, finished);
    function finished(err){console.log('all set.');}
    return message.reply(`${args[0]} was opened at ${args[2]} Satoshis`);
  }

  if(cmd == `${prefix}hello`){
    return message.channel.send("你好!");
  }

  if(cmd == `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("请把你所有的贸易告诉我！In this form: !open BTC at .00041 Satoshis")
    .setColor("#3e15f2")
    .setThumbnail(bicon)
    .addField("Created On:", bot.user.createdAt)
    .addField("Bot Name", bot.user.username);

    return message.channel.send(botembed);
  }

});

bot.login(botconfig.token);
