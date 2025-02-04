module.exports = {
    app: {
        token: process.env.DISCORD_TOKEN || 'MTMzNjI2NDQwOTMwNzQxNDYxOQ.GedqKa.qIqXwsQJA5SmKOJ3YM4gEDny8q5nnc6_R9JzaA',
        playing: 'by the Community ❤️',
        global: true,
        guild: process.env.GUILD_ID || '1325325486603112498',
        extraMessages: false,
        loopMessage: false,
        lang: 'en',
        enableEmojis: false,
    },

    emojis:{
        'back': '⏪',
        'skip': '⏩',
        'ResumePause': '⏯️',
        'savetrack': '💾',
        'volumeUp': '🔊',
        'volumeDown': '🔉',
        'loop': '🔁',
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        Translate_Timeout: 10000,
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
