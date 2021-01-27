exports.run = (client, m, args, color, no, yes) => {
var tag = m.author.tag.split("#")
  var cn = tag[0].toLowerCase().replace(" ", "-") + tag[1]
  if(m.channel.name === cn){
      m.channel.delete()
  } else {
      m.channel.send(no + "You isn't own of this channel !")
  }
}