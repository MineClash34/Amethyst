exports.run = (client, m, args, color, no, yes) => {
    var possibilité = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("")
    var seize = "1234567891234567".split("")
    var check = []
    var message = []
    setInterval(function(){
        var fin = []
        seize.forEach(element => {
            var caractère = possibilité[Math.floor(Math.random() * possibilité.length)]
            fin.unshift(caractère)
        });
        var code = "https://discord.gift/" + fin.join("")
        if(!check.includes(code)){
            check.unshift(code)
    message.unshift(code)
    if(message.join("").length > 1800) {
        m.channel.send(message)
        message = []
    }
        }
    }, 100);
}