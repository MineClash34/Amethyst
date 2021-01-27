const weather = require('weather-js')
const Discord = require("discord.js")
exports.run = (client, message, args, color, no, yes) => {
  if(!args[0]) {
    var wembed = new Discord.RichEmbed()
    .setTitle("WEATHER COMMAND")
    .setDescription("**WEATHER HELP**")
    .setColor(color())
    .addField("Use :", "Do `a!weather` or alias (`a!w`) and enter maps location !")
    .setTimestamp()
    message.channel.send(wembed)
    return
  }
  weather.find({search: args.join(" "), degreeType: 'F'}, function(err, resulttest) {
  if(resulttest.length <= 0) return message.channel.send(no + "Location not found !")
  
  message.channel.send("Please choose **deegre type** :\n:regional_indicator_c: → **Celsius**\n:regional_indicator_f: → **Fahrenheit**").then((botmessage)=>{
                botmessage.react("🇨").then(() => botmessage.react("🇫"))
                const filter = (reaction, user) => {
                  return ["🇫", "🇨"].includes(reaction.emoji.name) && user.id === message.author.id
                }
                botmessage.awaitReactions(filter, {max: 1, time: 90000, errors: ['time']})
                  .then(async collected => {
                    const reaction = collected.first();
                    if(reaction.emoji.name === "🇫"){
                      botmessage.delete()
weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
  if(result.length <= 0) return message.channel.send(no + "Location not found !")

  var current = result[0].current;
  var location = result[0].location;
    if (err) message.channel.send(err);
    let embed = new Discord.RichEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Weather for : ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .setColor(color())
    .addField('Timezone :', `UTC ${location.timezone}, true`)
    .addField('Degree type :', location.degreetype, true)
    .addField('Temperature :', `${current.temperature} Degree`, true)
    .addField('Feels like :', `${current.feelslike} Degree`, true)
    .addField('Wind display :', current.winddisplay, true)
    .addField('Humidity', `${current.humidity}%`, true)
    message.channel.send(embed)
});
                    }
                    if(reaction.emoji.name === "🇨"){
                      botmessage.delete()
                      weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
  if(result.length <= 0) return message.channel.send(no + "Location not found !")

  var current = result[0].current;
  var location = result[0].location;
    if (err) message.channel.send(err);
    let embed = new Discord.RichEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Weather for : ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .setColor(color())
    .addField('Timezone :', `UTC ${location.timezone}, true`)
    .addField('Degree type :', location.degreetype, true)
    .addField('Temperature :', `${current.temperature} Degree`, true)
    .addField('Feels like :', `${current.feelslike} Degree`, true)
    .addField('Wind display :', current.winddisplay, true)
    .addField('Humidity', `${current.humidity}%`, true)
    message.channel.send(embed)
});
                    }

})
  })
  })
}