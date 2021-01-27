const moment = require("moment")
const Discord = require("discord.js")
exports.run = (client, m, args, color, no, yes) => {
  let user = m.mentions.users.first();

    if (!user && args.slice().length === 0) {
      user = m.author;
    }
    else if (user) {
      if (user.bot) return m.reply(no + "Mentionned user is a bot...");
    }
    else {
      try {
        const fetchedMember = m.guild.members.get(args.slice().join(' '));
        if (!fetchedMember) new Error(no + 'User not found !');
        user = fetchedMember;
        user = user.user;

        if (user.bot) return m.reply(no + "Mentionned user is a bot...");
      }
      catch (error) {
        m.reply(no + "User not found !");
      }
    }
    if(m.channel.type !== "dm"){

    const member = m.guild.member(user) || m.guild.members.get(args.slice().join(' '));
    const userondiscord = moment(user.createdTimestamp).format('MMMM Do YYYY, h:mm:ss a');
    const useronserver = moment(member.joinedAt).format('MMMM Do YYYY, h:mm:ss a');


    const embed = new Discord.RichEmbed()
      .setColor(color())
      .setThumbnail(user.displayAvatarURL)
      .setTitle("User Info")
      .setDescription("Information on : **" + user.username + "**")
      .addField(`📥 ${"Account created at"}`, userondiscord)
      .addField(`📌 ${"Member joined server at"}`, useronserver)
      .addField(`⌚ ${"User status"}`, user.presence.status)
      .addField(`🎮 ${"User playing at"}`, user.presence.activity ? user.presence.activity.name : "User not playing !")
      .setTimestamp();

    m.channel.send(embed);
    } else {
    const userondiscord = moment(user.createdTimestamp).format('MMMM Do YYYY, h:mm:ss a');

    const embed = new Discord.RichEmbed()
      .setColor(color())
      .setThumbnail(user.displayAvatarURL)
      .setTitle("User Info")
      .setDescription("Information on : **" + user.username + "**")
      .addField(`📥 ${"Account created at"}`, userondiscord)
      .addField(`⌚ ${"User status"}`, user.presence.status)
      .addField(`🎮 ${"User playing at"}`, user.presence.activity ? user.presence.activity.name : "User not playing !")
      .setTimestamp();

    m.channel.send(embed);
}
}