import '~/utils/shims'
// import '~/devops/console'
import '~/delegate/delegate'

import * as Application from '@nativescript/core/application'
Application.setCssFileName('app.css')
Application.run('frame')
