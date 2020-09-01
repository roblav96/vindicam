import * as Application from '@nativescript/core/application'
import * as Placeholder from '@nativescript/core/ui/placeholder'
import { Observable, EventData, Page, NavigatedData } from '@nativescript/core'
import { RtpService } from '~/android/RtpService'

export function navigatingTo(args: NavigatedData) {
	let page = args.object as Page
	page.bindingContext = new RtmpPage()
}

export async function navigatedTo(args: NavigatedData) {}

const ENDPOINT = `rtmp://192.168.2.43:1935/live/test`

export class RtmpPage extends Observable {
	async tapConnect(args) {
		console.log('tapConnect ->')
		let [nativeApp, activity] = [
			Application.android.nativeApp as android.app.Application,
			Application.android.foregroundActivity as androidx.appcompat.app.AppCompatActivity,
		]
		let intent = new android.content.Intent(nativeApp, RtpService.class)
		intent.putExtra('endpoint', ENDPOINT)
		activity.startForegroundService(intent)
		await new Promise((r) => setTimeout(r, 1000))
	}
}

export function creatingView(args: Placeholder.CreateViewEventData) {
	RtpService.contextApp = Application.android.foregroundActivity
	let nativeView = new com.pedro.rtplibrary.view.OpenGlView(args.context)
	nativeView.setLayoutParams(
		new android.widget.LinearLayout.LayoutParams(
			android.view.WindowManager.LayoutParams.MATCH_PARENT,
			android.view.WindowManager.LayoutParams.MATCH_PARENT,
		),
	)
	nativeView.getHolder().addCallback(
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
	args.view = nativeView
}
