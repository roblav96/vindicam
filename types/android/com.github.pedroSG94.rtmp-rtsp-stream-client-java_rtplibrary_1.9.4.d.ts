declare module com {
	export module pedro {
		export module rtplibrary {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.pedro.rtplibrary.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module base {
				export abstract class Camera1Base extends java.lang.Object implements com.pedro.encoder.audio.GetAacData, com.pedro.encoder.input.video.GetCameraData, com.pedro.encoder.video.GetVideoData, com.pedro.encoder.input.audio.GetMicrophoneData {
					public static class: java.lang.Class<com.pedro.rtplibrary.base.Camera1Base>;
					public videoEncoder: com.pedro.encoder.video.VideoEncoder;
					public recordController: com.pedro.rtplibrary.util.RecordController;
					public resetSentVideoFrames(): void;
					public isOnPreview(): boolean;
					public isFrontCamera(): boolean;
					public startStreamRtp(string0: string): void;
					public getAacData(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public enableLantern(): void;
					public prepareAudio(bitrate: number, sampleRate: number, isStereo: boolean): boolean;
					public startPreview(): void;
					/** @deprecated */
					public shouldRetry(string0: string): boolean;
					public getBitrate(): number;
					public constructor(surfaceView: globalAndroid.view.SurfaceView);
					public inputPCMData(frame: com.pedro.encoder.Frame): void;
					public getStreamWidth(): number;
					public switchCamera(): void;
					public replaceView(lightOpenGlView: com.pedro.rtplibrary.view.LightOpenGlView): void;
					public getRecordStatus(): com.pedro.rtplibrary.util.RecordController.Status;
					public onAudioFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public isAutoFocusEnabled(): boolean;
					public getAacDataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setCustomAudioEffect(customAudioEffect: com.pedro.encoder.input.audio.CustomAudioEffect): void;
					public setForce(forceVideo: com.pedro.encoder.utils.CodecUtil.Force, forceAudio: com.pedro.encoder.utils.CodecUtil.Force): void;
					public getDroppedAudioFrames(): number;
					public disableAudio(): void;
					public isRecording(): boolean;
					public enableFaceDetection(faceDetectorCallback: com.pedro.encoder.input.video.Camera1ApiManager.FaceDetectorCallback): void;
					public startPreview(cameraFacing: com.pedro.encoder.input.video.CameraHelper.Facing, width: number, height: number): void;
					public setReTries(int0: number): void;
					/** @deprecated */
					public reTry(delay: number): void;
					public enableAutoFocus(): void;
					public getSentVideoFrames(): number;
					public isFaceDetectionEnabled(): boolean;
					public setFpsListener(callback: com.pedro.rtplibrary.util.FpsListener.Callback): void;
					public setLogs(boolean0: boolean): void;
					public getResolutionValue(): number;
					public setLimitFPSOnFly(fps: number): void;
					public getResolutionsFront(): java.util.List<globalAndroid.hardware.Camera.Size>;
					public startRecord(path: string, listener: com.pedro.rtplibrary.util.RecordController.Listener): void;
					public startPreview(cameraFacing: com.pedro.encoder.input.video.CameraHelper.Facing): void;
					public prepareVideo(width: number, height: number, fps: number, bitrate: number, iFrameInterval: number, rotation: number, avcProfile: number, avcProfileLevel: number): boolean;
					public replaceView(context: globalAndroid.content.Context): void;
					public prepareVideo(width: number, height: number, fps: number, bitrate: number, iFrameInterval: number, rotation: number): boolean;
					public prepareVideo(width: number, height: number, bitrate: number): boolean;
					public stopStreamRtp(): void;
					public onSpsPpsVps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public getResolutionsBack(): java.util.List<globalAndroid.hardware.Camera.Size>;
					public startRecord(fd: java.io.FileDescriptor, listener: com.pedro.rtplibrary.util.RecordController.Listener): void;
					public constructor(context: globalAndroid.content.Context);
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public disableFaceDetection(): void;
					public stopPreview(): void;
					public prepareVideo(): boolean;
					public startPreview(cameraFacing: com.pedro.encoder.input.video.CameraHelper.Facing, width: number, height: number, rotation: number): void;
					public getStreamHeight(): number;
					public setVideoBitrateOnFly(bitrate: number): void;
					public getSentAudioFrames(): number;
					public setZoom(event: globalAndroid.view.MotionEvent): void;
					public isStreaming(): boolean;
					public onSpsPps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer): void;
					public startRecord(path: string): void;
					public inputYUVData(frame: com.pedro.encoder.Frame): void;
					public prepareAudio(): boolean;
					public constructor(openGlView: com.pedro.rtplibrary.view.OpenGlView);
					public isAudioMuted(): boolean;
					public getVideoData(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setAuthorization(string0: string, string1: string): void;
					public reConnect(long0: number): void;
					public stopRecord(): void;
					public setCameraCallbacks(callbacks: com.pedro.encoder.input.video.CameraCallbacks): void;
					public setPreviewOrientation(orientation: number): void;
					public pauseRecord(): void;
					public constructor(lightOpenGlView: com.pedro.rtplibrary.view.LightOpenGlView);
					public resizeCache(int0: number): void;
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public prepareAudioRtp(boolean0: boolean, int1: number): void;
					public resumeRecord(): void;
					public reTry(delay: number, reason: string): boolean;
					public isLanternEnabled(): boolean;
					public prepareAudio(bitrate: number, sampleRate: number, isStereo: boolean, echoCanceler: boolean, noiseSuppressor: boolean): boolean;
					public disableLantern(): void;
					public startStream(url: string): void;
					public stopStream(): void;
					public getH264DataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public startPreview(width: number, height: number): void;
					public replaceView(openGlView: com.pedro.rtplibrary.view.OpenGlView): void;
					public onVideoFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public getGlInterface(): com.pedro.rtplibrary.view.GlInterface;
					public startRecord(fd: java.io.FileDescriptor): void;
					public isVideoEnabled(): boolean;
					public constructor(textureView: globalAndroid.view.TextureView);
					public prepareVideo(width: number, height: number, fps: number, bitrate: number, rotation: number): boolean;
					public enableAudio(): void;
					public onSpsPpsVpsRtp(byteBuffer0: java.nio.ByteBuffer, byteBuffer1: java.nio.ByteBuffer, byteBuffer2: java.nio.ByteBuffer): void;
					public disableAutoFocus(): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module base {
				export abstract class Camera2Base extends java.lang.Object implements com.pedro.encoder.audio.GetAacData, com.pedro.encoder.video.GetVideoData, com.pedro.encoder.input.audio.GetMicrophoneData {
					public static class: java.lang.Class<com.pedro.rtplibrary.base.Camera2Base>;
					public context: globalAndroid.content.Context;
					public videoEncoder: com.pedro.encoder.video.VideoEncoder;
					public recordController: com.pedro.rtplibrary.util.RecordController;
					public getCameraCharacteristics(): globalAndroid.hardware.camera2.CameraCharacteristics;
					public resetSentVideoFrames(): void;
					public isOnPreview(): boolean;
					public enableLantern(): void;
					public prepareAudio(bitrate: number, sampleRate: number, isStereo: boolean): boolean;
					public startPreview(): void;
					/** @deprecated */
					public shouldRetry(string0: string): boolean;
					public switchCamera(): void;
					public getRecordStatus(): com.pedro.rtplibrary.util.RecordController.Status;
					public getDroppedAudioFrames(): number;
					public disableAudio(): void;
					public isRecording(): boolean;
					public startPreview(cameraFacing: com.pedro.encoder.input.video.CameraHelper.Facing, width: number, height: number): void;
					public setFpsListener(callback: com.pedro.rtplibrary.util.FpsListener.Callback): void;
					public prepareVideo(width: number, height: number, fps: number, bitrate: number, iFrameInterval: number, rotation: number, avcProfile: number, avcProfileLevel: number): boolean;
					public startPreview(cameraFacing: com.pedro.encoder.input.video.CameraHelper.Facing, rotation: number): void;
					public onSpsPpsVps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public startRecord(fd: java.io.FileDescriptor, listener: com.pedro.rtplibrary.util.RecordController.Listener): void;
					public getDroppedVideoFrames(): number;
					public disableFaceDetection(): void;
					public getSentAudioFrames(): number;
					public isStreaming(): boolean;
					public startRecord(path: string): void;
					public constructor(openGlView: com.pedro.rtplibrary.view.OpenGlView);
					public getResolutionsBack(): java.util.List<any>;
					public isAudioMuted(): boolean;
					public getVideoData(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setCameraCallbacks(callbacks: com.pedro.encoder.input.video.CameraCallbacks): void;
					public resizeCache(int0: number): void;
					public getCacheSize(): number;
					public resumeRecord(): void;
					public isLanternEnabled(): boolean;
					public prepareAudio(bitrate: number, sampleRate: number, isStereo: boolean, echoCanceler: boolean, noiseSuppressor: boolean): boolean;
					public getResolutionsFront(): java.util.List<any>;
					public disableLantern(): void;
					public stopStream(): void;
					public replaceView(openGlView: com.pedro.rtplibrary.view.OpenGlView): void;
					public isVideoEnabled(): boolean;
					public disableAutoFocus(): void;
					/** @deprecated */
					public constructor(surfaceView: globalAndroid.view.SurfaceView);
					public isFrontCamera(): boolean;
					public startStreamRtp(string0: string): void;
					public getAacData(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getMaxZoom(): number;
					public getBitrate(): number;
					public inputPCMData(frame: com.pedro.encoder.Frame): void;
					public getStreamWidth(): number;
					public replaceView(lightOpenGlView: com.pedro.rtplibrary.view.LightOpenGlView): void;
					public onAudioFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public isAutoFocusEnabled(): boolean;
					public getAacDataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setCustomAudioEffect(customAudioEffect: com.pedro.encoder.input.audio.CustomAudioEffect): void;
					public setForce(forceVideo: com.pedro.encoder.utils.CodecUtil.Force, forceAudio: com.pedro.encoder.utils.CodecUtil.Force): void;
					public enableFaceDetection(faceDetectorCallback: com.pedro.encoder.input.video.Camera2ApiManager.FaceDetectorCallback): void;
					public setReTries(int0: number): void;
					/** @deprecated */
					public reTry(delay: number): void;
					public enableAutoFocus(): void;
					public getSentVideoFrames(): number;
					public isFaceDetectionEnabled(): boolean;
					public setLogs(boolean0: boolean): void;
					public isLanternSupported(): boolean;
					public getResolutionValue(): number;
					public setLimitFPSOnFly(fps: number): void;
					public startRecord(path: string, listener: com.pedro.rtplibrary.util.RecordController.Listener): void;
					public startPreview(cameraFacing: com.pedro.encoder.input.video.CameraHelper.Facing): void;
					public replaceView(context: globalAndroid.content.Context): void;
					public prepareVideo(width: number, height: number, fps: number, bitrate: number, iFrameInterval: number, rotation: number): boolean;
					public prepareVideo(width: number, height: number, bitrate: number): boolean;
					public stopStreamRtp(): void;
					public resetDroppedAudioFrames(): void;
					public stopPreview(): void;
					public prepareVideo(): boolean;
					public startPreview(cameraFacing: com.pedro.encoder.input.video.CameraHelper.Facing, width: number, height: number, rotation: number): void;
					public getStreamHeight(): number;
					public setVideoBitrateOnFly(bitrate: number): void;
					public setZoom(event: globalAndroid.view.MotionEvent): void;
					public onSpsPps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer): void;
					public prepareAudio(): boolean;
					public setZoom(level: number): void;
					/** @deprecated */
					public constructor(textureView: globalAndroid.view.TextureView);
					public setAuthorization(string0: string, string1: string): void;
					public reConnect(long0: number): void;
					public stopRecord(): void;
					public getZoom(): number;
					public pauseRecord(): void;
					public constructor(lightOpenGlView: com.pedro.rtplibrary.view.LightOpenGlView);
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public prepareAudioRtp(boolean0: boolean, int1: number): void;
					public reTry(delay: number, reason: string): boolean;
					public startStream(url: string): void;
					public getH264DataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public onVideoFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public getGlInterface(): com.pedro.rtplibrary.view.GlInterface;
					public startRecord(fd: java.io.FileDescriptor): void;
					public constructor(context: globalAndroid.content.Context, useOpengl: boolean);
					public prepareVideo(width: number, height: number, fps: number, bitrate: number, rotation: number): boolean;
					public enableAudio(): void;
					public onSpsPpsVpsRtp(byteBuffer0: java.nio.ByteBuffer, byteBuffer1: java.nio.ByteBuffer, byteBuffer2: java.nio.ByteBuffer): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module base {
				export abstract class DisplayBase extends java.lang.Object implements com.pedro.encoder.audio.GetAacData, com.pedro.encoder.video.GetVideoData, com.pedro.encoder.input.audio.GetMicrophoneData {
					public static class: java.lang.Class<com.pedro.rtplibrary.base.DisplayBase>;
					public context: globalAndroid.content.Context;
					public videoEncoder: com.pedro.encoder.video.VideoEncoder;
					public surfaceView: globalAndroid.view.SurfaceView;
					public recordController: com.pedro.rtplibrary.util.RecordController;
					public resetSentVideoFrames(): void;
					public startStreamRtp(string0: string): void;
					public getAacData(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public prepareAudio(bitrate: number, sampleRate: number, isStereo: boolean): boolean;
					public prepareVideo(width: number, height: number, fps: number, bitrate: number, rotation: number, dpi: number, avcProfile: number, avcProfileLevel: number, iFrameInterval: number): boolean;
					/** @deprecated */
					public shouldRetry(string0: string): boolean;
					public getBitrate(): number;
					public inputPCMData(frame: com.pedro.encoder.Frame): void;
					public getStreamWidth(): number;
					public getRecordStatus(): com.pedro.rtplibrary.util.RecordController.Status;
					public onAudioFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public getAacDataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setCustomAudioEffect(customAudioEffect: com.pedro.encoder.input.audio.CustomAudioEffect): void;
					public setForce(forceVideo: com.pedro.encoder.utils.CodecUtil.Force, forceAudio: com.pedro.encoder.utils.CodecUtil.Force): void;
					public getDroppedAudioFrames(): number;
					public disableAudio(): void;
					public isRecording(): boolean;
					public setReTries(int0: number): void;
					/** @deprecated */
					public reTry(delay: number): void;
					public getSentVideoFrames(): number;
					public prepareInternalAudio(bitrate: number, sampleRate: number, isStereo: boolean): boolean;
					public setFpsListener(callback: com.pedro.rtplibrary.util.FpsListener.Callback): void;
					public setLogs(boolean0: boolean): void;
					public getResolutionValue(): number;
					public setLimitFPSOnFly(fps: number): void;
					public startRecord(path: string, listener: com.pedro.rtplibrary.util.RecordController.Listener): void;
					public prepareVideo(width: number, height: number, bitrate: number): boolean;
					public stopStreamRtp(): void;
					public onSpsPpsVps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public prepareInternalAudio(bitrate: number, sampleRate: number, isStereo: boolean, echoCanceler: boolean, noiseSuppressor: boolean): boolean;
					public startRecord(fd: java.io.FileDescriptor, listener: com.pedro.rtplibrary.util.RecordController.Listener): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public prepareVideo(width: number, height: number, fps: number, bitrate: number, rotation: number, dpi: number): boolean;
					public prepareVideo(): boolean;
					public getStreamHeight(): number;
					public setVideoBitrateOnFly(bitrate: number): void;
					public getSentAudioFrames(): number;
					public isStreaming(): boolean;
					public onSpsPps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer): void;
					public startRecord(path: string): void;
					public sendIntent(): globalAndroid.content.Intent;
					public prepareAudio(): boolean;
					public isAudioMuted(): boolean;
					public getVideoData(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setAuthorization(string0: string, string1: string): void;
					public reConnect(long0: number): void;
					public stopRecord(): void;
					public pauseRecord(): void;
					public prepareInternalAudio(): boolean;
					public resizeCache(int0: number): void;
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public prepareAudioRtp(boolean0: boolean, int1: number): void;
					public resumeRecord(): void;
					public reTry(delay: number, reason: string): boolean;
					public prepareAudio(bitrate: number, sampleRate: number, isStereo: boolean, echoCanceler: boolean, noiseSuppressor: boolean): boolean;
					public startStream(url: string): void;
					public stopStream(): void;
					public getH264DataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public onVideoFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public getGlInterface(): com.pedro.rtplibrary.view.GlInterface;
					public setIntentResult(resultCode: number, data: globalAndroid.content.Intent): void;
					public startRecord(fd: java.io.FileDescriptor): void;
					public isVideoEnabled(): boolean;
					public constructor(context: globalAndroid.content.Context, useOpengl: boolean);
					public enableAudio(): void;
					public onSpsPpsVpsRtp(byteBuffer0: java.nio.ByteBuffer, byteBuffer1: java.nio.ByteBuffer, byteBuffer2: java.nio.ByteBuffer): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module base {
				export abstract class FromFileBase extends java.lang.Object implements com.pedro.encoder.video.GetVideoData, com.pedro.encoder.audio.GetAacData, com.pedro.encoder.input.audio.GetMicrophoneData, com.pedro.encoder.input.decoder.LoopFileInterface {
					public static class: java.lang.Class<com.pedro.rtplibrary.base.FromFileBase>;
					public videoEncoder: com.pedro.encoder.video.VideoEncoder;
					public recordController: com.pedro.rtplibrary.util.RecordController;
					public videoEnabled: boolean;
					public resetSentVideoFrames(): void;
					public startStreamRtp(string0: string): void;
					public getAacData(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public prepareAudio(filePath: string): boolean;
					public constructor(lightOpenGlView: com.pedro.rtplibrary.view.LightOpenGlView, videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					/** @deprecated */
					public shouldRetry(string0: string): boolean;
					public getBitrate(): number;
					public prepareVideo(filePath: string, bitRate: number, rotation: number, avcProfile: number, avcProfileLevel: number): boolean;
					public prepareVideo(filePath: string): boolean;
					public inputPCMData(frame: com.pedro.encoder.Frame): void;
					public getStreamWidth(): number;
					public replaceView(lightOpenGlView: com.pedro.rtplibrary.view.LightOpenGlView): void;
					public getRecordStatus(): com.pedro.rtplibrary.util.RecordController.Status;
					public onAudioFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public getAacDataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setForce(forceVideo: com.pedro.encoder.utils.CodecUtil.Force, forceAudio: com.pedro.encoder.utils.CodecUtil.Force): void;
					public getDroppedAudioFrames(): number;
					public isRecording(): boolean;
					public reSyncFile(): void;
					public playAudioDevice(): void;
					public setReTries(int0: number): void;
					/** @deprecated */
					public reTry(delay: number): void;
					public moveTo(time: number): void;
					public getSentVideoFrames(): number;
					public setFpsListener(callback: com.pedro.rtplibrary.util.FpsListener.Callback): void;
					public setLogs(boolean0: boolean): void;
					public getResolutionValue(): number;
					public setLimitFPSOnFly(fps: number): void;
					public startRecord(path: string, listener: com.pedro.rtplibrary.util.RecordController.Listener): void;
					public setLoopMode(loopMode: boolean): void;
					public replaceView(context: globalAndroid.content.Context): void;
					public stopStreamRtp(): void;
					public onSpsPpsVps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public startRecord(fd: java.io.FileDescriptor, listener: com.pedro.rtplibrary.util.RecordController.Listener): void;
					public prepareVideo(filePath: string, bitRate: number, rotation: number): boolean;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public getAudioDuration(): number;
					public getStreamHeight(): number;
					public setVideoBitrateOnFly(bitrate: number): void;
					public constructor(context: globalAndroid.content.Context, videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public getSentAudioFrames(): number;
					public isStreaming(): boolean;
					public onSpsPps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer): void;
					public startRecord(path: string): void;
					public isAudioDeviceEnabled(): boolean;
					public getVideoData(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public constructor(videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public setAuthorization(string0: string, string1: string): void;
					public reConnect(long0: number): void;
					public stopAudioDevice(): void;
					public stopRecord(): void;
					public pauseRecord(): void;
					public getVideoDuration(): number;
					public prepareAudio(filePath: string, bitRate: number): boolean;
					public constructor(openGlView: com.pedro.rtplibrary.view.OpenGlView, videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public resizeCache(int0: number): void;
					public getCacheSize(): number;
					public onReset(isVideo: boolean): void;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public prepareAudioRtp(boolean0: boolean, int1: number): void;
					public resumeRecord(): void;
					public getVideoTime(): number;
					public reTry(delay: number, reason: string): boolean;
					public startStream(url: string): void;
					public stopStream(): void;
					public getAudioTime(): number;
					public getH264DataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public replaceView(openGlView: com.pedro.rtplibrary.view.OpenGlView): void;
					public onVideoFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public getGlInterface(): com.pedro.rtplibrary.view.GlInterface;
					public startRecord(fd: java.io.FileDescriptor): void;
					public onSpsPpsVpsRtp(byteBuffer0: java.nio.ByteBuffer, byteBuffer1: java.nio.ByteBuffer, byteBuffer2: java.nio.ByteBuffer): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module base {
				export abstract class OnlyAudioBase extends java.lang.Object implements com.pedro.encoder.audio.GetAacData, com.pedro.encoder.input.audio.GetMicrophoneData {
					public static class: java.lang.Class<com.pedro.rtplibrary.base.OnlyAudioBase>;
					public recordController: com.pedro.rtplibrary.util.RecordController;
					public resetSentVideoFrames(): void;
					public getSentAudioFrames(): number;
					public isStreaming(): boolean;
					public startStreamRtp(string0: string): void;
					public startRecord(path: string): void;
					public getAacData(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public prepareAudio(bitrate: number, sampleRate: number, isStereo: boolean): boolean;
					public prepareAudio(): boolean;
					/** @deprecated */
					public shouldRetry(string0: string): boolean;
					public constructor();
					public inputPCMData(frame: com.pedro.encoder.Frame): void;
					public isAudioMuted(): boolean;
					public getRecordStatus(): com.pedro.rtplibrary.util.RecordController.Status;
					public setAuthorization(string0: string, string1: string): void;
					public reConnect(long0: number): void;
					public onAudioFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public stopRecord(): void;
					public pauseRecord(): void;
					public getAacDataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setCustomAudioEffect(customAudioEffect: com.pedro.encoder.input.audio.CustomAudioEffect): void;
					public isRecording(): boolean;
					public getDroppedAudioFrames(): number;
					public disableAudio(): void;
					public setReTries(int0: number): void;
					public resizeCache(int0: number): void;
					public getCacheSize(): number;
					/** @deprecated */
					public reTry(delay: number): void;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public getSentVideoFrames(): number;
					public prepareAudioRtp(boolean0: boolean, int1: number): void;
					public resumeRecord(): void;
					public setLogs(boolean0: boolean): void;
					public reTry(delay: number, reason: string): boolean;
					public prepareAudio(bitrate: number, sampleRate: number, isStereo: boolean, echoCanceler: boolean, noiseSuppressor: boolean): boolean;
					public startRecord(path: string, listener: com.pedro.rtplibrary.util.RecordController.Listener): void;
					public startStream(url: string): void;
					public stopStream(): void;
					public stopStreamRtp(): void;
					public startRecord(fd: java.io.FileDescriptor): void;
					public startRecord(fd: java.io.FileDescriptor, listener: com.pedro.rtplibrary.util.RecordController.Listener): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public enableAudio(): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module network {
				export class AdapterBitrateParser extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtplibrary.network.AdapterBitrateParser>;
					public static DELAY: number;
					public static DIFFERENCE: number;
					public static maxVideoBitrate: number;
					public static reset(): void;
					public constructor();
					public static parseBitrate(oldBitrate: number, bandwidth: number, callback: com.pedro.rtplibrary.network.AdapterBitrateParser.Callback): void;
					public static calculateMaxVideoBitrate(resolutionValue: number): void;
				}
				export module AdapterBitrateParser {
					export class Callback extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.rtplibrary.network.AdapterBitrateParser.Callback>;
						/**
						 * Constructs a new instance of the com.pedro.rtplibrary.network.AdapterBitrateParser$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onNewBitrate(int0: number): void;
						});
						public constructor();
						public onNewBitrate(int0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module network {
				export class ByteArrayScanner extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtplibrary.network.ByteArrayScanner>;
					public reset(buffer: native.Array<number>, length: number): com.pedro.rtplibrary.network.ByteArrayScanner;
					public nextInt(): number;
					public useDelimiter(delimiter: string): com.pedro.rtplibrary.network.ByteArrayScanner;
					public nextStringEquals(str: string): boolean;
					public nextString(): string;
					public skip(): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module network {
				export class ConnectionClassManager extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtplibrary.network.ConnectionClassManager>;
					public static getInstance(): com.pedro.rtplibrary.network.ConnectionClassManager;
					public addBandwidth(bytes: number, timeInMs: number): void;
					public register(listener: com.pedro.rtplibrary.network.ConnectionClassManager.ConnectionClassStateChangeListener): void;
					public remove(): void;
				}
				export module ConnectionClassManager {
					export class ConnectionClassManagerHolder extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.rtplibrary.network.ConnectionClassManager.ConnectionClassManagerHolder>;
						public static instance: com.pedro.rtplibrary.network.ConnectionClassManager;
					}
					export class ConnectionClassStateChangeListener extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.rtplibrary.network.ConnectionClassManager.ConnectionClassStateChangeListener>;
						/**
						 * Constructs a new instance of the com.pedro.rtplibrary.network.ConnectionClassManager$ConnectionClassStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onBandwidthStateChange(double0: number): void;
						});
						public constructor();
						public onBandwidthStateChange(double0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module network {
				export class LineBufferReader extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtplibrary.network.LineBufferReader>;
					public readLine(lineBuffer: native.Array<number>): number;
					public constructor();
					public setFileStream(is: java.io.FileInputStream): void;
					public skipLine(): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module network {
				export class QTagTxParser extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtplibrary.network.QTagTxParser>;
					public static sInstance: com.pedro.rtplibrary.network.QTagTxParser;
					public constructor(path: string);
					public parseDataUsageForUidAndTag(uid: number): number;
					public static getInstance(): com.pedro.rtplibrary.network.QTagTxParser;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module network {
				export class UploadBandwidthSampler extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtplibrary.network.UploadBandwidthSampler>;
					public startSampling(): void;
					public stopSampling(): void;
					public isSampling(): boolean;
					public static getInstance(): com.pedro.rtplibrary.network.UploadBandwidthSampler;
				}
				export module UploadBandwidthSampler {
					export class SamplingHandler extends globalAndroid.os.Handler {
						public static class: java.lang.Class<com.pedro.rtplibrary.network.UploadBandwidthSampler.SamplingHandler>;
						public constructor(looper: globalAndroid.os.Looper);
						public constructor();
						public constructor(callback: globalAndroid.os.Handler.Callback);
						public constructor(param0: com.pedro.rtplibrary.network.UploadBandwidthSampler, looper: globalAndroid.os.Looper);
						public constructor(looper: globalAndroid.os.Looper, callback: globalAndroid.os.Handler.Callback);
						public handleMessage(msg: globalAndroid.os.Message): void;
					}
					export class UploadBandwidthSamplerHolder extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.rtplibrary.network.UploadBandwidthSampler.UploadBandwidthSamplerHolder>;
						public static instance: com.pedro.rtplibrary.network.UploadBandwidthSampler;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module rtmp {
				export class RtmpCamera1 extends com.pedro.rtplibrary.base.Camera1Base {
					public static class: java.lang.Class<com.pedro.rtplibrary.rtmp.RtmpCamera1>;
					public setReTries(reTries: number): void;
					public resetSentVideoFrames(): void;
					public startStreamRtp(string0: string): void;
					public getAacData(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resizeCache(newSize: number): void;
					/** @deprecated */
					public shouldRetry(string0: string): boolean;
					public constructor(surfaceView: globalAndroid.view.SurfaceView);
					public inputPCMData(frame: com.pedro.encoder.Frame): void;
					public onAudioFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public onSpsPpsVpsRtp(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public constructor(lightOpenGlView: com.pedro.rtplibrary.view.LightOpenGlView, connectChecker: net.ossrs.rtmp.ConnectCheckerRtmp);
					public getAacDataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getDroppedAudioFrames(): number;
					public setReTries(int0: number): void;
					public constructor(openGlView: com.pedro.rtplibrary.view.OpenGlView, connectChecker: net.ossrs.rtmp.ConnectCheckerRtmp);
					public getSentVideoFrames(): number;
					public setProfileIop(profileIop: number): void;
					public setLogs(boolean0: boolean): void;
					public constructor(textureView: globalAndroid.view.TextureView, connectChecker: net.ossrs.rtmp.ConnectCheckerRtmp);
					public setAuthorization(user: string, password: string): void;
					public getH264DataRtp(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public stopStreamRtp(): void;
					public onSpsPpsVps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public constructor(context: globalAndroid.content.Context);
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public prepareAudioRtp(isStereo: boolean, sampleRate: number): void;
					public shouldRetry(reason: string): boolean;
					public startStreamRtp(url: string): void;
					public getSentAudioFrames(): number;
					public constructor(surfaceView: globalAndroid.view.SurfaceView, connectChecker: net.ossrs.rtmp.ConnectCheckerRtmp);
					public onSpsPps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer): void;
					public inputYUVData(frame: com.pedro.encoder.Frame): void;
					public constructor(openGlView: com.pedro.rtplibrary.view.OpenGlView);
					public forceAkamaiTs(enabled: boolean): void;
					public getVideoData(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setAuthorization(string0: string, string1: string): void;
					public reConnect(long0: number): void;
					public constructor(lightOpenGlView: com.pedro.rtplibrary.view.LightOpenGlView);
					public resizeCache(int0: number): void;
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public constructor(context: globalAndroid.content.Context, connectChecker: net.ossrs.rtmp.ConnectCheckerRtmp);
					public resetSentAudioFrames(): void;
					public prepareAudioRtp(boolean0: boolean, int1: number): void;
					public getAacDataRtp(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getH264DataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public onVideoFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public reConnect(delay: number): void;
					public constructor(textureView: globalAndroid.view.TextureView);
					public setLogs(enable: boolean): void;
					public onSpsPpsVpsRtp(byteBuffer0: java.nio.ByteBuffer, byteBuffer1: java.nio.ByteBuffer, byteBuffer2: java.nio.ByteBuffer): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module rtmp {
				export class RtmpCamera2 extends com.pedro.rtplibrary.base.Camera2Base {
					public static class: java.lang.Class<com.pedro.rtplibrary.rtmp.RtmpCamera2>;
					public setReTries(reTries: number): void;
					public resetSentVideoFrames(): void;
					/** @deprecated */
					public constructor(surfaceView: globalAndroid.view.SurfaceView);
					public startStreamRtp(string0: string): void;
					public getAacData(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resizeCache(newSize: number): void;
					/** @deprecated */
					public constructor(textureView: globalAndroid.view.TextureView, connectChecker: net.ossrs.rtmp.ConnectCheckerRtmp);
					/** @deprecated */
					public shouldRetry(string0: string): boolean;
					public inputPCMData(frame: com.pedro.encoder.Frame): void;
					public onAudioFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public onSpsPpsVpsRtp(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public constructor(lightOpenGlView: com.pedro.rtplibrary.view.LightOpenGlView, connectChecker: net.ossrs.rtmp.ConnectCheckerRtmp);
					public getAacDataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getDroppedAudioFrames(): number;
					public setReTries(int0: number): void;
					public constructor(openGlView: com.pedro.rtplibrary.view.OpenGlView, connectChecker: net.ossrs.rtmp.ConnectCheckerRtmp);
					public getSentVideoFrames(): number;
					public setProfileIop(profileIop: number): void;
					public setLogs(boolean0: boolean): void;
					public setAuthorization(user: string, password: string): void;
					public getH264DataRtp(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					/** @deprecated */
					public constructor(surfaceView: globalAndroid.view.SurfaceView, connectChecker: net.ossrs.rtmp.ConnectCheckerRtmp);
					public stopStreamRtp(): void;
					public constructor(context: globalAndroid.content.Context, useOpengl: boolean, connectChecker: net.ossrs.rtmp.ConnectCheckerRtmp);
					public onSpsPpsVps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public prepareAudioRtp(isStereo: boolean, sampleRate: number): void;
					public shouldRetry(reason: string): boolean;
					public startStreamRtp(url: string): void;
					public getSentAudioFrames(): number;
					public onSpsPps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer): void;
					public constructor(openGlView: com.pedro.rtplibrary.view.OpenGlView);
					public forceAkamaiTs(enabled: boolean): void;
					/** @deprecated */
					public constructor(textureView: globalAndroid.view.TextureView);
					public getVideoData(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setAuthorization(string0: string, string1: string): void;
					public reConnect(long0: number): void;
					public constructor(lightOpenGlView: com.pedro.rtplibrary.view.LightOpenGlView);
					public resizeCache(int0: number): void;
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public prepareAudioRtp(boolean0: boolean, int1: number): void;
					public getAacDataRtp(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getH264DataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public onVideoFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public reConnect(delay: number): void;
					public constructor(context: globalAndroid.content.Context, useOpengl: boolean);
					public setLogs(enable: boolean): void;
					public onSpsPpsVpsRtp(byteBuffer0: java.nio.ByteBuffer, byteBuffer1: java.nio.ByteBuffer, byteBuffer2: java.nio.ByteBuffer): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module rtmp {
				export class RtmpDisplay extends com.pedro.rtplibrary.base.DisplayBase {
					public static class: java.lang.Class<com.pedro.rtplibrary.rtmp.RtmpDisplay>;
					public setReTries(reTries: number): void;
					public resetSentVideoFrames(): void;
					public startStreamRtp(url: string): void;
					public getSentAudioFrames(): number;
					public onSpsPps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer): void;
					public startStreamRtp(string0: string): void;
					public getAacData(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resizeCache(newSize: number): void;
					/** @deprecated */
					public shouldRetry(string0: string): boolean;
					public forceAkamaiTs(enabled: boolean): void;
					public inputPCMData(frame: com.pedro.encoder.Frame): void;
					public getVideoData(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setAuthorization(string0: string, string1: string): void;
					public reConnect(long0: number): void;
					public onAudioFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public onSpsPpsVpsRtp(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public getAacDataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getDroppedAudioFrames(): number;
					public resizeCache(int0: number): void;
					public getCacheSize(): number;
					public setReTries(int0: number): void;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public getSentVideoFrames(): number;
					public prepareAudioRtp(boolean0: boolean, int1: number): void;
					public setProfileIop(profileIop: number): void;
					public getAacDataRtp(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setLogs(boolean0: boolean): void;
					public setAuthorization(user: string, password: string): void;
					public getH264DataRtp(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getH264DataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public stopStreamRtp(): void;
					public onVideoFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public constructor(context: globalAndroid.content.Context, useOpengl: boolean, connectChecker: net.ossrs.rtmp.ConnectCheckerRtmp);
					public onSpsPpsVps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public reConnect(delay: number): void;
					public constructor(context: globalAndroid.content.Context, useOpengl: boolean);
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public prepareAudioRtp(isStereo: boolean, sampleRate: number): void;
					public setLogs(enable: boolean): void;
					public shouldRetry(reason: string): boolean;
					public onSpsPpsVpsRtp(byteBuffer0: java.nio.ByteBuffer, byteBuffer1: java.nio.ByteBuffer, byteBuffer2: java.nio.ByteBuffer): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module rtmp {
				export class RtmpFromFile extends com.pedro.rtplibrary.base.FromFileBase {
					public static class: java.lang.Class<com.pedro.rtplibrary.rtmp.RtmpFromFile>;
					public setReTries(reTries: number): void;
					public constructor(openGlView: com.pedro.rtplibrary.view.OpenGlView, connectChecker: net.ossrs.rtmp.ConnectCheckerRtmp, videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public resetSentVideoFrames(): void;
					public startStreamRtp(string0: string): void;
					public getAacData(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resizeCache(newSize: number): void;
					public constructor(lightOpenGlView: com.pedro.rtplibrary.view.LightOpenGlView, videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					/** @deprecated */
					public shouldRetry(string0: string): boolean;
					public inputPCMData(frame: com.pedro.encoder.Frame): void;
					public onAudioFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public onSpsPpsVpsRtp(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public getAacDataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getDroppedAudioFrames(): number;
					public setReTries(int0: number): void;
					public getSentVideoFrames(): number;
					public setProfileIop(profileIop: number): void;
					public setLogs(boolean0: boolean): void;
					public setAuthorization(user: string, password: string): void;
					public getH264DataRtp(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public stopStreamRtp(): void;
					public onSpsPpsVps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public prepareAudioRtp(isStereo: boolean, sampleRate: number): void;
					public shouldRetry(reason: string): boolean;
					public startStreamRtp(url: string): void;
					public constructor(context: globalAndroid.content.Context, videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public getSentAudioFrames(): number;
					public onSpsPps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer): void;
					public forceAkamaiTs(enabled: boolean): void;
					public constructor(connectChecker: net.ossrs.rtmp.ConnectCheckerRtmp, videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public getVideoData(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public constructor(videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public setAuthorization(string0: string, string1: string): void;
					public reConnect(long0: number): void;
					public constructor(lightOpenGlView: com.pedro.rtplibrary.view.LightOpenGlView, connectChecker: net.ossrs.rtmp.ConnectCheckerRtmp, videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public constructor(openGlView: com.pedro.rtplibrary.view.OpenGlView, videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public resizeCache(int0: number): void;
					public getCacheSize(): number;
					public onReset(isVideo: boolean): void;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public prepareAudioRtp(boolean0: boolean, int1: number): void;
					public getAacDataRtp(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public constructor(context: globalAndroid.content.Context, connectChecker: net.ossrs.rtmp.ConnectCheckerRtmp, videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public getH264DataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public onVideoFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public reConnect(delay: number): void;
					public setLogs(enable: boolean): void;
					public onSpsPpsVpsRtp(byteBuffer0: java.nio.ByteBuffer, byteBuffer1: java.nio.ByteBuffer, byteBuffer2: java.nio.ByteBuffer): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module rtmp {
				export class RtmpOnlyAudio extends com.pedro.rtplibrary.base.OnlyAudioBase {
					public static class: java.lang.Class<com.pedro.rtplibrary.rtmp.RtmpOnlyAudio>;
					public setReTries(reTries: number): void;
					public resetSentVideoFrames(): void;
					public startStreamRtp(url: string): void;
					public getSentAudioFrames(): number;
					public startStreamRtp(string0: string): void;
					public getAacData(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resizeCache(newSize: number): void;
					/** @deprecated */
					public shouldRetry(string0: string): boolean;
					public forceAkamaiTs(enabled: boolean): void;
					public constructor();
					public inputPCMData(frame: com.pedro.encoder.Frame): void;
					public setAuthorization(string0: string, string1: string): void;
					public reConnect(long0: number): void;
					public onAudioFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public getAacDataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getDroppedAudioFrames(): number;
					public constructor(connectChecker: net.ossrs.rtmp.ConnectCheckerRtmp);
					public resizeCache(int0: number): void;
					public getCacheSize(): number;
					public setReTries(int0: number): void;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public getSentVideoFrames(): number;
					public prepareAudioRtp(boolean0: boolean, int1: number): void;
					public getAacDataRtp(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setLogs(boolean0: boolean): void;
					public setAuthorization(user: string, password: string): void;
					public stopStreamRtp(): void;
					public reConnect(delay: number): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public prepareAudioRtp(isStereo: boolean, sampleRate: number): void;
					public setLogs(enable: boolean): void;
					public shouldRetry(reason: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module rtsp {
				export class RtspCamera1 extends com.pedro.rtplibrary.base.Camera1Base {
					public static class: java.lang.Class<com.pedro.rtplibrary.rtsp.RtspCamera1>;
					public setReTries(reTries: number): void;
					public resetSentVideoFrames(): void;
					public constructor(lightOpenGlView: com.pedro.rtplibrary.view.LightOpenGlView, connectCheckerRtsp: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public startStreamRtp(string0: string): void;
					public getAacData(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resizeCache(newSize: number): void;
					/** @deprecated */
					public shouldRetry(string0: string): boolean;
					public constructor(surfaceView: globalAndroid.view.SurfaceView);
					public inputPCMData(frame: com.pedro.encoder.Frame): void;
					public onAudioFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public onSpsPpsVpsRtp(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public getAacDataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getDroppedAudioFrames(): number;
					public setReTries(int0: number): void;
					public getSentVideoFrames(): number;
					public constructor(openGlView: com.pedro.rtplibrary.view.OpenGlView, connectCheckerRtsp: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public setLogs(boolean0: boolean): void;
					public setAuthorization(user: string, password: string): void;
					public getH264DataRtp(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public stopStreamRtp(): void;
					public onSpsPpsVps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public constructor(context: globalAndroid.content.Context);
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public setVideoCodec(videoCodec: com.pedro.rtsp.rtsp.VideoCodec): void;
					public prepareAudioRtp(isStereo: boolean, sampleRate: number): void;
					public shouldRetry(reason: string): boolean;
					public startStreamRtp(url: string): void;
					public getSentAudioFrames(): number;
					public onSpsPps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer): void;
					public inputYUVData(frame: com.pedro.encoder.Frame): void;
					public constructor(openGlView: com.pedro.rtplibrary.view.OpenGlView);
					public constructor(textureView: globalAndroid.view.TextureView, connectCheckerRtsp: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public constructor(context: globalAndroid.content.Context, connectCheckerRtsp: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public constructor(surfaceView: globalAndroid.view.SurfaceView, connectCheckerRtsp: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public getVideoData(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setAuthorization(string0: string, string1: string): void;
					public reConnect(long0: number): void;
					public constructor(lightOpenGlView: com.pedro.rtplibrary.view.LightOpenGlView);
					public resizeCache(int0: number): void;
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public setProtocol(protocol: com.pedro.rtsp.rtsp.Protocol): void;
					public prepareAudioRtp(boolean0: boolean, int1: number): void;
					public getAacDataRtp(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getH264DataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public onVideoFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public reConnect(delay: number): void;
					public constructor(textureView: globalAndroid.view.TextureView);
					public setLogs(enable: boolean): void;
					public onSpsPpsVpsRtp(byteBuffer0: java.nio.ByteBuffer, byteBuffer1: java.nio.ByteBuffer, byteBuffer2: java.nio.ByteBuffer): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module rtsp {
				export class RtspCamera2 extends com.pedro.rtplibrary.base.Camera2Base {
					public static class: java.lang.Class<com.pedro.rtplibrary.rtsp.RtspCamera2>;
					public setReTries(reTries: number): void;
					public resetSentVideoFrames(): void;
					/** @deprecated */
					public constructor(surfaceView: globalAndroid.view.SurfaceView);
					public constructor(lightOpenGlView: com.pedro.rtplibrary.view.LightOpenGlView, connectCheckerRtsp: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public startStreamRtp(string0: string): void;
					public getAacData(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					/** @deprecated */
					public constructor(textureView: globalAndroid.view.TextureView, connectCheckerRtsp: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public resizeCache(newSize: number): void;
					/** @deprecated */
					public shouldRetry(string0: string): boolean;
					public inputPCMData(frame: com.pedro.encoder.Frame): void;
					/** @deprecated */
					public constructor(surfaceView: globalAndroid.view.SurfaceView, connectCheckerRtsp: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public onAudioFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public onSpsPpsVpsRtp(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public getAacDataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getDroppedAudioFrames(): number;
					public setReTries(int0: number): void;
					public getSentVideoFrames(): number;
					public constructor(openGlView: com.pedro.rtplibrary.view.OpenGlView, connectCheckerRtsp: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public setLogs(boolean0: boolean): void;
					public setAuthorization(user: string, password: string): void;
					public getH264DataRtp(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public stopStreamRtp(): void;
					public onSpsPpsVps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public setVideoCodec(videoCodec: com.pedro.rtsp.rtsp.VideoCodec): void;
					public prepareAudioRtp(isStereo: boolean, sampleRate: number): void;
					public shouldRetry(reason: string): boolean;
					public startStreamRtp(url: string): void;
					public getSentAudioFrames(): number;
					public onSpsPps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer): void;
					public constructor(openGlView: com.pedro.rtplibrary.view.OpenGlView);
					/** @deprecated */
					public constructor(textureView: globalAndroid.view.TextureView);
					public getVideoData(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setAuthorization(string0: string, string1: string): void;
					public reConnect(long0: number): void;
					public constructor(lightOpenGlView: com.pedro.rtplibrary.view.LightOpenGlView);
					public resizeCache(int0: number): void;
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public setProtocol(protocol: com.pedro.rtsp.rtsp.Protocol): void;
					public prepareAudioRtp(boolean0: boolean, int1: number): void;
					public getAacDataRtp(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public constructor(context: globalAndroid.content.Context, useOpengl: boolean, connectCheckerRtsp: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public getH264DataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public onVideoFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public reConnect(delay: number): void;
					public constructor(context: globalAndroid.content.Context, useOpengl: boolean);
					public setLogs(enable: boolean): void;
					public onSpsPpsVpsRtp(byteBuffer0: java.nio.ByteBuffer, byteBuffer1: java.nio.ByteBuffer, byteBuffer2: java.nio.ByteBuffer): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module rtsp {
				export class RtspDisplay extends com.pedro.rtplibrary.base.DisplayBase {
					public static class: java.lang.Class<com.pedro.rtplibrary.rtsp.RtspDisplay>;
					public setReTries(reTries: number): void;
					public resetSentVideoFrames(): void;
					public startStreamRtp(url: string): void;
					public getSentAudioFrames(): number;
					public onSpsPps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer): void;
					public startStreamRtp(string0: string): void;
					public getAacData(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resizeCache(newSize: number): void;
					/** @deprecated */
					public shouldRetry(string0: string): boolean;
					public inputPCMData(frame: com.pedro.encoder.Frame): void;
					public getVideoData(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setAuthorization(string0: string, string1: string): void;
					public reConnect(long0: number): void;
					public onAudioFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public onSpsPpsVpsRtp(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public getAacDataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getDroppedAudioFrames(): number;
					public resizeCache(int0: number): void;
					public getCacheSize(): number;
					public setReTries(int0: number): void;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public getSentVideoFrames(): number;
					public setProtocol(protocol: com.pedro.rtsp.rtsp.Protocol): void;
					public prepareAudioRtp(boolean0: boolean, int1: number): void;
					public getAacDataRtp(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setLogs(boolean0: boolean): void;
					public constructor(context: globalAndroid.content.Context, useOpengl: boolean, connectCheckerRtsp: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public setAuthorization(user: string, password: string): void;
					public getH264DataRtp(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getH264DataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public stopStreamRtp(): void;
					public onVideoFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public onSpsPpsVps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public reConnect(delay: number): void;
					public constructor(context: globalAndroid.content.Context, useOpengl: boolean);
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public setVideoCodec(videoCodec: com.pedro.rtsp.rtsp.VideoCodec): void;
					public prepareAudioRtp(isStereo: boolean, sampleRate: number): void;
					public setLogs(enable: boolean): void;
					public shouldRetry(reason: string): boolean;
					public onSpsPpsVpsRtp(byteBuffer0: java.nio.ByteBuffer, byteBuffer1: java.nio.ByteBuffer, byteBuffer2: java.nio.ByteBuffer): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module rtsp {
				export class RtspFromFile extends com.pedro.rtplibrary.base.FromFileBase {
					public static class: java.lang.Class<com.pedro.rtplibrary.rtsp.RtspFromFile>;
					public setReTries(reTries: number): void;
					public resetSentVideoFrames(): void;
					public startStreamRtp(string0: string): void;
					public getAacData(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resizeCache(newSize: number): void;
					public constructor(lightOpenGlView: com.pedro.rtplibrary.view.LightOpenGlView, videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					/** @deprecated */
					public shouldRetry(string0: string): boolean;
					public inputPCMData(frame: com.pedro.encoder.Frame): void;
					public constructor(lightOpenGlView: com.pedro.rtplibrary.view.LightOpenGlView, connectCheckerRtsp: com.pedro.rtsp.utils.ConnectCheckerRtsp, videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public onAudioFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public onSpsPpsVpsRtp(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public getAacDataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getDroppedAudioFrames(): number;
					public setReTries(int0: number): void;
					public getSentVideoFrames(): number;
					public setLogs(boolean0: boolean): void;
					public setAuthorization(user: string, password: string): void;
					public getH264DataRtp(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public stopStreamRtp(): void;
					public onSpsPpsVps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public setVideoCodec(videoCodec: com.pedro.rtsp.rtsp.VideoCodec): void;
					public prepareAudioRtp(isStereo: boolean, sampleRate: number): void;
					public shouldRetry(reason: string): boolean;
					public startStreamRtp(url: string): void;
					public constructor(context: globalAndroid.content.Context, videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public getSentAudioFrames(): number;
					public onSpsPps(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer): void;
					public constructor(openGlView: com.pedro.rtplibrary.view.OpenGlView, connectCheckerRtsp: com.pedro.rtsp.utils.ConnectCheckerRtsp, videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public constructor(context: globalAndroid.content.Context, connectCheckerRtsp: com.pedro.rtsp.utils.ConnectCheckerRtsp, videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public getVideoData(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public constructor(videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public setAuthorization(string0: string, string1: string): void;
					public reConnect(long0: number): void;
					public constructor(openGlView: com.pedro.rtplibrary.view.OpenGlView, videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public resizeCache(int0: number): void;
					public getCacheSize(): number;
					public onReset(isVideo: boolean): void;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public setProtocol(protocol: com.pedro.rtsp.rtsp.Protocol): void;
					public prepareAudioRtp(boolean0: boolean, int1: number): void;
					public getAacDataRtp(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getH264DataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public onVideoFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public reConnect(delay: number): void;
					public constructor(connectCheckerRtsp: com.pedro.rtsp.utils.ConnectCheckerRtsp, videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public setLogs(enable: boolean): void;
					public onSpsPpsVpsRtp(byteBuffer0: java.nio.ByteBuffer, byteBuffer1: java.nio.ByteBuffer, byteBuffer2: java.nio.ByteBuffer): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module rtsp {
				export class RtspOnlyAudio extends com.pedro.rtplibrary.base.OnlyAudioBase {
					public static class: java.lang.Class<com.pedro.rtplibrary.rtsp.RtspOnlyAudio>;
					public setReTries(reTries: number): void;
					public resetSentVideoFrames(): void;
					public startStreamRtp(url: string): void;
					public getSentAudioFrames(): number;
					public startStreamRtp(string0: string): void;
					public getAacData(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resizeCache(newSize: number): void;
					/** @deprecated */
					public shouldRetry(string0: string): boolean;
					public constructor();
					public inputPCMData(frame: com.pedro.encoder.Frame): void;
					public setAuthorization(string0: string, string1: string): void;
					public reConnect(long0: number): void;
					public onAudioFormat(mediaFormat: globalAndroid.media.MediaFormat): void;
					public getAacDataRtp(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getDroppedAudioFrames(): number;
					public resizeCache(int0: number): void;
					public getCacheSize(): number;
					public setReTries(int0: number): void;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public getSentVideoFrames(): number;
					public setProtocol(protocol: com.pedro.rtsp.rtsp.Protocol): void;
					public prepareAudioRtp(boolean0: boolean, int1: number): void;
					public getAacDataRtp(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setLogs(boolean0: boolean): void;
					public setAuthorization(user: string, password: string): void;
					public stopStreamRtp(): void;
					public reConnect(delay: number): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public prepareAudioRtp(isStereo: boolean, sampleRate: number): void;
					public setLogs(enable: boolean): void;
					public constructor(connectCheckerRtsp: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public shouldRetry(reason: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module util {
				export class BitrateAdapter extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtplibrary.util.BitrateAdapter>;
					public reset(): void;
					public constructor(listener: com.pedro.rtplibrary.util.BitrateAdapter.Listener);
					public setMaxBitrate(bitrate: number): void;
					public adaptBitrate(actualBitrate: number): void;
				}
				export module BitrateAdapter {
					export class Listener extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.rtplibrary.util.BitrateAdapter.Listener>;
						/**
						 * Constructs a new instance of the com.pedro.rtplibrary.util.BitrateAdapter$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onBitrateAdapted(int0: number): void;
						});
						public constructor();
						public onBitrateAdapted(int0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module util {
				export class FpsListener extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtplibrary.util.FpsListener>;
					public constructor();
					public setCallback(callback: com.pedro.rtplibrary.util.FpsListener.Callback): void;
					public calculateFps(): void;
				}
				export module FpsListener {
					export class Callback extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.rtplibrary.util.FpsListener.Callback>;
						/**
						 * Constructs a new instance of the com.pedro.rtplibrary.util.FpsListener$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFps(int0: number): void;
						});
						public constructor();
						public onFps(int0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module util {
				export class RecordController extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtplibrary.util.RecordController>;
					public setVideoMime(videoMime: string): void;
					public setAudioFormat(audioFormat: globalAndroid.media.MediaFormat): void;
					public resumeRecord(): void;
					public startRecord(path: string, listener: com.pedro.rtplibrary.util.RecordController.Listener): void;
					public setAudioFormat(audioFormat: globalAndroid.media.MediaFormat, isOnlyAudio: boolean): void;
					public recordAudio(audioBuffer: java.nio.ByteBuffer, audioInfo: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resetFormats(): void;
					public getStatus(): com.pedro.rtplibrary.util.RecordController.Status;
					public constructor();
					public isRunning(): boolean;
					public startRecord(fd: java.io.FileDescriptor, listener: com.pedro.rtplibrary.util.RecordController.Listener): void;
					public recordVideo(videoBuffer: java.nio.ByteBuffer, videoInfo: globalAndroid.media.MediaCodec.BufferInfo): void;
					public stopRecord(): void;
					public setVideoFormat(videoFormat: globalAndroid.media.MediaFormat): void;
					public pauseRecord(): void;
					public isRecording(): boolean;
				}
				export module RecordController {
					export class Listener extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.rtplibrary.util.RecordController.Listener>;
						/**
						 * Constructs a new instance of the com.pedro.rtplibrary.util.RecordController$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onStatusChange(status0: com.pedro.rtplibrary.util.RecordController.Status): void;
						});
						public constructor();
						public onStatusChange(status0: com.pedro.rtplibrary.util.RecordController.Status): void;
					}
					export class Status {
						public static class: java.lang.Class<com.pedro.rtplibrary.util.RecordController.Status>;
						public static STARTED: com.pedro.rtplibrary.util.RecordController.Status;
						public static STOPPED: com.pedro.rtplibrary.util.RecordController.Status;
						public static RECORDING: com.pedro.rtplibrary.util.RecordController.Status;
						public static PAUSED: com.pedro.rtplibrary.util.RecordController.Status;
						public static RESUMED: com.pedro.rtplibrary.util.RecordController.Status;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): com.pedro.rtplibrary.util.RecordController.Status;
						public static values(): native.Array<com.pedro.rtplibrary.util.RecordController.Status>;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module util {
				export class SensorRotationManager extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtplibrary.util.SensorRotationManager>;
					public stop(): void;
					public constructor(context: globalAndroid.content.Context, rotationListener: com.pedro.rtplibrary.util.SensorRotationManager.RotationChangedListener);
					public start(): void;
				}
				export module SensorRotationManager {
					export class RotationChangedListener extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.rtplibrary.util.SensorRotationManager.RotationChangedListener>;
						/**
						 * Constructs a new instance of the com.pedro.rtplibrary.util.SensorRotationManager$RotationChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onRotationChanged(int0: number): void;
						});
						public constructor();
						public onRotationChanged(int0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module view {
				export class AutoFitTextureView extends globalAndroid.view.TextureView {
					public static class: java.lang.Class<com.pedro.rtplibrary.view.AutoFitTextureView>;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
					public setAspectRatio(width: number, height: number): void;
					public sendAccessibilityEvent(eventType: number): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public constructor(context: globalAndroid.content.Context);
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module view {
				export class Filter extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtplibrary.view.Filter>;
					public setBaseFilterRender(baseFilterRender: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public constructor();
					public constructor(position: number, baseFilterRender: com.pedro.encoder.input.gl.render.filters.BaseFilterRender);
					public setPosition(position: number): void;
					public getPosition(): number;
					public getBaseFilterRender(): com.pedro.encoder.input.gl.render.filters.BaseFilterRender;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module view {
				export class GlInterface extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtplibrary.view.GlInterface>;
					/**
					 * Constructs a new instance of the com.pedro.rtplibrary.view.GlInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						init(): void;
						setEncoderSize(int0: number, int1: number): void;
						getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
						getSurface(): globalAndroid.view.Surface;
						addMediaCodecSurface(surface0: globalAndroid.view.Surface): void;
						removeMediaCodecSurface(): void;
						takePhoto(takePhotoCallback0: com.pedro.rtplibrary.view.TakePhotoCallback): void;
						setFilter(int0: number, baseFilterRender1: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
						setFilter(baseFilterRender0: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
						enableAA(boolean0: boolean): void;
						setRotation(int0: number): void;
						setStreamRotation(int0: number): void;
						setIsStreamHorizontalFlip(boolean0: boolean): void;
						setIsStreamVerticalFlip(boolean0: boolean): void;
						isAAEnabled(): boolean;
						start(): void;
						stop(): void;
						setFps(int0: number): void;
						muteVideo(): void;
						unMuteVideo(): void;
						isVideoMuted(): boolean;
						setForceRender(boolean0: boolean): void;
					});
					public constructor();
					public setIsStreamVerticalFlip(boolean0: boolean): void;
					public isVideoMuted(): boolean;
					public removeMediaCodecSurface(): void;
					public muteVideo(): void;
					public addMediaCodecSurface(surface0: globalAndroid.view.Surface): void;
					public setIsStreamHorizontalFlip(boolean0: boolean): void;
					public unMuteVideo(): void;
					public setForceRender(boolean0: boolean): void;
					public setStreamRotation(int0: number): void;
					public isAAEnabled(): boolean;
					public init(): void;
					public start(): void;
					public getSurface(): globalAndroid.view.Surface;
					public setFilter(baseFilterRender0: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public setFps(int0: number): void;
					public enableAA(boolean0: boolean): void;
					public setRotation(int0: number): void;
					public setFilter(int0: number, baseFilterRender1: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public stop(): void;
					public setEncoderSize(int0: number, int1: number): void;
					public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
					public takePhoto(takePhotoCallback0: com.pedro.rtplibrary.view.TakePhotoCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module view {
				export class LightOpenGlView extends com.pedro.rtplibrary.view.OpenGlViewBase {
					public static class: java.lang.Class<com.pedro.rtplibrary.view.LightOpenGlView>;
					public isVideoMuted(): boolean;
					public muteVideo(): void;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public run(): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public addMediaCodecSurface(surface: globalAndroid.view.Surface): void;
					public start(): void;
					public surfaceChanged(holder: globalAndroid.view.SurfaceHolder, format: number, width: number, height: number): void;
					public getSurface(): globalAndroid.view.Surface;
					public setFps(fps: number): void;
					public setIsStreamVerticalFlip(flip: boolean): void;
					public setForceRender(forceRender: boolean): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public setIsStreamHorizontalFlip(flip: boolean): void;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public enableAA(AAEnabled: boolean): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public setFilter(filterPosition: number, baseFilterRender: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public takePhoto(takePhotoCallback: com.pedro.rtplibrary.view.TakePhotoCallback): void;
					public setCameraFlip(isFlipHorizontal: boolean, isFlipVertical: boolean): void;
					public setStreamRotation(streamRotation: number): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public removeMediaCodecSurface(): void;
					public surfaceCreated(holder: globalAndroid.view.SurfaceHolder): void;
					public unMuteVideo(): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public isAAEnabled(): boolean;
					public setEncoderSize(width: number, height: number): void;
					public onFrameAvailable(surfaceTexture: globalAndroid.graphics.SurfaceTexture): void;
					public init(): void;
					public setKeepAspectRatio(keepAspectRatio: boolean): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public surfaceDestroyed(holder: globalAndroid.view.SurfaceHolder): void;
					public stop(): void;
					public constructor(context: globalAndroid.content.Context);
					public isKeepAspectRatio(): boolean;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public setFilter(baseFilterRender: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
					public setRotation(rotation: number): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module view {
				export class OffScreenGlThread extends java.lang.Object implements com.pedro.rtplibrary.view.GlInterface, java.lang.Runnable, globalAndroid.graphics.SurfaceTexture.OnFrameAvailableListener {
					public static class: java.lang.Class<com.pedro.rtplibrary.view.OffScreenGlThread>;
					public isVideoMuted(): boolean;
					public muteVideo(): void;
					public run(): void;
					public setStreamRotation(rotation: number): void;
					public addMediaCodecSurface(surface: globalAndroid.view.Surface): void;
					public start(): void;
					public getSurface(): globalAndroid.view.Surface;
					public setFps(fps: number): void;
					public setIsStreamVerticalFlip(flip: boolean): void;
					public setForceRender(forceRender: boolean): void;
					public setIsStreamHorizontalFlip(flip: boolean): void;
					public enableAA(AAEnabled: boolean): void;
					public takePhoto(takePhotoCallback: com.pedro.rtplibrary.view.TakePhotoCallback): void;
					public setFilter(filterPosition: number, baseFilterRender: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public removeMediaCodecSurface(): void;
					public unMuteVideo(): void;
					public isAAEnabled(): boolean;
					public setEncoderSize(width: number, height: number): void;
					public onFrameAvailable(surfaceTexture: globalAndroid.graphics.SurfaceTexture): void;
					public init(): void;
					public stop(): void;
					public constructor(context: globalAndroid.content.Context);
					public setFilter(baseFilterRender: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
					public setRotation(rotation: number): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module view {
				export class OpenGlView extends com.pedro.rtplibrary.view.OpenGlViewBase {
					public static class: java.lang.Class<com.pedro.rtplibrary.view.OpenGlView>;
					public isVideoMuted(): boolean;
					public muteVideo(): void;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public run(): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public addMediaCodecSurface(surface: globalAndroid.view.Surface): void;
					public start(): void;
					public getSurface(): globalAndroid.view.Surface;
					public surfaceChanged(holder: globalAndroid.view.SurfaceHolder, format: number, width: number, height: number): void;
					public setFps(fps: number): void;
					public setIsStreamVerticalFlip(flip: boolean): void;
					public setForceRender(forceRender: boolean): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public setIsStreamHorizontalFlip(flip: boolean): void;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public enableAA(AAEnabled: boolean): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public setFilter(filterPosition: number, baseFilterRender: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public takePhoto(takePhotoCallback: com.pedro.rtplibrary.view.TakePhotoCallback): void;
					public setCameraFlip(isFlipHorizontal: boolean, isFlipVertical: boolean): void;
					public setStreamRotation(streamRotation: number): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public removeMediaCodecSurface(): void;
					public surfaceCreated(holder: globalAndroid.view.SurfaceHolder): void;
					public unMuteVideo(): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public isAAEnabled(): boolean;
					public setEncoderSize(width: number, height: number): void;
					public onFrameAvailable(surfaceTexture: globalAndroid.graphics.SurfaceTexture): void;
					public init(): void;
					public setKeepAspectRatio(keepAspectRatio: boolean): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public surfaceDestroyed(holder: globalAndroid.view.SurfaceHolder): void;
					public stop(): void;
					public constructor(context: globalAndroid.content.Context);
					public isKeepAspectRatio(): boolean;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public setFilter(baseFilterRender: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
					public setRotation(rotation: number): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module view {
				export abstract class OpenGlViewBase extends globalAndroid.view.SurfaceView implements com.pedro.rtplibrary.view.GlInterface, java.lang.Runnable, globalAndroid.graphics.SurfaceTexture.OnFrameAvailableListener, globalAndroid.view.SurfaceHolder.Callback {
					public static class: java.lang.Class<com.pedro.rtplibrary.view.OpenGlViewBase>;
					public static TAG: string;
					public thread: java.lang.Thread;
					public frameAvailable: boolean;
					public running: boolean;
					public initialized: boolean;
					public surfaceManagerPhoto: com.pedro.encoder.input.gl.SurfaceManager;
					public surfaceManager: com.pedro.encoder.input.gl.SurfaceManager;
					public surfaceManagerEncoder: com.pedro.encoder.input.gl.SurfaceManager;
					public fpsLimiter: com.pedro.encoder.input.video.FpsLimiter;
					public semaphore: java.util.concurrent.Semaphore;
					public filterQueue: java.util.concurrent.BlockingQueue<com.pedro.rtplibrary.view.Filter>;
					public sync: any;
					public previewWidth: number;
					public previewHeight: number;
					public encoderWidth: number;
					public encoderHeight: number;
					public takePhotoCallback: com.pedro.rtplibrary.view.TakePhotoCallback;
					public streamRotation: number;
					public isStreamHorizontalFlip: boolean;
					public isStreamVerticalFlip: boolean;
					public forceRender: boolean;
					public isVideoMuted(): boolean;
					public muteVideo(): void;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public run(): void;
					public surfaceChanged(surfaceHolder0: globalAndroid.view.SurfaceHolder, int1: number, int2: number, int3: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public addMediaCodecSurface(surface: globalAndroid.view.Surface): void;
					public start(): void;
					public getSurface(): globalAndroid.view.Surface;
					public setFps(fps: number): void;
					public setIsStreamVerticalFlip(flip: boolean): void;
					public setForceRender(forceRender: boolean): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public setIsStreamHorizontalFlip(flip: boolean): void;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public setFilter(int0: number, baseFilterRender1: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public takePhoto(takePhotoCallback: com.pedro.rtplibrary.view.TakePhotoCallback): void;
					public setStreamRotation(streamRotation: number): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public removeMediaCodecSurface(): void;
					public surfaceCreated(holder: globalAndroid.view.SurfaceHolder): void;
					public unMuteVideo(): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public isAAEnabled(): boolean;
					public setEncoderSize(width: number, height: number): void;
					public onFrameAvailable(surfaceTexture: globalAndroid.graphics.SurfaceTexture): void;
					public init(): void;
					public setFilter(baseFilterRender0: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public surfaceDestroyed(holder: globalAndroid.view.SurfaceHolder): void;
					public enableAA(boolean0: boolean): void;
					public setRotation(int0: number): void;
					public stop(): void;
					public constructor(context: globalAndroid.content.Context);
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
					public releaseSurfaceManager(): void;
					public setRotation(rotation: number): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtplibrary {
			export module view {
				export class TakePhotoCallback extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtplibrary.view.TakePhotoCallback>;
					/**
					 * Constructs a new instance of the com.pedro.rtplibrary.view.TakePhotoCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onTakePhoto(bitmap0: globalAndroid.graphics.Bitmap): void;
					});
					public constructor();
					public onTakePhoto(bitmap0: globalAndroid.graphics.Bitmap): void;
				}
			}
		}
	}
}

//Generics information:

