const path = require('path')
const webpack = require('webpack')
const WebpackConfig = require('./webpack.config')

module.exports = (env) => {
    env = env || {}
    env.appComponents = env.appComponents || []
    if (env.android) {
        env.appComponents.push(path.resolve(__dirname, 'src/android/RtpService.ts'))
    }
    let config = WebpackConfig(env)
    // config.plugins.push(
    //     new webpack.ProvidePlugin({
    //         'Promise': 'bluebird/js/browser/bluebird.core.js',
    //         'global.Promise': 'bluebird/js/browser/bluebird.core.js',
    //         'globalThis.Promise': 'bluebird/js/browser/bluebird.core.js',
    //     }),
    // )
    return config
}
