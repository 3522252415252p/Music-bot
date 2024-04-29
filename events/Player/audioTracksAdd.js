const { EmbedBuilder } = require('discord.js');

module.exports = (queue) => {
    if (!client.config.app.extraMessages) return;

    const embed = new EmbedBuilder()
        .setAuthor({ name: `All the songs in playlist added into the queue ✅` })
        .setColor('#2f3136');

    queue.metadata.send({ embeds: [embed] });
}
