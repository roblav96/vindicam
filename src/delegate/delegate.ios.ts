import * as Application from '@nativescript/core/application'
import { DefineProperty } from '~/utils/decorators'

Object.assign(global, { ios: {} })
DefineProperty(global.ios, 'delegate', () => Application.ios.delegate)
DefineProperty(global.ios, 'nativeApp', () => Application.ios.nativeApp)
DefineProperty(global.ios, 'rootController', () => Application.ios.rootController)
DefineProperty(global.ios, 'window', () => Application.ios.window)
declare global {
	export module ios {
		var delegate: typeof UIApplicationDelegate
		var nativeApp: UIApplication
		var rootController: UIViewController
		var window: UIWindow
	}
}
