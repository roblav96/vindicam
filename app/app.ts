import * as core from '@nativescript/core'
import { WebRTC } from 'nativescript-webrtc-plugin'

core.Application.android.on('activityCreated', function activityCreated(args) {
	android.os.StrictMode.setThreadPolicy(
		new android.os.StrictMode.ThreadPolicy.Builder().permitAll().build(),
	)
	// WebRTC.init()
})

core.Application.setCssFileName('app.css')
core.Application.run('frame')
