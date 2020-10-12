import * as Application from '@nativescript/core/application'
import { DefineProperty } from '~/utils/decorators'

Application.android.on('activityCreated', function activityCreated(args) {
	android.os.StrictMode.setThreadPolicy(
		new android.os.StrictMode.ThreadPolicy.Builder().permitAll().build(),
	)
})

Object.assign(global, { ad: {} })
DefineProperty(global.ad, 'context', () => Application.android.context)
DefineProperty(global.ad, 'foregroundActivity', () => Application.android.foregroundActivity)
DefineProperty(global.ad, 'nativeApp', () => Application.android.nativeApp)
DefineProperty(global.ad, 'startActivity', () => Application.android.startActivity)
declare global {
	export module ad {
		var context: android.content.Context
		var foregroundActivity: androidx.appcompat.app.AppCompatActivity
		var nativeApp: android.app.Application
		var startActivity: androidx.appcompat.app.AppCompatActivity
	}
}

// Application.android.on('activityNewIntent', function activityNewIntent(args) {
// 	console.log('activityNewIntent ->', args)
// })
