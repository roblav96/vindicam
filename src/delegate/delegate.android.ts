import * as Application from '@nativescript/core/application'
import { DefineProperty } from '~/utils/decorators'

Application.android.on('activityCreated', function activityCreated(args) {
	android.os.StrictMode.setThreadPolicy(
		new android.os.StrictMode.ThreadPolicy.Builder().permitAll().build(),
	)
})

DefineProperty(globalThis, 'activity', () => Application.android.foregroundActivity)
DefineProperty(globalThis, 'context', () => Application.android.context)
DefineProperty(globalThis, 'nativeApp', () => Application.android.nativeApp)
declare global {
	var activity: androidx.appcompat.app.AppCompatActivity
	var context: android.content.Context
	var nativeApp: android.app.Application
}

// Application.android.on('activityNewIntent', function activityNewIntent(args) {
// 	console.log('activityNewIntent ->', args)
// })
