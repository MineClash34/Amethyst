const Discord = require("discord.js")
exports.run = (client, message, args, color, no, yes) => {
let cMS = convertMS(client.uptime);
  let uptime =
    cMS.d +
    " days : " +
    cMS.h +
    " hours : " +
    cMS.m +
    " minutes : " +
    cMS.s +
    " seconds";

  const uptimeEmbed = new Discord.RichEmbed()
    .setColor(color())
    .addField(`Le bot est on depuis :`, `${uptime}`)
    .setFooter("Amethyst")
    .setTimestamp( )

  message.channel.send(uptimeEmbed);

function convertMS(ms) {
  var d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  return {
    d: d,
    h: h,
    m: m,
    s: s
  };
}
    }