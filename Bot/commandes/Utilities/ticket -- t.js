  const Discord = require("discord.js")
exports.run = (client, m, args, color, no, yes) => {
  var mention = "<@" + m.author.id + ">"
  var tag = m.author.tag.split("#")
  var cn = tag[0].toLowerCase().replace(" ", "-") + tag[1]
if(!m.guild.channels.find(c => c.name == "Tickets" && c.type == "category")){
    m.guild.createChannel("Tickets", {
      type: "category",
      permissionOverwrites: [{
        id: "618863033501876225",
        allow: ["MANAGE_CHANNELS", "MANAGE_WEBHOOKS", "MANAGE_ROLES_OR_PERMISSIONS", "MANAGE_MESSAGES"]
      }]
    }).then(c => {
      m.channel.send(yes + "Category is curently in creation !")
      setTimeout(function(){
      m.guild.createChannel(m.author.tag, {
      type: "text",
      permissionOverwrites: [{
        id: m.guild.defaultRole.id,
        deny: ["READ_MESSAGES"]
      },
      {
        id: m.author.id,
        allow: ["READ_MESSAGES", "SEND_MESSAGES"],
        deny: ["MANAGE_CHANNELS", "MANAGE_WEBHOOKS", "MANAGE_ROLES_OR_PERMISSIONS", "MANAGE_MESSAGES", "MENTION_EVERYONE"]
      },
      {
        id: "618863033501876225",
        allow: ["MANAGE_CHANNELS", "MANAGE_WEBHOOKS", "MANAGE_ROLES_OR_PERMISSIONS", "MANAGE_MESSAGES", "MENTION_EVERYONE", "READ_MESSAGES", "SEND_MESSAGES"]
      }]
    })
    .then(channel => {
        channel.setParent(c.id)
        m.channel.send(yes + "Ticket channel succesfuly create !")
        channel.send(mention)
        let ticketembed = new Discord.RichEmbed()
        .setAuthor("TICKET OF " + m.author.tag, m.author.displayAvatarURL)
        .setColor(color())
        .addField("Ask for Help :", "Type here your question !\nStaff member will hasten to answer you !")
        .addField("To close ticket :", "Type here `a!ticketclose` or alias (`a!tc`) to close ticket !")
        .setTimestamp()
        channel.send(ticketembed)
    })
      }, 1000)
    })
} else if(!m.guild.channels.find(c => c.name == cn && c.type == "text")){
var cat = m.guild.channels.find(c => c.name == "Tickets" && c.type == "category")
m.guild.createChannel(m.author.tag, {
      type: "text",
      permissionOverwrites: [{
        id: m.guild.defaultRole.id,
        deny: ["READ_MESSAGES"]
      },
      {
        id: m.author.id,
        allow: ["READ_MESSAGES", "SEND_MESSAGES"],
        deny: ["MANAGE_CHANNELS", "MANAGE_WEBHOOKS", "MANAGE_ROLES_OR_PERMISSIONS", "MANAGE_MESSAGES", "MENTION_EVERYONE"]
      },
      {
        id: "618863033501876225",
        allow: ["MANAGE_CHANNELS", "MANAGE_WEBHOOKS", "MANAGE_ROLES_OR_PERMISSIONS", "MANAGE_MESSAGES", "MENTION_EVERYONE", "READ_MESSAGES", "SEND_MESSAGES"]
      }]
    })
    .then(channel => {
        channel.setParent(cat.id)
        channel.send(mention)
        let ticketembed = new Discord.RichEmbed()
        .setAuthor("TICKET OF " + m.author.tag, m.author.displayAvatarURL)
        .setColor(color())
        .addField("Ask for Help :", "Type here your question !\nStaff member will hasten to answer you !")
        .addField("To close ticket :", "Type here `a!ticketclose` or alias (`a!tc`) to close ticket !")
        .setTimestamp()
        channel.send(ticketembed)
    })
    m.channel.send(yes + "Ticket channel succesfuly create !")
    } else {
m.channel.send(no + "You already have ticket channel !")
    } 
}