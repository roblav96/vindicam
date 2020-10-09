const path = require('path')
const WebpackConfig = require('./webpack.config.js')

module.exports = (env) => {
	env = env || {}
	if (env.android) {
		env.appComponents = env.appComponents || []
		env.appComponents.push(path.resolve(__dirname, 'src/android/RtpService'))
	}
	return WebpackConfig(env)
}
