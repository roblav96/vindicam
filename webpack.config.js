const path = require('path')
const WebpackConfig = require('./webpack.typescript')

module.exports = (env) => {
    env = env || {}
    env.appComponents = env.appComponents || []
    if (env.android) {
        env.appComponents.push(path.resolve(__dirname, 'src/android/RtpService'))
    }
    return WebpackConfig(env)
}
