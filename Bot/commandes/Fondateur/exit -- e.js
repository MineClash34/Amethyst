      var pm2 = require('pm2')
exports.run = (client, m, args, color, no, yes) => {
	var adminid = ["359218206897995776"]
	if(adminid.includes(m.author.id)){
    m.channel.send(yes + " Arrêt en cours... N'oubliez pas de me rallumer").catch(console.error).then(function(){
pm2.connect(function(err){
    if( err ) {
        console.error(err)
        process.exit(2)
    }
})
        pm2.restart({
            script : "bot.js"
        }, function (err, apps){
            pm2.disconnect()
            if(err) throw err
        })
    })
    } else {
    	m.channel.send(no + "This command is an admin command !")
    }
  }