import * as Application from '@nativescript/core/application'
import * as Utils from '@nativescript/core/utils/utils'
import * as utils from '~/utils/utils'


// export function init(contextApp: androidx.appcompat.app.AppCompatActivity) {
// 	com.tns.android.RtpService.contextApp = contextApp
// 	if (com.tns.android.RtpService.camera2Base == null) {
// 		// RtpServiceClass.camera2Base = new com.pedro.rtplibrary.rtmp.RtmpCamera2(contextApp, true, connectCheckerRtp)
// 	}
// }

// export function showNotification(text: string) {
// 	let notification = androidx.core.app.NotificationCompat.Builder(
// 		com.tns.android.RtpService.contextApp,
// 		com.tns.android.RtpService.channelId,
// 	)
// 	notification.setSmallIcon(android.R.mipmap['ic_launcher'])
// 	notification.setSmallIcon(android.R.drawable.ic_launcher)
// 	notification.setContentTitle('RTP Stream')
// 	notification.setContentText(text)
// 	com.tns.android.RtpService.notificationManager.notify(
// 		com.tns.android.RtpService.notifyId,
// 		notification.build(),
// 	)
// }

@NativeClass()
@JavaProxy('com.tns.android.RtpService')
export class RtpService extends androidx.core.app.JobIntentService {
	static camera2Base: com.pedro.rtplibrary.base.Camera2Base
	static contextApp: androidx.appcompat.app.AppCompatActivity
	static openGlView: com.pedro.rtplibrary.view.OpenGlView

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
		console.log('█ onCreate ->')
		console.log('com.tns.android.RtpService ->', com.tns.android.RtpService)
		console.log(
			'com.tns.android.RtpService.contextApp ->',
			com.tns.android.RtpService.contextApp,
		)
		this.channelId = 'rtpStreamChannel'
		this.notifyId = utils.hash(this.channelId)
		console.log('this.notifyId ->', this.notifyId)
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
		console.log('█ onStartCommand ->', intent, flags, startId)
		console.log(
			'com.tns.android.RtpService.contextApp ->',
			com.tns.android.RtpService.contextApp,
		)
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

import { RtpService as RtpServiceClass } from './RtpService'
declare global {
	export module com {
		export module tns {
			export module android {
				export class RtpService extends RtpServiceClass {}
			}
		}
	}
}
