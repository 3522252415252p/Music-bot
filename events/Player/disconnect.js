const { EmbedBuilder } = require("discord.js");
const { Translate } = require("../../translate");

module.exports = (queue) => {
  if (queue.metadata.lyricsThread) {
    queue.metadata.lyricsThread.delete();
    queue.setMetadata({
      channel: queue.metadata.channel,
    });
  }

  (async () => {
    const embed = new EmbedBuilder()
      .setAuthor({
        name: await Translate(
          `Disconnected from the voice channel, clearing the queue! <❌>`
        ),
      })
      .setColor("#2f3136");

    queue.metadata.channel.send({ embeds: [embed] });
  })();
};
