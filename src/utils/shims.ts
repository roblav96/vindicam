import * as fs from '@nativescript/core/file-system'
Object.assign(global, {
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
global.process.hrtime = require('browser-process-hrtime')

import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

import * as Application from '@nativescript/core/application'
Object.assign(Application, {
	addResources(resources: any) {
		Application.setResources(Object.assign(Application.getResources(), resources))
	},
})
declare module '@nativescript/core/application' {
	export function addResources(resources: any): void
}
