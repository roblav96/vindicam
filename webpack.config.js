const path = require('path')
const WebpackConfig = require('./webpack.typescript.js')

module.exports = (env) => {
	env = env || {}
	if (env.android) {
		env.appComponents = env.appComponents || []
		env.appComponents.push(path.resolve(__dirname, 'src/android/RtpService.ts'))
	}
	return WebpackConfig(env)
}
