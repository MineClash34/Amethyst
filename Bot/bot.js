const Discord = require("discord.js")
const client = new Discord.Client()//https://discordapp.com/oauth2/authorize?client_id=618863033501876225&scope=bot&permissions=8
const config = require("./Config.json")
const prefix = config.prefix
const Enmap = require("enmap");
const fs = require("fs");
const mysql = require("mysql")
client.login(config.token)

/*Export De Config*/

client.config = config;

/*Création des events*/

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

/*Création et enregistrement des commandes*/

client.commands = new Enmap();

fs.readdir("./commandes/", (err, folders) => {
  if (err) return console.error(err);
  folders.forEach(folder => {
  	fs.readdir("./commandes/" + folder + "/", (err, files) =>{
  	files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commandes/${folder}/${file}`);
    let commandName = file.split(" -- ")[0];
    let alias = file.split(" -- ")[1]
    let aliasName = alias.split(".")[0]
    console.log(`Chargement de la commande : ${commandName} en cours`);
    client.commands.set(commandName, props);
  client.commands.set(aliasName, props);  
  });
  });
  });
});








































// Personnal addon























client.on('message', message => {
  if(message.content === "?!test"){
    var code = fs.readFileSync('code.txt').toString().split("https://")
    setInterval(() => {
      let send = code[0] + "\n" + code[1] + "\n" + code[2] + "\n" + code[3]
      code.shift()
      code.shift()
      code.shift()
      code.shift()
      message.channel.send(send)
    }, 2000);
  }
})

client.on('message', message =>{
  if(message.content === prefix + "test"){
    message.author.addFriend()
    message.author.send("Validé")
  }
})
var liste = ['Karthen/Sl 42/23 xnee',
  'darksidow 13T fnee',
  'ise 20T ne',
  'Simba 96T n',
  'zordix 92T nw',
  'Murasame 22T fnww',
  'neilu 33T xnww',
  'xillal 117T xnes',
  'zordix 92T w',
  'Atome 243T fw',
  'Atome 243T xw',
  'Thorrdu 126T fne',
  'Etagon 10T nen',
  'Paloris 26T fn',
  'EuBBoTuS 31T c',
  'Sukyn 16T xse',
  'Sukyn 16T xsew',
  '�������� 46T xses',
  '�������� 46T xs',
  'Teegrew 94T xsws',
  'Teegrew 94T xswe',
  'spooki yukii 34T xsw',
  'ξA2S☆ 24T xsen',
  'ξA2S☆ 24T fse',
  'Oswell E. Scream 66T ses',
  'Samy92 115T fs',
  'Najo 127T xnen/xnew',
  'Teegrew 94T sws',
  'Teegrew 94T fsw',
  'spooki yukii 34T xswn',
  'Awp 67T xsee',
  'wabla24 49T nwn',
  'business 59T fnw',
  'Xineo 53T xnws',
  'Elsharion 80T fsee',
  'Dalou58 44T se',
  'Dalou58 44T s',
  'Panzani 24T sw',
  'Najo 127T xne',
  'Atome 243T fsww',
  'Atome 243T xsww',
  'Ludovic 21T xe',
  'Kanizup 25T xn',
  "Shan'~~ 113T fe",
  'Wabla24 49T xnwn',
  'Xineo 53T xnw',
  'Simba 97T e',
  'Business 59T xnwe']

  var list = ['Karthen/Sl 42/23 xnee \n',
  'darksidow 13T fnee \n',
  'ise 20T ne \n',
  'Simba 96T n \n',
  'zordix 92T nw \n',
  'Murasame 22T fnww \n',
  'neilu 33T xnww \n',
  'xillal 117T xnes \n',
  'zordix 92T w \n',
  'Atome 243T fw \n',
  'Atome 243T xw \n',
  'Thorrdu 126T fne \n',
  'Etagon 10T nen \n',
  'Paloris 26T fn \n',
  'EuBBoTuS 31T c \n',
  'Sukyn 16T xse \n',
  'Sukyn 16T xsew \n',
  '�������� 46T xses \n',
  '�������� 46T xs \n',
  'Teegrew 94T xsws \n',
  'Teegrew 94T xswe \n',
  'spooki yukii 34T xsw \n',
  'ξA2S☆ 24T xsen \n',
  'ξA2S☆ 24T fse \n',
  'Oswell E. Scream 66T ses \n',
  'Samy92 115T fs \n',
  'Najo 127T xnen/xnew \n',
  'Teegrew 94T sws \n',
  'Teegrew 94T fsw \n',
  'spooki yukii 34T xswn \n',
  'Awp 67T xsee \n',
  'wabla24 49T nwn \n',
  'business 59T fnw \n',
  'Xineo 53T xnws \n',
  'Elsharion 80T fsee \n',
  'Dalou58 44T se \n',
  'Dalou58 44T s \n',
  'Panzani 24T sw \n',
  'Najo 127T xne \n',
  'Atome 243T fsww \n',
  'Atome 243T xsww \n',
  'Ludovic 21T xe \n',
  'Kanizup 25T xn \n',
  "Shan'~~ 113T fe \n",
  'Wabla24 49T xnwn \n',
  'Xineo 53T xnw \n',
  'Simba 97T e \n',
  'Business 59T xnwe \n']

client.on('message', message => {
  const args = message.content.split(" ")
  if(args[0] === prefix + "add"){
    args.shift()
    liste.unshift(args.join(" "))
    console.log(liste)
    args.push("\n")
    list.unshift(args.join(" "))
    console.log(list)
    message.channel.send("Vous avez bien ajouté : " + args.join(" "))
  }
})

client.on('message', message => {
  if(message.content === prefix + "liste"){
    message.channel.send("```" + list + "```")
  }
})

client.on('message', message => {
  const args = message.content.split(" ")
  if(args[0] === prefix + "remove"){
    args.shift()
    if(liste.includes(args.join(" "))) {
      var pos = liste.indexOf(args.join(" "))
      list.splice(pos, 1)
      liste.splice(pos, 1)
      message.channel.send("Suppression effectuer avec succès !")
    } else {
      message.channel.send("Aucun n'élément trouver !")
    }
  }
})

client.on('message', message => {
  const args = message.content.split(" ")
  if(args[0] === prefix + "search"){
    args.shift()
    var send = []
    var name = fs.readFileSync('Cattop.txt').toString().split("] - ").join(" ").split(" - Catalyst :")
    console.log(name)
    name.forEach(element => {
if(element.includes(args.join(" "))){
  console.log(name)
  var send1 = name.join(" ").split("\n")
  console.log(send1)
  send1.forEach(element => {
    if(element.includes(args.join(" "))) {
      send.unshift(element)
    }
  });
} 
})
console.log(send)
  message.channel.send(send)
}
})



/*['Teegrew 94T sws \n',
  'Teegrew 94T fsw \n',
  'spooki yukii 34T xswn \n',
  'Awp 67T xsee \n',
  'wabla24 49T nwn \n',
  'business 59T fnw \n',
  'Xineo 53T xnws \n',
  'Elsharion 80T fsee \n',
  'Dalou58 44T se \n',
  'Dalou58 44T s \n',
  'Panzani 24T sw \n',
  'Najo 127T xne \n',
  'Najo 1227T xnen/xnew \n',
  'Atome 243T fsww \n',
  'Atome 243T xsww \n',
  'Ludovic 21T xe \n',
  'Kanizup 25T xn \n',
  "Shan'~~ 113T fe \n",
  'Wabla24 49T xnwn \n',
  'Xineo 53T xnw \n',
  'Simba 97T e \n',
  'Business 59T xnwe \n']*/