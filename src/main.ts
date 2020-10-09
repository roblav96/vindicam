import * as Application from '@nativescript/core/application'
Application.on('uncaughtError', (args) =>
	console.error('████  UNCAUGHT ERROR  ████ ->', args.error),
)
Application.on('discardedError', (args) =>
	console.error('████  DISCARDED ERROR  ████ ->', args.error),
)

// import { Trace } from '@nativescript/core/trace'
// Trace.setCategories(Trace.categories.All)
// Trace.enable()

import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

// import '~/devops/console'
import '~/delegate/delegate'

Application.setCssFileName('app.css')
Application.run('frame')
