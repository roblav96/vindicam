import * as Application from '@nativescript/core/application'
import { Button } from '@nativescript/core/ui/button'
import { CameraView } from '~/camera-view/camera-view'
import { GestureEventData } from '@nativescript/core/ui/gestures'
import { Observable, EventData } from '@nativescript/core/data/observable'
import { Page, NavigatedData } from '@nativescript/core/ui/page'
import { View } from '@nativescript/core/ui/core/view'

export function navigatingTo(args: NavigatedData) {
	let page = args.object as Page
	page.bindingContext = new RtmpPage()
}

export async function navigatedTo(args: NavigatedData) {
	// tapConnect(args)
}

const ENDPOINT = `rtmp://192.168.2.43:1935/live/test`

export async function tapConnect(args: EventData) {
	let page = (args.object as View).page
	let camera_view = page.getViewById('camera_view') as CameraView
	await camera_view.startRecording(ENDPOINT)
}

export class RtmpPage extends Observable {}
