const Discord = require('discord.js')
const { MessageButton } = require('discord-buttons')
const { PREFIX } = require('../config.json')

module.exports = {

    name: 'help',

    run: async(client, TOBZiCoder) => {
        let args = TOBZiCoder.content.split(" ").slice(1)
        if(args[0] === 'credits') {

            let EMBED = new Discord.MessageEmbed()
            
            .setAuthor(TOBZiCoder.author.username, TOBZiCoder.author.avatarURL())
    
            .setColor()
    
            .addField(`${PREFIX}credits`, 'View your wallet', true)
    
            .addField(`${PREFIX}daily`, `Claim your daily Reward`, true)
    
            .addField(`${PREFIX}donate`, `to Transfer to author Member`,true)
            
            .addField(`${PREFIX}add-credits`, `Add Credits to Any User`, true)
    
            .addField(`${PREFIX}remove-credits`, `Remove Credits from Any User`, true)


            let BUTTON = new MessageButton()
    
            .setStyle('grey')
    
            .setLabel('Delete Message')
    
            .setID('delete')
    
            let INVITE = new MessageButton()
    
            .setStyle('url')
    
            .setLabel('Invite me')
    
            .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=&scope=bot`)
    
            TOBZiCoder.channel.send(EMBED, { buttons: [BUTTON, INVITE] })

        }
    }
}
