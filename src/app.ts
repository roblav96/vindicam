import * as Application from '@nativescript/core/application'

import '~/delegate/delegate'

import { WebRTC } from 'nativescript-webrtc-plugin'
WebRTC.init()

Application.setCssFileName('app.css')
Application.run('frame')
