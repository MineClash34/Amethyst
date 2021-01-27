const Discord = require("discord.js")
const mysql = require("mysql")
exports.run = (client, message, args, color, no, yes, con) => {
con.query("SELECT GuildID, Language FROM guild WHERE GuildID = " + message.guild.id, function(err, result){
    if(result.length <= 0){
        con.query("INSERT INTO guild (GuildID) VALUES (" + message.guild.id + ")", function(err, result){
        })
    }
})
setTimeout(function(){
con.query("SELECT GuildID, Language FROM guild WHERE GuildID = " + message.guild.id, function(err, result){
    let langue = require("C:/Users/Administrateur/Desktop/Amethyst/Bot/" + result[0].Language + ".json")
    if(message.channel.type === "dm") return message.channel.send(no + langue.Language_Choice_NotDM)
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(no + langue.Language_Choice_NotPermission)
    var LanguageChoiceEmbed = new Discord.RichEmbed()
    .setAuthor(langue.Language_Choice_Title, message.author.displayAvatarURL)
    .setColor(color())
    .addField(langue.Language_Choice_1_0Field, langue.Language_Choice_1_5Field)
    .addField(langue.Language_Choice_2_0Field, langue.Language_Choice_2_5Field)
    .setTimestamp()
    .setFooter("Amethyst || Langage")
    message.channel.send(LanguageChoiceEmbed).then((botmessage)=>{
        botmessage.react("634795206721536010").then(() => botmessage.react("634795919274934292"))
        const filter = (reaction, user) => {
          return ["634795206721536010", "634795919274934292"].includes(reaction.emoji.id) && user.id === message.author.id
        }
        botmessage.awaitReactions(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
          .then(async collected => {
            const reaction = collected.first();
            if(reaction.emoji.id === "634795206721536010"){
                con.query("UPDATE guild SET Language = 'Français' WHERE GuildID = " + message.guild.id, function(err, result){
                    let langue = require("C:/Users/Administrateur/Desktop/Amethyst/Bot/Français.json")
                    message.channel.send(langue.Language_Choice_Valid)
                })
            } else if (reaction.emoji.id === "634795919274934292"){
                con.query("UPDATE guild SET Language = 'English' WHERE GuildID = " + message.guild.id, function(err, result){
                    let langue = require("C:/Users/Administrateur/Desktop/Amethyst/Bot/English.json")
                    message.channel.send(langue.Language_Choice_Valid)
                })
            }
        })
})
})
}, 500)
}