import * as Application from '@nativescript/core/application'
import * as RtpService from '~/android/RtpService'
import * as View from '@nativescript/core/ui/core/view'
import { CameraViewBase } from './camera-view.common'

// export class CameraView extends CameraViewBase {

// }

export class CameraView extends CameraViewBase {
	callback: android.view.SurfaceHolder.Callback
	camera2Base: com.pedro.rtplibrary.rtmp.RtmpCamera2

	nativeView: com.pedro.rtplibrary.view.OpenGlView
	createNativeView() {
		return new com.pedro.rtplibrary.view.OpenGlView(this._context)
	}
	initNativeView() {
		super.initNativeView()
		// this.nativeView.setLayoutParams(
		// 	new android.widget.LinearLayout.LayoutParams(
		// 		android.view.WindowManager.LayoutParams.MATCH_PARENT,
		// 		android.view.WindowManager.LayoutParams.MATCH_PARENT,
		// 	),
		// )
		let [activity] = [
			Application.android.foregroundActivity as androidx.appcompat.app.AppCompatActivity,
		]
		com.tns.android.RtpService.contextApp = activity
		let that = new WeakRef(this)
		this.callback = new android.view.SurfaceHolder.Callback({
			surfaceChanged(holder) {
				console.log('surfaceChanged holder ->', holder)
			},
			surfaceCreated(holder) {
				console.log('surfaceCreated holder ->', holder)
			},
			surfaceDestroyed(holder) {
				console.log('surfaceDestroyed holder ->', holder)
			},
		})
		this.nativeView.getHolder().addCallback(this.callback)
	}
	disposeNativeView() {
		this.nativeView.getHolder().removeCallback(this.callback)
		this.callback = null
		super.disposeNativeView()
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

