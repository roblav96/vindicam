globalThis.Promise = require('bluebird/js/browser/bluebird.core')
globalThis.Promise.onPossiblyUnhandledRejection((reason) => {
	console.error('████  UNHANDLED REJECTION  ████ ->', reason)
})
declare global {
	export interface PromiseConstructor {
		onPossiblyUnhandledRejection(handler: (reason: Error) => any): void
	}
}

import * as Trace from '@nativescript/core/trace'
Trace.setErrorHandler({
	handlerError(error) {
		console.error('████  TRACE HANDLER ERROR  ████ ->', error)
	},
})
// Trace.setCategories(Trace.categories.All)
// Trace.enable()

import * as Application from '@nativescript/core/application'
Application.on('uncaughtError', (args) =>
	console.error('████  UNCAUGHT ERROR  ████ ->', args.error),
)
Application.on('discardedError', (args) =>
	console.error('████  DISCARDED ERROR  ████ ->', args.error),
)
Object.assign(Application, {
	addResources(resources: any) {
		Application.setResources(Object.assign(Application.getResources(), resources))
	},
})
declare module '@nativescript/core/application' {
	export function addResources(resources: any): void; // prettier-ignore
}

import * as fs from '@nativescript/core/file-system'
Object.assign(globalThis, {
	process: {
		argv: [''],
		version: 'v12.18.3',
		env: {},
		cwd() {
			return fs.knownFolders.currentApp().path
		},
		nextTick(fn, ...args) {
			return setTimeout(fn as any, 25, ...args)
		},
	} as Partial<NodeJS.Process>,
})
globalThis.process.hrtime = require('browser-process-hrtime')

import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

// import * as Profiling from '@nativescript/core/profiling'
// console.log('Profiling.time() ->', Profiling.time())
