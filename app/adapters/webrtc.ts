import { WebRTC } from 'nativescript-webrtc-plugin'

export const webrtc = new WebRTC({
	enableAudio: true,
	enableVideo: true,
	iceServers: [{ url: 'stun:stun.l.google.com:19302' }],
})

// export class WebRTC extends WebRTCPlugin {
// 	constructor() {

// 	}
// }
