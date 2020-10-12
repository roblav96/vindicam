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
						public running: boolean;
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
					export class MicrophoneManagerManual extends com.pedro.encoder.input.audio.MicrophoneManager {
						public static class: java.lang.Class<com.pedro.encoder.input.audio.MicrophoneManagerManual>;
						public constructor();
						public start(): void;
						public read(directBuffer: java.nio.ByteBuffer, numBytes: number): number;
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
						});
						public constructor();
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

