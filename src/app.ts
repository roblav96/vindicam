import * as Application from '@nativescript/core/application'

Application.on('uncaughtError', (args) =>
	console.error(`████  UNCAUGHT ERROR  ████ ->`, args.error),
)
Application.on('discardedError', (args) =>
	console.error(`████  DISCARDED ERROR  ████ ->`, args.error),
)

import '~/utils/shims'
// import '~/devops/console'
import '~/delegate/delegate'

Application.setCssFileName('app.css')
Application.run('frame')
