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
				public onAudioRecorded(data: native.Array<number>, length: number): void;
				public onAudioRecorded(arg1: native.Array<number>, arg2: number): void;
			}
			export module AudioHandler {
				export class OnAudioEncoderStateListener extends java.lang.Object {
					public static class: java.lang.Class<com.takusemba.rtmppublisher.AudioHandler.OnAudioEncoderStateListener>;
					/**
					 * Constructs a new instance of the com.takusemba.rtmppublisher.AudioHandler$OnAudioEncoderStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAudioDataEncoded(arg1: native.Array<number>, arg2: number, arg3: number): void;
					});
					public constructor();
					public onAudioDataEncoded(arg1: native.Array<number>, arg2: number, arg3: number): void;
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
						onAudioRecorded(arg1: native.Array<number>, arg2: number): void;
					});
					public constructor();
					public onAudioRecorded(arg1: native.Array<number>, arg2: number): void;
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
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): native.Array<com.takusemba.rtmppublisher.CameraMode>;
				public static valueOf(name: string): com.takusemba.rtmppublisher.CameraMode;
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export class CameraSurfaceRenderer extends java.lang.Object implements globalAndroid.opengl.GLSurfaceView.Renderer {
				public static class: java.lang.Class<com.takusemba.rtmppublisher.CameraSurfaceRenderer>;
				public onDrawFrame(unused: javax.microedition.khronos.opengles.GL10): void;
				public onDrawFrame(arg1: javax.microedition.khronos.opengles.GL10): void;
				public onSurfaceCreated(unused: javax.microedition.khronos.opengles.GL10, config: javax.microedition.khronos.egl.EGLConfig): void;
				public onSurfaceCreated(arg1: javax.microedition.khronos.opengles.GL10, arg2: javax.microedition.khronos.egl.EGLConfig): void;
				public onSurfaceChanged(unused: javax.microedition.khronos.opengles.GL10, width: number, height: number): void;
				public onSurfaceChanged(arg1: javax.microedition.khronos.opengles.GL10, arg2: number, arg3: number): void;
			}
			export module CameraSurfaceRenderer {
				export class OnRendererStateChangedListener extends java.lang.Object {
					public static class: java.lang.Class<com.takusemba.rtmppublisher.CameraSurfaceRenderer.OnRendererStateChangedListener>;
					/**
					 * Constructs a new instance of the com.takusemba.rtmppublisher.CameraSurfaceRenderer$OnRendererStateChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSurfaceCreated(arg1: globalAndroid.graphics.SurfaceTexture): void;
						onFrameDrawn(arg1: number, arg2: native.Array<number>, arg3: number): void;
					});
					public constructor();
					public onFrameDrawn(arg1: number, arg2: native.Array<number>, arg3: number): void;
					public onSurfaceCreated(arg1: globalAndroid.graphics.SurfaceTexture): void;
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
					public setCameraMode(mode: com.takusemba.rtmppublisher.CameraMode): com.takusemba.rtmppublisher.Publisher.Builder;
					public setSize(width: number, height: number): com.takusemba.rtmppublisher.Publisher.Builder;
					public constructor(activity: globalAndroid.support.v7.app.AppCompatActivity);
					public setUrl(url: string): com.takusemba.rtmppublisher.Publisher.Builder;
					public build(): com.takusemba.rtmppublisher.RtmpPublisher;
					public setVideoBitrate(videoBitrate: number): com.takusemba.rtmppublisher.Publisher.Builder;
					public setAudioBitrate(audioBitrate: number): com.takusemba.rtmppublisher.Publisher.Builder;
					public setListener(listener: com.takusemba.rtmppublisher.PublisherListener): com.takusemba.rtmppublisher.Publisher.Builder;
					public setGlView(glView: globalAndroid.opengl.GLSurfaceView): com.takusemba.rtmppublisher.Publisher.Builder;
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
				public onSurfaceCreated(surfaceTexture: globalAndroid.graphics.SurfaceTexture): void;
				public onFrameDrawn(textureId: number, transform: native.Array<number>, timestamp: number): void;
				public onResume(owner: any): void;
				public onSurfaceCreated(arg1: globalAndroid.graphics.SurfaceTexture): void;
				public startPublishing(): void;
				public switchCamera(): void;
				public onPause(owner: any): void;
				public onFrameAvailable(surfaceTexture: globalAndroid.graphics.SurfaceTexture): void;
				public onFrameAvailable(arg1: globalAndroid.graphics.SurfaceTexture): void;
				public isPublishing(): boolean;
				public stopPublishing(): void;
				public onFrameDrawn(arg1: number, arg2: native.Array<number>, arg3: number): void;
			}
		}
	}
}

declare module com {
	export module takusemba {
		export module rtmppublisher {
			export class Streamer extends java.lang.Object implements com.takusemba.rtmppublisher.VideoHandler.OnVideoEncoderStateListener, com.takusemba.rtmppublisher.AudioHandler.OnAudioEncoderStateListener {
				public static class: java.lang.Class<com.takusemba.rtmppublisher.Streamer>;
				public onAudioDataEncoded(arg1: native.Array<number>, arg2: number, arg3: number): void;
				public onVideoDataEncoded(data: native.Array<number>, size: number, timestamp: number): void;
				public onAudioDataEncoded(data: native.Array<number>, size: number, timestamp: number): void;
				public onVideoDataEncoded(arg1: native.Array<number>, arg2: number, arg3: number): void;
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
				public onSurfaceCreated(surfaceTexture: globalAndroid.graphics.SurfaceTexture): void;
				public onFrameDrawn(textureId: number, transform: native.Array<number>, timestamp: number): void;
				public onSurfaceCreated(arg1: globalAndroid.graphics.SurfaceTexture): void;
				public onFrameDrawn(arg1: number, arg2: native.Array<number>, arg3: number): void;
			}
			export module VideoHandler {
				export class OnVideoEncoderStateListener extends java.lang.Object {
					public static class: java.lang.Class<com.takusemba.rtmppublisher.VideoHandler.OnVideoEncoderStateListener>;
					/**
					 * Constructs a new instance of the com.takusemba.rtmppublisher.VideoHandler$OnVideoEncoderStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onVideoDataEncoded(arg1: native.Array<number>, arg2: number, arg3: number): void;
					});
					public constructor();
					public onVideoDataEncoded(arg1: native.Array<number>, arg2: number, arg3: number): void;
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
					public constructor(shape: com.takusemba.rtmppublisher.gles.Drawable2d.Prefab);
				}
				export module Drawable2d {
					export class Prefab {
						public static class: java.lang.Class<com.takusemba.rtmppublisher.gles.Drawable2d.Prefab>;
						public static TRIANGLE: com.takusemba.rtmppublisher.gles.Drawable2d.Prefab;
						public static RECTANGLE: com.takusemba.rtmppublisher.gles.Drawable2d.Prefab;
						public static FULL_RECTANGLE: com.takusemba.rtmppublisher.gles.Drawable2d.Prefab;
						public static values(): native.Array<com.takusemba.rtmppublisher.gles.Drawable2d.Prefab>;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): com.takusemba.rtmppublisher.gles.Drawable2d.Prefab;
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
					public constructor(sharedContext: globalAndroid.opengl.EGLContext, flags: number);
					public finalize(): void;
					public swapBuffers(eglSurface: globalAndroid.opengl.EGLSurface): boolean;
					public querySurface(eglSurface: globalAndroid.opengl.EGLSurface, what: number): number;
					public queryString(what: number): string;
					public release(): void;
					public static logCurrent(msg: string): void;
					public makeCurrent(drawSurface: globalAndroid.opengl.EGLSurface, readSurface: globalAndroid.opengl.EGLSurface): void;
					public constructor();
					public createWindowSurface(surface: any): globalAndroid.opengl.EGLSurface;
					public makeCurrent(eglSurface: globalAndroid.opengl.EGLSurface): void;
					public setPresentationTime(eglSurface: globalAndroid.opengl.EGLSurface, nsecs: number): void;
					public isCurrent(eglSurface: globalAndroid.opengl.EGLSurface): boolean;
					public getGlVersion(): number;
					public releaseSurface(eglSurface: globalAndroid.opengl.EGLSurface): void;
					public createOffscreenSurface(width: number, height: number): globalAndroid.opengl.EGLSurface;
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
					public releaseEglSurface(): void;
					public saveFrame(file: java.io.File): void;
					public makeCurrentReadFrom(readSurface: com.takusemba.rtmppublisher.gles.EglSurfaceBase): void;
					public swapBuffers(): boolean;
					public getHeight(): number;
					public createWindowSurface(surface: any): void;
					public getWidth(): number;
					public makeCurrent(): void;
					public setPresentationTime(nsecs: number): void;
					public createOffscreenSurface(width: number, height: number): void;
					public constructor(eglCore: com.takusemba.rtmppublisher.gles.EglCore);
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
					public draw(mvpMatrix: native.Array<number>, color: native.Array<number>, vertexBuffer: java.nio.FloatBuffer, firstVertex: number, vertexCount: number, coordsPerVertex: number, vertexStride: number): void;
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
					public constructor(program: com.takusemba.rtmppublisher.gles.Texture2dProgram);
					public getProgram(): com.takusemba.rtmppublisher.gles.Texture2dProgram;
					public changeProgram(program: com.takusemba.rtmppublisher.gles.Texture2dProgram): void;
					public drawFrame(textureId: number, texMatrix: native.Array<number>): void;
					public release(doEglCleanup: boolean): void;
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
					public static createTestTexture(which: com.takusemba.rtmppublisher.gles.GeneratedTexture.Image): number;
					public constructor();
				}
				export module GeneratedTexture {
					export class Image {
						public static class: java.lang.Class<com.takusemba.rtmppublisher.gles.GeneratedTexture.Image>;
						public static COARSE: com.takusemba.rtmppublisher.gles.GeneratedTexture.Image;
						public static FINE: com.takusemba.rtmppublisher.gles.GeneratedTexture.Image;
						public static values(): native.Array<com.takusemba.rtmppublisher.gles.GeneratedTexture.Image>;
						public static valueOf(name: string): com.takusemba.rtmppublisher.gles.GeneratedTexture.Image;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
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
					public static logVersionInfo(): void;
					public static createFloatBuffer(coords: native.Array<number>): java.nio.FloatBuffer;
					public static checkLocation(location: number, label: string): void;
					public static createImageTexture(data: java.nio.ByteBuffer, width: number, height: number, format: number): number;
					public static createProgram(vertexSource: string, fragmentSource: string): number;
					public static loadShader(shaderType: number, source: string): number;
					public static checkGlError(op: string): void;
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
					public constructor(eglCore: com.takusemba.rtmppublisher.gles.EglCore, width: number, height: number);
					public release(): void;
					public constructor(eglCore: com.takusemba.rtmppublisher.gles.EglCore);
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
					public draw(program: com.takusemba.rtmppublisher.gles.FlatShadedProgram, projectionMatrix: native.Array<number>): void;
					public getScaleY(): number;
					public getColor(): native.Array<number>;
					public getModelViewMatrix(): native.Array<number>;
					public getPositionY(): number;
					public setTexture(textureId: number): void;
					public setRotation(angle: number): void;
					public setColor(red: number, green: number, blue: number): void;
					public getScaleX(): number;
					public draw(program: com.takusemba.rtmppublisher.gles.Texture2dProgram, projectionMatrix: native.Array<number>): void;
					public toString(): string;
					public getRotation(): number;
					public setScale(scaleX: number, scaleY: number): void;
					public getPositionX(): number;
					public setPosition(posX: number, posY: number): void;
					public constructor(drawable: com.takusemba.rtmppublisher.gles.Drawable2d);
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
					public draw(mvpMatrix: native.Array<number>, vertexBuffer: java.nio.FloatBuffer, firstVertex: number, vertexCount: number, coordsPerVertex: number, vertexStride: number, texMatrix: native.Array<number>, texBuffer: java.nio.FloatBuffer, textureId: number, texStride: number): void;
					public setKernel(values: native.Array<number>, colorAdj: number): void;
					public getProgramType(): com.takusemba.rtmppublisher.gles.Texture2dProgram.ProgramType;
					public release(): void;
					public setTexSize(width: number, height: number): void;
					public constructor(programType: com.takusemba.rtmppublisher.gles.Texture2dProgram.ProgramType);
					public createTextureObject(): number;
				}
				export module Texture2dProgram {
					export class ProgramType {
						public static class: java.lang.Class<com.takusemba.rtmppublisher.gles.Texture2dProgram.ProgramType>;
						public static TEXTURE_2D: com.takusemba.rtmppublisher.gles.Texture2dProgram.ProgramType;
						public static TEXTURE_EXT: com.takusemba.rtmppublisher.gles.Texture2dProgram.ProgramType;
						public static TEXTURE_EXT_BW: com.takusemba.rtmppublisher.gles.Texture2dProgram.ProgramType;
						public static TEXTURE_EXT_FILT: com.takusemba.rtmppublisher.gles.Texture2dProgram.ProgramType;
						public static valueOf(name: string): com.takusemba.rtmppublisher.gles.Texture2dProgram.ProgramType;
						public static values(): native.Array<com.takusemba.rtmppublisher.gles.Texture2dProgram.ProgramType>;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
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
					public recreate(newEglCore: com.takusemba.rtmppublisher.gles.EglCore): void;
					public release(): void;
					public constructor(eglCore: com.takusemba.rtmppublisher.gles.EglCore);
					public constructor(eglCore: com.takusemba.rtmppublisher.gles.EglCore, surface: globalAndroid.view.Surface, releaseSurface: boolean);
					public constructor(eglCore: com.takusemba.rtmppublisher.gles.EglCore, surfaceTexture: globalAndroid.graphics.SurfaceTexture);
				}
			}
		}
	}
}

//Generics information:

