import { Application, isAndroid } from '@nativescript/core'
import { WebRTC } from 'nativescript-webrtc-plugin'

if (isAndroid) {
	Application.android.on('activityCreated', function activityCreated(args) {
		android.os.StrictMode.setThreadPolicy(
			new android.os.StrictMode.ThreadPolicy.Builder().permitAll().build(),
		)
		// WebRTC.init()
	})
}

Application.setCssFileName('app.css')
Application.run('frame')
