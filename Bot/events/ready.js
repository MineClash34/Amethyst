module.exports = (client) => {
  console.log(`Connecté sur ${client.guilds.size} serveurs, pour un total de ${client.users.size} users.`);
  client.user.setStatus('available') // Can be 'available', 'idle', 'dnd', or 'invisible'
    client.user.setPresence({
        game: {
            name: `${client.guilds.size} servers | ${client.users.size} users | Do a!help !`,
            type: "WATCHING"
        }
    });
var type = ["WATCHING", "WATCHING", "PLAYING"]
var SNumber = [0]
setInterval(function(){
    var Status = [`${client.guilds.size} servers !`, `${client.users.size} users !`, `Do a!help !`]
	client.user.setPresence({
        game: {
            name: Status[SNumber[0]],
            type: type[SNumber[0]]
        }
    })
	SNumber.push(SNumber[0] + 1)
	SNumber.shift()
	if(SNumber[0] === 3){
		SNumber.shift()
		SNumber.unshift(0)
		}
	}, 10000)
	}