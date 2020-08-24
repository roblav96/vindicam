import * as Application from '@nativescript/core/application'
import * as permissions from '~/adapters/permissions/permissions'
import * as Placeholder from '@nativescript/core/ui/placeholder'
import { Observable, EventData, Page, NavigatedData } from '@nativescript/core'
import { RtpService } from '~/background/RtpService'

export function navigatingTo(args: NavigatedData) {
	let page = args.object as Page
	page.bindingContext = new RtmpPage()
}

export async function navigatedTo(args: NavigatedData) {}

const ENDPOINT = `rtmp://192.168.2.43:1935/live/test`

export class RtmpPage extends Observable {
	async tapConnect(args) {
		console.log(`tapConnect ->`)
		await permissions.ensurePermissions()
		let activity = Application.android
			.foregroundActivity as androidx.appcompat.app.AppCompatActivity
		let nativeApp = Application.android.nativeApp as android.app.Application
		let intent = new android.content.Intent(nativeApp, RtpService.class)
		intent.putExtra('endpoint', ENDPOINT)
		activity.startForegroundService(intent)
		await new Promise((r) => setTimeout(r, 1000))
		let service = activity.getSystemServiceName(RtpService.class)
		console.log('service ->', service)
		// let manager = activity.getSystemService(
		// 	android.content.Context.ACTIVITY_SERVICE,
		// ) as android.app.ActivityManager
		// let services = manager.getRunningServices(java.lang.Integer.MAX_VALUE)
		// console.log('services ->', services)
	}
}

export function creatingView(args: Placeholder.CreateViewEventData) {
	let nativeView = new com.pedro.rtplibrary.view.OpenGlView(args.context)
	nativeView.setLayoutParams(
		new android.widget.LinearLayout.LayoutParams(
			android.view.WindowManager.LayoutParams.MATCH_PARENT,
			android.view.WindowManager.LayoutParams.MATCH_PARENT,
		),
	)
	// nativeView.getHolder().addCallback(new android.view.SurfaceHolder.Callback({

	// }))
	args.view = nativeView
}
