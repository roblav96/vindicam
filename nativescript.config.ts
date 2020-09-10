import { NativeScriptConfig } from '@nativescript/core'

export default {
	appPath: 'src',
	appResourcesPath: 'App_Resources',
	id: 'app.vindicam',
	webpackConfigPath: 'webpack.config.js',
	android: {
		discardUncaughtJsExceptions: false,
		markingMode: 'none',
		maxLogcatObjectSize: 1048576,
		suppressCallJSMethodExceptions: false,
		v8Flags: '--expose_gc',
	},
	ios: {
		discardUncaughtJsExceptions: false,
	},
} as NativeScriptConfig
