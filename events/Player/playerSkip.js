const { EmbedBuilder } = require('discord.js');

module.exports = (queue, track) => {
    const embed = new EmbedBuilder()
        .setAuthor({ name: `Skipping **${track.title}** due to an issue! ❌`, iconURL: track.thumbnail })
        .setColor('#EE4B2B');

    queue.metadata.send({ embeds: [embed] });
}
