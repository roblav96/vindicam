declare module com {
	export module pedro {
		export module rtsp {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.pedro.rtsp.BuildConfig>;
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
		export module rtsp {
			export module rtcp {
				export abstract class BaseSenderReport extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtsp.rtcp.BaseSenderReport>;
					public static TAG: string;
					public static PACKET_LENGTH: number;
					public update(rtpFrame: com.pedro.rtsp.rtsp.RtpFrame, isEnableLogs: boolean): void;
					public static getInstance(protocol: com.pedro.rtsp.rtsp.Protocol, videoSourcePort: number, audioSourcePort: number): com.pedro.rtsp.rtcp.BaseSenderReport;
					public reset(): void;
					public close(): void;
					public sendReport(bytes0: native.Array<number>, rtpFrame1: com.pedro.rtsp.rtsp.RtpFrame, string2: string, int3: number, int4: number, boolean5: boolean): void;
					public setDataStream(outputStream0: java.io.OutputStream, string1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module rtcp {
				export class SenderReportTcp extends com.pedro.rtsp.rtcp.BaseSenderReport {
					public static class: java.lang.Class<com.pedro.rtsp.rtcp.SenderReportTcp>;
					public setDataStream(outputStream: java.io.OutputStream, host: string): void;
					public sendReport(buffer: native.Array<number>, rtpFrame: com.pedro.rtsp.rtsp.RtpFrame, type: string, packetCount: number, octetCount: number, isEnableLogs: boolean): void;
					public constructor();
					public close(): void;
					public sendReport(bytes0: native.Array<number>, rtpFrame1: com.pedro.rtsp.rtsp.RtpFrame, string2: string, int3: number, int4: number, boolean5: boolean): void;
					public setDataStream(outputStream0: java.io.OutputStream, string1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module rtcp {
				export class SenderReportUdp extends com.pedro.rtsp.rtcp.BaseSenderReport {
					public static class: java.lang.Class<com.pedro.rtsp.rtcp.SenderReportUdp>;
					public setDataStream(outputStream: java.io.OutputStream, host: string): void;
					public sendReport(buffer: native.Array<number>, rtpFrame: com.pedro.rtsp.rtsp.RtpFrame, type: string, packetCount: number, octetCount: number, isEnableLogs: boolean): void;
					public constructor(videoSourcePort: number, audioSourcePort: number);
					public close(): void;
					public sendReport(bytes0: native.Array<number>, rtpFrame1: com.pedro.rtsp.rtsp.RtpFrame, string2: string, int3: number, int4: number, boolean5: boolean): void;
					public setDataStream(outputStream0: java.io.OutputStream, string1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module rtp {
				export module packets {
					export class AacPacket extends com.pedro.rtsp.rtp.packets.BasePacket {
						public static class: java.lang.Class<com.pedro.rtsp.rtp.packets.AacPacket>;
						public constructor(sampleRate: number, audioPacketCallback: com.pedro.rtsp.rtp.packets.AudioPacketCallback);
						public createAndSendPacket(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
						public constructor(clock: number);
						public createAndSendPacket(byteBuffer: java.nio.ByteBuffer, bufferInfo: globalAndroid.media.MediaCodec.BufferInfo): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module rtp {
				export module packets {
					export class AudioPacketCallback extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.rtsp.rtp.packets.AudioPacketCallback>;
						/**
						 * Constructs a new instance of the com.pedro.rtsp.rtp.packets.AudioPacketCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAudioFrameCreated(rtpFrame0: com.pedro.rtsp.rtsp.RtpFrame): void;
						});
						public constructor();
						public onAudioFrameCreated(rtpFrame0: com.pedro.rtsp.rtsp.RtpFrame): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module rtp {
				export module packets {
					export abstract class BasePacket extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.rtsp.rtp.packets.BasePacket>;
						public static maxPacketSize: number;
						public channelIdentifier: number;
						public rtpPort: number;
						public rtcpPort: number;
						public markPacket(buffer: native.Array<number>): void;
						public getBuffer(size: number): native.Array<number>;
						public setPorts(rtpPort: number, rtcpPort: number): void;
						public setLong(buffer: native.Array<number>, n: number, begin: number, end: number): void;
						public createAndSendPacket(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
						public updateTimeStamp(buffer: native.Array<number>, timestamp: number): void;
						public updateSeq(buffer: native.Array<number>): void;
						public constructor(clock: number);
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module rtp {
				export module packets {
					export class H264Packet extends com.pedro.rtsp.rtp.packets.BasePacket {
						public static class: java.lang.Class<com.pedro.rtsp.rtp.packets.H264Packet>;
						public constructor(sps: native.Array<number>, pps: native.Array<number>, videoPacketCallback: com.pedro.rtsp.rtp.packets.VideoPacketCallback);
						public createAndSendPacket(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
						public constructor(clock: number);
						public createAndSendPacket(byteBuffer: java.nio.ByteBuffer, bufferInfo: globalAndroid.media.MediaCodec.BufferInfo): void;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module rtp {
				export module packets {
					export class H265Packet extends com.pedro.rtsp.rtp.packets.BasePacket {
						public static class: java.lang.Class<com.pedro.rtsp.rtp.packets.H265Packet>;
						public constructor(sps: native.Array<number>, pps: native.Array<number>, vps: native.Array<number>, videoPacketCallback: com.pedro.rtsp.rtp.packets.VideoPacketCallback);
						public createAndSendPacket(byteBuffer0: java.nio.ByteBuffer, bufferInfo1: globalAndroid.media.MediaCodec.BufferInfo): void;
						public constructor(clock: number);
						public createAndSendPacket(byteBuffer: java.nio.ByteBuffer, bufferInfo: globalAndroid.media.MediaCodec.BufferInfo): void;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module rtp {
				export module packets {
					export class VideoPacketCallback extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.rtsp.rtp.packets.VideoPacketCallback>;
						/**
						 * Constructs a new instance of the com.pedro.rtsp.rtp.packets.VideoPacketCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onVideoFrameCreated(rtpFrame0: com.pedro.rtsp.rtsp.RtpFrame): void;
						});
						public constructor();
						public onVideoFrameCreated(rtpFrame0: com.pedro.rtsp.rtsp.RtpFrame): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module rtp {
				export module sockets {
					export abstract class BaseRtpSocket extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.rtsp.rtp.sockets.BaseRtpSocket>;
						public static TAG: string;
						public setDataStream(outputStream0: java.io.OutputStream, string1: string): void;
						public sendFrame(rtpFrame0: com.pedro.rtsp.rtsp.RtpFrame, boolean1: boolean): void;
						public constructor();
						public close(): void;
						public static getInstance(protocol: com.pedro.rtsp.rtsp.Protocol, videoSourcePort: number, audioSourcePort: number): com.pedro.rtsp.rtp.sockets.BaseRtpSocket;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module rtp {
				export module sockets {
					export class RtpSocketTcp extends com.pedro.rtsp.rtp.sockets.BaseRtpSocket {
						public static class: java.lang.Class<com.pedro.rtsp.rtp.sockets.RtpSocketTcp>;
						public setDataStream(outputStream0: java.io.OutputStream, string1: string): void;
						public setDataStream(outputStream: java.io.OutputStream, host: string): void;
						public sendFrame(rtpFrame0: com.pedro.rtsp.rtsp.RtpFrame, boolean1: boolean): void;
						public constructor();
						public close(): void;
						public sendFrame(rtpFrame: com.pedro.rtsp.rtsp.RtpFrame, isEnableLogs: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module rtp {
				export module sockets {
					export class RtpSocketUdp extends com.pedro.rtsp.rtp.sockets.BaseRtpSocket {
						public static class: java.lang.Class<com.pedro.rtsp.rtp.sockets.RtpSocketUdp>;
						public setDataStream(outputStream0: java.io.OutputStream, string1: string): void;
						public setDataStream(outputStream: java.io.OutputStream, host: string): void;
						public sendFrame(rtpFrame0: com.pedro.rtsp.rtsp.RtpFrame, boolean1: boolean): void;
						public constructor();
						public close(): void;
						public sendFrame(rtpFrame: com.pedro.rtsp.rtsp.RtpFrame, isEnableLogs: boolean): void;
						public constructor(videoSourcePort: number, audioSourcePort: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module rtsp {
				export class Body extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtsp.rtsp.Body>;
					public static createAacBody(trackAudio: number, sampleRate: number, isStereo: boolean): string;
					public constructor();
					public static createH264Body(trackVideo: number, sps: string, pps: string): string;
					public static createH265Body(trackVideo: number, sps: string, pps: string, vps: string): string;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module rtsp {
				export class CommandsManager extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtsp.rtsp.CommandsManager>;
					public getResponseStatus(response: string): number;
					public getPort(): number;
					public getPps(): native.Array<number>;
					public getAudioServerPorts(): native.Array<number>;
					public static createGetParameter(): string;
					public getAudioClientPorts(): native.Array<number>;
					public getSampleRate(): number;
					public setUrl(host: string, port: number, path: string): void;
					public isStereo(): boolean;
					public setVideoInfo(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public getHost(): string;
					public createRecord(): string;
					public createOptions(): string;
					public createTeardown(): string;
					public static createRedirect(): string;
					public constructor();
					public getSps(): native.Array<number>;
					public clear(): void;
					public getVideoClientPorts(): native.Array<number>;
					public createAnnounceWithAuth(authResponse: string): string;
					public setSampleRate(sampleRate: number): void;
					public isOnlyAudio(): boolean;
					public getTrackAudio(): number;
					public setProtocol(protocol: com.pedro.rtsp.rtsp.Protocol): void;
					public static createPlay(): string;
					public getProtocol(): com.pedro.rtsp.rtsp.Protocol;
					public getPath(): string;
					public getPassword(): string;
					public getTrackVideo(): number;
					public getVideoServerPorts(): native.Array<number>;
					public retryClear(): void;
					public createAnnounce(): string;
					public static createPause(): string;
					public static createSetParameter(): string;
					public setOnlyAudio(onlyAudio: boolean): void;
					public getVps(): native.Array<number>;
					public setIsStereo(isStereo: boolean): void;
					public getUser(): string;
					public setAuth(user: string, password: string): void;
					public createSetup(track: number): string;
					public getResponse(reader: java.io.BufferedReader, connectCheckerRtsp: com.pedro.rtsp.utils.ConnectCheckerRtsp, isAudio: boolean, checkStatus: boolean): string;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module rtsp {
				export class Protocol {
					public static class: java.lang.Class<com.pedro.rtsp.rtsp.Protocol>;
					public static UDP: com.pedro.rtsp.rtsp.Protocol;
					public static TCP: com.pedro.rtsp.rtsp.Protocol;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): native.Array<com.pedro.rtsp.rtsp.Protocol>;
					public static valueOf(name: string): com.pedro.rtsp.rtsp.Protocol;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module rtsp {
				export class RtpFrame extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtsp.rtsp.RtpFrame>;
					public setLength(length: number): void;
					public setBuffer(buffer: native.Array<number>): void;
					public getLength(): number;
					public constructor(buffer: native.Array<number>, timeStamp: number, length: number, rtpPort: number, rtcpPort: number, channelIdentifier: number);
					public getRtcpPort(): number;
					public getRtpPort(): number;
					public setChannelIdentifier(channelIdentifier: number): void;
					public getTimeStamp(): number;
					public isVideoFrame(): boolean;
					public setRtcpPort(rtcpPort: number): void;
					public getChannelIdentifier(): number;
					public setTimeStamp(timeStamp: number): void;
					public getBuffer(): native.Array<number>;
					public setRtpPort(rtpPort: number): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module rtsp {
				export class RtspClient extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtsp.rtsp.RtspClient>;
					public setReTries(reTries: number): void;
					public getPort(): number;
					public resetSentVideoFrames(): void;
					public getSentAudioFrames(): number;
					public isStreaming(): boolean;
					public resizeCache(newSize: number): void;
					public setUrl(url: string): void;
					public getHost(): string;
					public sendAudio(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public connect(): void;
					public disconnect(): void;
					public getDroppedAudioFrames(): number;
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public setSampleRate(sampleRate: number): void;
					public resetSentAudioFrames(): void;
					public setSPSandPPS(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, vps: java.nio.ByteBuffer): void;
					public getSentVideoFrames(): number;
					public setProtocol(protocol: com.pedro.rtsp.rtsp.Protocol): void;
					public getConnectCheckerRtsp(): com.pedro.rtsp.utils.ConnectCheckerRtsp;
					public setAuthorization(user: string, password: string): void;
					public getPath(): string;
					public sendVideo(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public reConnect(delay: number): void;
					public setOnlyAudio(onlyAudio: boolean): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public setIsStereo(isStereo: boolean): void;
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
		export module rtsp {
			export module rtsp {
				export class RtspSender extends java.lang.Object implements com.pedro.rtsp.rtp.packets.VideoPacketCallback, com.pedro.rtsp.rtp.packets.AudioPacketCallback {
					public static class: java.lang.Class<com.pedro.rtsp.rtsp.RtspSender>;
					public setAudioInfo(sampleRate: number): void;
					public setAudioPorts(rtpPort: number, rtcpPort: number): void;
					public getCacheSize(): number;
					public resetSentVideoFrames(): void;
					public resetDroppedVideoFrames(): void;
					public setVideoInfo(sps: native.Array<number>, pps: native.Array<number>, vps: native.Array<number>): void;
					public sendAudioFrame(aacBuffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resetSentAudioFrames(): void;
					public setVideoPorts(rtpPort: number, rtcpPort: number): void;
					public getSentAudioFrames(): number;
					public getSentVideoFrames(): number;
					public start(): void;
					public resizeCache(newSize: number): void;
					public setSocketsInfo(protocol: com.pedro.rtsp.rtsp.Protocol, videoSourcePorts: native.Array<number>, audioSourcePorts: native.Array<number>): void;
					public setDataStream(outputStream: java.io.OutputStream, host: string): void;
					public sendVideoFrame(h264Buffer: java.nio.ByteBuffer, info: globalAndroid.media.MediaCodec.BufferInfo): void;
					public stop(): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public setLogs(enable: boolean): void;
					public constructor(connectCheckerRtsp: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public onVideoFrameCreated(rtpFrame: com.pedro.rtsp.rtsp.RtpFrame): void;
					public onAudioFrameCreated(rtpFrame: com.pedro.rtsp.rtsp.RtpFrame): void;
					public getDroppedAudioFrames(): number;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module rtsp {
				export class VideoCodec {
					public static class: java.lang.Class<com.pedro.rtsp.rtsp.VideoCodec>;
					public static H264: com.pedro.rtsp.rtsp.VideoCodec;
					public static H265: com.pedro.rtsp.rtsp.VideoCodec;
					public static valueOf(name: string): com.pedro.rtsp.rtsp.VideoCodec;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): native.Array<com.pedro.rtsp.rtsp.VideoCodec>;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module utils {
				export class AuthUtil extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtsp.utils.AuthUtil>;
					public constructor();
					public static getMd5Hash(buffer: string): string;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module utils {
				export class BitrateManager extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtsp.utils.BitrateManager>;
					public calculateBitrate(size: number): void;
					public constructor(connectCheckerRtsp: com.pedro.rtsp.utils.ConnectCheckerRtsp);
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module utils {
				export class ConnectCheckerRtsp extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtsp.utils.ConnectCheckerRtsp>;
					/**
					 * Constructs a new instance of the com.pedro.rtsp.utils.ConnectCheckerRtsp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onConnectionSuccessRtsp(): void;
						onConnectionFailedRtsp(string0: string): void;
						onNewBitrateRtsp(long0: number): void;
						onDisconnectRtsp(): void;
						onAuthErrorRtsp(): void;
						onAuthSuccessRtsp(): void;
					});
					public constructor();
					public onNewBitrateRtsp(long0: number): void;
					public onAuthErrorRtsp(): void;
					public onConnectionFailedRtsp(string0: string): void;
					public onDisconnectRtsp(): void;
					public onConnectionSuccessRtsp(): void;
					public onAuthSuccessRtsp(): void;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module utils {
				export class CreateSSLSocket extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtsp.utils.CreateSSLSocket>;
					public constructor();
					public static createSSlSocket(host: string, port: number): java.net.Socket;
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module utils {
				export class RtpConstants extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtsp.utils.RtpConstants>;
					public static clockVideoFrequency: number;
					public static RTP_HEADER_LENGTH: number;
					public static MTU: number;
					public static payloadType: number;
					public static IDR: number;
					public static IDR_N_LP: number;
					public static IDR_W_DLP: number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module pedro {
		export module rtsp {
			export module utils {
				export class TLSSocketFactory extends javax.net.ssl.SSLSocketFactory {
					public static class: java.lang.Class<com.pedro.rtsp.utils.TLSSocketFactory>;
					public getSupportedCipherSuites(): native.Array<string>;
					public createSocket(): java.net.Socket;
					public createSocket(string0: string, int1: number): java.net.Socket;
					public createSocket(address: java.net.InetAddress, port: number, localAddress: java.net.InetAddress, localPort: number): java.net.Socket;
					public getDefaultCipherSuites(): native.Array<string>;
					public createSocket(socket0: java.net.Socket, string1: string, int2: number, boolean3: boolean): java.net.Socket;
					public createSocket(s: java.net.Socket, host: string, port: number, autoClose: boolean): java.net.Socket;
					public createSocket(host: string, port: number, localHost: java.net.InetAddress, localPort: number): java.net.Socket;
					public createSocket(inetAddress0: java.net.InetAddress, int1: number, inetAddress2: java.net.InetAddress, int3: number): java.net.Socket;
					public createSocket(host: string, port: number): java.net.Socket;
					public createSocket(inetAddress0: java.net.InetAddress, int1: number): java.net.Socket;
					public constructor();
					public createSocket(string0: string, int1: number, inetAddress2: java.net.InetAddress, int3: number): java.net.Socket;
					public createSocket(host: java.net.InetAddress, port: number): java.net.Socket;
				}
			}
		}
	}
}

//Generics information:

