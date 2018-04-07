const(Discord) = require("discord.js");

module.exports.run = async (bot, messagem args) => {

  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Couldnt find User");
  let rreason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#3e15f2")
  .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
  .addField("Reported By:", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel",message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", rreason);

  

  message.channel.send(reportEmbed);

  return;


}

module.export.help = {
  name: "report"
}
