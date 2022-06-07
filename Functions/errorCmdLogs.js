//=====================================| Code |=====================================\
const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, MessageAttachment } = require("discord.js");
const { author, version } = require(`${process.cwd()}/package.json`);
const Settings = require(`${process.cwd()}/Settings/Settings.json`);
const Config = require(`${process.cwd()}/Settings/Config.json`);
const Emoji = require(`${process.cwd()}/Settings/Emojis.json`);
const Embed = require(`${process.cwd()}/Settings/Embed.json`);

//=====================================| Code |=====================================\

module.exports.errorCmdLogs1 = errorCmdLogs1;
module.exports.errorCmdLogs2 = errorCmdLogs2;

function errorCmdLogs1(error, message, client) {
    console.log(String(error.stack).bgRed)
    client.channels.cache.get(Config.SETTINGS.ErrorChannel).send({
        embeds: [
            new MessageEmbed()
                .setColor(Embed.wrongcolor)
                .setAuthor({ name: `${message.guild.name}\n[${message.guild.id}]`, iconURL: message.guild.iconURL({ dynamic: true }) })
                .setTitle(`${Emoji.Message.ERROR} Error System [MESSAGE COMMANDS]`)
                .setDescription(`_An error has occured_.\n\n**Error Code:** \`${error.name}\`\n**Error Message:** \`${error.message}\`\n**Stack:** \`\`\`yml\n${error.stack}\`\`\``)
                .setFooter({ text: `Memory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB | CPU: ${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}% | Ping: ${Date.now() - message.createdTimestamp}ms` })
        ]
    });

    client.channels.cache.get(message.channel.id).send({
        embeds: [
            new MessageEmbed()
                .setColor(Embed.wrongcolor)
                .setTitle(`${Emoji.Message.ERROR} ${message.author.tag} => Error System`)
                .setDescription('_An error has occured_')
                .setFooter({ text: `${Embed.footertext} · v${version}, ${message.client.user.displayAvatarURL()}` })
        ]
    }).then(m => setTimeout(() => m.delete(), 6000));
}

function errorCmdLogs2(error, interaction, client) {
    console.log(String(error.stack).bgRed)
    client.channels.cache.get(Config.SETTINGS.ErrorChannel).send({
        embeds: [
            new MessageEmbed()
                .setColor(Embed.wrongcolor)
                .setAuthor({ name: `${interaction.guild.name}\n[${interaction.guild.id}]`, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                .setTitle(`${Emoji.Message.ERROR} Error System [INTERACTION COMMANDS]`)
                .setDescription(`_An error has occured_.\n\n**Error Code:** \`${error.name}\`\n**Error Message:** \`${error.message}\`\n**Stack:** \`\`\`yml\n${error.stack}\`\`\``)
                .setFooter({ text: `Memory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB | CPU: ${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}% | Ping: ${Date.now() - interaction.createdTimestamp}ms` })
        ]
    });
}