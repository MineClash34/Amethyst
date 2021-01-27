const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, m, args, color) => {

    const servercreated = moment(m.guild.createdAt).format('MMMM Do YYYY, h:mm:ss a');

    const emojis = [];
    if (m.guild.emojis.size !== 0) {
      m.guild.emojis.forEach((r) => {
        let en = "<" + r.name + ":" + r.id
      });
    }

    const emojisembed = [];
    if (emojis.length === 0) {
      emojisembed.push("Don't have emoji on this server !");
    }
    else if (emojis.join(' ').length > 1020) {
      for (let i = 0; i < emojis.length; i += 1) {
        if (emojisembed.join(' ').length < 980) {
          emojisembed.push(emojis[i]);
        }
      }
      emojisembed.push('...');
    }
    else {
      emojisembed.push(emojis.join(' '));
    }

    const embed = new Discord.MessageEmbed()
      .setAuthor(`${m.guild.name} (${m.guild.id})`, m.guild.iconURL())
      .setColor(color())
      .setTimestamp()
      .setThumbnail(m.guild.iconURL())
      .addField(`🤵 Member count :`, m.guild.memberCount)
      .addField(`🗻 Server region :`, m.guild.region)
      .addField(`📲 Channel Count :`, m.guild.channels.size)
      .addField(`⏳ Server created at :`, servercreated)
      .addField(`☑ Server verification level :`, m.guild.verificationLevel || "No server verification !")
      .addField(`📤 Server AFK channel :`, m.guild.afkChannel === null ? "No AFK channel !" : m.guild.afkChannel.name)
      .addField(`🎊 Server emojis :`, emojisembed.join(' '));

    msg.channel.send(embed);
  }