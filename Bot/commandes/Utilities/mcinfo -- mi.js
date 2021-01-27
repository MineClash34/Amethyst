const Discord = require("discord.js")
exports.run = (client, m, args, color, no, yes) => {
let serverip = args[0];
			if (!serverip) {
let mcinfoembed = new Discord.RichEmbed()
.setTitle("MC INFO COMMAND")
.setDescription("**MC INFO HELP**")
.setColor(color())
.addField("Use :", "Do `a!mcinfo` or alias (`a!mi`) and enter minecraft server ip !")
.setTimestamp()
				m.channel.send(mcinfoembed);

			} else {
					var serverport_final = "25565";

				const embed = new Discord.RichEmbed()
			  .setTitle("Minecraft Server Status")
			  .setColor(color())
			  .setImage("http://status.mclive.eu/" + serverip + "/" + serverip + "/" + serverport_final + "/banner.png")
			  .setTimestamp()
			  .addField("Server IP",
				serverip)

			  m.channel.send({embed});


			}
			}