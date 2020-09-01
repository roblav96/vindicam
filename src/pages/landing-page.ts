import * as Application from '@nativescript/core/application'
import * as Permissions from '~/adapters/permissions/permissions'
import { Observable, EventData, Page, NavigatedData, TapGestureEventData } from '@nativescript/core'

export function navigatingTo(args: NavigatedData) {
	let page = args.object as Page
	page.bindingContext = new LandingPage()
}

export function navigatedTo(args: NavigatedData) {
	tapPermissions(args)
}

export async function tapPermissions(args: EventData) {
	let page = (args.object as any).page as Page
	await Permissions.ensurePermissions()
	page.frame.navigate('pages/rtmp-page')
}

export class LandingPage extends Observable {}
