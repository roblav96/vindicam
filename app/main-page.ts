import { Observable, EventData, Page, NavigatedData } from '@nativescript/core'
import { WebRTC } from 'nativescript-webrtc-plugin'

export function navigatingTo(args: NavigatedData) {
    let page = args.object as Page
    page.bindingContext = new MainPage()
}

export function navigatedTo(args: NavigatedData) {
    // WebRTC.init()
}

export class MainPage extends Observable {
    onTap() {
        let webrtc = new WebRTC({
            enableAudio: true,
            enableVideo: true,
            iceServers: [
                {
                    url: 'stun:stun.l.google.com:19302',
                },
                {
                    url: 'serverRequiresAuth',
                    username: 'username',
                    password: 'password',
                },
            ],
        })
    }
}
