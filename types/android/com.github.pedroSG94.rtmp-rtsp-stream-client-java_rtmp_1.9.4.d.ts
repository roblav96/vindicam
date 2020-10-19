declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export class Crypto extends java.lang.Object {
					public static class: java.lang.Class<com.github.faucamp.simplertmp.Crypto>;
					public calculateHmacSHA256(input: native.Array<number>, key: native.Array<number>): native.Array<number>;
					public constructor();
					public calculateHmacSHA256(input: native.Array<number>, key: native.Array<number>, length: number): native.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export class DefaultRtmpPublisher extends java.lang.Object implements com.github.faucamp.simplertmp.RtmpPublisher {
					public static class: java.lang.Class<com.github.faucamp.simplertmp.DefaultRtmpPublisher>;
					public publishVideoData(data: native.Array<number>, size: number, dts: number): void;
					public publish(publishType: string): boolean;
					public setVideoResolution(width: number, height: number): void;
					public close(): void;
					public publishAudioData(data: native.Array<number>, size: number, dts: number): void;
					public setLogs(enable: boolean): void;
					public constructor(connectCheckerRtmp: net.ossrs.rtmp.ConnectCheckerRtmp);
					public connect(url: string): boolean;
					public setAuthorization(user: string, password: string): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export class RtmpPublisher extends java.lang.Object {
					public static class: java.lang.Class<com.github.faucamp.simplertmp.RtmpPublisher>;
					/**
					 * Constructs a new instance of the com.github.faucamp.simplertmp.RtmpPublisher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						connect(string0: string): boolean;
						publish(string0: string): boolean;
						close(): void;
						publishVideoData(bytes0: native.Array<number>, int1: number, int2: number): void;
						publishAudioData(bytes0: native.Array<number>, int1: number, int2: number): void;
						setVideoResolution(int0: number, int1: number): void;
						setAuthorization(string0: string, string1: string): void;
						setLogs(boolean0: boolean): void;
					});
					public constructor();
					public connect(string0: string): boolean;
					public publish(string0: string): boolean;
					public publishAudioData(bytes0: native.Array<number>, int1: number, int2: number): void;
					public close(): void;
					public publishVideoData(bytes0: native.Array<number>, int1: number, int2: number): void;
					public setVideoResolution(int0: number, int1: number): void;
					public setLogs(boolean0: boolean): void;
					public setAuthorization(string0: string, string1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export class Util extends java.lang.Object {
					public static class: java.lang.Class<com.github.faucamp.simplertmp.Util>;
					public static writeUnsignedInt24(out: java.io.OutputStream, value: number): void;
					public static toHexString(b: number): string;
					public static unsignedInt32ToByteArray(value: number): native.Array<number>;
					public static readUnsignedInt32(in0: java.io.InputStream): number;
					public static toByteArray(d: number): native.Array<number>;
					public static writeUnsignedInt32(out: java.io.OutputStream, value: number): void;
					public static readUnsignedInt16(in0: java.io.InputStream): number;
					public static toUnsignedInt32(bytes: native.Array<number>): number;
					public static readDouble(in0: java.io.InputStream): number;
					public static getOpaque(description: string): string;
					public static readUnsignedInt24(in0: java.io.InputStream): number;
					public static readBytesUntilFull(in0: java.io.InputStream, targetBuffer: native.Array<number>): void;
					public static writeDouble(out: java.io.OutputStream, d: number): void;
					public static toUnsignedInt32LittleEndian(bytes: native.Array<number>): number;
					public static stringToMD5BASE64(s: string): string;
					public static toUnsignedInt16(bytes: native.Array<number>): number;
					public static toUnsignedInt24(bytes: native.Array<number>): number;
					public static getChallenge(description: string): string;
					public constructor();
					public static writeUnsignedInt16(out: java.io.OutputStream, value: number): void;
					public static writeUnsignedInt32LittleEndian(out: java.io.OutputStream, value: number): void;
					public static getSalt(description: string): string;
					public static toHexString(raw: native.Array<number>): string;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module amf {
					export class AmfArray extends java.lang.Object implements com.github.faucamp.simplertmp.amf.AmfData {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.amf.AmfArray>;
						public getItems(): java.util.List<com.github.faucamp.simplertmp.amf.AmfData>;
						public constructor();
						public getSize(): number;
						public addItem(dataItem: com.github.faucamp.simplertmp.amf.AmfData): void;
						public getLength(): number;
						public readFrom(in0: java.io.InputStream): void;
						public writeTo(out: java.io.OutputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module amf {
					export class AmfBoolean extends java.lang.Object implements com.github.faucamp.simplertmp.amf.AmfData {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.amf.AmfBoolean>;
						public constructor();
						public getSize(): number;
						public setValue(value: boolean): void;
						public isValue(): boolean;
						public static readBooleanFrom(in0: java.io.InputStream): boolean;
						public readFrom(in0: java.io.InputStream): void;
						public writeTo(out: java.io.OutputStream): void;
						public constructor(value: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module amf {
					export class AmfData extends java.lang.Object {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.amf.AmfData>;
						/**
						 * Constructs a new instance of the com.github.faucamp.simplertmp.amf.AmfData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							writeTo(outputStream0: java.io.OutputStream): void;
							readFrom(inputStream0: java.io.InputStream): void;
							getSize(): number;
						});
						public constructor();
						public getSize(): number;
						public writeTo(outputStream0: java.io.OutputStream): void;
						public readFrom(inputStream0: java.io.InputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module amf {
					export class AmfDecoder extends java.lang.Object {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.amf.AmfDecoder>;
						public constructor();
						public static readFrom(in0: java.io.InputStream): com.github.faucamp.simplertmp.amf.AmfData;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module amf {
					export class AmfMap extends com.github.faucamp.simplertmp.amf.AmfObject {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.amf.AmfMap>;
						public constructor();
						public getSize(): number;
						public readFrom(in0: java.io.InputStream): void;
						public writeTo(out: java.io.OutputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module amf {
					export class AmfNull extends java.lang.Object implements com.github.faucamp.simplertmp.amf.AmfData {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.amf.AmfNull>;
						public constructor();
						public static writeNullTo(out: java.io.OutputStream): void;
						public getSize(): number;
						public readFrom(in0: java.io.InputStream): void;
						public writeTo(out: java.io.OutputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module amf {
					export class AmfNumber extends java.lang.Object implements com.github.faucamp.simplertmp.amf.AmfData {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.amf.AmfNumber>;
						public static SIZE: number;
						public constructor();
						public getSize(): number;
						public setValue(value: number): void;
						public static readNumberFrom(in0: java.io.InputStream): number;
						public static writeNumberTo(out: java.io.OutputStream, number: number): void;
						public readFrom(in0: java.io.InputStream): void;
						public constructor(value: number);
						public writeTo(out: java.io.OutputStream): void;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module amf {
					export class AmfObject extends java.lang.Object implements com.github.faucamp.simplertmp.amf.AmfData {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.amf.AmfObject>;
						public size: number;
						public static OBJECT_END_MARKER: native.Array<number>;
						public getProperty(key: string): com.github.faucamp.simplertmp.amf.AmfData;
						public constructor();
						public setProperty(key: string, value: com.github.faucamp.simplertmp.amf.AmfData): void;
						public getSize(): number;
						public setProperty(key: string, value: number): void;
						public setProperty(key: string, value: boolean): void;
						public readFrom(in0: java.io.InputStream): void;
						public setProperty(key: string, value: string): void;
						public writeTo(out: java.io.OutputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module amf {
					export class AmfString extends java.lang.Object implements com.github.faucamp.simplertmp.amf.AmfData {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.amf.AmfString>;
						public constructor();
						public constructor(value: string);
						public getValue(): string;
						public constructor(value: string, isKey: boolean);
						public writeTo(out: java.io.OutputStream): void;
						public static readStringFrom(in0: java.io.InputStream, isKey: boolean): string;
						public setKey(key: boolean): void;
						public getSize(): number;
						public isKey(): boolean;
						public static writeStringTo(out: java.io.OutputStream, string: string, isKey: boolean): void;
						public constructor(isKey: boolean);
						public static sizeOf(string: string, isKey: boolean): number;
						public readFrom(in0: java.io.InputStream): void;
						public setValue(value: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module amf {
					export class AmfType {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.amf.AmfType>;
						public static NUMBER: com.github.faucamp.simplertmp.amf.AmfType;
						public static BOOLEAN: com.github.faucamp.simplertmp.amf.AmfType;
						public static STRING: com.github.faucamp.simplertmp.amf.AmfType;
						public static OBJECT: com.github.faucamp.simplertmp.amf.AmfType;
						public static NULL: com.github.faucamp.simplertmp.amf.AmfType;
						public static UNDEFINED: com.github.faucamp.simplertmp.amf.AmfType;
						public static ECMA_MAP: com.github.faucamp.simplertmp.amf.AmfType;
						public static STRICT_ARRAY: com.github.faucamp.simplertmp.amf.AmfType;
						public static values(): native.Array<com.github.faucamp.simplertmp.amf.AmfType>;
						public static valueOf(name: string): com.github.faucamp.simplertmp.amf.AmfType;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(amfTypeByte: number): com.github.faucamp.simplertmp.amf.AmfType;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module amf {
					export class AmfUndefined extends java.lang.Object implements com.github.faucamp.simplertmp.amf.AmfData {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.amf.AmfUndefined>;
						public constructor();
						public getSize(): number;
						public readFrom(in0: java.io.InputStream): void;
						public writeTo(out: java.io.OutputStream): void;
						public static writeUndefinedTo(out: java.io.OutputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module io {
					export class ChunkStreamInfo extends java.lang.Object {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.io.ChunkStreamInfo>;
						public static RTMP_CID_PROTOCOL_CONTROL: number;
						public static RTMP_CID_OVER_CONNECTION: number;
						public static RTMP_CID_OVER_CONNECTION2: number;
						public static RTMP_CID_OVER_STREAM: number;
						public static RTMP_CID_VIDEO: number;
						public static RTMP_CID_AUDIO: number;
						public markDeltaTimestampTx(): number;
						public constructor();
						public storePacketChunk(in0: java.io.InputStream, chunkSize: number): boolean;
						public getStoredPacketInputStream(): java.io.ByteArrayInputStream;
						public getPrevHeaderTx(): com.github.faucamp.simplertmp.packets.RtmpHeader;
						public setPrevHeaderRx(previousHeader: com.github.faucamp.simplertmp.packets.RtmpHeader): void;
						public canReusePrevHeaderTx(forMessageType: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType): boolean;
						public setPrevHeaderTx(prevHeaderTx: com.github.faucamp.simplertmp.packets.RtmpHeader): void;
						public prevHeaderRx(): com.github.faucamp.simplertmp.packets.RtmpHeader;
						public static markSessionTimestampTx(): void;
						public markAbsoluteTimestampTx(): number;
						public clearStoredChunks(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module io {
					export class RtmpConnection extends java.lang.Object implements com.github.faucamp.simplertmp.RtmpPublisher {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.io.RtmpConnection>;
						public setAuthorization(user: string, password: string): void;
						public setLogs(enable: boolean): void;
						public connect(url: string): boolean;
						public setVideoResolution(width: number, height: number): void;
						public constructor(connectCheckerRtmp: net.ossrs.rtmp.ConnectCheckerRtmp);
						public close(): void;
						public publish(type: string): boolean;
						public publishVideoData(data: native.Array<number>, size: number, dts: number): void;
						public publishAudioData(data: native.Array<number>, size: number, dts: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module io {
					export class RtmpDecoder extends java.lang.Object {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.io.RtmpDecoder>;
						public readPacket(in0: java.io.InputStream): com.github.faucamp.simplertmp.packets.RtmpPacket;
						public constructor(rtmpSessionInfo: com.github.faucamp.simplertmp.io.RtmpSessionInfo);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module io {
					export class RtmpSessionInfo extends java.lang.Object {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.io.RtmpSessionInfo>;
						public constructor();
						public getChunkStreamInfo(chunkStreamId: number): com.github.faucamp.simplertmp.io.ChunkStreamInfo;
						public setRxChunkSize(chunkSize: number): void;
						public setAcknowledgmentWindowSize(acknowledgementWindowSize: number): void;
						public setTxChunkSize(chunkSize: number): void;
						public addToWindowBytesRead(numBytes: number, packet: com.github.faucamp.simplertmp.packets.RtmpPacket): void;
						public getRxChunkSize(): number;
						public takeInvokedCommand(transactionId: number): string;
						public addInvokedCommand(transactionId: number, commandName: string): string;
						public getAcknowledgementWindowSize(): number;
						public getTxChunkSize(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module io {
					export class WindowAckRequired extends java.lang.Exception {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.io.WindowAckRequired>;
						public constructor(bytesReadThusFar: number, rtmpPacket: com.github.faucamp.simplertmp.packets.RtmpPacket);
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public getBytesRead(): number;
						public constructor(message: string);
						public getRtmpPacket(): com.github.faucamp.simplertmp.packets.RtmpPacket;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module packets {
					export class Abort extends com.github.faucamp.simplertmp.packets.RtmpPacket {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.Abort>;
						public array(): native.Array<number>;
						public writeBody(outputStream0: java.io.OutputStream): void;
						public readBody(in0: java.io.InputStream): void;
						public constructor(header: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public writeBody(out: java.io.OutputStream): void;
						public setChunkStreamId(chunkStreamId: number): void;
						public readBody(inputStream0: java.io.InputStream): void;
						public size(): number;
						public getChunkStreamId(): number;
						public constructor(chunkStreamId: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module packets {
					export class Acknowledgement extends com.github.faucamp.simplertmp.packets.RtmpPacket {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.Acknowledgement>;
						public writeBody(outputStream0: java.io.OutputStream): void;
						public array(): native.Array<number>;
						public readBody(in0: java.io.InputStream): void;
						public constructor(header: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public writeBody(out: java.io.OutputStream): void;
						public getSequenceNumber(): number;
						public constructor(numBytesReadThusFar: number);
						public setSequenceNumber(numBytesRead: number): void;
						public readBody(inputStream0: java.io.InputStream): void;
						public getAcknowledgementWindowSize(): number;
						public size(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module packets {
					export class Audio extends com.github.faucamp.simplertmp.packets.ContentData {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.Audio>;
						public constructor();
						public constructor(header: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module packets {
					export class Command extends com.github.faucamp.simplertmp.packets.VariableBodyRtmpPacket {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.Command>;
						public setCommandName(commandName: string): void;
						public readBody(in0: java.io.InputStream): void;
						public constructor(commandName: string, transactionId: number);
						public toString(): string;
						public writeBody(outputStream0: java.io.OutputStream): void;
						public array(): native.Array<number>;
						public constructor(commandName: string, transactionId: number, channelInfo: com.github.faucamp.simplertmp.io.ChunkStreamInfo);
						public constructor(header: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public writeBody(out: java.io.OutputStream): void;
						public readBody(inputStream0: java.io.InputStream): void;
						public size(): number;
						public getCommandName(): string;
						public setTransactionId(transactionId: number): void;
						public getTransactionId(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module packets {
					export abstract class ContentData extends com.github.faucamp.simplertmp.packets.RtmpPacket {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.ContentData>;
						public data: native.Array<number>;
						public writeBody(outputStream0: java.io.OutputStream): void;
						public array(): native.Array<number>;
						public readBody(in0: java.io.InputStream): void;
						public constructor(header: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public writeBody(out: java.io.OutputStream): void;
						public getData(): native.Array<number>;
						public readBody(inputStream0: java.io.InputStream): void;
						public size(): number;
						public setData(data: native.Array<number>, size: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module packets {
					export class Data extends com.github.faucamp.simplertmp.packets.VariableBodyRtmpPacket {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.Data>;
						public writeBody(outputStream0: java.io.OutputStream): void;
						public array(): native.Array<number>;
						public readBody(in0: java.io.InputStream): void;
						public constructor(header: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public constructor(type: string);
						public writeBody(out: java.io.OutputStream): void;
						public setType(type: string): void;
						public getType(): string;
						public readBody(inputStream0: java.io.InputStream): void;
						public size(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module packets {
					export class Handshake extends java.lang.Object {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.Handshake>;
						public writeC1(out: java.io.OutputStream): void;
						public constructor();
						public writeC0(out: java.io.OutputStream): void;
						public writeC2(out: java.io.OutputStream): void;
						public readS1(in0: java.io.InputStream): void;
						public readS0(in0: java.io.InputStream): void;
						public readS2(in0: java.io.InputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module packets {
					export class RtmpHeader extends java.lang.Object {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.RtmpHeader>;
						public setChunkStreamId(channelId: number): void;
						public setMessageType(messageType: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType): void;
						public constructor();
						public setAbsoluteTimestamp(absoluteTimestamp: number): void;
						public setTimestampDelta(timestampDelta: number): void;
						public getAbsoluteTimestamp(): number;
						public getPacketLength(): number;
						public getMessageType(): com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
						public getChunkType(): com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType;
						public setPacketLength(packetLength: number): void;
						public getChunkStreamId(): number;
						public setMessageStreamId(messageStreamId: number): void;
						public writeTo(out: java.io.OutputStream, chunkType: com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType, chunkStreamInfo: com.github.faucamp.simplertmp.io.ChunkStreamInfo): void;
						public static readHeader(in0: java.io.InputStream, rtmpSessionInfo: com.github.faucamp.simplertmp.io.RtmpSessionInfo): com.github.faucamp.simplertmp.packets.RtmpHeader;
						public getTimestampDelta(): number;
						public constructor(chunkType: com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType, chunkStreamId: number, messageType: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType);
						public getMessageStreamId(): number;
						public setChunkType(chunkType: com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType): void;
					}
					export module RtmpHeader {
						export class ChunkType {
							public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType>;
							public static TYPE_0_FULL: com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType;
							public static TYPE_1_RELATIVE_LARGE: com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType;
							public static TYPE_2_RELATIVE_TIMESTAMP_ONLY: com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType;
							public static TYPE_3_RELATIVE_SINGLE_BYTE: com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType;
							public static valueOf(chunkHeaderType: number): com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static valueOf(name: string): com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType;
							public static values(): native.Array<com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType>;
							public getValue(): number;
						}
						export class MessageType {
							public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType>;
							public static SET_CHUNK_SIZE: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
							public static ABORT: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
							public static ACKNOWLEDGEMENT: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
							public static USER_CONTROL_MESSAGE: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
							public static WINDOW_ACKNOWLEDGEMENT_SIZE: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
							public static SET_PEER_BANDWIDTH: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
							public static AUDIO: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
							public static VIDEO: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
							public static DATA_AMF3: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
							public static SHARED_OBJECT_AMF3: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
							public static COMMAND_AMF3: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
							public static DATA_AMF0: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
							public static COMMAND_AMF0: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
							public static SHARED_OBJECT_AMF0: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
							public static AGGREGATE_MESSAGE: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
							public static valueOf(name: string): com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
							public static valueOf(messageTypeId: number): com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static values(): native.Array<com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType>;
							public getValue(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module packets {
					export abstract class RtmpPacket extends java.lang.Object {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.RtmpPacket>;
						public header: com.github.faucamp.simplertmp.packets.RtmpHeader;
						public writeBody(outputStream0: java.io.OutputStream): void;
						public array(): native.Array<number>;
						public constructor(header: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public getHeader(): com.github.faucamp.simplertmp.packets.RtmpHeader;
						public writeTo(out: java.io.OutputStream, chunkSize: number, chunkStreamInfo: com.github.faucamp.simplertmp.io.ChunkStreamInfo): void;
						public readBody(inputStream0: java.io.InputStream): void;
						public size(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module packets {
					export class SetChunkSize extends com.github.faucamp.simplertmp.packets.RtmpPacket {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.SetChunkSize>;
						public writeBody(outputStream0: java.io.OutputStream): void;
						public array(): native.Array<number>;
						public readBody(in0: java.io.InputStream): void;
						public constructor(header: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public constructor(chunkSize: number);
						public writeBody(out: java.io.OutputStream): void;
						public setChunkSize(chunkSize: number): void;
						public getChunkSize(): number;
						public readBody(inputStream0: java.io.InputStream): void;
						public size(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module packets {
					export class SetPeerBandwidth extends com.github.faucamp.simplertmp.packets.RtmpPacket {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.SetPeerBandwidth>;
						public getLimitType(): com.github.faucamp.simplertmp.packets.SetPeerBandwidth.LimitType;
						public setLimitType(limitType: com.github.faucamp.simplertmp.packets.SetPeerBandwidth.LimitType): void;
						public readBody(in0: java.io.InputStream): void;
						public setAcknowledgementWindowSize(acknowledgementWindowSize: number): void;
						public getAcknowledgementWindowSize(): number;
						public toString(): string;
						public writeBody(outputStream0: java.io.OutputStream): void;
						public array(): native.Array<number>;
						public constructor(header: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public writeBody(out: java.io.OutputStream): void;
						public constructor(acknowledgementWindowSize: number, limitType: com.github.faucamp.simplertmp.packets.SetPeerBandwidth.LimitType, channelInfo: com.github.faucamp.simplertmp.io.ChunkStreamInfo);
						public readBody(inputStream0: java.io.InputStream): void;
						public size(): number;
					}
					export module SetPeerBandwidth {
						export class LimitType {
							public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.SetPeerBandwidth.LimitType>;
							public static HARD: com.github.faucamp.simplertmp.packets.SetPeerBandwidth.LimitType;
							public static SOFT: com.github.faucamp.simplertmp.packets.SetPeerBandwidth.LimitType;
							public static DYNAMIC: com.github.faucamp.simplertmp.packets.SetPeerBandwidth.LimitType;
							public static values(): native.Array<com.github.faucamp.simplertmp.packets.SetPeerBandwidth.LimitType>;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static valueOf(name: string): com.github.faucamp.simplertmp.packets.SetPeerBandwidth.LimitType;
							public static valueOf(intValue: number): com.github.faucamp.simplertmp.packets.SetPeerBandwidth.LimitType;
							public getIntValue(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module packets {
					export class UserControl extends com.github.faucamp.simplertmp.packets.RtmpPacket {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.UserControl>;
						public getFirstEventData(): number;
						public readBody(in0: java.io.InputStream): void;
						public constructor(replyToPing: com.github.faucamp.simplertmp.packets.UserControl, channelInfo: com.github.faucamp.simplertmp.io.ChunkStreamInfo);
						public toString(): string;
						public writeBody(outputStream0: java.io.OutputStream): void;
						public array(): native.Array<number>;
						public setType(type: com.github.faucamp.simplertmp.packets.UserControl.Type): void;
						public setEventData(streamId: number, bufferLength: number): void;
						public constructor(header: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public writeBody(out: java.io.OutputStream): void;
						public getType(): com.github.faucamp.simplertmp.packets.UserControl.Type;
						public constructor(channelInfo: com.github.faucamp.simplertmp.io.ChunkStreamInfo);
						public setEventData(eventData: number): void;
						public constructor(type: com.github.faucamp.simplertmp.packets.UserControl.Type, channelInfo: com.github.faucamp.simplertmp.io.ChunkStreamInfo);
						public readBody(inputStream0: java.io.InputStream): void;
						public getEventData(): native.Array<number>;
						public size(): number;
					}
					export module UserControl {
						export class Type {
							public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.UserControl.Type>;
							public static STREAM_BEGIN: com.github.faucamp.simplertmp.packets.UserControl.Type;
							public static STREAM_EOF: com.github.faucamp.simplertmp.packets.UserControl.Type;
							public static STREAM_DRY: com.github.faucamp.simplertmp.packets.UserControl.Type;
							public static SET_BUFFER_LENGTH: com.github.faucamp.simplertmp.packets.UserControl.Type;
							public static STREAM_IS_RECORDED: com.github.faucamp.simplertmp.packets.UserControl.Type;
							public static PING_REQUEST: com.github.faucamp.simplertmp.packets.UserControl.Type;
							public static PONG_REPLY: com.github.faucamp.simplertmp.packets.UserControl.Type;
							public static BUFFER_EMPTY: com.github.faucamp.simplertmp.packets.UserControl.Type;
							public static BUFFER_READY: com.github.faucamp.simplertmp.packets.UserControl.Type;
							public static valueOf(name: string): com.github.faucamp.simplertmp.packets.UserControl.Type;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static valueOf(intValue: number): com.github.faucamp.simplertmp.packets.UserControl.Type;
							public static values(): native.Array<com.github.faucamp.simplertmp.packets.UserControl.Type>;
							public getIntValue(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module packets {
					export abstract class VariableBodyRtmpPacket extends com.github.faucamp.simplertmp.packets.RtmpPacket {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.VariableBodyRtmpPacket>;
						public data: java.util.List<com.github.faucamp.simplertmp.amf.AmfData>;
						public addData(number: number): void;
						public constructor(header: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public writeVariableData(out: java.io.OutputStream): void;
						public addData(dataItem: com.github.faucamp.simplertmp.amf.AmfData): void;
						public readVariableData(in0: java.io.InputStream, bytesAlreadyRead: number): void;
						public addData(string: string): void;
						public addData(bool: boolean): void;
						public getData(): java.util.List<com.github.faucamp.simplertmp.amf.AmfData>;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module packets {
					export class Video extends com.github.faucamp.simplertmp.packets.ContentData {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.Video>;
						public constructor();
						public constructor(header: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export module packets {
					export class WindowAckSize extends com.github.faucamp.simplertmp.packets.RtmpPacket {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.WindowAckSize>;
						public writeBody(outputStream0: java.io.OutputStream): void;
						public array(): native.Array<number>;
						public constructor(acknowledgementWindowSize: number, channelInfo: com.github.faucamp.simplertmp.io.ChunkStreamInfo);
						public readBody(in0: java.io.InputStream): void;
						public constructor(header: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public writeBody(out: java.io.OutputStream): void;
						public setAcknowledgementWindowSize(acknowledgementWindowSize: number): void;
						public readBody(inputStream0: java.io.InputStream): void;
						public getAcknowledgementWindowSize(): number;
						public size(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module net {
	export module ossrs {
		export module rtmp {
			export class BitrateManager extends java.lang.Object {
				public static class: java.lang.Class<net.ossrs.rtmp.BitrateManager>;
				public calculateBitrate(size: number): void;
				public constructor(connectCheckerRtsp: net.ossrs.rtmp.ConnectCheckerRtmp);
			}
		}
	}
}

declare module net {
	export module ossrs {
		export module rtmp {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<net.ossrs.rtmp.BuildConfig>;
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

declare module net {
	export module ossrs {
		export module rtmp {
			export class ConnectCheckerRtmp extends java.lang.Object {
				public static class: java.lang.Class<net.ossrs.rtmp.ConnectCheckerRtmp>;
				/**
				 * Constructs a new instance of the net.ossrs.rtmp.ConnectCheckerRtmp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onConnectionSuccessRtmp(): void;
					onConnectionFailedRtmp(string0: string): void;
					onNewBitrateRtmp(long0: number): void;
					onDisconnectRtmp(): void;
					onAuthErrorRtmp(): void;
					onAuthSuccessRtmp(): void;
				});
				public constructor();
				public onDisconnectRtmp(): void;
				public onNewBitrateRtmp(long0: number): void;
				public onAuthErrorRtmp(): void;
				public onConnectionSuccessRtmp(): void;
				public onConnectionFailedRtmp(string0: string): void;
				public onAuthSuccessRtmp(): void;
			}
		}
	}
}

declare module net {
	export module ossrs {
		export module rtmp {
			export class CreateSSLSocket extends java.lang.Object {
				public static class: java.lang.Class<net.ossrs.rtmp.CreateSSLSocket>;
				public static createSSlSocket(host: string, port: number): java.net.Socket;
				public constructor();
			}
		}
	}
}

declare module net {
	export module ossrs {
		export module rtmp {
			export class ProfileIop extends java.lang.Object {
				public static class: java.lang.Class<net.ossrs.rtmp.ProfileIop>;
				public static BASELINE: number;
				public static CONSTRAINED: number;
				public constructor();
			}
		}
	}
}

declare module net {
	export module ossrs {
		export module rtmp {
			export class SrsAllocator extends java.lang.Object {
				public static class: java.lang.Class<net.ossrs.rtmp.SrsAllocator>;
				public release(allocation: net.ossrs.rtmp.SrsAllocator.Allocation): void;
				public constructor(individualAllocationSize: number, initialAllocationCount: number);
				public allocate(size: number): net.ossrs.rtmp.SrsAllocator.Allocation;
				public constructor(individualAllocationSize: number);
			}
			export module SrsAllocator {
				export class Allocation extends java.lang.Object {
					public static class: java.lang.Class<net.ossrs.rtmp.SrsAllocator.Allocation>;
					public appendOffset(offset: number): void;
					public array(): native.Array<number>;
					public constructor(this0: net.ossrs.rtmp.SrsAllocator, size: number);
					public put(s: number): void;
					public put(bs: native.Array<number>): void;
					public clear(): void;
					public size(): number;
					public put(b: number): void;
					public put(i: number): void;
					public put(b: number, pos: number): void;
				}
			}
		}
	}
}

declare module net {
	export module ossrs {
		export module rtmp {
			export class SrsFlvMuxer extends java.lang.Object {
				public static class: java.lang.Class<net.ossrs.rtmp.SrsFlvMuxer>;
				public getDroppedVideoFrames(): number;
				public resetSentAudioFrames(): void;
				public resetDroppedAudioFrames(): void;
				public start(rtmpUrl: string): void;
				public getFlvTagCacheSize(): number;
				public getSentVideoFrames(): number;
				public setProfileIop(profileIop: number): void;
				public sendAudio(byteBuffer: java.nio.ByteBuffer, bufferInfo: globalAndroid.media.MediaCodec.BufferInfo): void;
				public constructor(connectCheckerRtmp: net.ossrs.rtmp.ConnectCheckerRtmp, publisher: com.github.faucamp.simplertmp.RtmpPublisher);
				public isConnected(): boolean;
				public setLogs(enable: boolean): void;
				public constructor(connectCheckerRtmp: net.ossrs.rtmp.ConnectCheckerRtmp);
				public setIsStereo(isStereo: boolean): void;
				public sendVideo(byteBuffer: java.nio.ByteBuffer, bufferInfo: globalAndroid.media.MediaCodec.BufferInfo): void;
				public setAuthorization(user: string, password: string): void;
				public shouldRetry(reason: string): boolean;
				public setSpsPPs(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer): void;
				public getSentAudioFrames(): number;
				public setReTries(reTries: number): void;
				public setSampleRate(sampleRate: number): void;
				public setVideoResolution(width: number, height: number): void;
				public resetDroppedVideoFrames(): void;
				public forceAkamaiTs(enabled: boolean): void;
				public reConnect(delay: number): void;
				public stop(): void;
				public resizeFlvTagCache(newSize: number): void;
				public resetSentVideoFrames(): void;
				public getDroppedAudioFrames(): number;
			}
			export module SrsFlvMuxer {
				export class AudioSampleRate extends java.lang.Object {
					public static class: java.lang.Class<net.ossrs.rtmp.SrsFlvMuxer.AudioSampleRate>;
					public static R11025: number;
					public static R12000: number;
					public static R16000: number;
					public static R22050: number;
					public static R24000: number;
					public static R32000: number;
					public static R44100: number;
					public static R48000: number;
					public static R64000: number;
					public static R88200: number;
					public static R96000: number;
				}
				export class SrsAacObjectType extends java.lang.Object {
					public static class: java.lang.Class<net.ossrs.rtmp.SrsFlvMuxer.SrsAacObjectType>;
					public static AacLC: number;
				}
				export class SrsAnnexbSearch extends java.lang.Object {
					public static class: java.lang.Class<net.ossrs.rtmp.SrsFlvMuxer.SrsAnnexbSearch>;
					public nb_start_code: number;
					public match: boolean;
				}
				export class SrsAvcNaluType extends java.lang.Object {
					public static class: java.lang.Class<net.ossrs.rtmp.SrsFlvMuxer.SrsAvcNaluType>;
					public static Reserved: number;
					public static NonIDR: number;
					public static DataPartitionA: number;
					public static DataPartitionB: number;
					public static DataPartitionC: number;
					public static IDR: number;
					public static SEI: number;
					public static SPS: number;
					public static PPS: number;
					public static AccessUnitDelimiter: number;
					public static EOSequence: number;
					public static EOStream: number;
					public static FilterData: number;
					public static SPSExt: number;
					public static PrefixNALU: number;
					public static SubsetSPS: number;
					public static LayerWithoutPartition: number;
					public static CodedSliceExt: number;
				}
				export class SrsCodecFlvTag extends java.lang.Object {
					public static class: java.lang.Class<net.ossrs.rtmp.SrsFlvMuxer.SrsCodecFlvTag>;
					public static Audio: number;
					public static Video: number;
				}
				export class SrsCodecVideo extends java.lang.Object {
					public static class: java.lang.Class<net.ossrs.rtmp.SrsFlvMuxer.SrsCodecVideo>;
					public static AVC: number;
				}
				export class SrsCodecVideoAVCFrame extends java.lang.Object {
					public static class: java.lang.Class<net.ossrs.rtmp.SrsFlvMuxer.SrsCodecVideoAVCFrame>;
					public static KeyFrame: number;
					public static InterFrame: number;
				}
				export class SrsCodecVideoAVCType extends java.lang.Object {
					public static class: java.lang.Class<net.ossrs.rtmp.SrsFlvMuxer.SrsCodecVideoAVCType>;
					public static SequenceHeader: number;
					public static NALU: number;
				}
				export class SrsFlv extends java.lang.Object {
					public static class: java.lang.Class<net.ossrs.rtmp.SrsFlvMuxer.SrsFlv>;
					public setSpsPPs(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer): void;
					public reset(): void;
					public constructor(param0: net.ossrs.rtmp.SrsFlvMuxer);
					public writeVideoSample(bb: java.nio.ByteBuffer, bi: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setAchannel(achannel: number): void;
					public writeAudioSample(bb: java.nio.ByteBuffer, bi: globalAndroid.media.MediaCodec.BufferInfo): void;
				}
				export class SrsFlvFrame extends java.lang.Object {
					public static class: java.lang.Class<net.ossrs.rtmp.SrsFlvMuxer.SrsFlvFrame>;
					public flvTag: net.ossrs.rtmp.SrsAllocator.Allocation;
					public avc_aac_type: number;
					public frame_type: number;
					public type: number;
					public dts: number;
					public is_sequenceHeader(): boolean;
					public is_keyframe(): boolean;
					public is_audio(): boolean;
					public is_video(): boolean;
				}
				export class SrsFlvFrameBytes extends java.lang.Object {
					public static class: java.lang.Class<net.ossrs.rtmp.SrsFlvMuxer.SrsFlvFrameBytes>;
					public data: java.nio.ByteBuffer;
					public size: number;
				}
				export class SrsRawH264Stream extends java.lang.Object {
					public static class: java.lang.Class<net.ossrs.rtmp.SrsFlvMuxer.SrsRawH264Stream>;
					public isPps(frame: net.ossrs.rtmp.SrsFlvMuxer.SrsFlvFrameBytes): boolean;
					public muxSequenceHeader(sps: java.nio.ByteBuffer, pps: java.nio.ByteBuffer, frames: java.util.ArrayList<net.ossrs.rtmp.SrsFlvMuxer.SrsFlvFrameBytes>): void;
					public muxFlvTag(frames: java.util.ArrayList<net.ossrs.rtmp.SrsFlvMuxer.SrsFlvFrameBytes>, frame_type: number, avc_packet_type: number): net.ossrs.rtmp.SrsAllocator.Allocation;
					public isSps(frame: net.ossrs.rtmp.SrsFlvMuxer.SrsFlvFrameBytes): boolean;
					public muxNaluHeader(frame: net.ossrs.rtmp.SrsFlvMuxer.SrsFlvFrameBytes): net.ossrs.rtmp.SrsFlvMuxer.SrsFlvFrameBytes;
					public demuxAnnexb(bb: java.nio.ByteBuffer, size: number, isOnlyChkHeader: boolean): net.ossrs.rtmp.SrsFlvMuxer.SrsFlvFrameBytes;
				}
			}
		}
	}
}

declare module net {
	export module ossrs {
		export module rtmp {
			export class TLSSocketFactory extends javax.net.ssl.SSLSocketFactory {
				public static class: java.lang.Class<net.ossrs.rtmp.TLSSocketFactory>;
				public createSocket(inetAddress0: java.net.InetAddress, int1: number, inetAddress2: java.net.InetAddress, int3: number): java.net.Socket;
				public createSocket(s: java.net.Socket, host: string, port: number, autoClose: boolean): java.net.Socket;
				public createSocket(): java.net.Socket;
				public createSocket(address: java.net.InetAddress, port: number, localAddress: java.net.InetAddress, localPort: number): java.net.Socket;
				public createSocket(host: string, port: number): java.net.Socket;
				public createSocket(host: java.net.InetAddress, port: number): java.net.Socket;
				public constructor();
				public createSocket(socket0: java.net.Socket, string1: string, int2: number, boolean3: boolean): java.net.Socket;
				public createSocket(host: string, port: number, localHost: java.net.InetAddress, localPort: number): java.net.Socket;
				public getDefaultCipherSuites(): native.Array<string>;
				public createSocket(string0: string, int1: number, inetAddress2: java.net.InetAddress, int3: number): java.net.Socket;
				public getSupportedCipherSuites(): native.Array<string>;
				public createSocket(string0: string, int1: number): java.net.Socket;
				public createSocket(inetAddress0: java.net.InetAddress, int1: number): java.net.Socket;
			}
		}
	}
}

//Generics information:

