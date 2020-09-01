import * as Application from '@nativescript/core/application'

Application.android.on('activityCreated', function activityCreated(args) {
	android.os.StrictMode.setThreadPolicy(
		new android.os.StrictMode.ThreadPolicy.Builder().permitAll().build(),
	)
})

Application.android.on('activityNewIntent', function activityNewIntent(args) {
	console.log('activityNewIntent ->', args)
})
