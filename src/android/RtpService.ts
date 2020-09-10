import * as Application from '@nativescript/core/application'
import * as Utils from '@nativescript/core/utils/utils'

export function isServiceRunning() {
	console.log('isServiceRunning ->')
	let [activity] = [
		Application.android.foregroundActivity as androidx.appcompat.app.AppCompatActivity,
	]
	// let context = Utils.ad.getApplicationContext() as android.content.Context
	let manager = activity.getSystemService(
		android.content.Context.ACTIVITY_SERVICE,
	) as android.app.ActivityManager
	let services = manager.getRunningServices(java.lang.Integer.MAX_VALUE)
	for (let i = 0; i < services.size(); i++) {
		let service = services.get(i) as android.app.ActivityManager.RunningServiceInfo
		if (service.service.getClassName() == 'com.tns.android.RtpService') {
			return true
		}
	}
	return false
}



export function init(contextApp: androidx.appcompat.app.AppCompatActivity) {
	RtpServiceClass.contextApp = contextApp
	if (RtpServiceClass.camera2Base == null) {
		// RtpServiceClass.camera2Base = new com.pedro.rtplibrary.rtmp.RtmpCamera2(contextApp, true, connectCheckerRtp)
	}
}

function getRtpServiceClass() {
	@NativeClass()
	@JavaProxy('com.tns.android.RtpService')
	class RtpService extends androidx.core.app.JobIntentService {
		static camera2Base: com.pedro.rtplibrary.base.Camera2Base
		static openGlView: com.pedro.rtplibrary.view.OpenGlView
		static contextApp: androidx.appcompat.app.AppCompatActivity

		constructor() {
			super()
			return global.__native(this)
		}

		channelId: string
		endpoint: string
		notificationManager: android.app.NotificationManager
		notifyId: number

		onCreate() {
			super.onCreate()
			console.log('onCreate ->')
			console.log('RtpService.camera2Base ->', RtpService.camera2Base)
			this.channelId = 'rtpStreamChannel'
			this.notifyId = 123456
			// let context = Utils.ad.getApplicationContext() as android.content.Context
			this.notificationManager = this.getSystemService(
				android.content.Context.NOTIFICATION_SERVICE,
			)
			if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
				this.notificationManager.createNotificationChannel(
					new android.app.NotificationChannel(
						this.channelId,
						this.channelId,
						android.app.NotificationManager.IMPORTANCE_HIGH,
					),
				)
			}
			if (android.os.Build.VERSION.SDK_INT > android.os.Build.VERSION_CODES.O) {
				let notification = new androidx.core.app.NotificationCompat.Builder(
					this,
					this.channelId,
				)
				console.log('notification ->', notification)
				notification.setPriority(androidx.core.app.NotificationCompat.PRIORITY_HIGH)
				notification.setOngoing(true)
				notification.setContentTitle('')
				notification.setContentText('')
				this.startForeground(1, notification.build())
			} else {
				this.startForeground(1, new android.app.Notification())
			}
		}

		onStartCommand(intent: android.content.Intent, flags: number, startId: number) {
			super.onStartCommand(intent, flags, startId)
			console.log('onStartCommand ->', intent, flags, startId)
			console.log('com.tns.android.RtpService.contextApp ->', com.tns.android.RtpService.contextApp)
			this.endpoint = intent.getStringExtra('endpoint')
			this.prepareStreamRtp()
			this.startStreamRtp(this.endpoint)
			return androidx.core.app.JobIntentService.START_STICKY
		}

		onBind(intent: android.content.Intent) {
			console.log('onBind ->', intent)
			return null
		}
		onUnbind(intent: android.content.Intent) {
			console.log('onUnbind ->', intent)
			return null
		}

		onDestroy() {
			super.onDestroy()
			console.log('onDestroy ->')
		}

		prepareStreamRtp() {}

		startStreamRtp(endpoint: string) {}
	}
	return RtpService
	// class RtpServiceClass extends RtpService {
	// 	static init(contextApp: androidx.appcompat.app.AppCompatActivity) {
	// 		RtpService.contextApp = contextApp
	// 	}
	// }
	// return RtpServiceClass
	// return Object.assign(RtpService, {
	// 	init(contextApp: androidx.appcompat.app.AppCompatActivity) {
	// 		com.tns.android.RtpService.contextApp = contextApp
	// 	},
	// 	startService() {

	// 	},
	// })
}
export const RtpServiceClass = getRtpServiceClass()

declare global {
	export module com {
		export module tns {
			export module android {
				export class RtpService extends RtpServiceClass {}
			}
		}
	}
}

// declare global {
// 	export module com {
// 		export module tns {
// 			export module android {
// 				/** @type RtpService */
// 				export class RtpService {}
// 				// export class RtpService extends import('~/android/RtpService').RtpService {}
// 			}
// 		}
// 	}
// }
