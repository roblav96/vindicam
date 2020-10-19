
declare class LFAudioFrame extends LFFrame {

	static alloc(): LFAudioFrame; // inherited from NSObject

	static new(): LFAudioFrame; // inherited from NSObject

	audioInfo: NSData;
}

declare const enum LFAudioMixVolume {

	VeryLow = 1,

	Low = 3,

	Normal = 5,

	High = 7,

	VeryHigh = 10
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

	static defaultConfigurationFromFormat(format: AudioStreamBasicDescription): LFLiveAudioConfiguration;

	static defaultConfigurationFromSampleBuffer(sampleBuffer: any): LFLiveAudioConfiguration;

	static new(): LFLiveAudioConfiguration; // inherited from NSObject

	readonly asc: string;

	audioBitrate: LFLiveAudioBitRate;

	audioSampleRate: LFLiveAudioSampleRate;

	readonly bufferLength: number;

	echoCancellation: boolean;

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

	CaptureAudio = 0,

	CaptureVideo = 1,

	InputAudio = 2,

	InputVideo = 3,

	MixAudio = 4
}

declare const enum LFLiveCaptureTypeMask {

	CaptureMaskAudio = 1,

	CaptureMaskVideo = 2,

	InputMaskAudio = 4,

	InputMaskVideo = 8,

	MixMaskAudio = 17,

	CaptureMaskAll = 3,

	InputMaskAll = 12,

	CaptureMaskAudioInputVideo = 9,

	CaptureMaskVideoInputAudio = 6,

	MixMaskAudioInputVideo = 25,

	CaptureDefaultMask = 3
}

declare class LFLiveDebug extends NSObject implements NSCopying {

	static alloc(): LFLiveDebug; // inherited from NSObject

	static new(): LFLiveDebug; // inherited from NSObject

	bandwidth: number;

	bandwidthForSpeed: number;

	capturedAudioCount: number;

	capturedVideoCount: number;

	currentBandwidth: number;

	currentCapturedAudioCount: number;

	currentCapturedVideoCount: number;

	dataFlow: number;

	dropFrame: number;

	elapsedMilli: number;

	elapsedMilliForSpeed: number;

	isRtmp: boolean;

	lastSpeed: number;

	streamId: string;

	timeStamp: number;

	timeStampForSpeed: number;

	totalFrame: number;

	unSendCount: number;

	uploadUrl: string;

	videoSize: CGSize;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare var LFLiveKitVersionNumber: number;

declare var LFLiveKitVersionString: interop.Reference<number>;

declare class LFLiveSession extends NSObject {

	static alloc(): LFLiveSession; // inherited from NSObject

	static new(): LFLiveSession; // inherited from NSObject

	adaptiveBitrate: boolean;

	appVersion: string;

	beautyFace: boolean;

	captureDevicePosition: AVCaptureDevicePosition;

	readonly captureType: LFLiveCaptureTypeMask;

	readonly colorFilterNames: NSArray<string>;

	readonly currentColorFilterIndex: number;

	readonly currentColorFilterName: string;

	readonly currentImage: UIImage;

	delegate: LFLiveSessionDelegate;

	readonly glContext: EAGLContext;

	gpuimageAdvanceBeautyEnabled: boolean;

	gpuimageOn: boolean;

	readonly isReplayKitBroadcast: boolean;

	latitude: number;

	liveId: string;

	readonly logInfo: NSDictionary<any, any>;

	longitude: number;

	mirror: boolean;

	mirrorOutput: boolean;

	muted: boolean;

	preView: UIView;

	provider: string;

	reconnectCount: number;

	reconnectInterval: number;

	region: string;

	running: boolean;

	saveLocalVideo: boolean;

	saveLocalVideoPath: NSURL;

	showDebugInfo: boolean;

	readonly state: LFLiveState;

	readonly stopEncodingVideoAudioData: boolean;

	readonly streamInfo: LFLiveStreamInfo;

	torch: boolean;

	userId: string;

	zoomScale: number;

	constructor(o: { forReplayKitBroadcast: void; });

	constructor(o: { audioConfiguration: LFLiveAudioConfiguration; videoConfiguration: LFLiveVideoConfiguration; });

	constructor(o: { audioConfiguration: LFLiveAudioConfiguration; videoConfiguration: LFLiveVideoConfiguration; captureType: LFLiveCaptureTypeMask; });

	constructor(o: { audioConfiguration: LFLiveAudioConfiguration; videoConfiguration: LFLiveVideoConfiguration; captureType: LFLiveCaptureTypeMask; eaglContext: EAGLContext; });

