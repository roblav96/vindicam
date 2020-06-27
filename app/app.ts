import * as core from '@nativescript/core'
import { WebRTC } from 'nativescript-webrtc-plugin'

WebRTC.init()

core.Application.setCssFileName('app.css')
core.Application.run('frame')
