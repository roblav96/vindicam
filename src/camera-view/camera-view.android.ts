import * as View from '@nativescript/core/ui/core/view'
import { CameraViewBase } from './camera-view.common'
import { RtpService } from '~/android/RtpService'

// export class CameraView extends CameraViewBase {

// }

export class CameraView extends View.View {
	get holder() {
		return this.nativeView.getHolder()
	}
	nativeView: com.pedro.rtplibrary.view.OpenGlView
	createNativeView() {
		return new com.pedro.rtplibrary.view.OpenGlView(this._context)
	}
	initNativeView() {
		super.initNativeView()
		this.nativeView.setLayoutParams(
			new android.widget.LinearLayout.LayoutParams(
				android.view.WindowManager.LayoutParams.MATCH_PARENT,
				android.view.WindowManager.LayoutParams.MATCH_PARENT,
			),
		)
		let that = new WeakRef(this)
		this.holder.addCallback(
			new android.view.SurfaceHolder.Callback({
				surfaceChanged(holder) {
					console.log('surfaceChanged holder ->', holder)
				},
				surfaceCreated(holder) {
					console.log('surfaceCreated holder ->', holder)
				},
				surfaceDestroyed(holder) {
					console.log('surfaceDestroyed holder ->', holder)
				},
			}),
		)
	}
	disposeNativeView() {
		this.nativeView.getHolder().removeCallback()
		super.disposeNativeView()
	}
}
