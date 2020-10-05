import * as Application from '@nativescript/core/application'
import * as Placeholder from '@nativescript/core/ui/placeholder'
import { Observable, EventData, Page, NavigatedData } from '@nativescript/core'
// import { isServiceRunning } from '~/android/RtpService'

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
		try {
			console.log('com.tns.android.RtpService ->', com.tns.android.RtpService)
			let intent = new android.content.Intent(nativeApp, com.tns.android.RtpService.class)
			intent.putExtra('endpoint', ENDPOINT)
			activity.startForegroundService(intent)
			await new Promise((r) => setTimeout(r, 1000))
			// console.log('isServiceRunning() ->', isServiceRunning())
		} catch (error) {
			console.error('[error] tapConnect -> %O', error)
		}
	}
}
