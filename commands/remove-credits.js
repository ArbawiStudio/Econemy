const db = require('quick.db')

module.exports = {

    name: 'remove-credits',

    run: async(client, TOBZiCoder, args) => {

        if(TOBZiCoder.author.id !== '779034600415428608') {
            return TOBZiCoder.channel.send('<:X_:965309000574967870> **| Only Developers of Bot Can Use this Command**')
        }
      
        let user = message.mentions.members.first() || message.author;
      
          if (isNaN(args[1])) return;

          db.subtract(`TBANK_${user.id}`, args[1])
      
        message.channel.send(`<:CheckMark:965332291037569075> **| ${TOBZiCoder.author.username}, you has been removed \`$${args[1]}\` from ${user}**`)
    }
}