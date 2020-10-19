declare module com {
	export module pedro {
		export module encoder {
			export abstract class BaseEncoder extends java.lang.Object implements com.pedro.encoder.EncoderCallback {
				public static class: java.lang.Class<com.pedro.encoder.BaseEncoder>;
				public queue: java.util.concurrent.BlockingQueue<com.pedro.encoder.Frame>;
				public codec: globalAndroid.media.MediaCodec;
				public presentTimeUs: number;
				public running: boolean;
				public isBufferMode: boolean;
				public force: com.pedro.encoder.utils.CodecUtil.Force;
				public sendBuffer(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
				public checkBuffer(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
				public setForce(force: com.pedro.encoder.utils.CodecUtil.Force): void;
				public formatChanged(mediaCodec0: globalAndroid.media.MediaCodec, mediaFormat1: globalAndroid.media.MediaFormat): void;
				public getDataFromEncoder(): void;
				public constructor();
				public chooseEncoder(string0: string): globalAndroid.media.MediaCodecInfo;
				public inputAvailable(mediaCodec: globalAndroid.media.MediaCodec, inBufferIndex: number): void;
				public restart(): void;
				public stopImp(): void;
				public stop(): void;
				public getInputFrame(): com.pedro.encoder.Frame;
				public start(): void;
				public start(boolean0: boolean): void;
				public isRunning(): boolean;
				public fixTimeStamp(info: globalAndroid.media.MediaCodec.BufferInfo): void;
				public outputAvailable(mediaCodec: globalAndroid.media.MediaCodec, outBufferIndex: number, bufferInfo: globalAndroid.media.MediaCodec.BufferInfo): void;
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.pedro.encoder.BuildConfig>;
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
		export module encoder {
			export class EncoderCallback extends java.lang.Object {
				public static class: java.lang.Class<com.pedro.encoder.EncoderCallback>;
				/**
				 * Constructs a new instance of the com.pedro.encoder.EncoderCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					inputAvailable(mediaCodec0: globalAndroid.media.MediaCodec, int1: number): void;
					outputAvailable(mediaCodec0: globalAndroid.media.MediaCodec, int1: number, bufferInfo2: globalAndroid.media.MediaCodec.BufferInfo): void;
					formatChanged(mediaCodec0: globalAndroid.media.MediaCodec, mediaFormat1: globalAndroid.media.MediaFormat): void;
				});
				public constructor();
				public inputAvailable(mediaCodec0: globalAndroid.media.MediaCodec, int1: number): void;
				public outputAvailable(mediaCodec0: globalAndroid.media.MediaCodec, int1: number, bufferInfo2: globalAndroid.media.MediaCodec.BufferInfo): void;
				public formatChanged(mediaCodec0: globalAndroid.media.MediaCodec, mediaFormat1: globalAndroid.media.MediaFormat): void;
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export class Frame extends java.lang.Object {
				public static class: java.lang.Class<com.pedro.encoder.Frame>;
				public isFlip(): boolean;
				public setBuffer(buffer: native.Array<number>): void;
				public setFlip(flip: boolean): void;
				public constructor(buffer: native.Array<number>, orientation: number, flip: boolean, format: number);
				public getOrientation(): number;
				public getBuffer(): native.Array<number>;
				public getFormat(): number;
				public getOffset(): number;
				public setOrientation(orientation: number): void;
				public getSize(): number;
				public setFormat(format: number): void;
				public setSize(size: number): void;
				public setOffset(offset: number): void;
				public constructor(buffer: native.Array<number>, offset: number, size: number);
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export class GetFrame extends java.lang.Object {
				public static class: java.lang.Class<com.pedro.encoder.GetFrame>;
				/**
				 * Constructs a new instance of the com.pedro.encoder.GetFrame interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getInputFrame(): com.pedro.encoder.Frame;
				});
				public constructor();
				public getInputFrame(): com.pedro.encoder.Frame;
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module audio {
				export class AudioEncoder extends com.pedro.encoder.BaseEncoder implements com.pedro.encoder.input.audio.GetMicrophoneData {
					public static class: java.lang.Class<com.pedro.encoder.audio.AudioEncoder>;
					public outputAvailable(mediaCodec: globalAndroid.media.MediaCodec, outBufferIndex: number, bufferInfo: globalAndroid.media.MediaCodec.BufferInfo): void;
					public reset(): void;
					public start(boolean0: boolean): void;
					public setSampleRate(sampleRate: number): void;
					public checkBuffer(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public inputAvailable(mediaCodec: globalAndroid.media.MediaCodec, inBufferIndex: number): void;
					public chooseEncoder(string0: string): globalAndroid.media.MediaCodecInfo;
					public start(resetTs: boolean): void;
					public start(): void;
					public setGetFrame(getFrame: com.pedro.encoder.GetFrame): void;
					public constructor(getAacData: com.pedro.encoder.audio.GetAacData);
					public chooseEncoder(mime: string): globalAndroid.media.MediaCodecInfo;
					public prepareAudioEncoder(bitRate: number, sampleRate: number, isStereo: boolean, maxInputSize: number): boolean;
					public sendBuffer(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public constructor();
					public inputPCMData(frame: com.pedro.encoder.Frame): void;
					public getInputFrame(): com.pedro.encoder.Frame;
					public formatChanged(mediaCodec: globalAndroid.media.MediaCodec, mediaFormat: globalAndroid.media.MediaFormat): void;
					public stopImp(): void;
					public prepareAudioEncoder(): boolean;
					public checkBuffer(byteBuffer: java.nio.ByteBuffer, bufferInfo: globalAndroid.media.MediaCodec.BufferInfo): void;
					public sendBuffer(byteBuffer: java.nio.ByteBuffer, bufferInfo: globalAndroid.media.MediaCodec.BufferInfo): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module audio {
				export class GetAacData extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.encoder.audio.GetAacData>;
					/**
					 * Constructs a new instance of the com.pedro.encoder.audio.GetAacData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAacData(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
						onAudioFormat(mediaFormat0: globalAndroid.media.MediaFormat): void;
					});
					public constructor();
					public getAacData(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public onAudioFormat(mediaFormat0: globalAndroid.media.MediaFormat): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module audio {
					export class AudioPostProcessEffect extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.audio.AudioPostProcessEffect>;
						public releaseNoiseSuppressor(): void;
						public enableAutoGainControl(): void;
						public enableNoiseSuppressor(): void;
						public enableEchoCanceler(): void;
						public releaseEchoCanceler(): void;
						public releaseAutoGainControl(): void;
						public constructor(microphoneId: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module audio {
					export abstract class CustomAudioEffect extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.audio.CustomAudioEffect>;
						public constructor();
						public process(bytes0: native.Array<number>): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module audio {
					export class GetMicrophoneData extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.audio.GetMicrophoneData>;
						/**
						 * Constructs a new instance of the com.pedro.encoder.input.audio.GetMicrophoneData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							inputPCMData(frame0: com.pedro.encoder.Frame): void;
						});
						public constructor();
						public inputPCMData(frame0: com.pedro.encoder.Frame): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module audio {
					export class MicrophoneManager extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.audio.MicrophoneManager>;
						public audioRecord: globalAndroid.media.AudioRecord;
						public pcmBuffer: java.nio.ByteBuffer;
						public pcmBufferMuted: native.Array<number>;
						public running: boolean;
						public muted: boolean;
						public customAudioEffect: com.pedro.encoder.input.audio.CustomAudioEffect;
						public createInternalMicrophone(config: globalAndroid.media.AudioPlaybackCaptureConfiguration, sampleRate: number, isStereo: boolean, echoCanceler: boolean, noiseSuppressor: boolean): void;
						public createMicrophone(): void;
						public constructor(getMicrophoneData: com.pedro.encoder.input.audio.GetMicrophoneData);
						public mute(): void;
						public setSampleRate(sampleRate: number): void;
						public createMicrophone(sampleRate: number, isStereo: boolean, echoCanceler: boolean, noiseSuppressor: boolean): void;
						public stop(): void;
						public isRunning(): boolean;
						public unMute(): void;
						public isMuted(): boolean;
						public start(): void;
						public getSampleRate(): number;
						public setCustomAudioEffect(customAudioEffect: com.pedro.encoder.input.audio.CustomAudioEffect): void;
						public createMicrophone(audioSource: number, sampleRate: number, isStereo: boolean, echoCanceler: boolean, noiseSuppressor: boolean): void;
						public getChannel(): number;
						public getMaxInputSize(): number;
						public getAudioFormat(): number;
						public isCreated(): boolean;
						public createInternalMicrophone(config: globalAndroid.media.AudioPlaybackCaptureConfiguration, sampleRate: number, isStereo: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module audio {
					export class MicrophoneManagerManual extends com.pedro.encoder.input.audio.MicrophoneManager implements com.pedro.encoder.GetFrame {
						public static class: java.lang.Class<com.pedro.encoder.input.audio.MicrophoneManagerManual>;
						public constructor();
						public start(): void;
						public read(directBuffer: java.nio.ByteBuffer, numBytes: number): number;
						public getGetFrame(): com.pedro.encoder.GetFrame;
						public getInputFrame(): com.pedro.encoder.Frame;
						public constructor(getMicrophoneData: com.pedro.encoder.input.audio.GetMicrophoneData);
						public stop(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module audio {
					export class NoAudioEffect extends com.pedro.encoder.input.audio.CustomAudioEffect {
						public static class: java.lang.Class<com.pedro.encoder.input.audio.NoAudioEffect>;
						public constructor();
						public process(bytes0: native.Array<number>): native.Array<number>;
						public process(pcmBuffer: native.Array<number>): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module decoder {
					export class AudioDecoder extends com.pedro.encoder.input.decoder.BaseDecoder {
						public static class: java.lang.Class<com.pedro.encoder.input.decoder.AudioDecoder>;
						public prepareAudio(): boolean;
						public constructor(loopFileInterface: com.pedro.encoder.input.decoder.LoopFileInterface);
						public isStereo(): boolean;
						public extract(mediaExtractor0: globalAndroid.media.MediaExtractor): boolean;
						public mute(): void;
						public extract(audioExtractor: globalAndroid.media.MediaExtractor): boolean;
						public unMute(): void;
						public isMuted(): boolean;
						public constructor(getMicrophoneData: com.pedro.encoder.input.audio.GetMicrophoneData, audioDecoderInterface: com.pedro.encoder.input.decoder.AudioDecoderInterface, loopFileInterface: com.pedro.encoder.input.decoder.LoopFileInterface);
						public decode(): void;
						public getSampleRate(): number;
						public getOutsize(): number;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module decoder {
					export class AudioDecoderInterface extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.decoder.AudioDecoderInterface>;
						/**
						 * Constructs a new instance of the com.pedro.encoder.input.decoder.AudioDecoderInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAudioDecoderFinished(): void;
						});
						public constructor();
						public onAudioDecoderFinished(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module decoder {
					export abstract class BaseDecoder extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.decoder.BaseDecoder>;
						public static TAG: string;
						public loopFileInterface: com.pedro.encoder.input.decoder.LoopFileInterface;
						public bufferInfo: globalAndroid.media.MediaCodec.BufferInfo;
						public lock: any;
						public extractor: globalAndroid.media.MediaExtractor;
						public codec: globalAndroid.media.MediaCodec;
						public running: boolean;
						public mediaFormat: globalAndroid.media.MediaFormat;
						public mime: string;
						public loopMode: boolean;
						public seekTime: number;
						public startMs: number;
						public duration: number;
						public constructor(loopFileInterface: com.pedro.encoder.input.decoder.LoopFileInterface);
						public getDuration(): number;
						public initExtractor(fileDescriptor: java.io.FileDescriptor, offset: number, length: number): boolean;
						public extract(mediaExtractor0: globalAndroid.media.MediaExtractor): boolean;
						public prepare(surface: globalAndroid.view.Surface): boolean;
						public initExtractor(assetFileDescriptor: globalAndroid.content.res.AssetFileDescriptor): boolean;
						public stop(): void;
						public stopDecoder(): void;
						public getTime(): number;
						public moveTo(time: number): void;
						public resetCodec(surface: globalAndroid.view.Surface): void;
						public decode(): void;
						public start(): void;
						public initExtractor(filePath: string): boolean;
						public initExtractor(fileDescriptor: java.io.FileDescriptor): boolean;
						public initExtractor(mediaDataSource: globalAndroid.media.MediaDataSource): boolean;
						public initExtractor(filePath: string, headers: java.util.Map<string,string>): boolean;
						public initExtractor(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri, headers: java.util.Map<string,string>): boolean;
						public setLoopMode(loopMode: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module decoder {
					export class LoopFileInterface extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.decoder.LoopFileInterface>;
						/**
						 * Constructs a new instance of the com.pedro.encoder.input.decoder.LoopFileInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onReset(boolean0: boolean): void;
						});
						public constructor();
						public onReset(boolean0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module decoder {
					export class VideoDecoder extends com.pedro.encoder.input.decoder.BaseDecoder {
						public static class: java.lang.Class<com.pedro.encoder.input.decoder.VideoDecoder>;
						public changeOutputSurface(surface: globalAndroid.view.Surface): void;
						public constructor(loopFileInterface: com.pedro.encoder.input.decoder.LoopFileInterface);
						public prepareVideo(surface: globalAndroid.view.Surface): boolean;
						public decode(): void;
						public getWidth(): number;
						public extract(videoExtractor: globalAndroid.media.MediaExtractor): boolean;
						public reset(surface: globalAndroid.view.Surface): void;
						public extract(mediaExtractor0: globalAndroid.media.MediaExtractor): boolean;
						public getHeight(): number;
						public constructor(videoDecoderInterface: com.pedro.encoder.input.decoder.VideoDecoderInterface, loopFileInterface: com.pedro.encoder.input.decoder.LoopFileInterface);
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module decoder {
					export class VideoDecoderInterface extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.decoder.VideoDecoderInterface>;
						/**
						 * Constructs a new instance of the com.pedro.encoder.input.decoder.VideoDecoderInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onVideoDecoderFinished(): void;
						});
						public constructor();
						public onVideoDecoderFinished(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export class Sprite extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.gl.Sprite>;
						public constructor();
						public getTransformedVertices(): native.Array<number>;
						public getScale(): globalAndroid.graphics.PointF;
						public translate(deltaX: number, deltaY: number): void;
						public translate(translation: com.pedro.encoder.utils.gl.TranslateTo): void;
						public getTranslation(): globalAndroid.graphics.PointF;
						public scale(deltaX: number, deltaY: number): void;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export class SpriteGestureController extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.gl.SpriteGestureController>;
						public constructor();
						public setBaseObjectFilterRender(baseObjectFilterRender: com.pedro.encoder.input.gl.render.filters.object.BaseObjectFilterRender): void;
						public stopListener(): void;
						public setPreventMoveOutside(preventMoveOutside: boolean): void;
						public constructor(sprite: com.pedro.encoder.input.gl.render.filters.AndroidViewFilterRender);
						public moveSprite(view: globalAndroid.view.View, motionEvent: globalAndroid.view.MotionEvent): void;
						public constructor(sprite: com.pedro.encoder.input.gl.render.filters.object.BaseObjectFilterRender);
						public setBaseObjectFilterRender(androidViewFilterRender: com.pedro.encoder.input.gl.render.filters.AndroidViewFilterRender): void;
						public getFilterRender(): com.pedro.encoder.input.gl.render.filters.BaseFilterRender;
						public spriteTouched(view: globalAndroid.view.View, motionEvent: globalAndroid.view.MotionEvent): boolean;
						public scaleSprite(motionEvent: globalAndroid.view.MotionEvent): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export class SurfaceManager extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.gl.SurfaceManager>;
						public constructor();
						public getEglDisplay(): globalAndroid.opengl.EGLDisplay;
						public constructor(surface: globalAndroid.view.Surface, manager: com.pedro.encoder.input.gl.SurfaceManager);
						public constructor(surface: globalAndroid.view.Surface);
						public getEglSurface(): globalAndroid.opengl.EGLSurface;
						public setPresentationTime(nsecs: number): void;
						public release(): void;
						public makeCurrent(): void;
						public constructor(width: number, height: number, manager: com.pedro.encoder.input.gl.SurfaceManager);
						public swapBuffer(): void;
						public getEglContext(): globalAndroid.opengl.EGLContext;
						public constructor(surface: globalAndroid.view.Surface, eglContext: globalAndroid.opengl.EGLContext);
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export class TextureLoader extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.gl.TextureLoader>;
						public constructor();
						public load(bitmaps: native.Array<globalAndroid.graphics.Bitmap>): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export abstract class BaseRenderOffScreen extends java.lang.Object {
							public static class: java.lang.Class<com.pedro.encoder.input.gl.render.BaseRenderOffScreen>;
							public squareVertex: java.nio.FloatBuffer;
							public static FLOAT_SIZE_BYTES: number;
							public static SQUARE_VERTEX_DATA_STRIDE_BYTES: number;
							public static SQUARE_VERTEX_DATA_POS_OFFSET: number;
							public static SQUARE_VERTEX_DATA_UV_OFFSET: number;
							public MVPMatrix: native.Array<number>;
							public STMatrix: native.Array<number>;
							public renderHandler: com.pedro.encoder.input.gl.render.RenderHandler;
							public width: number;
							public height: number;
							public constructor();
							public initFBO(width: number, height: number): void;
							public getTexId(): number;
							public release(): void;
							public draw(): void;
							public initFBO(width: number, height: number, fboId: native.Array<number>, rboId: native.Array<number>, texId: native.Array<number>): void;
							public initGl(int0: number, int1: number, context2: globalAndroid.content.Context, int3: number, int4: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export class CameraRender extends com.pedro.encoder.input.gl.render.BaseRenderOffScreen {
							public static class: java.lang.Class<com.pedro.encoder.input.gl.render.CameraRender>;
							public constructor();
							public setFlip(isFlipHorizontal: boolean, isFlipVertical: boolean): void;
							public initGl(width: number, height: number, context: globalAndroid.content.Context, previewWidth: number, previewHeight: number): void;
							public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
							public setRotation(rotation: number): void;
							public release(): void;
							public getSurface(): globalAndroid.view.Surface;
							public draw(): void;
							public updateTexImage(): void;
							public initGl(int0: number, int1: number, context2: globalAndroid.content.Context, int3: number, int4: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export class ManagerRender extends java.lang.Object {
							public static class: java.lang.Class<com.pedro.encoder.input.gl.render.ManagerRender>;
							public static numFilters: number;
							public constructor();
							public drawScreen(width: number, height: number, keepAspectRatio: boolean, mode: number, rotation: number, isPreview: boolean, flipStreamVertical: boolean, flipStreamHorizontal: boolean): void;
							public isAAEnabled(): boolean;
							public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
							public release(): void;
							public drawOffScreen(): void;
							public enableAA(AAEnabled: boolean): void;
							public setCameraRotation(rotation: number): void;
							public setCameraFlip(isFlipHorizontal: boolean, isFlipVertical: boolean): void;
							public setFilter(position: number, baseFilterRender: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
							public getSurface(): globalAndroid.view.Surface;
							public updateFrame(): void;
							public setPreviewSize(previewWidth: number, previewHeight: number): void;
							public initGl(context: globalAndroid.content.Context, encoderWidth: number, encoderHeight: number, previewWidth: number, previewHeight: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export class RenderHandler extends java.lang.Object {
							public static class: java.lang.Class<com.pedro.encoder.input.gl.render.RenderHandler>;
							public constructor();
							public getRboId(): native.Array<number>;
							public setRboId(rboId: native.Array<number>): void;
							public getTexId(): native.Array<number>;
							public setTexId(texId: native.Array<number>): void;
							public setFboId(fboId: native.Array<number>): void;
							public getFboId(): native.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export class ScreenRender extends java.lang.Object {
							public static class: java.lang.Class<com.pedro.encoder.input.gl.render.ScreenRender>;
							public constructor();
							public setTexId(texId: number): void;
							public isAAEnabled(): boolean;
							public draw(width: number, height: number, keepAspectRatio: boolean, mode: number, rotation: number, isPreview: boolean, flipStreamVertical: boolean, flipStreamHorizontal: boolean): void;
							public release(): void;
							public initGl(context: globalAndroid.content.Context): void;
							public setAAEnabled(AAEnabled: boolean): void;
							public setStreamSize(streamWidth: number, streamHeight: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export class SimpleCameraRender extends java.lang.Object {
							public static class: java.lang.Class<com.pedro.encoder.input.gl.render.SimpleCameraRender>;
							public static TAG: string;
							public constructor();
							public setFlip(isFlipHorizontal: boolean, isFlipVertical: boolean): void;
							public initGl(context: globalAndroid.content.Context, streamWidth: number, streamHeight: number): void;
							public drawFrame(width: number, height: number, keepAspectRatio: boolean, mode: number, rotation: number, isPreview: boolean, flipStreamVertical: boolean, flipStreamHorizontal: boolean): void;
							public getTextureId(): number;
							public setRotation(rotation: number): void;
							public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
							public getSurface(): globalAndroid.view.Surface;
							public release(): void;
							public updateFrame(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class AnalogTVFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.AnalogTVFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class AndroidViewFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.AndroidViewFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public getView(): globalAndroid.view.View;
								public getPosition(): globalAndroid.graphics.PointF;
								public release(): void;
								public setPosition(positionTo: com.pedro.encoder.utils.gl.TranslateTo): void;
								public setRotation(rotation: number): void;
								public setPosition(x: number, y: number): void;
								public setScale(scaleX: number, scaleY: number): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public setView(view: globalAndroid.view.View): void;
								public getScale(): globalAndroid.graphics.PointF;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export abstract class BaseFilterRender extends com.pedro.encoder.input.gl.render.BaseRenderOffScreen {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.BaseFilterRender>;
								public previousTexId: number;
								public initGl(width: number, height: number, context: globalAndroid.content.Context, previewWidth: number, previewHeight: number): void;
								public getPreviewHeight(): number;
								public drawFilter(): void;
								public setPreviewSize(previewWidth: number, previewHeight: number): void;
								public constructor();
								public draw(): void;
								public getHeight(): number;
								public getWidth(): number;
								public getPreviousTexId(): number;
								public initFBOLink(): void;
								public getRenderHandler(): com.pedro.encoder.input.gl.render.RenderHandler;
								public getPreviewWidth(): number;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public setPreviousTexId(texId: number): void;
								public getTexId(): number;
								public setRenderHandler(renderHandler: com.pedro.encoder.input.gl.render.RenderHandler): void;
								public initGl(int0: number, int1: number, context2: globalAndroid.content.Context, int3: number, int4: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class BasicDeformationFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.BasicDeformationFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class BeautyFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.BeautyFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class BlackFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.BlackFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class BlurFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.BlurFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public getBlur(): number;
								public setBlur(blur: number): void;
								public getRadius(): number;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
								public setRadius(radius: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class BrightnessFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.BrightnessFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public getBrightness(): number;
								public setBrightness(brightness: number): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class CartoonFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.CartoonFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public setCartoon(cartoon: number): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public getCartoon(): number;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class CircleFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.CircleFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public setCenter(x: number, y: number): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
								public setRadius(radius: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class ColorFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.ColorFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public getRed(): number;
								public setRGBColor(rgbHexColor: string): void;
								public setRGBColor(r: number, g: number, b: number): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public getGreen(): number;
								public constructor();
								public setColor(resources: globalAndroid.content.res.Resources, colorResource: number): void;
								public release(): void;
								public getBlue(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class ContrastFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.ContrastFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public getContrast(): number;
								public constructor();
								public setContrast(contrast: number): void;
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class DuotoneFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.DuotoneFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public getRed(): number;
								public setColor(colorResource: number, colorResource2: number): void;
								public getRed2(): number;
								public drawFilter(): void;
								public getBlue2(): number;
								public constructor();
								public release(): void;
								public getBlue(): number;
								public setRGBColor(r: number, g: number, b: number, r2: number, g2: number, b2: number): void;
								public setRGBColor(rgbHexColor: string, rgbHexColor2: string): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public setColor(resources: globalAndroid.content.res.Resources, colorResource: number, colorResource2: number): void;
								public getGreen(): number;
								public getGreen2(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class EarlyBirdFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.EarlyBirdFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class EdgeDetectionFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.EdgeDetectionFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class ExposureFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.ExposureFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public getExposure(): number;
								public setExposure(exposure: number): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class FireFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.FireFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class GammaFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.GammaFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public setGamma(gamma: number): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
								public getGamma(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class GlitchFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.GlitchFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class GreyScaleFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.GreyScaleFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class HalftoneLinesFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.HalftoneLinesFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public setRows(rows: number): void;
								public constructor();
								public release(): void;
								public getSampleDist(): native.Array<number>;
								public setMode(mode: number): void;
								public setRotation(rotation: number): void;
								public setSampleDist(sampleDist: native.Array<number>): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public getRotation(): number;
								public getAntialias(): number;
								public setAntialias(antialias: number): void;
								public getMode(): number;
								public getRows(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class Image70sFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.Image70sFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class LamoishFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.LamoishFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class MoneyFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.MoneyFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class NegativeFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.NegativeFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class NoFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.NoFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class PixelatedFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.PixelatedFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public setPixelated(pixelated: number): void;
								public getPixelated(): number;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class PolygonizationFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.PolygonizationFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class RGBSaturationFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.RGBSaturationFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public getR(): number;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public setRGBSaturation(r: number, g: number, b: number): void;
								public constructor();
								public release(): void;
								public getB(): number;
								public getG(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class RainbowFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.RainbowFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class RippleFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.RippleFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class RotationFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.RotationFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public setRotation(rotation: number): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public getRotation(): number;
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class SaturationFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.SaturationFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public getSaturation(): number;
								public setSaturation(saturation: number): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class SepiaFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.SepiaFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class SharpnessFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.SharpnessFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public getSharpness(): number;
								public constructor();
								public setSharpness(sharpness: number): void;
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class SnowFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.SnowFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class SwirlFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.SwirlFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public getCenter(): native.Array<number>;
								public getRadius(): number;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public setCenterX(centerX: number, centerY: number): void;
								public constructor();
								public release(): void;
								public setRadius(radius: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class TemperatureFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.TemperatureFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public setTemperature(temperature: number): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
								public getTemperature(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export class ZebraFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.ZebraFilterRender>;
								public initGlFilter(context: globalAndroid.content.Context): void;
								public setLevels(levels: number): void;
								public initGlFilter(context0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public getLevels(): number;
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export module object {
								export abstract class BaseObjectFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
									public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.object.BaseObjectFilterRender>;
									public uAlphaHandle: number;
									public streamObjectTextureId: native.Array<number>;
									public textureLoader: com.pedro.encoder.input.gl.TextureLoader;
									public streamObject: com.pedro.encoder.utils.gl.StreamObjectBase;
									public alpha: number;
									public shouldLoad: boolean;
									public constructor();
									public initGlFilter(context0: globalAndroid.content.Context): void;
									public drawFilter(): void;
									public setAlpha(alpha: number): void;
									public setPosition(x: number, y: number): void;
									public initGlFilter(context: globalAndroid.content.Context): void;
									public getPosition(): globalAndroid.graphics.PointF;
									public setScale(scaleX: number, scaleY: number): void;
									public release(): void;
									public setDefaultScale(streamWidth: number, streamHeight: number): void;
									public setPosition(positionTo: com.pedro.encoder.utils.gl.TranslateTo): void;
									public getScale(): globalAndroid.graphics.PointF;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export module object {
								export class GifObjectFilterRender extends com.pedro.encoder.input.gl.render.filters.object.BaseObjectFilterRender {
									public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.object.GifObjectFilterRender>;
									public constructor();
									public drawFilter(): void;
									public setGif(inputStream: java.io.InputStream): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export module object {
								export class ImageObjectFilterRender extends com.pedro.encoder.input.gl.render.filters.object.BaseObjectFilterRender {
									public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.object.ImageObjectFilterRender>;
									public constructor();
									public drawFilter(): void;
									public setImage(bitmap: globalAndroid.graphics.Bitmap): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export module object {
								export class SurfaceFilterRender extends com.pedro.encoder.input.gl.render.filters.object.BaseObjectFilterRender {
									public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.object.SurfaceFilterRender>;
									public constructor();
									public setPosition(x: number, y: number): void;
									public getPosition(): globalAndroid.graphics.PointF;
									public setScale(scaleX: number, scaleY: number): void;
									public release(): void;
									public setPosition(positionTo: com.pedro.encoder.utils.gl.TranslateTo): void;
									public getScale(): globalAndroid.graphics.PointF;
									public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
									public drawFilter(): void;
									public setAlpha(alpha: number): void;
									public initGlFilter(context: globalAndroid.content.Context): void;
									public getSurface(): globalAndroid.view.Surface;
									public constructor(surfaceReadyCallback: com.pedro.encoder.input.gl.render.filters.object.SurfaceFilterRender.SurfaceReadyCallback);
								}
								export module SurfaceFilterRender {
									export class SurfaceReadyCallback extends java.lang.Object {
										public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.object.SurfaceFilterRender.SurfaceReadyCallback>;
										/**
										 * Constructs a new instance of the com.pedro.encoder.input.gl.render.filters.object.SurfaceFilterRender$SurfaceReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
										 */
										public constructor(implementation: {
											surfaceReady(surfaceTexture0: globalAndroid.graphics.SurfaceTexture): void;
										});
										public constructor();
										public surfaceReady(surfaceTexture0: globalAndroid.graphics.SurfaceTexture): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module gl {
					export module render {
						export module filters {
							export module object {
								export class TextObjectFilterRender extends com.pedro.encoder.input.gl.render.filters.object.BaseObjectFilterRender {
									public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.object.TextObjectFilterRender>;
									public constructor();
									public drawFilter(): void;
									public setText(text: string, textSize: number, textColor: number, typeface: globalAndroid.graphics.Typeface): void;
									public updateTextSize(textSize: number): void;
									public addText(text: string): void;
									public updateColor(textColor: number): void;
									public updateTypeface(typeface: globalAndroid.graphics.Typeface): void;
									public setText(text: string, textSize: number, textColor: number): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module video {
					export class Camera1ApiManager extends java.lang.Object implements globalAndroid.hardware.Camera.PreviewCallback, globalAndroid.hardware.Camera.FaceDetectionListener {
						public static class: java.lang.Class<com.pedro.encoder.input.video.Camera1ApiManager>;
						public start(width: number, height: number, fps: number): void;
						public enableAutoFocus(): void;
						public enableRecordingHint(): void;
						public isRunning(): boolean;
						public enableFaceDetection(faceDetectorCallback: com.pedro.encoder.input.video.Camera1ApiManager.FaceDetectorCallback): void;
						public constructor(textureView: globalAndroid.view.TextureView, getCameraData: com.pedro.encoder.input.video.GetCameraData);
						public setZoom(event: globalAndroid.view.MotionEvent): void;
						public setCameraCallbacks(cameraCallbacks: com.pedro.encoder.input.video.CameraCallbacks): void;
						public isLanternEnabled(): boolean;
						public disableFaceDetection(): void;
						public disableLantern(): void;
						public getPreviewSizeFront(): java.util.List<globalAndroid.hardware.Camera.Size>;
						public isFrontCamera(): boolean;
						public constructor(surfaceTexture: globalAndroid.graphics.SurfaceTexture, context: globalAndroid.content.Context);
						public switchCamera(): void;
						/** @deprecated */
						public onPreviewFrame(data: native.Array<number>, camera: globalAndroid.hardware.Camera): void;
						public onFaceDetection(faces: native.Array<globalAndroid.hardware.Camera.Face>, camera: globalAndroid.hardware.Camera): void;
						public setRotation(rotation: number): void;
						public getPreviewSizeBack(): java.util.List<globalAndroid.hardware.Camera.Size>;
						public isFaceDetectionEnabled(): boolean;
						public setSurfaceTexture(surfaceTexture: globalAndroid.graphics.SurfaceTexture): void;
						public setPreviewOrientation(orientation: number): void;
						public start(cameraFacing: com.pedro.encoder.input.video.CameraHelper.Facing, width: number, height: number, fps: number): void;
						public disableRecordingHint(): void;
						public getHeight(): number;
						public stop(): void;
						public isAutoFocusEnabled(): boolean;
						public constructor(surfaceView: globalAndroid.view.SurfaceView, getCameraData: com.pedro.encoder.input.video.GetCameraData);
						public getWidth(): number;
						public enableLantern(): void;
						public onPreviewFrame(data: native.Array<number>, camera: globalAndroid.hardware.Camera): void;
						public getCameraPreviewImageFormatSupported(): java.util.List<java.lang.Integer>;
						public disableAutoFocus(): void;
						/** @deprecated */
						public onFaceDetection(faces: native.Array<globalAndroid.hardware.Camera.Face>, camera: globalAndroid.hardware.Camera): void;
					}
					export module Camera1ApiManager {
						export class FaceDetectorCallback extends java.lang.Object {
							public static class: java.lang.Class<com.pedro.encoder.input.video.Camera1ApiManager.FaceDetectorCallback>;
							/**
							 * Constructs a new instance of the com.pedro.encoder.input.video.Camera1ApiManager$FaceDetectorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onGetFaces(faces0: native.Array<globalAndroid.hardware.Camera.Face>): void;
							});
							public constructor();
							public onGetFaces(faces0: native.Array<globalAndroid.hardware.Camera.Face>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module video {
					export class Camera2ApiManager extends globalAndroid.hardware.camera2.CameraDevice.StateCallback {
						public static class: java.lang.Class<com.pedro.encoder.input.video.Camera2ApiManager>;
						public enableAutoFocus(): void;
						public getMaxZoom(): number;
						public prepareCamera(surfaceTexture: globalAndroid.graphics.SurfaceTexture, width: number, height: number): void;
						public isRunning(): boolean;
						public openCameraFacing(selectedCameraFacing: com.pedro.encoder.input.video.CameraHelper.Facing): void;
						public onDisconnected(cameraDevice0: globalAndroid.hardware.camera2.CameraDevice): void;
						public setZoom(event: globalAndroid.view.MotionEvent): void;
						public setCameraCallbacks(cameraCallbacks: com.pedro.encoder.input.video.CameraCallbacks): void;
						public isLanternEnabled(): boolean;
						public disableFaceDetection(): void;
						public onError(cameraDevice0: globalAndroid.hardware.camera2.CameraDevice, int1: number): void;
						public disableLantern(): void;
						public isFrontCamera(): boolean;
						public getCameraResolutions(facing: com.pedro.encoder.input.video.CameraHelper.Facing): native.Array<any>;
						public prepareCamera(surfaceView: globalAndroid.view.SurfaceView, surface: globalAndroid.view.Surface): void;
						public switchCamera(): void;
						public isLanternSupported(): boolean;
						public closeCamera(resetSurface: boolean): void;
						public getLevelSupported(): number;
						public constructor();
						public isFaceDetectionEnabled(): boolean;
						public prepareCamera(surface: globalAndroid.view.Surface): void;
						public openCamera(): void;
						public closeCamera(): void;
						public getCameraCharacteristics(): globalAndroid.hardware.camera2.CameraCharacteristics;
						public onDisconnected(cameraDevice: globalAndroid.hardware.camera2.CameraDevice): void;
						public getZoom(): java.lang.Float;
						public onOpened(cameraDevice: globalAndroid.hardware.camera2.CameraDevice): void;
						public openCameraId(cameraId: java.lang.Integer): void;
						public enableFaceDetection(faceDetectorCallback: com.pedro.encoder.input.video.Camera2ApiManager.FaceDetectorCallback): void;
						public isAutoFocusEnabled(): boolean;
						public setZoom(level: number): void;
						public openCameraFront(): void;
						public enableLantern(): void;
						public prepareCamera(textureView: globalAndroid.view.TextureView, surface: globalAndroid.view.Surface): void;
						public getCameraResolutionsBack(): native.Array<any>;
						public onOpened(cameraDevice0: globalAndroid.hardware.camera2.CameraDevice): void;
						public onError(cameraDevice: globalAndroid.hardware.camera2.CameraDevice, i: number): void;
						public openLastCamera(): void;
						public disableAutoFocus(): void;
						public constructor(context: globalAndroid.content.Context);
						public getCameraResolutionsFront(): native.Array<any>;
						public stopRepeatingEncoder(): void;
						public isPrepared(): boolean;
						public openCameraBack(): void;
					}
					export module Camera2ApiManager {
						export class FaceDetectorCallback extends java.lang.Object {
							public static class: java.lang.Class<com.pedro.encoder.input.video.Camera2ApiManager.FaceDetectorCallback>;
							/**
							 * Constructs a new instance of the com.pedro.encoder.input.video.Camera2ApiManager$FaceDetectorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onGetFaces(faces0: native.Array<globalAndroid.hardware.camera2.params.Face>): void;
							});
							public constructor();
							public onGetFaces(faces0: native.Array<globalAndroid.hardware.camera2.params.Face>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module video {
					export class CameraCallbacks extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.video.CameraCallbacks>;
						/**
						 * Constructs a new instance of the com.pedro.encoder.input.video.CameraCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCameraChanged(boolean0: boolean): void;
							onCameraError(string0: string): void;
						});
						public constructor();
						public onCameraError(string0: string): void;
						public onCameraChanged(boolean0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module video {
					export class CameraHelper extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.video.CameraHelper>;
						public constructor();
						public static getVerticesData(): native.Array<number>;
						public static isPortrait(context: globalAndroid.content.Context): boolean;
						public static getCameraOrientation(context: globalAndroid.content.Context): number;
						public static getFingerSpacing(event: globalAndroid.view.MotionEvent): number;
					}
					export module CameraHelper {
						export class Facing {
							public static class: java.lang.Class<com.pedro.encoder.input.video.CameraHelper.Facing>;
							public static BACK: com.pedro.encoder.input.video.CameraHelper.Facing;
							public static FRONT: com.pedro.encoder.input.video.CameraHelper.Facing;
							public static values(): native.Array<com.pedro.encoder.input.video.CameraHelper.Facing>;
							public static valueOf(name: string): com.pedro.encoder.input.video.CameraHelper.Facing;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module video {
					export class CameraOpenException extends java.lang.RuntimeException {
						public static class: java.lang.Class<com.pedro.encoder.input.video.CameraOpenException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module video {
					export class FaceDetectorUtil extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.video.FaceDetectorUtil>;
						public constructor();
						public camera2Parse(face: globalAndroid.hardware.camera2.params.Face, view: globalAndroid.view.View, scale: globalAndroid.graphics.PointF, rotation: number, isFrontCamera: boolean): com.pedro.encoder.input.video.FaceDetectorUtil.FaceParsed;
						public camera1Parse(face: globalAndroid.hardware.Camera.Face, view: globalAndroid.view.View, scale: globalAndroid.graphics.PointF, rotation: number, isFrontCamera: boolean): com.pedro.encoder.input.video.FaceDetectorUtil.FaceParsed;
					}
					export module FaceDetectorUtil {
						export class FaceParsed extends java.lang.Object {
							public static class: java.lang.Class<com.pedro.encoder.input.video.FaceDetectorUtil.FaceParsed>;
							public constructor(this0: com.pedro.encoder.input.video.FaceDetectorUtil, position: globalAndroid.graphics.PointF, scale: globalAndroid.graphics.PointF);
							public getScale(): globalAndroid.graphics.PointF;
							public getPosition(): globalAndroid.graphics.PointF;
							public setPosition(position: globalAndroid.graphics.PointF): void;
							public setScale(scale: globalAndroid.graphics.PointF): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module video {
					export class FpsLimiter extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.video.FpsLimiter>;
						public constructor();
						public setFPS(fps: number): void;
						public limitFPS(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module input {
				export module video {
					export class GetCameraData extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.video.GetCameraData>;
						/**
						 * Constructs a new instance of the com.pedro.encoder.input.video.GetCameraData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							inputYUVData(frame0: com.pedro.encoder.Frame): void;
						});
						public constructor();
						public inputYUVData(frame0: com.pedro.encoder.Frame): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module utils {
				export class CodecUtil extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.encoder.utils.CodecUtil>;
					public static H264_MIME: string;
					public static H265_MIME: string;
					public static AAC_MIME: string;
					public static VORBIS_MIME: string;
					public static OPUS_MIME: string;
					public static getAllSoftwareDecoders(mime: string): java.util.List<globalAndroid.media.MediaCodecInfo>;
					public static getAllDecoders(mime: string): java.util.List<globalAndroid.media.MediaCodecInfo>;
					public static getAllEncoders(mime: string): java.util.List<globalAndroid.media.MediaCodecInfo>;
					public static getAllSoftwareEncoders(mime: string): java.util.List<globalAndroid.media.MediaCodecInfo>;
					public constructor();
					public static showAllCodecsInfo(): java.util.List<string>;
					public static getAllHardwareDecoders(mime: string): java.util.List<globalAndroid.media.MediaCodecInfo>;
					public static getAllCodecs(filterBroken: boolean): java.util.List<globalAndroid.media.MediaCodecInfo>;
					public static getAllHardwareEncoders(mime: string): java.util.List<globalAndroid.media.MediaCodecInfo>;
				}
				export module CodecUtil {
					export class Force {
						public static class: java.lang.Class<com.pedro.encoder.utils.CodecUtil.Force>;
						public static FIRST_COMPATIBLE_FOUND: com.pedro.encoder.utils.CodecUtil.Force;
						public static SOFTWARE: com.pedro.encoder.utils.CodecUtil.Force;
						public static HARDWARE: com.pedro.encoder.utils.CodecUtil.Force;
						public static values(): native.Array<com.pedro.encoder.utils.CodecUtil.Force>;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): com.pedro.encoder.utils.CodecUtil.Force;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module utils {
				export class PCMUtil extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.encoder.utils.PCMUtil>;
					public constructor();
					public static mixPCM(pcm1: native.Array<number>, pcm2: native.Array<number>): native.Array<number>;
					public static pcmToStereo(pcm: native.Array<number>, channels: number): native.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module utils {
				export module gl {
					export class GifStreamObject extends com.pedro.encoder.utils.gl.StreamObjectBase {
						public static class: java.lang.Class<com.pedro.encoder.utils.gl.GifStreamObject>;
						public updateFrame(): number;
						public constructor();
						public getWidth(): number;
						public getNumFrames(): number;
						public recycle(): void;
						public getBitmaps(): native.Array<globalAndroid.graphics.Bitmap>;
						public getHeight(): number;
						public load(inputStreamGif: java.io.InputStream): void;
						public getGifDelayFrames(): native.Array<number>;
						public updateFrame(size: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module utils {
				export module gl {
					export class GlUtil extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.utils.gl.GlUtil>;
						public static getBitmap(streamWidth: number, streamHeight: number): globalAndroid.graphics.Bitmap;
						public constructor();
						public static loadShader(shaderType: number, source: string): number;
						public static createProgram(vertexSource: string, fragmentSource: string): number;
						public static checkGlError(op: string): void;
						public static createTextures(cantidad: number, texturesId: native.Array<number>, position: number): void;
						public static createExternalTextures(cantidad: number, texturesId: native.Array<number>, position: number): void;
						public static checkEglError(msg: string): void;
						public static getStringFromRaw(context: globalAndroid.content.Context, id: number): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module utils {
				export module gl {
					export class ImageStreamObject extends com.pedro.encoder.utils.gl.StreamObjectBase {
						public static class: java.lang.Class<com.pedro.encoder.utils.gl.ImageStreamObject>;
						public updateFrame(): number;
						public constructor();
						public load(imageBitmap: globalAndroid.graphics.Bitmap): void;
						public getWidth(): number;
						public getNumFrames(): number;
						public recycle(): void;
						public getBitmaps(): native.Array<globalAndroid.graphics.Bitmap>;
						public getHeight(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module utils {
				export module gl {
					export class SizeCalculator extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.utils.gl.SizeCalculator>;
						public static getViewport(keepAspectRatio: boolean, mode: number, previewWidth: number, previewHeight: number, streamWidth: number, streamHeight: number): globalAndroid.util.Pair<globalAndroid.graphics.Point,globalAndroid.graphics.Point>;
						public constructor();
						public static processMatrix(rotation: number, width: number, height: number, isPreview: boolean, isPortrait: boolean, flipStreamHorizontal: boolean, flipStreamVertical: boolean, mode: number, MVPMatrix: native.Array<number>): void;
						public static calculateViewPort(keepAspectRatio: boolean, mode: number, previewWidth: number, previewHeight: number, streamWidth: number, streamHeight: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module utils {
				export module gl {
					export abstract class StreamObjectBase extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.utils.gl.StreamObjectBase>;
						public updateFrame(): number;
						public constructor();
						public getWidth(): number;
						public getNumFrames(): number;
						public recycle(): void;
						public getBitmaps(): native.Array<globalAndroid.graphics.Bitmap>;
						public getHeight(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module utils {
				export module gl {
					export class TextStreamObject extends com.pedro.encoder.utils.gl.StreamObjectBase {
						public static class: java.lang.Class<com.pedro.encoder.utils.gl.TextStreamObject>;
						public updateFrame(): number;
						public constructor();
						public getWidth(): number;
						public getNumFrames(): number;
						public load(text: string, textSize: number, textColor: number, typeface: globalAndroid.graphics.Typeface): void;
						public recycle(): void;
						public getBitmaps(): native.Array<globalAndroid.graphics.Bitmap>;
						public getHeight(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module utils {
				export module gl {
					export class TranslateTo {
						public static class: java.lang.Class<com.pedro.encoder.utils.gl.TranslateTo>;
						public static CENTER: com.pedro.encoder.utils.gl.TranslateTo;
						public static LEFT: com.pedro.encoder.utils.gl.TranslateTo;
						public static RIGHT: com.pedro.encoder.utils.gl.TranslateTo;
						public static TOP: com.pedro.encoder.utils.gl.TranslateTo;
						public static BOTTOM: com.pedro.encoder.utils.gl.TranslateTo;
						public static TOP_LEFT: com.pedro.encoder.utils.gl.TranslateTo;
						public static TOP_RIGHT: com.pedro.encoder.utils.gl.TranslateTo;
						public static BOTTOM_LEFT: com.pedro.encoder.utils.gl.TranslateTo;
						public static BOTTOM_RIGHT: com.pedro.encoder.utils.gl.TranslateTo;
						public static values(): native.Array<com.pedro.encoder.utils.gl.TranslateTo>;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): com.pedro.encoder.utils.gl.TranslateTo;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module utils {
				export module gl {
					export module gif {
						export class GifDecoder extends java.lang.Object {
							public static class: java.lang.Class<com.pedro.encoder.utils.gl.gif.GifDecoder>;
							public getWidth(): number;
							public setFrameIndex(frame: number): boolean;
							public getNextDelay(): number;
							public getLoopCount(): number;
							public resetFrameIndex(): void;
							public constructor(provider: com.pedro.encoder.utils.gl.gif.GifDecoder.BitmapProvider, gifHeader: com.pedro.encoder.utils.gl.gif.GifHeader, rawData: java.nio.ByteBuffer);
							public setData(header: com.pedro.encoder.utils.gl.gif.GifHeader, buffer: java.nio.ByteBuffer, sampleSize: number): void;
							public resetLoopIndex(): void;
							public getHeight(): number;
							public setData(header: com.pedro.encoder.utils.gl.gif.GifHeader, buffer: java.nio.ByteBuffer): void;
							public advance(): boolean;
							public read(is: java.io.InputStream, contentLength: number): number;
							public getDelay(n: number): number;
							public constructor(provider: com.pedro.encoder.utils.gl.gif.GifDecoder.BitmapProvider);
							public constructor();
							public getNextFrame(): globalAndroid.graphics.Bitmap;
							public constructor(provider: com.pedro.encoder.utils.gl.gif.GifDecoder.BitmapProvider, gifHeader: com.pedro.encoder.utils.gl.gif.GifHeader, rawData: java.nio.ByteBuffer, sampleSize: number);
							public getByteSize(): number;
							public getLoopIndex(): number;
							public clear(): void;
							public getFrameCount(): number;
							public read(data: native.Array<number>): number;
							public getCurrentFrameIndex(): number;
							public getStatus(): number;
							public setData(header: com.pedro.encoder.utils.gl.gif.GifHeader, data: native.Array<number>): void;
						}
						export module GifDecoder {
							export class BitmapProvider extends java.lang.Object {
								public static class: java.lang.Class<com.pedro.encoder.utils.gl.gif.GifDecoder.BitmapProvider>;
								/**
								 * Constructs a new instance of the com.pedro.encoder.utils.gl.gif.GifDecoder$BitmapProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									obtain(int0: number, int1: number, config2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
									release(bitmap0: globalAndroid.graphics.Bitmap): void;
									obtainByteArray(int0: number): native.Array<number>;
									release(bytes0: native.Array<number>): void;
									obtainIntArray(int0: number): native.Array<number>;
									release(ints0: native.Array<number>): void;
								});
								public constructor();
								public release(ints0: native.Array<number>): void;
								public release(bitmap0: globalAndroid.graphics.Bitmap): void;
								public release(bytes0: native.Array<number>): void;
								public obtain(int0: number, int1: number, config2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
								public obtainByteArray(int0: number): native.Array<number>;
								public obtainIntArray(int0: number): native.Array<number>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module utils {
				export module gl {
					export module gif {
						export class GifFrame extends java.lang.Object {
							public static class: java.lang.Class<com.pedro.encoder.utils.gl.gif.GifFrame>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module utils {
				export module gl {
					export module gif {
						export class GifHeader extends java.lang.Object {
							public static class: java.lang.Class<com.pedro.encoder.utils.gl.gif.GifHeader>;
							public constructor();
							public getHeight(): number;
							public getWidth(): number;
							public getStatus(): number;
							public getNumFrames(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module utils {
				export module gl {
					export module gif {
						export class GifHeaderParser extends java.lang.Object {
							public static class: java.lang.Class<com.pedro.encoder.utils.gl.gif.GifHeaderParser>;
							public static TAG: string;
							public constructor();
							public parseHeader(): com.pedro.encoder.utils.gl.gif.GifHeader;
							public setData(data: java.nio.ByteBuffer): com.pedro.encoder.utils.gl.gif.GifHeaderParser;
							public clear(): void;
							public isAnimated(): boolean;
							public setData(data: native.Array<number>): com.pedro.encoder.utils.gl.gif.GifHeaderParser;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module utils {
				export module gl {
					export module gif {
						export class SimpleBitmapProvider extends java.lang.Object implements com.pedro.encoder.utils.gl.gif.GifDecoder.BitmapProvider {
							public static class: java.lang.Class<com.pedro.encoder.utils.gl.gif.SimpleBitmapProvider>;
							public release(bitmap: globalAndroid.graphics.Bitmap): void;
							public obtain(width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public release(bytes: native.Array<number>): void;
							public obtainIntArray(size: number): native.Array<number>;
							public obtainByteArray(size: number): native.Array<number>;
							public release(array: native.Array<number>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module utils {
				export module yuv {
					export class NV21Utils extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.utils.yuv.NV21Utils>;
						public static rotate90(data: native.Array<number>, imageWidth: number, imageHeight: number): native.Array<number>;
						public static rotate180(data: native.Array<number>, imageWidth: number, imageHeight: number): native.Array<number>;
						public static preAllocateBuffers(length: number): void;
						public static toYV12(input: native.Array<number>, width: number, height: number): native.Array<number>;
						public constructor();
						public static rotate270(data: native.Array<number>, imageWidth: number, imageHeight: number): native.Array<number>;
						public static rotatePixels(input: native.Array<number>, width: number, height: number, rotation: number): native.Array<number>;
						public static mirror(input: native.Array<number>, width: number, height: number): native.Array<number>;
						public static toARGB(yuv: native.Array<number>, width: number, height: number): native.Array<number>;
						public static toNV12(input: native.Array<number>, width: number, height: number): native.Array<number>;
						public static toI420(input: native.Array<number>, width: number, height: number): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module utils {
				export module yuv {
					export class YUVUtil extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.utils.yuv.YUVUtil>;
						public static rotateNV21(data: native.Array<number>, width: number, height: number, rotation: number): native.Array<number>;
						public static CropYuv(src_format: number, src_yuv: native.Array<number>, src_width: number, src_height: number, dst_width: number, dst_height: number): native.Array<number>;
						public static preAllocateBuffers(length: number): void;
						public constructor();
						public static NV21toYUV420byColor(input: native.Array<number>, width: number, height: number, formatVideoEncoder: com.pedro.encoder.video.FormatVideoEncoder): native.Array<number>;
						public static frameToBitmap(frame: com.pedro.encoder.Frame, width: number, height: number, orientation: number): globalAndroid.graphics.Bitmap;
						public static rotateYV12(data: native.Array<number>, width: number, height: number, rotation: number): native.Array<number>;
						public static ARGBtoYUV420SemiPlanar(input: native.Array<number>, width: number, height: number): native.Array<number>;
						public static YV12toYUV420byColor(input: native.Array<number>, width: number, height: number, formatVideoEncoder: com.pedro.encoder.video.FormatVideoEncoder): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module utils {
				export module yuv {
					export class YV12Utils extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.utils.yuv.YV12Utils>;
						public static rotate90(data: native.Array<number>, imageWidth: number, imageHeight: number): native.Array<number>;
						public static rotate180(data: native.Array<number>, imageWidth: number, imageHeight: number): native.Array<number>;
						public static preAllocateBuffers(length: number): void;
						public constructor();
						public static rotate270(data: native.Array<number>, imageWidth: number, imageHeight: number): native.Array<number>;
						public static toNV12(input: native.Array<number>, width: number, height: number): native.Array<number>;
						public static toI420(input: native.Array<number>, width: number, height: number): native.Array<number>;
						public static toNV21(input: native.Array<number>, width: number, height: number): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module video {
				export class FormatVideoEncoder {
					public static class: java.lang.Class<com.pedro.encoder.video.FormatVideoEncoder>;
					public static YUV420FLEXIBLE: com.pedro.encoder.video.FormatVideoEncoder;
					public static YUV420PLANAR: com.pedro.encoder.video.FormatVideoEncoder;
					public static YUV420SEMIPLANAR: com.pedro.encoder.video.FormatVideoEncoder;
					public static YUV420PACKEDPLANAR: com.pedro.encoder.video.FormatVideoEncoder;
					public static YUV420PACKEDSEMIPLANAR: com.pedro.encoder.video.FormatVideoEncoder;
					public static YUV422FLEXIBLE: com.pedro.encoder.video.FormatVideoEncoder;
					public static YUV422PLANAR: com.pedro.encoder.video.FormatVideoEncoder;
					public static YUV422SEMIPLANAR: com.pedro.encoder.video.FormatVideoEncoder;
					public static YUV422PACKEDPLANAR: com.pedro.encoder.video.FormatVideoEncoder;
					public static YUV422PACKEDSEMIPLANAR: com.pedro.encoder.video.FormatVideoEncoder;
					public static YUV444FLEXIBLE: com.pedro.encoder.video.FormatVideoEncoder;
					public static YUV444INTERLEAVED: com.pedro.encoder.video.FormatVideoEncoder;
					public static SURFACE: com.pedro.encoder.video.FormatVideoEncoder;
					public static YUV420Dynamical: com.pedro.encoder.video.FormatVideoEncoder;
					public getFormatCodec(): number;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): com.pedro.encoder.video.FormatVideoEncoder;
					public static values(): native.Array<com.pedro.encoder.video.FormatVideoEncoder>;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module video {
				export class GetVideoData extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.encoder.video.GetVideoData>;
					/**
					 * Constructs a new instance of the com.pedro.encoder.video.GetVideoData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSpsPps(byteBuffer0: java.nio.ByteBuffer, byteBuffer1: java.nio.ByteBuffer): void;
						onSpsPpsVps(byteBuffer0: java.nio.ByteBuffer, byteBuffer1: java.nio.ByteBuffer, byteBuffer2: java.nio.ByteBuffer): void;
						getVideoData(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
						onVideoFormat(mediaFormat0: globalAndroid.media.MediaFormat): void;
					});
					public constructor();
					public onVideoFormat(mediaFormat0: globalAndroid.media.MediaFormat): void;
					public onSpsPps(byteBuffer0: java.nio.ByteBuffer, byteBuffer1: java.nio.ByteBuffer): void;
					public onSpsPpsVps(byteBuffer0: java.nio.ByteBuffer, byteBuffer1: java.nio.ByteBuffer, byteBuffer2: java.nio.ByteBuffer): void;
					public getVideoData(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module encoder {
			export module video {
				export class VideoEncoder extends com.pedro.encoder.BaseEncoder implements com.pedro.encoder.input.video.GetCameraData {
					public static class: java.lang.Class<com.pedro.encoder.video.VideoEncoder>;
					public setVideoBitrateOnFly(bitrate: number): void;
					public setInputSurface(inputSurface: globalAndroid.view.Surface): void;
					public checkBuffer(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public inputAvailable(mediaCodec: globalAndroid.media.MediaCodec, inBufferIndex: number): void;
					public chooseEncoder(string0: string): globalAndroid.media.MediaCodecInfo;
					public start(resetTs: boolean): void;
					public inputYUVData(frame: com.pedro.encoder.Frame): void;
					public getInputSurface(): globalAndroid.view.Surface;
					public start(): void;
					public setFps(fps: number): void;
					public chooseEncoder(mime: string): globalAndroid.media.MediaCodecInfo;
					public forceSyncFrame(): void;
					public constructor();
					public getType(): string;
					public getFps(): number;
					public outputAvailable(mediaCodec: globalAndroid.media.MediaCodec, outBufferIndex: number, bufferInfo: globalAndroid.media.MediaCodec.BufferInfo): void;
					public reset(): void;
					public start(boolean0: boolean): void;
					public setType(type: string): void;
					public getHeight(): number;
					public prepareVideoEncoder(width: number, height: number, fps: number, bitRate: number, rotation: number, iFrameInterval: number, formatVideoEncoder: com.pedro.encoder.video.FormatVideoEncoder): boolean;
					public getWidth(): number;
					public prepareVideoEncoder(width: number, height: number, fps: number, bitRate: number, rotation: number, iFrameInterval: number, formatVideoEncoder: com.pedro.encoder.video.FormatVideoEncoder, avcProfile: number, avcProfileLevel: number): boolean;
					public sendBuffer(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getRotation(): number;
					public constructor(getVideoData: com.pedro.encoder.video.GetVideoData);
					public prepareVideoEncoder(): boolean;
					public getInputFrame(): com.pedro.encoder.Frame;
					public formatChanged(mediaCodec: globalAndroid.media.MediaCodec, mediaFormat: globalAndroid.media.MediaFormat): void;
					public stopImp(): void;
					public getBitRate(): number;
					public checkBuffer(byteBuffer: java.nio.ByteBuffer, bufferInfo: globalAndroid.media.MediaCodec.BufferInfo): void;
					public sendBuffer(byteBuffer: java.nio.ByteBuffer, bufferInfo: globalAndroid.media.MediaCodec.BufferInfo): void;
				}
			}
		}
	}
}

//Generics information:

