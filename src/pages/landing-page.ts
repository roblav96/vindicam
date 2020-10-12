import * as Application from '@nativescript/core/application'
import { Observable, EventData, Page, NavigatedData, TapGestureEventData } from '@nativescript/core'
import { Permissions } from '~/adapters/permissions/permissions'

export function navigatingTo(args: NavigatedData) {
	let page = args.object as Page
	page.bindingContext = new LandingPage()
}

export function navigatedTo(args: NavigatedData) {
	tapPermissions(args)
}

export async function tapPermissions(args: EventData) {
	let page = (args.object as any).page as Page
	if (await new Permissions().ensure()) {
		page.frame.navigate('pages/rtmp-page')
	}
}

export class LandingPage extends Observable {}
