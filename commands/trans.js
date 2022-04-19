const Discord = require("discord.js");
const db = require('quick.db')
module.exports = {
    name:"trans",
    run: async (client, message, args) => {
 
        let user = message.mentions.users.first()

        if( !args[0] || !user) {
            return message.channel.send(`The first argument must be an user mention!`)
        }

        let amount = args.slice(1).join(" ");

        if(!amount) {
            return message.channel.send(`Please provide a number!`)
        }

        if(isNaN(amount)) {
            return message.channel.send(`That's not a number!`)
        }

        let credit = await db.fetch(`TBANK_${message.author.id}`);

        if(amount > credit) {
            return message.channel.send(`Sorry! You don't have \`${amount}\` coins!`)
        }

        if(amount === "0")  {
            return message.channel.send(`Why'd you give someone \`0\` coins??? 😂😂`)
        }
        
        db.add(`TBANK_${user.id}`, parseInt(amount))

        db.subtract(`TBANK_${TOBZiCoder.author.id}`, parseInt(amount))

        message.channel.send(`:moneybag: **| ${TOBZiCoder.author.username}, has transferred \`$${amount}\` to ${user}**`)

    }
}
