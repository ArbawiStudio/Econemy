const { Client, Collection } = require('discord.js')
const client = new Client()
client.commands = new Collection()
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const db = require('quick.db')
const { PREFIX } = require('./config.json')
require('discord-buttons')(client)
const CommandFiles = fs.readdirSync(path.join(__dirname, "commands")).filter(file => file.endsWith('.js'))

for(const file of CommandFiles) {
    const command = require(path.join(__dirname, "commands", `${file}`))
    client.commands.set(command.name, command)
}

client.on('message', async TOBZiCoder => {
    if(TOBZiCoder.channel.type === 'dm' || TOBZiCoder.author.bot) return;
    if(!TOBZiCoder.content.startsWith(PREFIX)) return;
    const args = TOBZiCoder.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase()
    try {
        client.commands.get(command).run(client, TOBZiCoder, args, db)
    } catch (error) {
        console.log(chalk.red.bold(`An Error Occured (${error})`))
    }
})


client.on('ready', async() => {
    await console.log(chalk.blue.bold(client.user.username) + ` Is Ready! (${client.user.id})`)
    await console.log(`⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙\n\n${client.commands.map(cmd => `${cmd.name}.js (✔)`).join('\n')}\n\n⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙`)
    await client.user.setStatus('dnd')
    await client.user.setActivity(`${PREFIX}help`, { type: 'WATCHING' })
})

client.on('clickButton', async b => { if(b.id === 'delete') { b.message.delete() }})
client.login('')