	initForReplayKitBroadcast(): this;

	initWithAudioConfigurationVideoConfiguration(audioConfiguration: LFLiveAudioConfiguration, videoConfiguration: LFLiveVideoConfiguration): this;

	initWithAudioConfigurationVideoConfigurationCaptureType(audioConfiguration: LFLiveAudioConfiguration, videoConfiguration: LFLiveVideoConfiguration, captureType: LFLiveCaptureTypeMask): this;

	initWithAudioConfigurationVideoConfigurationCaptureTypeEaglContext(audioConfiguration: LFLiveAudioConfiguration, videoConfiguration: LFLiveVideoConfiguration, captureType: LFLiveCaptureTypeMask, glContext: EAGLContext): this;

	nextColorFilter(): void;

	pauseLive(): void;

	playParallelSounds(urls: NSSet<NSURL>): void;

	playParallelSoundsVolumes(urls: NSArray<NSURL> | NSURL[], volumes: NSArray<number> | number[]): void;

	playSound(soundUrl: NSURL): void;

	playSoundSequences(urls: NSArray<NSURL> | NSURL[]): void;

	playSoundSequencesInterval(urls: NSArray<NSURL> | NSURL[], interval: number): void;

	playSoundSequencesVolume(urls: NSArray<NSURL> | NSURL[], volume: LFAudioMixVolume): void;

	playSoundVolume(soundUrl: NSURL, volume: LFAudioMixVolume): void;

	previousColorFilter(): void;

	pushAudio(audioData: NSData): void;

	pushReplayKitSampleType(sampleBuffer: any, type: RKReplayKitSampleType): void;

	pushVideo(pixelBuffer: any): void;

	restartBackgroundSound(): void;

	resumeLive(pushURL: string): void;

	sendSeiJson(jsonObj: any): boolean;

	setTargetColorFilter(targetIndex: number): void;

	startBackgroundSound(soundUrl: NSURL): void;

	startBackgroundSoundVolume(soundUrl: NSURL, volume: LFAudioMixVolume): void;

	startLive(streamInfo: LFLiveStreamInfo): void;

	stopAllSounds(): void;

	stopBackgroundSound(): void;

	stopLive(): void;

	updateStreamURL(url: string): boolean;

	updateVideoBitRateWithMaxBitRateMinBitRate(maxBitRate: number, minBitRate: number): boolean;

	updateVideoConfiguration(videoConfiguration: LFLiveVideoConfiguration): void;
}

interface LFLiveSessionDelegate extends NSObjectProtocol {

	liveSessionAudioDataBeforeMixing?(session: LFLiveSession, audioData: NSData): void;

	liveSessionDebugInfo?(session: LFLiveSession, debugInfo: LFLiveDebug): void;

	liveSessionErrorCode?(session: LFLiveSession, errorCode: LFLiveSocketErrorCode): void;

	liveSessionLiveStateDidChange?(session: LFLiveSession, state: LFLiveState): void;

	liveSessionLog?(session: LFLiveSession, dict: NSDictionary<any, any>): void;

	liveSessionRawCameraVideoFrameAtTime?(session: LFLiveSession, pixelBuffer: any, time: CMTime): void;

	liveSessionWillOutputAudioFrameSamplesCustomTime?(session: LFLiveSession, data: string | interop.Pointer | interop.Reference<any>, samples: number, customTime: number): void;

	liveSessionWillOutputVideoFrameAtTimeCustomTimeDidUpdateVideConfiguration?(session: LFLiveSession, pixelBuffer: any, time: CMTime, customTime: number, didUpdateVideConfiguration: boolean): any;
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

	Refresh = 5,

	Switched = 6
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

	static defaultConfigurationFromSampleBuffer(sampleBuffer: any): LFLiveVideoConfiguration;

	static new(): LFLiveVideoConfiguration; // inherited from NSObject

	static videoConfigurationForQuality(videoQuality: LFLiveVideoQuality): LFLiveVideoConfiguration;

	animationView: UIView;

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

	watermarkView: UIView;

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

	High4 = 9,

	Default = 1
}

declare const enum LFLiveVideoSessionPreset {

	CaptureSessionPreset360x640 = 0,

	CaptureSessionPreset540x960 = 1,

	CaptureSessionPreset720x1280 = 2,

	CaptureSessionPreset1080x1920 = 3
}

declare class LFStreamLog extends NSObject {

