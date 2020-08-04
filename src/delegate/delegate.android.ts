import * as Application from '@nativescript/core/application'
import * as utils from '@nativescript/core/utils/utils'

Application.android.on('activityCreated', function activityCreated(args) {
	android.os.StrictMode.setThreadPolicy(
		new android.os.StrictMode.ThreadPolicy.Builder().permitAll().build(),
	)
})
