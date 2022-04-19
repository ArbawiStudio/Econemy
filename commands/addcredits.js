const db = require('quick.db')

module.exports = {

    name: 'add-credits',

    run: async(client, TOBZiCoder, args) => {

        if(TOBZiCoder.author.id !== '') {
            return TOBZiCoder.channel.send('<:X_:965309000574967870> **| Only Developers of Bot Can Use this Command**')
        }

        let user = TOBZiCoder.mentions.users.first()

        if(!user) return TOBZiCoder.channel.send('Mention a Member!')
        
        if (isNaN(args[1])) return TOBZiCoder.channel.send('Numbers Only!')

        db.add(`TBANK_${user.id}`, args[1])

        TOBZiCoder.channel.send(`<:CheckMark:965332291037569075> **| ${TOBZiCoder.author.username}, you has been added \`$${args[1]}\` to ${user}**`)

    }
}