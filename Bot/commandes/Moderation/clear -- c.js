    exports.run = (client, m, args, color, no, yes) => {
	if(m.channel.type === "dm") return m.channel.send(no + "This command is disabled in mp !")
var nombre = args[0];

    if (!nombre) return m.channel.send(no + "Enter a number !");

    if (isNaN(nombre))

      return m.channel.send(no + "Enter a number !");

    if (nombre > 100)

      return m.channel.send(

        no + "Enter a number beetwen 1 and 100"

      );

    if (!m.member.hasPermission("MANAGE_MESSAGES"))

return m.channel.send(no + "You don't have permission to do this !");

    m.channel.bulkDelete(nombre);

    setTimeout(function() {

      m.channel.send(yes + "Message successfully deleted !").then(message => {

        setTimeout(function() {

          message.delete();

        }, 3000);

      });

    }, 1000);

  };

