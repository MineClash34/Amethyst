const mysql = require("mysql")
module.exports = (client, membre) => {
      var con = mysql.createConnection({
  database: 'amethyst',
  host: "localhost",
  user: "root"
});
 
con.connect(function(err) {
  if (err) throw err;
});
con.query("SELECT Channel, Message, Status FROM welcomer WHERE GuildID = " + membre.guild.id, function(err, result){
  if(result <= 0) return ;
  if(!result[0].Message) return ;
  var channel = client.channels.get(result[0].Channel)
  if(!channel) return ;
  if(result[0].Status === "Disable") return ;
  channel.send(result[0].Message.replace("USERNAME", membre.user.username).replace("MENTION", "<@" + membre.user.id + ">").replace("GUILD", membre.guild.name).replace("NUMBER_USER", membre.guild.memberCount))
})
}