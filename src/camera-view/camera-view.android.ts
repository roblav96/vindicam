import * as Application from '@nativescript/core/application'
import * as Types from '@nativescript/core/utils/types'
import { CameraViewBase } from './camera-view.common'
// import { RtpService } from '~/android/RtpService'

// export class CameraView extends CameraViewBase {

// }

export class CameraView extends CameraViewBase {
	nativeView: com.pedro.rtplibrary.view.OpenGlView
	createNativeView() {
		return new com.pedro.rtplibrary.view.OpenGlView(this._context)
	}

	callback: android.view.SurfaceHolder.Callback
	initNativeView() {
		super.initNativeView()
		// this.nativeView.setLayoutParams(
		// 	new android.widget.LinearLayout.LayoutParams(
		// 		android.view.WindowManager.LayoutParams.MATCH_PARENT,
		// 		android.view.WindowManager.LayoutParams.MATCH_PARENT,
		// 	),
		// )

		com.tns.android.RtpService.contextApp = ad.foregroundActivity
		com.tns.android.RtpService.checker = new net.ossrs.rtmp.ConnectCheckerRtmp({
			onConnectionSuccessRtmp() {
				console.log('ConnectCheckerRtmp onConnectionSuccessRtmp ->')
			},
			onConnectionFailedRtmp(error: string) {
				console.error('ConnectCheckerRtmp onConnectionFailedRtmp ->', error)
			},
			onNewBitrateRtmp(bitrate: number) {
				console.log('ConnectCheckerRtmp onNewBitrateRtmp ->', bitrate)
			},
			onDisconnectRtmp() {
				console.log('ConnectCheckerRtmp onDisconnectRtmp ->')
			},
			onAuthErrorRtmp() {
				console.error('ConnectCheckerRtmp onAuthErrorRtmp ->')
			},
			onAuthSuccessRtmp() {
				console.log('ConnectCheckerRtmp onAuthSuccessRtmp ->')
			},
		})
		com.tns.android.RtpService.camera2Base = new com.pedro.rtplibrary.rtmp.RtmpCamera2(
			com.tns.android.RtpService.contextApp,
			true,
			com.tns.android.RtpService.checker,
		)

		let that = new WeakRef(this)
		this.callback = new android.view.SurfaceHolder.Callback({
			surfaceCreated(holder) {
				console.log('surfaceCreated holder ->', holder)
			},
			surfaceChanged(holder) {
				console.log('surfaceChanged holder ->', holder)
				com.tns.android.RtpService.openGlView = holder as any
				com.tns.android.RtpService.camera2Base.replaceView(holder as any)
				com.tns.android.RtpService.camera2Base.startPreview()
			},
			surfaceDestroyed(holder) {
				console.log('surfaceDestroyed holder ->', holder)
				com.tns.android.RtpService.contextApp = ad.foregroundActivity
				com.tns.android.RtpService.openGlView = null
				com.tns.android.RtpService.camera2Base.replaceView(ad.foregroundActivity)
				com.tns.android.RtpService.camera2Base.stopPreview()
			},
		})
		this.nativeView.getHolder().addCallback(this.callback)
	}

	disposeNativeView() {
		this.nativeView.getHolder().removeCallback(this.callback)
		this.callback = null
		super.disposeNativeView()
	}

	async startRecording(endpoint: string) {
		console.log('startRecording endpoint ->', endpoint)
		console.log('com.tns.android.RtpService.class ->', com.tns.android.RtpService.class)
		let intent = new android.content.Intent(ad.nativeApp, com.tns.android.RtpService.class)
		intent.putExtra('endpoint', endpoint)
		let component = ad.foregroundActivity.startForegroundService(intent)
		await new Promise((r) => setTimeout(r, 1000))
		console.log('component ->', component)
	}
}

function isServiceRunning() {
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
