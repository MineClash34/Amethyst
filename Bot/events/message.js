const mysql = require("mysql")
module.exports = (client, message) => {
  var con = mysql.createConnection({
  database: 'amethyst',
  host: "localhost",
  user: "root"
});
 
con.connect(function(err) {
  if (err) throw err;
});

if (message.author.bot) return;
if (message.content.indexOf(client.config.prefix) !== 0 && message.channel.type === "dm") {
  let args = message.content.trim().split(/ +/g);
  let command = args[0].toLowerCase();
  let cmd = client.commands.get(command);
  
  if (!cmd) return;
message.channel.send("Bot is in developement ! Join official serveur ! **Link Soon**")
}
const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);
  
  if (!cmd) return;
  if(message.content.indexOf(client.config.prefix) !== 0) return;
if(message.channel.id === "623989029339398174"){
  
  /*if (message.content.indexOf(client.config.prefix) !== 0 && message.channel.type === "dm") {
const args = message.content.trim().split(/ +/g);
const command = args[0].toLowerCase()
  
  const cmd = client.commands.get(command);
  if (!cmd) return;
  var no = "<a:no:621353337924747273> "
  var yes = "<a:valid:619196995470622740> "
     function color() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  args.shift()
  cmd.run(client, message, args, color, no, yes, con);
}*/
     function color() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  var no = "<a:no:621353337924747273> "
  var yes = "<a:valid:619196995470622740> "
  cmd.run(client, message, args, color, no, yes, con)
} else if(message.guild.id === "602159736049106966"){
 function color() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  var no = "<a:no:621353337924747273> "
  var yes = "<a:valid:619196995470622740> "
  cmd.run(client, message, args, color, no, yes, con)
} else {
 message.channel.send("Bot is in developement ! Join official serveur ! **Link Soon**")
}
};