const { inspect } = require('util');
exports.run = async (client, message, args, color, no, yes) => { 
	var adminid = ["359218206897995776"]
if (!adminid.includes(message.author.id)) return;
    let evaled;
    try {
      evaled = await eval(args.join(' '));
      message.channel.send(inspect(evaled));
      console.log(inspect(evaled));
    }
    catch (error) {
      console.error(error);
      message.reply(no + "Une erreur c'est produite lors de l'opération...");
    }
  }