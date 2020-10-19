import * as Application from '@nativescript/core/application'
Application.on(Application.uncaughtErrorEvent, (args: Application.UnhandledErrorEventData) => {
	console.error('████  UNCAUGHT ERROR  ████ ->', args.error)
})
Application.on(Application.discardedErrorEvent, (args: Application.DiscardedErrorEventData) => {
	console.error('████  DISCARDED ERROR  ████ ->', args.error)
})

// import { Trace } from '@nativescript/core/trace'
// Trace.setCategories(Trace.categories.Error)
// Trace.enable()

import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

// import '~/devops/console'
import '~/delegate/delegate'

Application.setCssFileName('app.css')
Application.run('frame')
