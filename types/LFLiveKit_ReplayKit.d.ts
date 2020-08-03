
declare class LFAudioFrame extends LFFrame {

	static alloc(): LFAudioFrame; // inherited from NSObject

	static new(): LFAudioFrame; // inherited from NSObject

	audioInfo: NSData;
}

declare class LFFrame extends NSObject {

	static alloc(): LFFrame; // inherited from NSObject

	static new(): LFFrame; // inherited from NSObject

	data: NSData;

	header: NSData;

	timestamp: number;
}

declare const enum LFLiveAudioBitRate {

	Rate_32Kbps = 32000,

	Rate_64Kbps = 64000,

	Rate_96Kbps = 96000,

	Rate_128Kbps = 128000,

	Rate_Default = 96000
}

declare class LFLiveAudioConfiguration extends NSObject implements NSCoding, NSCopying {

	static alloc(): LFLiveAudioConfiguration; // inherited from NSObject

	static defaultConfiguration(): LFLiveAudioConfiguration;

	static defaultConfigurationForQuality(audioQuality: LFLiveAudioQuality): LFLiveAudioConfiguration;

	static new(): LFLiveAudioConfiguration; // inherited from NSObject

	readonly asc: string;

	audioBitrate: LFLiveAudioBitRate;

	audioSampleRate: LFLiveAudioSampleRate;

	readonly bufferLength: number;

	numberOfChannels: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare const enum LFLiveAudioQuality {

	Low = 0,

	Medium = 1,

	High = 2,

	VeryHigh = 3,

	Default = 2
}

declare const enum LFLiveAudioSampleRate {

	Rate_16000Hz = 16000,

	Rate_44100Hz = 44100,

	Rate_48000Hz = 48000,

	Rate_Default = 44100
}

declare const enum LFLiveCaptureType {

	InputAudio = 0,

	InputVideo = 1
}

declare const enum LFLiveCaptureTypeMask {

	InputMaskAudio = 1,

	InputMaskVideo = 2,

	InputMaskAll = 3
}

declare class LFLiveDebug extends NSObject {

	static alloc(): LFLiveDebug; // inherited from NSObject

	static new(): LFLiveDebug; // inherited from NSObject

	bandwidth: number;

	capturedAudioCount: number;

	capturedVideoCount: number;

	currentBandwidth: number;

	currentCapturedAudioCount: number;

	currentCapturedVideoCount: number;

	dataFlow: number;

	dropFrame: number;

	elapsedMilli: number;

	isRtmp: boolean;

	streamId: string;

	timeStamp: number;

	totalFrame: number;

	unSendCount: number;

	uploadUrl: string;

	videoSize: CGSize;
}

declare var LFLiveKit_ReplayKitVersionNumber: number;

declare var LFLiveKit_ReplayKitVersionString: interop.Reference<number>;

declare class LFLiveSession extends NSObject {

	static alloc(): LFLiveSession; // inherited from NSObject

	static new(): LFLiveSession; // inherited from NSObject

	adaptiveBitrate: boolean;

	readonly captureType: LFLiveCaptureTypeMask;

	delegate: LFLiveSessionDelegate;

	reconnectCount: number;

	reconnectInterval: number;

	showDebugInfo: boolean;

	readonly state: LFLiveState;

	readonly streamInfo: LFLiveStreamInfo;

	constructor(o: { audioConfiguration: LFLiveAudioConfiguration; videoConfiguration: LFLiveVideoConfiguration; });

	constructor(o: { audioConfiguration: LFLiveAudioConfiguration; videoConfiguration: LFLiveVideoConfiguration; captureType: LFLiveCaptureTypeMask; });

	initWithAudioConfigurationVideoConfiguration(audioConfiguration: LFLiveAudioConfiguration, videoConfiguration: LFLiveVideoConfiguration): this;

	initWithAudioConfigurationVideoConfigurationCaptureType(audioConfiguration: LFLiveAudioConfiguration, videoConfiguration: LFLiveVideoConfiguration, captureType: LFLiveCaptureTypeMask): this;

	pushAudioBuffer(sampleBuffer: any): void;

	pushVideoBuffer(sampleBuffer: any): void;

	startLive(streamInfo: LFLiveStreamInfo): void;

	stopLive(): void;
}

interface LFLiveSessionDelegate extends NSObjectProtocol {

	liveSessionDebugInfo?(session: LFLiveSession, debugInfo: LFLiveDebug): void;

	liveSessionErrorCode?(session: LFLiveSession, errorCode: LFLiveSocketErrorCode): void;

	liveSessionLiveStateDidChange?(session: LFLiveSession, state: LFLiveState): void;
}
declare var LFLiveSessionDelegate: {

	prototype: LFLiveSessionDelegate;
};

declare const enum LFLiveSocketErrorCode {

	Error_PreView = 201,

	Error_GetStreamInfo = 202,

	Error_ConnectSocket = 203,

	Error_Verification = 204,

	Error_ReConnectTimeOut = 205
}

declare const enum LFLiveState {

	Ready = 0,

	Pending = 1,

	Start = 2,

	Stop = 3,

	Error = 4,

	Refresh = 5
}

declare class LFLiveStreamInfo extends NSObject {

	static alloc(): LFLiveStreamInfo; // inherited from NSObject

	static new(): LFLiveStreamInfo; // inherited from NSObject

	audioConfiguration: LFLiveAudioConfiguration;

	host: string;

	port: number;

	streamId: string;

	url: string;

	videoConfiguration: LFLiveVideoConfiguration;
}

declare class LFLiveVideoConfiguration extends NSObject implements NSCoding, NSCopying {

	static alloc(): LFLiveVideoConfiguration; // inherited from NSObject

	static defaultConfiguration(): LFLiveVideoConfiguration;

	static defaultConfigurationForQuality(videoQuality: LFLiveVideoQuality): LFLiveVideoConfiguration;

	static defaultConfigurationForQualityOutputImageOrientation(videoQuality: LFLiveVideoQuality, outputImageOrientation: UIInterfaceOrientation): LFLiveVideoConfiguration;

	static new(): LFLiveVideoConfiguration; // inherited from NSObject

	autorotate: boolean;

	readonly avSessionPreset: string;

	readonly landscape: boolean;

	outputImageOrientation: UIInterfaceOrientation;

	sessionPreset: LFLiveVideoSessionPreset;

	videoBitRate: number;

	videoFrameRate: number;

	videoMaxBitRate: number;

	videoMaxFrameRate: number;

	videoMaxKeyframeInterval: number;

	videoMinBitRate: number;

	videoMinFrameRate: number;

	videoSize: CGSize;

	videoSizeRespectingAspectRatio: boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare const enum LFLiveVideoQuality {

	Low1 = 0,

	Low2 = 1,

	Low3 = 2,

	Medium1 = 3,

	Medium2 = 4,

	Medium3 = 5,

	High1 = 6,

	High2 = 7,

	High3 = 8,

	Default = 1
}

declare const enum LFLiveVideoSessionPreset {

	CaptureSessionPreset360x640 = 0,

	CaptureSessionPreset540x960 = 1,

	CaptureSessionPreset720x1280 = 2
}

declare class LFVideoFrame extends LFFrame {

	static alloc(): LFVideoFrame; // inherited from NSObject

	static new(): LFVideoFrame; // inherited from NSObject

	isKeyFrame: boolean;

	pps: NSData;

	sps: NSData;
}
