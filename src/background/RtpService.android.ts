import * as application from '@nativescript/core/application'

@JavaProxy('com.tns.background.RtpService')
class RtpService extends android.app.Service {
	constructor() {
		super()
		return global.__native(this)
	}

	onStartCommand(intent: android.content.Intent, flags: number, startId: number) {
		super.onStartCommand(intent, flags, startId)
		console.log('onStartCommand ->', intent, flags, startId)
		return android.app.Service.START_STICKY
	}
	onCreate() {
		console.log('onCreate ->')
	}
	onBind(intent: android.content.Intent) {
		console.log('onBind ->', intent)
		return null
	}
	onDestroy() {
		console.log('onDestroy ->')
	}
}
