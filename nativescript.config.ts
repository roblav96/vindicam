import { NativeScriptConfig } from '@nativescript/core'

export default {
	appPath: 'src',
	appResourcesPath: 'App_Resources',
	id: 'app.vindicam',
	webpackConfigPath: 'webpack.config.js',
	android: {
		v8Flags: '--expose_gc',
		markingMode: 'none',
		maxLogcatObjectSize: 1048576,
	},
} as NativeScriptConfig
