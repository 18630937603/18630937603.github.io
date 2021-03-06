const Path = require('path')

module.exports = {
    pwa: {
        workboxOptions: {
            // https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
            skipWaiting: true,
            clientsClaim: true,
            importWorkboxFrom: 'local',
            importsDirectory: 'js',
            navigateFallback: '/',
            navigateFallbackBlacklist: [/\/api\//]
        },
        themeColor: {
            default: '#000000'
        },
        msTileColor: {
            default: '#000000'
        }
    },
    outputDir: 'docs'
}

