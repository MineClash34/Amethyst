const Discord = require("discord.js")
const mysql = require("mysql")
exports.run = (client, message, args, color, no, yes, con) => {
  if(message.channel.type === "dm") return message.channel.send(no + "This command is disable in dm !")
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(no + "You don't have required permissions !")
con.query("SELECT id FROM welcomer WHERE GuildID = " + message.guild.id, function(err, result){
    if (err) throw err;
    if(result.length <= 0){
        var sql = "INSERT INTO welcomer (GuildID) VALUES (" + message.guild.id + ")"
        con.query(sql, function(err, result){
            if (err) throw err;
            let welcomerembed = new Discord.RichEmbed()
            .setAuthor("Welcomer", message.author.displayAvatarURL)
            .addField("🙂", "To set welcomer message !")
            .addField("😄", "To set welcomer channel !")
            .setColor(color())
            .addField("🤔", "To enable/disable welcomer !")
            .addField("🕛", "To show current message and channel set !")
            .setTimestamp()
            .setFooter("Amethyst | Welcomer")
            message.channel.send(welcomerembed).then((botmessage)=>{
                botmessage.react("🙂").then(() => botmessage.react("😄")).then(() => botmessage.react("🤔")).then(() => botmessage.react("🕛"))
                const filter = (reaction, user) => {
                  return ["🙂", "😄", "🤔", "🕛"].includes(reaction.emoji.name) && user.id === message.author.id
                }
                botmessage.awaitReactions(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                  .then(async collected => {
                    const reaction = collected.first();
                    if(reaction.emoji.name === "🙂"){
                        message.channel.send("Enter the message you want to define as **Welcomer Message** !\n**USERNAME** = `member join username`\n**MENTION** = `member join mention`\n**GUILD** = `guild name`\n**NUMBER_USER** = `number of user on this guild`").then((botmessage2)=>{
                            const filter = (message2, user) => {
                          return message2.author.id === message.author.id
                        }
                        botmessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                        .then(async collected =>{
                            const messageCollected = collected.first()
                            if (messageCollected) {
                                     if(messageCollected.content.includes("'")){
                                var welcomermessage = messageCollected.content.split("'").join(" ")
                              } else {
                                    var welcomermessage = messageCollected
                              }
                                var sql = "UPDATE welcomer SET Message = '" + welcomermessage + "' WHERE GuildID = " + message.guild.id
                                con.query(sql, function(err, result){
                                    if (err) throw err
                                    message.channel.send(yes + "Welcomer message succesfuly edit to : " + welcomermessage + " !")
                                })
                            }
                        })
                        })
                    }
                    if (reaction.emoji.name === "😄"){
                        message.channel.send("Enter the id of the channel you want to define as **Welcomer Channel** !")
                         const filter = (message, user) => {
                          return message.author.id === message.author.id
                        }
                        botmessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                        .then(async collected =>{
                            const messageCollected = collected.first()
                            if (messageCollected) {
                                var channel = client.channels.get(messageCollected.content)
                                if(!channel) return message.channel.send(no + "Enter a valid id channel !")
                                var sql = "UPDATE welcomer SET Channel = '" + messageCollected + "' WHERE GuildID = " + message.guild.id
                                con.query(sql, function(err, result){
                                    if (err) throw err
                                    message.channel.send(yes + "Welcomer channel succesfuly change to " + channel.name + " !")
                                })
                            }
                            })
                    }
                    if(reaction.emoji.name === "🤔"){
                      botmessage.channel.send("```\n1- To enable !\n2- To disable !```")
                      const filter = (message1, user) => {
                          return message1.author.id === message.author.id
                        }
                        botmessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                        .then(async collected =>{
                            const messageCollected = collected.first()
                            if(messageCollected.content === "1"){
                              var sql = "UPDATE welcomer SET Status = 'Enable' WHERE GuildID = " + message.guild.id
                              con.query(sql, function(err, result){
                                message.channel.send(yes + "Welcomer succesfuly set to enable !")
                              })
                            }
                            if(messageCollected.content === "2"){
                              var sql = "UPDATE welcomer SET Status = 'Disable' WHERE GuildID = " + message.guild.id
                              con.query(sql, function(err, result){
                                message.channel.send(yes + "Welcomer succesfuly set to disable !")
                              })
                            }
                            })
                    }
                    if(reaction.emoji.name === "🕛"){
                      con.query("SELECT Message, Channel, Status FROM welcomer WHERE GuildID = " + message.guild.id, function(err, result){
                      if(!result[0].Message){
                        var welmessage = "No message"
                      } else {
                        var welmessage = result[0].Message
                      }
                      if(!result[0].Channel){
                        var welchannel = "No channel"
                      } else {
                        var chan = client.channels.get(result[0].Channel)
                        if(!chan) {
                          var welchannel = "No channel"
                        } else {
                          var welchannel = "<#" + result[0].Channel + ">"
                        }
                      }
                      message.channel.send("Current configuration :\nMessage : " + welmessage + "\nChannel : " + welchannel + "\nStatus : " + result[0].Status)
                      })
                    }
            })
        })
    })
} else {
  let welcomerembed = new Discord.RichEmbed()
            .setAuthor("Welcomer", message.author.displayAvatarURL)
            .setColor(color())
            .addField("🙂", "To set welcomer message !")
            .addField("😄", "To set welcomer channel !")
            .addField("🤔", "To enable/disable welcomer !")
            .addField("🕛", "To show current message and channel set !")
            .setTimestamp()
            .setFooter("Amethyst | Welcomer")
            message.channel.send(welcomerembed).then((botmessage)=>{
                botmessage.react("🙂").then(() => botmessage.react("😄")).then(() => botmessage.react("🤔")).then(() => botmessage.react("🕛"))
                const filter = (reaction, user) => {
                  return ["🙂", "😄", "🤔", "🕛"].includes(reaction.emoji.name) && user.id === message.author.id
                }
                botmessage.awaitReactions(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                  .then(async collected => {
                    const reaction = collected.first();
                    if(reaction.emoji.name === "🙂"){
                        message.channel.send("Enter the message you want to define as **Welcomer Message** !\n**USERNAME** = `member join username`\n**MENTION** = `member join mention`\n**GUILD** = `guild name`\n**NUMBER_USER** = `number of user on this guild`").then((botmessage2)=>{
                            const filter = (message2, user) => {
                          return message2.author.id === message.author.id
                        }
                        botmessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                        .then(async collected =>{
                            const messageCollected = collected.first()
                            if (messageCollected) {
                              if(messageCollected.content.includes("'")){
                                var welcomermessage = messageCollected.content.split("'").join(" ")
                              } else {
                                    var welcomermessage = messageCollected
                              }
                                var sql = "UPDATE welcomer SET Message = '" + welcomermessage + "' WHERE GuildID = " + message.guild.id
                                con.query(sql, function(err, result){
                                    if (err) throw err
                                    message.channel.send(yes + "Welcomer message succesfuly edit to : " + welcomermessage + " !")
                                })
                            }
                        })
                        })
                    }
                    if (reaction.emoji.name === "😄"){
                        message.channel.send("Enter the id of the channel you want to define as **Welcomer Channel** !")
                         const filter = (message2, user) => {
                          return message2.author.id === message.author.id
                        }
                        botmessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                        .then(async collected =>{
                            const messageCollected = collected.first()
                            if (messageCollected) {
                                var channel = client.channels.get(messageCollected.content)
                                if(!channel) return message.channel.send(no + "Enter a valid id channel !")
                                var sql = "UPDATE welcomer SET Channel = '" + messageCollected + "' WHERE GuildID = " + message.guild.id
                                con.query(sql, function(err, result){
                                    if (err) throw err
                                    message.channel.send(yes + "Welcomer channel succesfuly change to " + channel.name + " !")
                                })
                            }
                            })
                    }
                    if(reaction.emoji.name === "🤔"){
                      botmessage.channel.send("```\n1- To enable !\n2- To disable !```")
                      const filter = (message1, user) => {
                          return message1.author.id === message.author.id
                        }
                        botmessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                        .then(async collected =>{
                            const messageCollected = collected.first()
                            if(messageCollected.content === "1"){
                              var sql = "UPDATE welcomer SET Status = 'Enable' WHERE GuildID = " + message.guild.id
                              con.query(sql, function(err, result){
                                message.channel.send(yes + "Welcomer succesfuly set to enable !")
                              })
                            }
                            if(messageCollected.content === "2"){
                              var sql = "UPDATE welcomer SET Status = 'Disable' WHERE GuildID = " + message.guild.id
                              con.query(sql, function(err, result){
                                message.channel.send(yes + "Welcomer succesfuly set to disable !")
                              })
                            }
                            })
                    }
                    if(reaction.emoji.name === "🕛"){
                      con.query("SELECT Message, Channel, Status FROM welcomer WHERE GuildID = " + message.guild.id, function(err, result){
                      if(!result[0].Message){
                        var welmessage = "No message"
                      } else {
                        var welmessage = result[0].Message
                      }
                      if(!result[0].Channel){
                        var welchannel = "No channel"
                      } else {
                        var chan = client.channels.get(result[0].Channel)
                        if(!chan) {
                          var welchannel = "No channel"
                        } else {
                          var welchannel = "<#" + result[0].Channel + ">"
                        }
                      }
                      message.channel.send("Current configuration :\nMessage : " + welmessage + "\nChannel : " + welchannel + "\nStatus : " + result[0].Status)
                      })
                    }
            })
        })
}
})
}