// declare const globalThis: any
// globalThis.Promise = require('bluebird/js/browser/bluebird.core')
// globalThis.Promise.onPossiblyUnhandledRejection((error: Error) =>
// 	console.error('████  UNHANDLED REJECTION  ████ ->', error),
// )

import * as Application from '@nativescript/core/application'
Application.on('uncaughtError', (args) =>
	console.error('████  UNCAUGHT ERROR  ████ ->', args.error),
)
Application.on('discardedError', (args) =>
	console.error('████  DISCARDED ERROR  ████ ->', args.error),
)

import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

// import '~/devops/console'
import '~/delegate/delegate'

Application.setCssFileName('app.css')
Application.run('frame')
