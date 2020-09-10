import * as Application from '@nativescript/core/application'
import * as View from '@nativescript/core/ui/core/view'
import { CameraViewBase } from './camera-view.common'
import { isServiceRunning, RtpServiceClass, init } from '~/android/RtpService'

// export class CameraView extends CameraViewBase {

// }

export class CameraView extends View.View {
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
		console.log('init ->', init)
		init(activity)
		isServiceRunning()
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
