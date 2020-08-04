import * as application from '@nativescript/core/application'
import * as utils from '@nativescript/core/utils/utils'

@JavaProxy('com.tns.background.RtpService')
export class RtpService extends androidx.core.app.JobIntentService {
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
		this.channelId = 'rtpStreamChannel'
		this.notifyId = 123456
		// let context = utils.ad.getApplicationContext() as android.content.Context
		this.notificationManager = this.getSystemService(android.app.NotificationManager.class)
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
			console.log(`notification ->`, notification)
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
		this.endpoint = intent.getStringExtra('endpoint')

		return androidx.core.app.JobIntentService.START_STICKY
	}

	onBind(intent: android.content.Intent) {
		console.log('onBind ->', intent)
		return null
	}

	onDestroy() {
		super.onDestroy()
		console.log('onDestroy ->')
	}

	prepareStreamRtp() {

	}

	startStreamRtp(endpoint: string) {

	}
}
