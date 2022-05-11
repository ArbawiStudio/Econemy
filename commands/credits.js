const db = require('quick.db')

module.exports = {

    name: 'credits',

    run: async(client, TOBZiCoder, args) => {

        let user = TOBZiCoder.mentions.users.first() || TOBZiCoder.author;
        
        if(user.bot) return TOBZiCoder.channel.send(`:robot: **| ${TOBZiCoder.author.username}, bots do not have credits!**`)

        let credits = await db.fetch(`TBANK_${user.id}`)

        if(credits === null) credits = 0;

        TOBZiCoder.channel.send(`:bank: **| ${user.username}, your account balance is \`$${credits}\`**.`)
    }
}
