import { Observable, EventData, Page, NavigatedData } from '@nativescript/core'

export function navigatingTo(args: NavigatedData) {
	let page = args.object as Page
	page.bindingContext = new RtmpPage()
}

export async function navigatedTo(args: NavigatedData) {

}

export class RtmpPage extends Observable {
	async tapConnect(args) {
		console.log(`tapConnect ->`)
	}
}
