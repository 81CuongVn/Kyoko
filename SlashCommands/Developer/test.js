//=====================================| Import the Module |=====================================//

const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, MessageAttachment, Emoji } = require('discord.js');
const { errorCmdLogs2 } = require(`${process.cwd()}/Functions/errorCmdLogs.js`);
const Embed = require(`${process.cwd()}/Settings/Embed.json`);
const Emojis = require("../../Settings/Emojis.json");

//=====================================| Code |=====================================//

module.exports = {
    name: 'test',
    cooldown: 15,
    description: "Test the Events and Commands Handler",
    category: "Developer",
    devOnly: true,
    nsfwOnly: false,
    guildOnly: false,
    botPerms: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'USE_EXTERNAL_STICKERS', 'SEND_MESSAGES_IN_THREADS'],
    userPerms: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'USE_APPLICATION_COMMAND'],

    async execute(interaction, client, args, prefix) {
        try {
            // interaction.reply(`Testing Command...`);
            interaction.reply(`${Emojis.Message.SUCCESS} Test Command`);
        } catch (error) {
            errorCmdLogs2(error, interaction, client);
        }
    },
};