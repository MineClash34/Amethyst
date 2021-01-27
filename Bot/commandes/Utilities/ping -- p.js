exports.run = (client, m, args, color, no ,yes) => {
	const Discord = require("discord.js");

  let startTime = Date.now();

let embed = new Discord.RichEmbed()

    .setColor(color())

    .setDescription(

      "⏲ Ping du Bot : ***" +

        (new Date() - startTime).toFixed(0) +

        " ms***\n💓 Ping de l'API  : ***" +

        Math.round(client.ping).toFixed(0) +

        " ms***"

    );

  m.channel.send(embed).then((message) => {

    let embed = new Discord.RichEmbed()

      .setColor(color())

      .setDescription(

        "⏲ Ping du Bot : ***" +

          (new Date() - startTime - Math.round(client.ping)).toFixed(0) +

          " ms***\n💓 Ping de l'API : ***" +

          Math.round(client.ping).toFixed(0) +

          " ms***\n" +

          ":satellite: Ping Total : ***" +

          (new Date() - startTime).toFixed(0) +

          " ms***"

      );

    message.edit(embed);

  });


}