	static alloc(): LFStreamLog; // inherited from NSObject

	static logger(): LFStreamLog;

	static new(): LFStreamLog; // inherited from NSObject

	av17: string;

	cr: string;

	host: string;

	initStartTime: number;

	lnt: number;

	logCallback: (p1: NSDictionary<any, any>) => void;

	ltt: number;

	mod: string;

	nt: string;

	os: string;

	osv: string;

	pd: string;

	rg: string;

	sid: string;

	uid: string;

	url: string;

	basicInfo(): NSDictionary<any, any>;

	fetchHostStatus(): void;

	fetchInfo(): void;

	logWithDict(dic: NSDictionary<any, any>): void;
}

declare class LFUtils extends NSObject {

	static alloc(): LFUtils; // inherited from NSObject

	static new(): LFUtils; // inherited from NSObject

	static sharedApplication(): UIApplication;
}

declare class LFVideoFrame extends LFFrame {

	static alloc(): LFVideoFrame; // inherited from NSObject

	static new(): LFVideoFrame; // inherited from NSObject

	formatChanged: boolean;

	isKeyFrame: boolean;

	pps: NSData;

	sps: NSData;
}

declare class RKAudioSample extends NSObject {

	static alloc(): RKAudioSample; // inherited from NSObject

	static new(): RKAudioSample; // inherited from NSObject

	readonly data: NSData;

	readonly duration: CMTime;

	readonly endTimeBase: number;

	readonly isReading: boolean;

	readonly numberOfFrames: number;

	readonly startTimeBase: number;

	readonly timestamp: CMTime;
}

declare class RKAudioSampleBuffer extends NSObject implements RKSampleBuffer {

	static alloc(): RKAudioSampleBuffer; // inherited from NSObject

	static new(): RKAudioSampleBuffer; // inherited from NSObject

	readonly audioFormat: AudioStreamBasicDescription;

	readonly firstFrameTimestamp: number;

	readonly bufferedDataSize: number; // inherited from RKSampleBuffer

	readonly bufferedSampleCount: number; // inherited from RKSampleBuffer

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly estimatedBufferedSeconds: number; // inherited from RKSampleBuffer

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isEmpty: boolean; // inherited from RKSampleBuffer

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	firstSample(): RKAudioSample;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	pushSample(sample: any): void;

	readBytesLength(bytes: string | interop.Pointer | interop.Reference<any>, length: number): void;

	readDataWithLengthReadSampleBlock(length: number, sampleBlock: (p1: RKAudioSample, p2: interop.Pointer | interop.Reference<boolean>) => void): NSData;

	readFrame(): number;

	readSample(): RKAudioSample;

	readToTimestamp(timestamp: number): NSData;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class RKLinkedList<T> extends NSObject {

	static alloc<T>(): RKLinkedList<T>; // inherited from NSObject

	static new<T>(): RKLinkedList<T>; // inherited from NSObject

	readonly head: T;

	readonly length: number;

	readonly tail: T;

	popHead(): T;

	popTail(): T;

	pushHead(object: T): void;

	pushTail(object: T): void;
}

declare const enum RKReplayKitSampleType {

	Video = 0,

	AppAudio = 1,

	MicAudio = 2
}

interface RKSampleBuffer extends NSObjectProtocol {

	bufferedDataSize: number;

	bufferedSampleCount: number;

	estimatedBufferedSeconds: number;

	isEmpty: boolean;

	pushSample(sample: any): void;
}
declare var RKSampleBuffer: {

	prototype: RKSampleBuffer;
};

declare class RKVideoSample extends NSObject {

	static alloc(): RKVideoSample; // inherited from NSObject

	static new(): RKVideoSample; // inherited from NSObject

	readonly pixelBuffer: any;

	readonly timestamp: number;
}

declare class RKVideoSampleBuffer extends NSObject implements RKSampleBuffer {

	static alloc(): RKVideoSampleBuffer; // inherited from NSObject

	static new(): RKVideoSampleBuffer; // inherited from NSObject

	readonly esimatedVideoFrameRate: number;

	readonly bufferedDataSize: number; // inherited from RKSampleBuffer

	readonly bufferedSampleCount: number; // inherited from RKSampleBuffer

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly estimatedBufferedSeconds: number; // inherited from RKSampleBuffer

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isEmpty: boolean; // inherited from RKSampleBuffer

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	pushSample(sample: any): void;

	readFrame(): any;

	readSample(): RKVideoSample;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}
