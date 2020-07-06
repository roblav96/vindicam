import { Observable, EventData, Page, NavigatedData } from '@nativescript/core'
// import { webrtc } from '~/adapters/webrtc'

export function navigatingTo(args: NavigatedData) {
	let page = args.object as Page
	page.bindingContext = new RootPage()
}

export async function navigatedTo(args: NavigatedData) {
	// await import('~/adapters/webrtc')
}

export class RootPage extends Observable {
	async tapConnect(args) {
		console.log(`tapConnect`)
		let { webrtc } = await import('~/adapters/webrtc')
		console.log(`webrtc ->`, webrtc)
	}
}
