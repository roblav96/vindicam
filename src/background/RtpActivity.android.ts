import * as application from '@nativescript/core/application'
import * as Frame from '@nativescript/core/ui/frame'

@JavaProxy('com.tns.background.RtpActivity')
export class RtpActivity extends androidx.appcompat.app.AppCompatActivity {

	private _callbacks: Frame.AndroidActivityCallbacks
	isNativeScriptActivity: boolean

	constructor() {
		super()
		return global.__native(this)
	}

	onCreate(savedInstanceState: android.os.Bundle) {
		application.android.init(this.getApplication())
		this.isNativeScriptActivity = true
		if (!this._callbacks) {
			Frame.setActivityCallbacks(this)
		}
		this._callbacks.onCreate(this, savedInstanceState, this.getIntent(), super.onCreate)
	}

	onNewIntent(intent: android.content.Intent) {
		super.onNewIntent(intent)
		super.setIntent(intent)
	}

	onSaveInstanceState(outState: android.os.Bundle) {
		this._callbacks.onSaveInstanceState(this, outState, super.onSaveInstanceState)
	}

	onStart() {
		this._callbacks.onStart(this, super.onStart)
	}

	onStop() {
		this._callbacks.onStop(this, super.onStop)
	}

	onDestroy() {
		this._callbacks.onDestroy(this, super.onDestroy)
	}

	onBackPressed() {
		this._callbacks.onBackPressed(this, super.onBackPressed)
	}

	onRequestPermissionsResult(requestCode: number, permissions: Array<string>, grantResults: Array<number>) {
		this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined)
	}

	onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent) {
		this._callbacks.onActivityResult(this, requestCode, resultCode, data, super.onActivityResult)
	}

}
