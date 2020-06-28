import { Observable, EventData, Page, NavigatedData } from '@nativescript/core'
// import { webrtc } from '~/adapters/webrtc'

export function navigatingTo(args: NavigatedData) {
	let page = args.object as Page
	page.bindingContext = new RootPage()
}

export function navigatedTo(args: NavigatedData) {
	// WebRTC.init()
}

export class RootPage extends Observable {
	tapConnect(args) {
		console.log(`tapConnect ->`, args)
	}
}
