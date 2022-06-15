module.exports = {
    app: {
        px: 'star*',
        token: 'OTgxOTkzODMyNDk5NTE1NDYz.GGmoz0.Oj1CkHO3IIS02ltpJOPovJOBtcdjmyvsGsOQZY',
        playing: '❤️Star Family❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
