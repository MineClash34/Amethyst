const fs = require("fs")
const Discord = require("discord.js")
exports.run = (client, m, args, color, no, yes) => {
	m.channel.send(yes + " Check you'r DMs")
fs.readdir("./commandes/", (err, folders) => {
  folders.splice(folders.indexOf("Fondateur"), 1)
  folders.splice(folders.indexOf("Help"), 1)
  if (err) return console.error(err);
  folders.forEach(folder => {
  	let helpembed = new Discord.RichEmbed()
    .setTitle(folder)
    .setDescription("Bot prefix is `a!`")
    .setColor(color())
  	fs.readdir("./commandes/" + folder + "/", (err, files) =>{
  	files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let commandName = file.split(" -- ")[0];
    let alias = file.split(" -- ")[1]
    let aliasName = alias.split(".")[0]
    helpembed.addField(commandName, "Alias : `" + aliasName + "`", true)
  });
  m.author.send(helpembed)
  });
  });
});
	}