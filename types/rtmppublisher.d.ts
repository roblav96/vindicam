declare module com {
	export module takusemba {
		export module rtmppublisher {
			export class AudioEncoder extends java.lang.Object implements com.takusemba.rtmppublisher.Encoder {
				public static class: java.lang.Class<com.takusemba.rtmppublisher.AudioEncoder>;
				public stop(): void;
				public start(): void;
				public isEncoding(): boolean;
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export class AudioHandler extends java.lang.Object implements com.takusemba.rtmppublisher.AudioRecorder.OnAudioRecorderStateChangedListener {
				public static class: java.lang.Class<com.takusemba.rtmppublisher.AudioHandler>;
				public onAudioRecorded(param0: native.Array<number>, param1: number): void;
			}
			export module AudioHandler {
				export class OnAudioEncoderStateListener extends java.lang.Object {
					public static class: java.lang.Class<com.takusemba.rtmppublisher.AudioHandler.OnAudioEncoderStateListener>;
					/**
					 * Constructs a new instance of the com.takusemba.rtmppublisher.AudioHandler$OnAudioEncoderStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAudioDataEncoded(param0: native.Array<number>, param1: number, param2: number): void;
					});
					public constructor();
					public onAudioDataEncoded(param0: native.Array<number>, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export class AudioRecorder extends java.lang.Object {
				public static class: java.lang.Class<com.takusemba.rtmppublisher.AudioRecorder>;
				public start(): void;
			}
			export module AudioRecorder {
				export class OnAudioRecorderStateChangedListener extends java.lang.Object {
					public static class: java.lang.Class<com.takusemba.rtmppublisher.AudioRecorder.OnAudioRecorderStateChangedListener>;
					/**
					 * Constructs a new instance of the com.takusemba.rtmppublisher.AudioRecorder$OnAudioRecorderStateChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAudioRecorded(param0: native.Array<number>, param1: number): void;
					});
					public constructor();
					public onAudioRecorded(param0: native.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.takusemba.rtmppublisher.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export class CameraClient extends java.lang.Object {
				public static class: java.lang.Class<com.takusemba.rtmppublisher.CameraClient>;
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export class CameraMode {
				public static class: java.lang.Class<com.takusemba.rtmppublisher.CameraMode>;
				public static FRONT: com.takusemba.rtmppublisher.CameraMode;
				public static BACK: com.takusemba.rtmppublisher.CameraMode;
				public static values(): native.Array<com.takusemba.rtmppublisher.CameraMode>;
				public static valueOf(param0: string): com.takusemba.rtmppublisher.CameraMode;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export class CameraSurfaceRenderer extends java.lang.Object implements globalAndroid.opengl.GLSurfaceView.Renderer {
				public static class: java.lang.Class<com.takusemba.rtmppublisher.CameraSurfaceRenderer>;
				public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
				public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
				public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
			}
			export module CameraSurfaceRenderer {
				export class OnRendererStateChangedListener extends java.lang.Object {
					public static class: java.lang.Class<com.takusemba.rtmppublisher.CameraSurfaceRenderer.OnRendererStateChangedListener>;
					/**
					 * Constructs a new instance of the com.takusemba.rtmppublisher.CameraSurfaceRenderer$OnRendererStateChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSurfaceCreated(param0: globalAndroid.graphics.SurfaceTexture): void;
						onFrameDrawn(param0: number, param1: native.Array<number>, param2: number): void;
					});
					public constructor();
					public onFrameDrawn(param0: number, param1: native.Array<number>, param2: number): void;
					public onSurfaceCreated(param0: globalAndroid.graphics.SurfaceTexture): void;
				}
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export class Encoder extends java.lang.Object {
				public static class: java.lang.Class<com.takusemba.rtmppublisher.Encoder>;
				/**
				 * Constructs a new instance of the com.takusemba.rtmppublisher.Encoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					start(): void;
					stop(): void;
					isEncoding(): boolean;
				});
				public constructor();
				public stop(): void;
				public start(): void;
				public isEncoding(): boolean;
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export class Muxer extends java.lang.Object {
				public static class: java.lang.Class<com.takusemba.rtmppublisher.Muxer>;
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export class Publisher extends java.lang.Object {
				public static class: java.lang.Class<com.takusemba.rtmppublisher.Publisher>;
				/**
				 * Constructs a new instance of the com.takusemba.rtmppublisher.Publisher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					switchCamera(): void;
					startPublishing(): void;
					stopPublishing(): void;
					isPublishing(): boolean;
				});
				public constructor();
				public startPublishing(): void;
				public switchCamera(): void;
				public isPublishing(): boolean;
				public stopPublishing(): void;
			}
			export module Publisher {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<com.takusemba.rtmppublisher.Publisher.Builder>;
					public static DEFAULT_WIDTH: number;
					public static DEFAULT_HEIGHT: number;
					public static DEFAULT_AUDIO_BITRATE: number;
					public static DEFAULT_VIDEO_BITRATE: number;
					public static DEFAULT_MODE: com.takusemba.rtmppublisher.CameraMode;
					public setAudioBitrate(param0: number): com.takusemba.rtmppublisher.Publisher.Builder;
					public setGlView(param0: globalAndroid.opengl.GLSurfaceView): com.takusemba.rtmppublisher.Publisher.Builder;
					public setListener(param0: com.takusemba.rtmppublisher.PublisherListener): com.takusemba.rtmppublisher.Publisher.Builder;
					public constructor(param0: globalAndroid.support.v7.app.AppCompatActivity);
					public build(): com.takusemba.rtmppublisher.RtmpPublisher;
					public setUrl(param0: string): com.takusemba.rtmppublisher.Publisher.Builder;
					public setVideoBitrate(param0: number): com.takusemba.rtmppublisher.Publisher.Builder;
					public setSize(param0: number, param1: number): com.takusemba.rtmppublisher.Publisher.Builder;
					public setCameraMode(param0: com.takusemba.rtmppublisher.CameraMode): com.takusemba.rtmppublisher.Publisher.Builder;
				}
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export class PublisherListener extends java.lang.Object {
				public static class: java.lang.Class<com.takusemba.rtmppublisher.PublisherListener>;
				/**
				 * Constructs a new instance of the com.takusemba.rtmppublisher.PublisherListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onStarted(): void;
					onStopped(): void;
					onDisconnected(): void;
					onFailedToConnect(): void;
				});
				public constructor();
				public onFailedToConnect(): void;
				public onDisconnected(): void;
				public onStarted(): void;
				public onStopped(): void;
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export class RtmpPublisher extends java.lang.Object implements com.takusemba.rtmppublisher.Publisher, globalAndroid.graphics.SurfaceTexture.OnFrameAvailableListener, com.takusemba.rtmppublisher.CameraSurfaceRenderer.OnRendererStateChangedListener {
				public static class: java.lang.Class<com.takusemba.rtmppublisher.RtmpPublisher>;
				public onSurfaceCreated(param0: globalAndroid.graphics.SurfaceTexture): void;
				public onResume(param0: any): void;
				public onPause(param0: any): void;
				public startPublishing(): void;
				public onFrameDrawn(param0: number, param1: native.Array<number>, param2: number): void;
				public switchCamera(): void;
				public onFrameAvailable(param0: globalAndroid.graphics.SurfaceTexture): void;
				public isPublishing(): boolean;
				public stopPublishing(): void;
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export class Streamer extends java.lang.Object implements com.takusemba.rtmppublisher.VideoHandler.OnVideoEncoderStateListener, com.takusemba.rtmppublisher.AudioHandler.OnAudioEncoderStateListener {
				public static class: java.lang.Class<com.takusemba.rtmppublisher.Streamer>;
				public onVideoDataEncoded(param0: native.Array<number>, param1: number, param2: number): void;
				public onAudioDataEncoded(param0: native.Array<number>, param1: number, param2: number): void;
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export class VideoEncoder extends java.lang.Object implements com.takusemba.rtmppublisher.Encoder {
				public static class: java.lang.Class<com.takusemba.rtmppublisher.VideoEncoder>;
				public stop(): void;
				public start(): void;
				public isEncoding(): boolean;
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export class VideoHandler extends java.lang.Object implements com.takusemba.rtmppublisher.CameraSurfaceRenderer.OnRendererStateChangedListener {
				public static class: java.lang.Class<com.takusemba.rtmppublisher.VideoHandler>;
				public onSurfaceCreated(param0: globalAndroid.graphics.SurfaceTexture): void;
				public onFrameDrawn(param0: number, param1: native.Array<number>, param2: number): void;
			}
			export module VideoHandler {
				export class OnVideoEncoderStateListener extends java.lang.Object {
					public static class: java.lang.Class<com.takusemba.rtmppublisher.VideoHandler.OnVideoEncoderStateListener>;
					/**
					 * Constructs a new instance of the com.takusemba.rtmppublisher.VideoHandler$OnVideoEncoderStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onVideoDataEncoded(param0: native.Array<number>, param1: number, param2: number): void;
					});
					public constructor();
					public onVideoDataEncoded(param0: native.Array<number>, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export class VideoRenderer extends java.lang.Object {
				public static class: java.lang.Class<com.takusemba.rtmppublisher.VideoRenderer>;
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export module gles {
				export class Drawable2d extends java.lang.Object {
					public static class: java.lang.Class<com.takusemba.rtmppublisher.gles.Drawable2d>;
					public getVertexArray(): java.nio.FloatBuffer;
					public getVertexStride(): number;
					public toString(): string;
					public getCoordsPerVertex(): number;
					public getTexCoordStride(): number;
					public getVertexCount(): number;
					public getTexCoordArray(): java.nio.FloatBuffer;
					public constructor(param0: com.takusemba.rtmppublisher.gles.Drawable2d.Prefab);
				}
				export module Drawable2d {
					export class Prefab {
						public static class: java.lang.Class<com.takusemba.rtmppublisher.gles.Drawable2d.Prefab>;
						public static TRIANGLE: com.takusemba.rtmppublisher.gles.Drawable2d.Prefab;
						public static RECTANGLE: com.takusemba.rtmppublisher.gles.Drawable2d.Prefab;
						public static FULL_RECTANGLE: com.takusemba.rtmppublisher.gles.Drawable2d.Prefab;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static values(): native.Array<com.takusemba.rtmppublisher.gles.Drawable2d.Prefab>;
						public static valueOf(param0: string): com.takusemba.rtmppublisher.gles.Drawable2d.Prefab;
					}
				}
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export module gles {
				export class EglCore extends java.lang.Object {
					public static class: java.lang.Class<com.takusemba.rtmppublisher.gles.EglCore>;
					public static FLAG_RECORDABLE: number;
					public static FLAG_TRY_GLES3: number;
					public makeNothingCurrent(): void;
					public swapBuffers(param0: globalAndroid.opengl.EGLSurface): boolean;
					public createOffscreenSurface(param0: number, param1: number): globalAndroid.opengl.EGLSurface;
					public finalize(): void;
					public queryString(param0: number): string;
					public makeCurrent(param0: globalAndroid.opengl.EGLSurface, param1: globalAndroid.opengl.EGLSurface): void;
					public release(): void;
					public isCurrent(param0: globalAndroid.opengl.EGLSurface): boolean;
					public createWindowSurface(param0: any): globalAndroid.opengl.EGLSurface;
					public constructor(param0: globalAndroid.opengl.EGLContext, param1: number);
					public makeCurrent(param0: globalAndroid.opengl.EGLSurface): void;
					public constructor();
					public getGlVersion(): number;
					public querySurface(param0: globalAndroid.opengl.EGLSurface, param1: number): number;
					public setPresentationTime(param0: globalAndroid.opengl.EGLSurface, param1: number): void;
					public static logCurrent(param0: string): void;
					public releaseSurface(param0: globalAndroid.opengl.EGLSurface): void;
				}
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export module gles {
				export class EglSurfaceBase extends java.lang.Object {
					public static class: java.lang.Class<com.takusemba.rtmppublisher.gles.EglSurfaceBase>;
					public static TAG: string;
					public mEglCore: com.takusemba.rtmppublisher.gles.EglCore;
					public constructor(param0: com.takusemba.rtmppublisher.gles.EglCore);
					public releaseEglSurface(): void;
					public makeCurrentReadFrom(param0: com.takusemba.rtmppublisher.gles.EglSurfaceBase): void;
					public swapBuffers(): boolean;
					public createOffscreenSurface(param0: number, param1: number): void;
					public getHeight(): number;
					public saveFrame(param0: java.io.File): void;
					public getWidth(): number;
					public makeCurrent(): void;
					public createWindowSurface(param0: any): void;
					public setPresentationTime(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export module gles {
				export class FlatShadedProgram extends java.lang.Object {
					public static class: java.lang.Class<com.takusemba.rtmppublisher.gles.FlatShadedProgram>;
					public constructor();
					public release(): void;
					public draw(param0: native.Array<number>, param1: native.Array<number>, param2: java.nio.FloatBuffer, param3: number, param4: number, param5: number, param6: number): void;
				}
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export module gles {
				export class FullFrameRect extends java.lang.Object {
					public static class: java.lang.Class<com.takusemba.rtmppublisher.gles.FullFrameRect>;
					public changeProgram(param0: com.takusemba.rtmppublisher.gles.Texture2dProgram): void;
					public release(param0: boolean): void;
					public drawFrame(param0: number, param1: native.Array<number>): void;
					public getProgram(): com.takusemba.rtmppublisher.gles.Texture2dProgram;
					public constructor(param0: com.takusemba.rtmppublisher.gles.Texture2dProgram);
					public createTextureObject(): number;
				}
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export module gles {
				export class GeneratedTexture extends java.lang.Object {
					public static class: java.lang.Class<com.takusemba.rtmppublisher.gles.GeneratedTexture>;
					public static createTestTexture(param0: com.takusemba.rtmppublisher.gles.GeneratedTexture.Image): number;
					public constructor();
				}
				export module GeneratedTexture {
					export class Image {
						public static class: java.lang.Class<com.takusemba.rtmppublisher.gles.GeneratedTexture.Image>;
						public static COARSE: com.takusemba.rtmppublisher.gles.GeneratedTexture.Image;
						public static FINE: com.takusemba.rtmppublisher.gles.GeneratedTexture.Image;
						public static values(): native.Array<com.takusemba.rtmppublisher.gles.GeneratedTexture.Image>;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): com.takusemba.rtmppublisher.gles.GeneratedTexture.Image;
					}
				}
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export module gles {
				export class GlUtil extends java.lang.Object {
					public static class: java.lang.Class<com.takusemba.rtmppublisher.gles.GlUtil>;
					public static TAG: string;
					public static IDENTITY_MATRIX: native.Array<number>;
					public static loadShader(param0: number, param1: string): number;
					public static logVersionInfo(): void;
					public static createProgram(param0: string, param1: string): number;
					public static checkLocation(param0: number, param1: string): void;
					public static checkGlError(param0: string): void;
					public static createFloatBuffer(param0: native.Array<number>): java.nio.FloatBuffer;
					public static createImageTexture(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: number): number;
				}
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export module gles {
				export class OffscreenSurface extends com.takusemba.rtmppublisher.gles.EglSurfaceBase {
					public static class: java.lang.Class<com.takusemba.rtmppublisher.gles.OffscreenSurface>;
					public constructor(param0: com.takusemba.rtmppublisher.gles.EglCore);
					public constructor(param0: com.takusemba.rtmppublisher.gles.EglCore, param1: number, param2: number);
					public release(): void;
				}
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export module gles {
				export class Sprite2d extends java.lang.Object {
					public static class: java.lang.Class<com.takusemba.rtmppublisher.gles.Sprite2d>;
					public constructor(param0: com.takusemba.rtmppublisher.gles.Drawable2d);
					public getScaleY(): number;
					public setScale(param0: number, param1: number): void;
					public setTexture(param0: number): void;
					public getColor(): native.Array<number>;
					public draw(param0: com.takusemba.rtmppublisher.gles.FlatShadedProgram, param1: native.Array<number>): void;
					public getModelViewMatrix(): native.Array<number>;
					public getPositionY(): number;
					public getScaleX(): number;
					public setRotation(param0: number): void;
					public toString(): string;
					public getRotation(): number;
					public getPositionX(): number;
					public setPosition(param0: number, param1: number): void;
					public setColor(param0: number, param1: number, param2: number): void;
					public draw(param0: com.takusemba.rtmppublisher.gles.Texture2dProgram, param1: native.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export module gles {
				export class Texture2dProgram extends java.lang.Object {
					public static class: java.lang.Class<com.takusemba.rtmppublisher.gles.Texture2dProgram>;
					public static KERNEL_SIZE: number;
					public setTexSize(param0: number, param1: number): void;
					public setKernel(param0: native.Array<number>, param1: number): void;
					public getProgramType(): com.takusemba.rtmppublisher.gles.Texture2dProgram.ProgramType;
					public release(): void;
					public createTextureObject(): number;
					public constructor(param0: com.takusemba.rtmppublisher.gles.Texture2dProgram.ProgramType);
					public draw(param0: native.Array<number>, param1: java.nio.FloatBuffer, param2: number, param3: number, param4: number, param5: number, param6: native.Array<number>, param7: java.nio.FloatBuffer, param8: number, param9: number): void;
				}
				export module Texture2dProgram {
					export class ProgramType {
						public static class: java.lang.Class<com.takusemba.rtmppublisher.gles.Texture2dProgram.ProgramType>;
						public static TEXTURE_2D: com.takusemba.rtmppublisher.gles.Texture2dProgram.ProgramType;
						public static TEXTURE_EXT: com.takusemba.rtmppublisher.gles.Texture2dProgram.ProgramType;
						public static TEXTURE_EXT_BW: com.takusemba.rtmppublisher.gles.Texture2dProgram.ProgramType;
						public static TEXTURE_EXT_FILT: com.takusemba.rtmppublisher.gles.Texture2dProgram.ProgramType;
						public static values(): native.Array<com.takusemba.rtmppublisher.gles.Texture2dProgram.ProgramType>;
						public static valueOf(param0: string): com.takusemba.rtmppublisher.gles.Texture2dProgram.ProgramType;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export module gles {
				export class WindowSurface extends com.takusemba.rtmppublisher.gles.EglSurfaceBase {
					public static class: java.lang.Class<com.takusemba.rtmppublisher.gles.WindowSurface>;
					public constructor(param0: com.takusemba.rtmppublisher.gles.EglCore);
					public recreate(param0: com.takusemba.rtmppublisher.gles.EglCore): void;
					public release(): void;
					public constructor(param0: com.takusemba.rtmppublisher.gles.EglCore, param1: globalAndroid.view.Surface, param2: boolean);
					public constructor(param0: com.takusemba.rtmppublisher.gles.EglCore, param1: globalAndroid.graphics.SurfaceTexture);
				}
			}
		}
	}
}

//Generics information:

