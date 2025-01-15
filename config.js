module.exports = {
    app: {
        token: process.env.DISCORD_TOKEN || 'MTMyOTA0ODA1MTMxODI1OTc1NA.Gag1Wb.aH_Pr2jRkdqf3PUFHJUHQh-FlYqvHRp6nsnICQ',
        playing: 'by the Community ❤️',
        global: true,
        guild: process.env.GUILD_ID || '1250297098558247032',
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
