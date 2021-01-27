const Discord = require("discord.js")
exports.run = (client, m, args, color, no, yes, con) => {
    if(m.channel.type === 'dm') return m.channel.send(no + "Command don't eneable in Private Message !")
    if (args.length === 1 && args[0] === "@") return;
    if(!args[0]){
    	let embed = new Discord.RichEmbed()
    .setTitle("BOT COMMAND")
    .setDescription("**HELP BOT COMMAND**")
    .addField("Use :", "Type `a!bot` or alias (`a!b`) and enter words ! Magic result will appear !")
    .setColor(color())
    .setTimestamp()
    m.channel.send(embed)
    return
    }
    if(m.content.includes("@")){
    	var phrase = args.join(" ").replace("@", " ")
    } else {
    	var phrase = args.join(" ")
    }
m.delete()
  m.channel.send("Création du webhook en cours... Patientez quelque instant...").then((botmessage) => {
  m.channel.createWebhook(m.author.username, m.author.displayAvatarURL).then(wb =>{
  var webhook = new Discord.WebhookClient(wb.id, wb.token)
  webhook.send(phrase).then(wb => {
    botmessage.delete()
    webhook.delete()
  })
  })
})
}