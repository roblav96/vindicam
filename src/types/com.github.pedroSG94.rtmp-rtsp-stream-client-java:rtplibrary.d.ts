declare module com {
	export module github {
		export module faucamp {
			export module simplertmp {
				export class Crypto extends java.lang.Object {
					public static class: java.lang.Class<com.github.faucamp.simplertmp.Crypto>;
					public calculateHmacSHA256(param0: native.Array<number>, param1: native.Array<number>): native.Array<number>;
					public calculateHmacSHA256(param0: native.Array<number>, param1: native.Array<number>, param2: number): native.Array<number>;
					public constructor();
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
					public publish(param0: string): boolean;
					public connect(param0: string): boolean;
					public close(): void;
					public setAuthorization(param0: string, param1: string): void;
					public publishAudioData(param0: native.Array<number>, param1: number, param2: number): void;
					public setVideoResolution(param0: number, param1: number): void;
					public publishVideoData(param0: native.Array<number>, param1: number, param2: number): void;
					public constructor(param0: net.ossrs.rtmp.ConnectCheckerRtmp);
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
						connect(param0: string): boolean;
						publish(param0: string): boolean;
						close(): void;
						publishVideoData(param0: native.Array<number>, param1: number, param2: number): void;
						publishAudioData(param0: native.Array<number>, param1: number, param2: number): void;
						setVideoResolution(param0: number, param1: number): void;
						setAuthorization(param0: string, param1: string): void;
					});
					public constructor();
					public publish(param0: string): boolean;
					public connect(param0: string): boolean;
					public close(): void;
					public setAuthorization(param0: string, param1: string): void;
					public publishAudioData(param0: native.Array<number>, param1: number, param2: number): void;
					public setVideoResolution(param0: number, param1: number): void;
					public publishVideoData(param0: native.Array<number>, param1: number, param2: number): void;
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
					public static toHexString(param0: number): string;
					public static toUnsignedInt24(param0: native.Array<number>): number;
					public static getSalt(param0: string): string;
					public static toHexString(param0: native.Array<number>): string;
					public static writeDouble(param0: java.io.OutputStream, param1: number): void;
					public static getChallenge(param0: string): string;
					public static readUnsignedInt24(param0: java.io.InputStream): number;
					public static toUnsignedInt32(param0: native.Array<number>): number;
					public static writeUnsignedInt16(param0: java.io.OutputStream, param1: number): void;
					public static stringToMD5BASE64(param0: string): string;
					public static writeUnsignedInt32LittleEndian(param0: java.io.OutputStream, param1: number): void;
					public static readUnsignedInt32(param0: java.io.InputStream): number;
					public static writeUnsignedInt24(param0: java.io.OutputStream, param1: number): void;
					public static readBytesUntilFull(param0: java.io.InputStream, param1: native.Array<number>): void;
					public constructor();
					public static readUnsignedInt16(param0: java.io.InputStream): number;
					public static unsignedInt32ToByteArray(param0: number): native.Array<number>;
					public static getOpaque(param0: string): string;
					public static toUnsignedInt32LittleEndian(param0: native.Array<number>): number;
					public static writeUnsignedInt32(param0: java.io.OutputStream, param1: number): void;
					public static toByteArray(param0: number): native.Array<number>;
					public static toUnsignedInt16(param0: native.Array<number>): number;
					public static readDouble(param0: java.io.InputStream): number;
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
						public addItem(param0: com.github.faucamp.simplertmp.amf.AmfData): void;
						public constructor();
						public getSize(): number;
						public getLength(): number;
						public writeTo(param0: java.io.OutputStream): void;
						public readFrom(param0: java.io.InputStream): void;
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
						public setValue(param0: boolean): void;
						public constructor();
						public getSize(): number;
						public static readBooleanFrom(param0: java.io.InputStream): boolean;
						public isValue(): boolean;
						public constructor(param0: boolean);
						public writeTo(param0: java.io.OutputStream): void;
						public readFrom(param0: java.io.InputStream): void;
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
							writeTo(param0: java.io.OutputStream): void;
							readFrom(param0: java.io.InputStream): void;
							getSize(): number;
						});
						public constructor();
						public getSize(): number;
						public writeTo(param0: java.io.OutputStream): void;
						public readFrom(param0: java.io.InputStream): void;
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
						public static readFrom(param0: java.io.InputStream): com.github.faucamp.simplertmp.amf.AmfData;
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
						public writeTo(param0: java.io.OutputStream): void;
						public readFrom(param0: java.io.InputStream): void;
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
						public getSize(): number;
						public static writeNullTo(param0: java.io.OutputStream): void;
						public writeTo(param0: java.io.OutputStream): void;
						public readFrom(param0: java.io.InputStream): void;
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
						public constructor(param0: number);
						public static writeNumberTo(param0: java.io.OutputStream, param1: number): void;
						public static readNumberFrom(param0: java.io.InputStream): number;
						public setValue(param0: number): void;
						public writeTo(param0: java.io.OutputStream): void;
						public getValue(): number;
						public readFrom(param0: java.io.InputStream): void;
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
						public setProperty(param0: string, param1: com.github.faucamp.simplertmp.amf.AmfData): void;
						public setProperty(param0: string, param1: number): void;
						public constructor();
						public getProperty(param0: string): com.github.faucamp.simplertmp.amf.AmfData;
						public getSize(): number;
						public setProperty(param0: string, param1: string): void;
						public setProperty(param0: string, param1: boolean): void;
						public writeTo(param0: java.io.OutputStream): void;
						public readFrom(param0: java.io.InputStream): void;
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
						public static readStringFrom(param0: java.io.InputStream, param1: boolean): string;
						public static writeStringTo(param0: java.io.OutputStream, param1: string, param2: boolean): void;
						public getValue(): string;
						public constructor(param0: string, param1: boolean);
						public readFrom(param0: java.io.InputStream): void;
						public getSize(): number;
						public static sizeOf(param0: string, param1: boolean): number;
						public setValue(param0: string): void;
						public isKey(): boolean;
						public constructor(param0: boolean);
						public writeTo(param0: java.io.OutputStream): void;
						public constructor(param0: string);
						public setKey(param0: boolean): void;
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
						public static valueOf(param0: number): com.github.faucamp.simplertmp.amf.AmfType;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static values(): native.Array<com.github.faucamp.simplertmp.amf.AmfType>;
						public static valueOf(param0: string): com.github.faucamp.simplertmp.amf.AmfType;
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
						public static writeUndefinedTo(param0: java.io.OutputStream): void;
						public writeTo(param0: java.io.OutputStream): void;
						public readFrom(param0: java.io.InputStream): void;
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
						public canReusePrevHeaderTx(param0: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType): boolean;
						public getStoredPacketInputStream(): java.io.ByteArrayInputStream;
						public storePacketChunk(param0: java.io.InputStream, param1: number): boolean;
						public getPrevHeaderTx(): com.github.faucamp.simplertmp.packets.RtmpHeader;
						public prevHeaderRx(): com.github.faucamp.simplertmp.packets.RtmpHeader;
						public setPrevHeaderRx(param0: com.github.faucamp.simplertmp.packets.RtmpHeader): void;
						public setPrevHeaderTx(param0: com.github.faucamp.simplertmp.packets.RtmpHeader): void;
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
						public close(): void;
						public constructor(param0: net.ossrs.rtmp.ConnectCheckerRtmp);
						public setAuthorization(param0: string, param1: string): void;
						public publish(param0: string): boolean;
						public publishVideoData(param0: native.Array<number>, param1: number, param2: number): void;
						public connect(param0: string): boolean;
						public publishAudioData(param0: native.Array<number>, param1: number, param2: number): void;
						public setVideoResolution(param0: number, param1: number): void;
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
						public readPacket(param0: java.io.InputStream): com.github.faucamp.simplertmp.packets.RtmpPacket;
						public constructor(param0: com.github.faucamp.simplertmp.io.RtmpSessionInfo);
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
						public getChunkStreamInfo(param0: number): com.github.faucamp.simplertmp.io.ChunkStreamInfo;
						public constructor();
						public addToWindowBytesRead(param0: number, param1: com.github.faucamp.simplertmp.packets.RtmpPacket): void;
						public getRxChunkSize(): number;
						public takeInvokedCommand(param0: number): string;
						public addInvokedCommand(param0: number, param1: string): string;
						public setTxChunkSize(param0: number): void;
						public getAcknowledgementWindowSize(): number;
						public setRxChunkSize(param0: number): void;
						public getTxChunkSize(): number;
						public setAcknowledgmentWindowSize(param0: number): void;
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
						public constructor();
						public constructor(param0: number, param1: com.github.faucamp.simplertmp.packets.RtmpPacket);
						public constructor(param0: java.lang.Throwable);
						public getBytesRead(): number;
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public getRtmpPacket(): com.github.faucamp.simplertmp.packets.RtmpPacket;
						public constructor(param0: string);
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
						public setChunkStreamId(param0: number): void;
						public constructor(param0: number);
						public writeBody(param0: java.io.OutputStream): void;
						public constructor(param0: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public size(): number;
						public getChunkStreamId(): number;
						public readBody(param0: java.io.InputStream): void;
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
						public setSequenceNumber(param0: number): void;
						public array(): native.Array<number>;
						public getSequenceNumber(): number;
						public constructor(param0: number);
						public writeBody(param0: java.io.OutputStream): void;
						public constructor(param0: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public getAcknowledgementWindowSize(): number;
						public size(): number;
						public readBody(param0: java.io.InputStream): void;
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
						public constructor(param0: com.github.faucamp.simplertmp.packets.RtmpHeader);
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
						public array(): native.Array<number>;
						public constructor(param0: string, param1: number, param2: com.github.faucamp.simplertmp.io.ChunkStreamInfo);
						public setTransactionId(param0: number): void;
						public constructor(param0: string, param1: number);
						public writeBody(param0: java.io.OutputStream): void;
						public setCommandName(param0: string): void;
						public constructor(param0: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public size(): number;
						public getCommandName(): string;
						public getTransactionId(): number;
						public readBody(param0: java.io.InputStream): void;
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
					export abstract class ContentData extends com.github.faucamp.simplertmp.packets.RtmpPacket {
						public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.ContentData>;
						public data: native.Array<number>;
						public array(): native.Array<number>;
						public getData(): native.Array<number>;
						public writeBody(param0: java.io.OutputStream): void;
						public constructor(param0: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public setData(param0: native.Array<number>, param1: number): void;
						public size(): number;
						public readBody(param0: java.io.InputStream): void;
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
						public array(): native.Array<number>;
						public getType(): string;
						public writeBody(param0: java.io.OutputStream): void;
						public constructor(param0: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public size(): number;
						public setType(param0: string): void;
						public readBody(param0: java.io.InputStream): void;
						public constructor(param0: string);
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
						public constructor();
						public writeC2(param0: java.io.OutputStream): void;
						public readS2(param0: java.io.InputStream): void;
						public writeC0(param0: java.io.OutputStream): void;
						public readS0(param0: java.io.InputStream): void;
						public writeC1(param0: java.io.OutputStream): void;
						public readS1(param0: java.io.InputStream): void;
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
						public constructor();
						public setPacketLength(param0: number): void;
						public static readHeader(param0: java.io.InputStream, param1: com.github.faucamp.simplertmp.io.RtmpSessionInfo): com.github.faucamp.simplertmp.packets.RtmpHeader;
						public getAbsoluteTimestamp(): number;
						public getPacketLength(): number;
						public getMessageType(): com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
						public getChunkType(): com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType;
						public setMessageStreamId(param0: number): void;
						public writeTo(param0: java.io.OutputStream, param1: com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType, param2: com.github.faucamp.simplertmp.io.ChunkStreamInfo): void;
						public setTimestampDelta(param0: number): void;
						public setMessageType(param0: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType): void;
						public constructor(param0: com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType, param1: number, param2: com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType);
						public getChunkStreamId(): number;
						public setAbsoluteTimestamp(param0: number): void;
						public setChunkType(param0: com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType): void;
						public setChunkStreamId(param0: number): void;
						public getTimestampDelta(): number;
						public getMessageStreamId(): number;
					}
					export module RtmpHeader {
						export class ChunkType {
							public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType>;
							public static TYPE_0_FULL: com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType;
							public static TYPE_1_RELATIVE_LARGE: com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType;
							public static TYPE_2_RELATIVE_TIMESTAMP_ONLY: com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType;
							public static TYPE_3_RELATIVE_SINGLE_BYTE: com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType;
							public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
							public static valueOf(param0: string): com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType;
							public static valueOf(param0: number): com.github.faucamp.simplertmp.packets.RtmpHeader.ChunkType;
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
							public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
							public static valueOf(param0: number): com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
							public static values(): native.Array<com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType>;
							public static valueOf(param0: string): com.github.faucamp.simplertmp.packets.RtmpHeader.MessageType;
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
						public array(): native.Array<number>;
						public getHeader(): com.github.faucamp.simplertmp.packets.RtmpHeader;
						public writeTo(param0: java.io.OutputStream, param1: number, param2: com.github.faucamp.simplertmp.io.ChunkStreamInfo): void;
						public writeBody(param0: java.io.OutputStream): void;
						public constructor(param0: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public size(): number;
						public readBody(param0: java.io.InputStream): void;
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
						public array(): native.Array<number>;
						public constructor(param0: number);
						public getChunkSize(): number;
						public writeBody(param0: java.io.OutputStream): void;
						public constructor(param0: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public size(): number;
						public readBody(param0: java.io.InputStream): void;
						public setChunkSize(param0: number): void;
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
						public array(): native.Array<number>;
						public constructor(param0: number, param1: com.github.faucamp.simplertmp.packets.SetPeerBandwidth.LimitType, param2: com.github.faucamp.simplertmp.io.ChunkStreamInfo);
						public setLimitType(param0: com.github.faucamp.simplertmp.packets.SetPeerBandwidth.LimitType): void;
						public writeBody(param0: java.io.OutputStream): void;
						public constructor(param0: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public getAcknowledgementWindowSize(): number;
						public size(): number;
						public setAcknowledgementWindowSize(param0: number): void;
						public readBody(param0: java.io.InputStream): void;
						public toString(): string;
					}
					export module SetPeerBandwidth {
						export class LimitType {
							public static class: java.lang.Class<com.github.faucamp.simplertmp.packets.SetPeerBandwidth.LimitType>;
							public static HARD: com.github.faucamp.simplertmp.packets.SetPeerBandwidth.LimitType;
							public static SOFT: com.github.faucamp.simplertmp.packets.SetPeerBandwidth.LimitType;
							public static DYNAMIC: com.github.faucamp.simplertmp.packets.SetPeerBandwidth.LimitType;
							public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
							public static valueOf(param0: number): com.github.faucamp.simplertmp.packets.SetPeerBandwidth.LimitType;
							public static values(): native.Array<com.github.faucamp.simplertmp.packets.SetPeerBandwidth.LimitType>;
							public static valueOf(param0: string): com.github.faucamp.simplertmp.packets.SetPeerBandwidth.LimitType;
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
						public setEventData(param0: number, param1: number): void;
						public getFirstEventData(): number;
						public constructor(param0: com.github.faucamp.simplertmp.packets.UserControl.Type, param1: com.github.faucamp.simplertmp.io.ChunkStreamInfo);
						public constructor(param0: com.github.faucamp.simplertmp.io.ChunkStreamInfo);
						public writeBody(param0: java.io.OutputStream): void;
						public constructor(param0: com.github.faucamp.simplertmp.packets.UserControl, param1: com.github.faucamp.simplertmp.io.ChunkStreamInfo);
						public toString(): string;
						public array(): native.Array<number>;
						public setEventData(param0: number): void;
						public getType(): com.github.faucamp.simplertmp.packets.UserControl.Type;
						public setType(param0: com.github.faucamp.simplertmp.packets.UserControl.Type): void;
						public constructor(param0: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public getEventData(): native.Array<number>;
						public size(): number;
						public readBody(param0: java.io.InputStream): void;
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
							public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
							public static valueOf(param0: string): com.github.faucamp.simplertmp.packets.UserControl.Type;
							public static valueOf(param0: number): com.github.faucamp.simplertmp.packets.UserControl.Type;
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
						public addData(param0: number): void;
						public addData(param0: boolean): void;
						public addData(param0: string): void;
						public addData(param0: com.github.faucamp.simplertmp.amf.AmfData): void;
						public writeVariableData(param0: java.io.OutputStream): void;
						public constructor(param0: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public getData(): java.util.List<com.github.faucamp.simplertmp.amf.AmfData>;
						public readVariableData(param0: java.io.InputStream, param1: number): void;
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
						public constructor(param0: com.github.faucamp.simplertmp.packets.RtmpHeader);
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
						public array(): native.Array<number>;
						public constructor(param0: number, param1: com.github.faucamp.simplertmp.io.ChunkStreamInfo);
						public writeBody(param0: java.io.OutputStream): void;
						public constructor(param0: com.github.faucamp.simplertmp.packets.RtmpHeader);
						public getAcknowledgementWindowSize(): number;
						public size(): number;
						public setAcknowledgementWindowSize(param0: number): void;
						public readBody(param0: java.io.InputStream): void;
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
				public codec: globalAndroid.media.MediaCodec;
				public presentTimeUs: number;
				public running: boolean;
				public isBufferMode: boolean;
				public force: com.pedro.encoder.utils.CodecUtil.Force;
				public formatChanged(param0: globalAndroid.media.MediaCodec, param1: globalAndroid.media.MediaFormat): void;
				public inputAvailable(param0: globalAndroid.media.MediaCodec, param1: number, param2: com.pedro.encoder.Frame): void;
				public start(param0: boolean): void;
				public setForce(param0: com.pedro.encoder.utils.CodecUtil.Force): void;
				public constructor();
				public chooseEncoder(param0: string): globalAndroid.media.MediaCodecInfo;
				public stopImp(): void;
				public stop(): void;
				public getInputFrame(): com.pedro.encoder.Frame;
				public outputAvailable(param0: globalAndroid.media.MediaCodec, param1: number, param2: globalAndroid.media.MediaCodec.BufferInfo): void;
				public start(): void;
				public sendBuffer(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
				public isRunning(): boolean;
				public checkBuffer(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
				public getDataFromEncoder(param0: com.pedro.encoder.Frame): void;
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
					inputAvailable(param0: globalAndroid.media.MediaCodec, param1: number, param2: com.pedro.encoder.Frame): void;
					outputAvailable(param0: globalAndroid.media.MediaCodec, param1: number, param2: globalAndroid.media.MediaCodec.BufferInfo): void;
					formatChanged(param0: globalAndroid.media.MediaCodec, param1: globalAndroid.media.MediaFormat): void;
				});
				public constructor();
				public formatChanged(param0: globalAndroid.media.MediaCodec, param1: globalAndroid.media.MediaFormat): void;
				public outputAvailable(param0: globalAndroid.media.MediaCodec, param1: number, param2: globalAndroid.media.MediaCodec.BufferInfo): void;
				public inputAvailable(param0: globalAndroid.media.MediaCodec, param1: number, param2: com.pedro.encoder.Frame): void;
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
				public constructor(param0: native.Array<number>, param1: number, param2: number);
				public setOrientation(param0: number): void;
				public setBuffer(param0: native.Array<number>): void;
				public setSize(param0: number): void;
				public getOrientation(): number;
				public getBuffer(): native.Array<number>;
				public getFormat(): number;
				public getOffset(): number;
				public getSize(): number;
				public setOffset(param0: number): void;
				public setFormat(param0: number): void;
				public constructor(param0: native.Array<number>, param1: number, param2: boolean, param3: number);
				public setFlip(param0: boolean): void;
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
					public inputPCMData(param0: com.pedro.encoder.Frame): void;
					public prepareAudioEncoder(param0: number, param1: number, param2: boolean, param3: number): boolean;
					public chooseEncoder(param0: string): globalAndroid.media.MediaCodecInfo;
					public start(): void;
					public checkBuffer(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public formatChanged(param0: globalAndroid.media.MediaCodec, param1: globalAndroid.media.MediaFormat): void;
					public outputAvailable(param0: globalAndroid.media.MediaCodec, param1: number, param2: globalAndroid.media.MediaCodec.BufferInfo): void;
					public constructor();
					public inputAvailable(param0: globalAndroid.media.MediaCodec, param1: number, param2: com.pedro.encoder.Frame): void;
					public constructor(param0: com.pedro.encoder.audio.GetAacData);
					public getInputFrame(): com.pedro.encoder.Frame;
					public stopImp(): void;
					public prepareAudioEncoder(): boolean;
					public start(param0: boolean): void;
					public sendBuffer(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setSampleRate(param0: number): void;
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
						getAacData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
						onAudioFormat(param0: globalAndroid.media.MediaFormat): void;
					});
					public constructor();
					public getAacData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public onAudioFormat(param0: globalAndroid.media.MediaFormat): void;
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
						public constructor(param0: number);
						public enableAutoGainControl(): void;
						public enableNoiseSuppressor(): void;
						public enableEchoCanceler(): void;
						public releaseEchoCanceler(): void;
						public releaseAutoGainControl(): void;
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
						public process(param0: native.Array<number>): native.Array<number>;
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
							inputPCMData(param0: com.pedro.encoder.Frame): void;
						});
						public constructor();
						public inputPCMData(param0: com.pedro.encoder.Frame): void;
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
						public createInternalMicrophone(param0: globalAndroid.media.AudioPlaybackCaptureConfiguration, param1: number, param2: boolean): void;
						public createMicrophone(): void;
						public mute(): void;
						public stop(): void;
						public isRunning(): boolean;
						public setCustomAudioEffect(param0: com.pedro.encoder.input.audio.CustomAudioEffect): void;
						public unMute(): void;
						public isMuted(): boolean;
						public createMicrophone(param0: number, param1: boolean, param2: boolean, param3: boolean): void;
						public createMicrophone(param0: number, param1: number, param2: boolean, param3: boolean, param4: boolean): void;
						public start(): void;
						public getSampleRate(): number;
						public getChannel(): number;
						public constructor(param0: com.pedro.encoder.input.audio.GetMicrophoneData);
						public getMaxInputSize(): number;
						public getAudioFormat(): number;
						public isCreated(): boolean;
						public setSampleRate(param0: number): void;
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
						public constructor(param0: com.pedro.encoder.input.audio.GetMicrophoneData);
						public stop(): void;
						public read(param0: java.nio.ByteBuffer, param1: number): number;
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
						public process(param0: native.Array<number>): native.Array<number>;
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
					export class AudioDecoder extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.decoder.AudioDecoder>;
						public prepareAudio(): boolean;
						public getDuration(): number;
						public isStereo(): boolean;
						public moveTo(param0: number): void;
						public mute(): void;
						public stop(): void;
						public getTime(): number;
						public unMute(): void;
						public isMuted(): boolean;
						public setLoopMode(param0: boolean): void;
						public constructor(param0: com.pedro.encoder.input.audio.GetMicrophoneData, param1: com.pedro.encoder.input.decoder.AudioDecoderInterface, param2: com.pedro.encoder.input.decoder.LoopFileInterface);
						public start(): void;
						public getSampleRate(): number;
						public initExtractor(param0: string): boolean;
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
					export class LoopFileInterface extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.decoder.LoopFileInterface>;
						/**
						 * Constructs a new instance of the com.pedro.encoder.input.decoder.LoopFileInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onReset(param0: boolean): void;
						});
						public constructor();
						public onReset(param0: boolean): void;
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
					export class VideoDecoder extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.encoder.input.decoder.VideoDecoder>;
						public prepareVideo(param0: globalAndroid.view.Surface): boolean;
						public setLoopMode(param0: boolean): void;
						public getWidth(): number;
						public getDuration(): number;
						public start(): void;
						public moveTo(param0: number): void;
						public constructor(param0: com.pedro.encoder.input.decoder.VideoDecoderInterface, param1: com.pedro.encoder.input.decoder.LoopFileInterface);
						public getHeight(): number;
						public initExtractor(param0: string): boolean;
						public stop(): void;
						public getTime(): number;
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
						public translate(param0: number, param1: number): void;
						public getTransformedVertices(): native.Array<number>;
						public scale(param0: number, param1: number): void;
						public getScale(): globalAndroid.graphics.PointF;
						public translate(param0: com.pedro.encoder.utils.gl.TranslateTo): void;
						public getTranslation(): globalAndroid.graphics.PointF;
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
						public setBaseObjectFilterRender(param0: com.pedro.encoder.input.gl.render.filters.object.BaseObjectFilterRender): void;
						public setPreventMoveOutside(param0: boolean): void;
						public constructor();
						public constructor(param0: com.pedro.encoder.input.gl.render.filters.object.BaseObjectFilterRender);
						public spriteTouched(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
						public scaleSprite(param0: globalAndroid.view.MotionEvent): void;
						public moveSprite(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): void;
						public getBaseObjectFilterRender(): com.pedro.encoder.input.gl.render.filters.object.BaseObjectFilterRender;
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
						public constructor(param0: globalAndroid.view.Surface);
						public setPresentationTime(param0: number): void;
						public constructor(param0: globalAndroid.view.Surface, param1: com.pedro.encoder.input.gl.SurfaceManager);
						public constructor();
						public getEglDisplay(): globalAndroid.opengl.EGLDisplay;
						public getEglSurface(): globalAndroid.opengl.EGLSurface;
						public constructor(param0: globalAndroid.view.Surface, param1: globalAndroid.opengl.EGLContext);
						public release(): void;
						public makeCurrent(): void;
						public swapBuffer(): void;
						public getEglContext(): globalAndroid.opengl.EGLContext;
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
						public load(param0: native.Array<globalAndroid.graphics.Bitmap>): native.Array<number>;
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
							public initFBO(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>, param4: native.Array<number>): void;
							public getTexId(): number;
							public initFBO(param0: number, param1: number): void;
							public release(): void;
							public draw(): void;
							public initGl(param0: number, param1: number, param2: globalAndroid.content.Context, param3: number, param4: number): void;
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
							public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
							public release(): void;
							public getSurface(): globalAndroid.view.Surface;
							public draw(): void;
							public updateTexImage(): void;
							public setFlip(param0: boolean, param1: boolean): void;
							public setRotation(param0: number): void;
							public initGl(param0: number, param1: number, param2: globalAndroid.content.Context, param3: number, param4: number): void;
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
							public setFilter(param0: number, param1: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
							public initGl(param0: globalAndroid.content.Context, param1: number, param2: number, param3: number, param4: number): void;
							public drawScreen(param0: number, param1: number, param2: boolean, param3: number, param4: number, param5: boolean, param6: boolean, param7: boolean): void;
							public setCameraRotation(param0: number): void;
							public isAAEnabled(): boolean;
							public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
							public release(): void;
							public drawOffScreen(): void;
							public setCameraFlip(param0: boolean, param1: boolean): void;
							public enableAA(param0: boolean): void;
							public setPreviewSize(param0: number, param1: number): void;
							public getSurface(): globalAndroid.view.Surface;
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
						export class RenderHandler extends java.lang.Object {
							public static class: java.lang.Class<com.pedro.encoder.input.gl.render.RenderHandler>;
							public constructor();
							public getRboId(): native.Array<number>;
							public getTexId(): native.Array<number>;
							public setRboId(param0: native.Array<number>): void;
							public setTexId(param0: native.Array<number>): void;
							public setFboId(param0: native.Array<number>): void;
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
							public setStreamSize(param0: number, param1: number): void;
							public setAAEnabled(param0: boolean): void;
							public setTexId(param0: number): void;
							public isAAEnabled(): boolean;
							public release(): void;
							public initGl(param0: globalAndroid.content.Context): void;
							public draw(param0: number, param1: number, param2: boolean, param3: number, param4: number, param5: boolean, param6: boolean, param7: boolean): void;
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
							public getTextureId(): number;
							public initGl(param0: globalAndroid.content.Context, param1: number, param2: number): void;
							public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
							public getSurface(): globalAndroid.view.Surface;
							public release(): void;
							public updateFrame(): void;
							public setFlip(param0: boolean, param1: boolean): void;
							public setRotation(param0: number): void;
							public drawFrame(param0: number, param1: number, param2: boolean, param3: number, param4: number, param5: boolean, param6: boolean, param7: boolean): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public setPosition(param0: com.pedro.encoder.utils.gl.TranslateTo): void;
								public setView(param0: globalAndroid.view.View): void;
								public drawFilter(): void;
								public constructor();
								public getView(): globalAndroid.view.View;
								public release(): void;
								public setRotation(param0: number): void;
								public setScale(param0: number, param1: number): void;
								public setPosition(param0: number, param1: number): void;
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
								public getPreviewHeight(): number;
								public drawFilter(): void;
								public constructor();
								public setPreviewSize(param0: number, param1: number): void;
								public draw(): void;
								public getHeight(): number;
								public getWidth(): number;
								public getPreviousTexId(): number;
								public setRenderHandler(param0: com.pedro.encoder.input.gl.render.RenderHandler): void;
								public setPreviousTexId(param0: number): void;
								public initFBOLink(): void;
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public getRenderHandler(): com.pedro.encoder.input.gl.render.RenderHandler;
								public getPreviewWidth(): number;
								public getTexId(): number;
								public initGl(param0: number, param1: number, param2: globalAndroid.content.Context, param3: number, param4: number): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
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
								public getBlur(): number;
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public getRadius(): number;
								public setRadius(param0: number): void;
								public drawFilter(): void;
								public setBlur(param0: number): void;
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
							export class BrightnessFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.BrightnessFilterRender>;
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public getBrightness(): number;
								public setBrightness(param0: number): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public getCartoon(): number;
								public constructor();
								public release(): void;
								public setCartoon(param0: number): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public setRadius(param0: number): void;
								public setCenter(param0: number, param1: number): void;
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
							export class ColorFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.ColorFilterRender>;
								public getRed(): number;
								public setRGBColor(param0: string): void;
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public setColor(param0: globalAndroid.content.res.Resources, param1: number): void;
								public drawFilter(): void;
								public getGreen(): number;
								public constructor();
								public release(): void;
								public getBlue(): number;
								public setRGBColor(param0: number, param1: number, param2: number): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public setContrast(param0: number): void;
								public drawFilter(): void;
								public getContrast(): number;
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
							export class DuotoneFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.DuotoneFilterRender>;
								public getRed(): number;
								public setColor(param0: number, param1: number): void;
								public getRed2(): number;
								public drawFilter(): void;
								public getBlue2(): number;
								public setRGBColor(param0: string, param1: string): void;
								public constructor();
								public release(): void;
								public getBlue(): number;
								public setColor(param0: globalAndroid.content.res.Resources, param1: number, param2: number): void;
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public setRGBColor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
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
								public getExposure(): number;
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public setExposure(param0: number): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public setGamma(param0: number): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
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
								public setMode(param0: number): void;
								public setRows(param0: number): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
								public getSampleDist(): native.Array<number>;
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public setSampleDist(param0: native.Array<number>): void;
								public getRotation(): number;
								public getAntialias(): number;
								public getMode(): number;
								public setAntialias(param0: number): void;
								public setRotation(param0: number): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
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
								public getPixelated(): number;
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public setPixelated(param0: number): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public getR(): number;
								public drawFilter(): void;
								public constructor();
								public release(): void;
								public getB(): number;
								public setRGBSaturation(param0: number, param1: number, param2: number): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public getRotation(): number;
								public release(): void;
								public setRotation(param0: number): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public getSaturation(): number;
								public drawFilter(): void;
								public constructor();
								public setSaturation(param0: number): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public setSharpness(param0: number): void;
								public getSharpness(): number;
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
							export class SnowFilterRender extends com.pedro.encoder.input.gl.render.filters.BaseFilterRender {
								public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.SnowFilterRender>;
								public initGlFilter(param0: globalAndroid.content.Context): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public getCenter(): native.Array<number>;
								public getRadius(): number;
								public setRadius(param0: number): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
								public setCenterX(param0: number, param1: number): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public constructor();
								public release(): void;
								public setTemperature(param0: number): void;
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
								public initGlFilter(param0: globalAndroid.content.Context): void;
								public drawFilter(): void;
								public setLevels(param0: number): void;
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
									public setScale(param0: number, param1: number): void;
									public constructor();
									public setAlpha(param0: number): void;
									public initGlFilter(param0: globalAndroid.content.Context): void;
									public drawFilter(): void;
									public setDefaultScale(param0: number, param1: number): void;
									public setPosition(param0: com.pedro.encoder.utils.gl.TranslateTo): void;
									public getPosition(): globalAndroid.graphics.PointF;
									public release(): void;
									public setPosition(param0: number, param1: number): void;
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
									public setGif(param0: java.io.InputStream): void;
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
									public setImage(param0: globalAndroid.graphics.Bitmap): void;
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
									public setScale(param0: number, param1: number): void;
									public constructor();
									public setPosition(param0: com.pedro.encoder.utils.gl.TranslateTo): void;
									public getPosition(): globalAndroid.graphics.PointF;
									public release(): void;
									public getScale(): globalAndroid.graphics.PointF;
									public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
									public setAlpha(param0: number): void;
									public initGlFilter(param0: globalAndroid.content.Context): void;
									public drawFilter(): void;
									public constructor(param0: com.pedro.encoder.input.gl.render.filters.object.SurfaceFilterRender.SurfaceReadyCallback);
									public getSurface(): globalAndroid.view.Surface;
									public setPosition(param0: number, param1: number): void;
								}
								export module SurfaceFilterRender {
									export class SurfaceReadyCallback extends java.lang.Object {
										public static class: java.lang.Class<com.pedro.encoder.input.gl.render.filters.object.SurfaceFilterRender.SurfaceReadyCallback>;
										/**
										 * Constructs a new instance of the com.pedro.encoder.input.gl.render.filters.object.SurfaceFilterRender$SurfaceReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
										 */
										public constructor(implementation: {
											surfaceReady(param0: globalAndroid.graphics.SurfaceTexture): void;
										});
										public constructor();
										public surfaceReady(param0: globalAndroid.graphics.SurfaceTexture): void;
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
									public setText(param0: string, param1: number, param2: number, param3: globalAndroid.graphics.Typeface): void;
									public setText(param0: string, param1: number, param2: number): void;
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
						public constructor(param0: globalAndroid.view.TextureView, param1: com.pedro.encoder.input.video.GetCameraData);
						public enableRecordingHint(): void;
						public constructor(param0: globalAndroid.view.SurfaceView, param1: com.pedro.encoder.input.video.GetCameraData);
						public isRunning(): boolean;
						public start(param0: com.pedro.encoder.input.video.CameraHelper.Facing, param1: number, param2: number, param3: number): void;
						public setRotation(param0: number): void;
						public start(param0: number, param1: number, param2: number): void;
						public isLanternEnabled(): boolean;
						public disableFaceDetection(): void;
						public disableLantern(): void;
						public setSurfaceTexture(param0: globalAndroid.graphics.SurfaceTexture): void;
						public getPreviewSizeFront(): java.util.List<globalAndroid.hardware.Camera.Size>;
						public isFrontCamera(): boolean;
						public switchCamera(): void;
						public onFaceDetection(param0: native.Array<globalAndroid.hardware.Camera.Face>, param1: globalAndroid.hardware.Camera): void;
						public getPreviewSizeBack(): java.util.List<globalAndroid.hardware.Camera.Size>;
						public isFaceDetectionEnabled(): boolean;
						/** @deprecated */
						public onPreviewFrame(param0: native.Array<number>, param1: globalAndroid.hardware.Camera): void;
						public setCameraCallbacks(param0: com.pedro.encoder.input.video.CameraCallbacks): void;
						public disableRecordingHint(): void;
						public getHeight(): number;
						public stop(): void;
						public setZoom(param0: globalAndroid.view.MotionEvent): void;
						public enableFaceDetection(param0: com.pedro.encoder.input.video.Camera1ApiManager.FaceDetectorCallback): void;
						public onPreviewFrame(param0: native.Array<number>, param1: globalAndroid.hardware.Camera): void;
						public getWidth(): number;
						public setPreviewOrientation(param0: number): void;
						public enableLantern(): void;
						public getCameraPreviewImageFormatSupported(): java.util.List<java.lang.Integer>;
						public constructor(param0: globalAndroid.graphics.SurfaceTexture, param1: globalAndroid.content.Context);
						/** @deprecated */
						public onFaceDetection(param0: native.Array<globalAndroid.hardware.Camera.Face>, param1: globalAndroid.hardware.Camera): void;
					}
					export module Camera1ApiManager {
						export class FaceDetectorCallback extends java.lang.Object {
							public static class: java.lang.Class<com.pedro.encoder.input.video.Camera1ApiManager.FaceDetectorCallback>;
							/**
							 * Constructs a new instance of the com.pedro.encoder.input.video.Camera1ApiManager$FaceDetectorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onGetFaces(param0: native.Array<globalAndroid.hardware.Camera.Face>): void;
							});
							public constructor();
							public onGetFaces(param0: native.Array<globalAndroid.hardware.Camera.Face>): void;
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
						public getMaxZoom(): number;
						public constructor(param0: globalAndroid.content.Context);
						public prepareCamera(param0: globalAndroid.view.Surface): void;
						public openCameraId(param0: java.lang.Integer): void;
						public openCameraFacing(param0: com.pedro.encoder.input.video.CameraHelper.Facing): void;
						public isRunning(): boolean;
						public setZoom(param0: java.lang.Float): void;
						public onOpened(param0: globalAndroid.hardware.camera2.CameraDevice): void;
						public isLanternEnabled(): boolean;
						public disableFaceDetection(): void;
						public disableLantern(): void;
						public onDisconnected(param0: globalAndroid.hardware.camera2.CameraDevice): void;
						public isFrontCamera(): boolean;
						public closeCamera(param0: boolean): void;
						public switchCamera(): void;
						public isLanternSupported(): boolean;
						public getLevelSupported(): number;
						public constructor();
						public isFaceDetectionEnabled(): boolean;
						public prepareCamera(param0: globalAndroid.view.SurfaceView, param1: globalAndroid.view.Surface): void;
						public openCamera(): void;
						public closeCamera(): void;
						public getCameraCharacteristics(): globalAndroid.hardware.camera2.CameraCharacteristics;
						public setCameraCallbacks(param0: com.pedro.encoder.input.video.CameraCallbacks): void;
						public prepareCamera(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
						public getZoom(): java.lang.Float;
						public setZoom(param0: globalAndroid.view.MotionEvent): void;
						public enableFaceDetection(param0: com.pedro.encoder.input.video.Camera2ApiManager.FaceDetectorCallback): void;
						public openCameraFront(): void;
						public enableLantern(): void;
						public onError(param0: globalAndroid.hardware.camera2.CameraDevice, param1: number): void;
						public prepareCamera(param0: globalAndroid.view.TextureView, param1: globalAndroid.view.Surface): void;
						public getCameraResolutionsBack(): native.Array<any>;
						public getCameraResolutions(param0: com.pedro.encoder.input.video.CameraHelper.Facing): native.Array<any>;
						public openLastCamera(): void;
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
								onGetFaces(param0: native.Array<globalAndroid.hardware.camera2.params.Face>): void;
							});
							public constructor();
							public onGetFaces(param0: native.Array<globalAndroid.hardware.camera2.params.Face>): void;
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
							onCameraChanged(param0: boolean): void;
						});
						public constructor();
						public onCameraChanged(param0: boolean): void;
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
						public static getCameraOrientation(param0: globalAndroid.content.Context): number;
						public static isPortrait(param0: globalAndroid.content.Context): boolean;
						public static getFingerSpacing(param0: globalAndroid.view.MotionEvent): number;
					}
					export module CameraHelper {
						export class Facing {
							public static class: java.lang.Class<com.pedro.encoder.input.video.CameraHelper.Facing>;
							public static BACK: com.pedro.encoder.input.video.CameraHelper.Facing;
							public static FRONT: com.pedro.encoder.input.video.CameraHelper.Facing;
							public static values(): native.Array<com.pedro.encoder.input.video.CameraHelper.Facing>;
							public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
							public static valueOf(param0: string): com.pedro.encoder.input.video.CameraHelper.Facing;
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
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
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
						public camera2Parse(param0: globalAndroid.hardware.camera2.params.Face, param1: globalAndroid.view.View, param2: globalAndroid.graphics.PointF, param3: number, param4: boolean): com.pedro.encoder.input.video.FaceDetectorUtil.FaceParsed;
						public constructor();
						public camera1Parse(param0: globalAndroid.hardware.Camera.Face, param1: globalAndroid.view.View, param2: globalAndroid.graphics.PointF, param3: number, param4: boolean): com.pedro.encoder.input.video.FaceDetectorUtil.FaceParsed;
					}
					export module FaceDetectorUtil {
						export class FaceParsed extends java.lang.Object {
							public static class: java.lang.Class<com.pedro.encoder.input.video.FaceDetectorUtil.FaceParsed>;
							public getScale(): globalAndroid.graphics.PointF;
							public setScale(param0: globalAndroid.graphics.PointF): void;
							public getPosition(): globalAndroid.graphics.PointF;
							public setPosition(param0: globalAndroid.graphics.PointF): void;
							public constructor(param0: com.pedro.encoder.input.video.FaceDetectorUtil, param1: globalAndroid.graphics.PointF, param2: globalAndroid.graphics.PointF);
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
						public limitFPS(): boolean;
						public setFPS(param0: number): void;
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
							inputYUVData(param0: com.pedro.encoder.Frame): void;
						});
						public constructor();
						public inputYUVData(param0: com.pedro.encoder.Frame): void;
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
					public static getAllSoftwareEncoders(param0: string): java.util.List<globalAndroid.media.MediaCodecInfo>;
					public static getAllHardwareDecoders(param0: string): java.util.List<globalAndroid.media.MediaCodecInfo>;
					public constructor();
					public static getAllSoftwareDecoders(param0: string): java.util.List<globalAndroid.media.MediaCodecInfo>;
					public static getAllEncoders(param0: string): java.util.List<globalAndroid.media.MediaCodecInfo>;
					public static showAllCodecsInfo(): java.util.List<string>;
					public static getAllHardwareEncoders(param0: string): java.util.List<globalAndroid.media.MediaCodecInfo>;
					public static getAllCodecs(param0: boolean): java.util.List<globalAndroid.media.MediaCodecInfo>;
					public static getAllDecoders(param0: string): java.util.List<globalAndroid.media.MediaCodecInfo>;
				}
				export module CodecUtil {
					export class Force {
						public static class: java.lang.Class<com.pedro.encoder.utils.CodecUtil.Force>;
						public static FIRST_COMPATIBLE_FOUND: com.pedro.encoder.utils.CodecUtil.Force;
						public static SOFTWARE: com.pedro.encoder.utils.CodecUtil.Force;
						public static HARDWARE: com.pedro.encoder.utils.CodecUtil.Force;
						public static valueOf(param0: string): com.pedro.encoder.utils.CodecUtil.Force;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static values(): native.Array<com.pedro.encoder.utils.CodecUtil.Force>;
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
					public static mixPCM(param0: native.Array<number>, param1: native.Array<number>): native.Array<number>;
					public constructor();
					public static pcmToStereo(param0: native.Array<number>, param1: number): native.Array<number>;
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
						public updateFrame(param0: number): number;
						public recycle(): void;
						public getBitmaps(): native.Array<globalAndroid.graphics.Bitmap>;
						public getHeight(): number;
						public load(param0: java.io.InputStream): void;
						public getGifDelayFrames(): native.Array<number>;
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
						public static getStringFromRaw(param0: globalAndroid.content.Context, param1: number): string;
						public static getBitmap(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Bitmap;
						public constructor();
						public static checkEglError(param0: string): void;
						public static createExternalTextures(param0: number, param1: native.Array<number>, param2: number): void;
						public static checkGlError(param0: string): void;
						public static createProgram(param0: string, param1: string): number;
						public static createTextures(param0: number, param1: native.Array<number>, param2: number): void;
						public static loadShader(param0: number, param1: string): number;
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
						public getWidth(): number;
						public getNumFrames(): number;
						public load(param0: globalAndroid.graphics.Bitmap): void;
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
						public constructor();
						public static processMatrix(param0: number, param1: number, param2: number, param3: boolean, param4: boolean, param5: boolean, param6: boolean, param7: number, param8: native.Array<number>): void;
						public static getViewport(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number): globalAndroid.util.Pair<globalAndroid.graphics.Point,globalAndroid.graphics.Point>;
						public static calculateViewPort(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number): void;
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
						public recycle(): void;
						public getBitmaps(): native.Array<globalAndroid.graphics.Bitmap>;
						public getHeight(): number;
						public load(param0: string, param1: number, param2: number, param3: globalAndroid.graphics.Typeface): void;
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
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): com.pedro.encoder.utils.gl.TranslateTo;
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
							public setData(param0: com.pedro.encoder.utils.gl.gif.GifHeader, param1: java.nio.ByteBuffer): void;
							public read(param0: native.Array<number>): number;
							public getDelay(param0: number): number;
							public getNextDelay(): number;
							public getLoopCount(): number;
							public resetFrameIndex(): void;
							public resetLoopIndex(): void;
							public setData(param0: com.pedro.encoder.utils.gl.gif.GifHeader, param1: native.Array<number>): void;
							public getHeight(): number;
							public setData(param0: com.pedro.encoder.utils.gl.gif.GifHeader, param1: java.nio.ByteBuffer, param2: number): void;
							public advance(): boolean;
							public constructor(param0: com.pedro.encoder.utils.gl.gif.GifDecoder.BitmapProvider, param1: com.pedro.encoder.utils.gl.gif.GifHeader, param2: java.nio.ByteBuffer, param3: number);
							public constructor();
							public getNextFrame(): globalAndroid.graphics.Bitmap;
							public constructor(param0: com.pedro.encoder.utils.gl.gif.GifDecoder.BitmapProvider);
							public getByteSize(): number;
							public getLoopIndex(): number;
							public clear(): void;
							public getFrameCount(): number;
							public getCurrentFrameIndex(): number;
							public getStatus(): number;
							public constructor(param0: com.pedro.encoder.utils.gl.gif.GifDecoder.BitmapProvider, param1: com.pedro.encoder.utils.gl.gif.GifHeader, param2: java.nio.ByteBuffer);
							public read(param0: java.io.InputStream, param1: number): number;
							public setFrameIndex(param0: number): boolean;
						}
						export module GifDecoder {
							export class BitmapProvider extends java.lang.Object {
								public static class: java.lang.Class<com.pedro.encoder.utils.gl.gif.GifDecoder.BitmapProvider>;
								/**
								 * Constructs a new instance of the com.pedro.encoder.utils.gl.gif.GifDecoder$BitmapProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									obtain(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
									release(param0: globalAndroid.graphics.Bitmap): void;
									obtainByteArray(param0: number): native.Array<number>;
									release(param0: native.Array<number>): void;
									obtainIntArray(param0: number): native.Array<number>;
									release(param0: native.Array<number>): void;
								});
								public constructor();
								public release(param0: native.Array<number>): void;
								public release(param0: globalAndroid.graphics.Bitmap): void;
								public obtainByteArray(param0: number): native.Array<number>;
								public obtain(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
								public obtainIntArray(param0: number): native.Array<number>;
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
							public setData(param0: java.nio.ByteBuffer): com.pedro.encoder.utils.gl.gif.GifHeaderParser;
							public parseHeader(): com.pedro.encoder.utils.gl.gif.GifHeader;
							public clear(): void;
							public isAnimated(): boolean;
							public setData(param0: native.Array<number>): com.pedro.encoder.utils.gl.gif.GifHeaderParser;
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
							public obtain(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public obtainByteArray(param0: number): native.Array<number>;
							public obtainIntArray(param0: number): native.Array<number>;
							public release(param0: native.Array<number>): void;
							public release(param0: globalAndroid.graphics.Bitmap): void;
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
						public static toI420(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
						public constructor();
						public static rotate270(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
						public static rotatePixels(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;
						public static toYV12(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
						public static toNV12(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
						public static rotate180(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
						public static preAllocateBuffers(param0: number): void;
						public static toARGB(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
						public static mirror(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
						public static rotate90(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
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
						public constructor();
						public static NV21toYUV420byColor(param0: native.Array<number>, param1: number, param2: number, param3: com.pedro.encoder.video.FormatVideoEncoder): native.Array<number>;
						public static CropYuv(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number): native.Array<number>;
						public static rotateNV21(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;
						public static YV12toYUV420byColor(param0: native.Array<number>, param1: number, param2: number, param3: com.pedro.encoder.video.FormatVideoEncoder): native.Array<number>;
						public static preAllocateBuffers(param0: number): void;
						public static ARGBtoYUV420SemiPlanar(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
						public static rotateYV12(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;
						public static frameToBitmap(param0: com.pedro.encoder.Frame, param1: number, param2: number, param3: number): globalAndroid.graphics.Bitmap;
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
						public static toI420(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
						public static toNV21(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
						public constructor();
						public static rotate270(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
						public static toNV12(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
						public static rotate180(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
						public static preAllocateBuffers(param0: number): void;
						public static rotate90(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
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
					public static valueOf(param0: string): com.pedro.encoder.video.FormatVideoEncoder;
					public static values(): native.Array<com.pedro.encoder.video.FormatVideoEncoder>;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
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
						onSpsPps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): void;
						onSpsPpsVps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
						getVideoData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
						onVideoFormat(param0: globalAndroid.media.MediaFormat): void;
					});
					public constructor();
					public onVideoFormat(param0: globalAndroid.media.MediaFormat): void;
					public onSpsPpsVps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public getVideoData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public onSpsPps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): void;
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
					public setType(param0: string): void;
					public constructor(param0: com.pedro.encoder.video.GetVideoData);
					public getInputSurface(): globalAndroid.view.Surface;
					public start(): void;
					public formatChanged(param0: globalAndroid.media.MediaCodec, param1: globalAndroid.media.MediaFormat): void;
					public checkBuffer(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public forceSyncFrame(): void;
					public prepareVideoEncoder(param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number, param7: com.pedro.encoder.video.FormatVideoEncoder): boolean;
					public constructor();
					public setFps(param0: number): void;
					public setInputSurface(param0: globalAndroid.view.Surface): void;
					public prepareVideoEncoder(param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number, param7: com.pedro.encoder.video.FormatVideoEncoder, param8: number, param9: number): boolean;
					public getType(): string;
					public sendBuffer(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getFps(): number;
					public reset(): void;
					public chooseEncoder(param0: string): globalAndroid.media.MediaCodecInfo;
					public getHeight(): number;
					public getWidth(): number;
					public inputYUVData(param0: com.pedro.encoder.Frame): void;
					public setVideoBitrateOnFly(param0: number): void;
					public outputAvailable(param0: globalAndroid.media.MediaCodec, param1: number, param2: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getRotation(): number;
					public inputAvailable(param0: globalAndroid.media.MediaCodec, param1: number, param2: com.pedro.encoder.Frame): void;
					public prepareVideoEncoder(): boolean;
					public getInputFrame(): com.pedro.encoder.Frame;
					public stopImp(): void;
					public start(param0: boolean): void;
					public getBitRate(): number;
					public isHardwareRotation(): boolean;
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
					public reConnect(param0: number): void;
					public onVideoFormat(param0: globalAndroid.media.MediaFormat): void;
					public prepareVideo(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: number): boolean;
					public getAacData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public startPreview(param0: com.pedro.encoder.input.video.CameraHelper.Facing): void;
					public resetSentVideoFrames(): void;
					public isOnPreview(): boolean;
					public reTry(param0: number, param1: string): boolean;
					public onSpsPpsVpsRtp(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public isFrontCamera(): boolean;
					public enableLantern(): void;
					public startPreview(param0: com.pedro.encoder.input.video.CameraHelper.Facing, param1: number, param2: number, param3: number): void;
					public startPreview(): void;
					public getBitrate(): number;
					public startStream(param0: string): void;
					public getStreamWidth(): number;
					public switchCamera(): void;
					public getRecordStatus(): com.pedro.rtplibrary.util.RecordController.Status;
					public onAudioFormat(param0: globalAndroid.media.MediaFormat): void;
					public getDroppedAudioFrames(): number;
					public disableAudio(): void;
					public isRecording(): boolean;
					/** @deprecated */
					public reTry(param0: number): void;
					public prepareVideo(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: number, param6: number): boolean;
					public getSentVideoFrames(): number;
					public isFaceDetectionEnabled(): boolean;
					public setFpsListener(param0: com.pedro.rtplibrary.util.FpsListener.Callback): void;
					public getResolutionValue(): number;
					public getResolutionsFront(): java.util.List<globalAndroid.hardware.Camera.Size>;
					public inputYUVData(param0: com.pedro.encoder.Frame): void;
					public setLimitFPSOnFly(param0: number): void;
					public stopStreamRtp(): void;
					public onSpsPpsVps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public setCameraCallbacks(param0: com.pedro.encoder.input.video.CameraCallbacks): void;
					public getVideoData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getResolutionsBack(): java.util.List<globalAndroid.hardware.Camera.Size>;
					public prepareVideo(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: number, param6: number, param7: number, param8: number): boolean;
					public replaceView(param0: com.pedro.rtplibrary.view.OpenGlView): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public resizeCache(param0: number): void;
					public disableFaceDetection(): void;
					public prepareAudioRtp(param0: boolean, param1: number): void;
					public stopPreview(): void;
					public prepareVideo(): boolean;
					public inputPCMData(param0: com.pedro.encoder.Frame): void;
					public getH264DataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getStreamHeight(): number;
					public getSentAudioFrames(): number;
					public isStreaming(): boolean;
					public getAacDataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public prepareAudio(): boolean;
					public setForce(param0: com.pedro.encoder.utils.CodecUtil.Force, param1: com.pedro.encoder.utils.CodecUtil.Force): void;
					/** @deprecated */
					public shouldRetry(param0: string): boolean;
					public prepareAudio(param0: number, param1: number, param2: boolean, param3: boolean, param4: boolean): boolean;
					public onSpsPps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): void;
					public replaceView(param0: com.pedro.rtplibrary.view.LightOpenGlView): void;
					public setAuthorization(param0: string, param1: string): void;
					public isAudioMuted(): boolean;
					public enableFaceDetection(param0: com.pedro.encoder.input.video.Camera1ApiManager.FaceDetectorCallback): void;
					public setReTries(param0: number): void;
					public stopRecord(): void;
					public constructor(param0: globalAndroid.view.SurfaceView);
					public pauseRecord(): void;
					public constructor(param0: globalAndroid.view.TextureView);
					public constructor(param0: com.pedro.rtplibrary.view.OpenGlView);
					public replaceView(param0: globalAndroid.content.Context): void;
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public setZoom(param0: globalAndroid.view.MotionEvent): void;
					public resumeRecord(): void;
					public isLanternEnabled(): boolean;
					public startStreamRtp(param0: string): void;
					public disableLantern(): void;
					public setPreviewOrientation(param0: number): void;
					public startPreview(param0: com.pedro.encoder.input.video.CameraHelper.Facing, param1: number, param2: number): void;
					public stopStream(): void;
					public constructor(param0: com.pedro.rtplibrary.view.LightOpenGlView);
					public constructor(param0: globalAndroid.content.Context);
					public setVideoBitrateOnFly(param0: number): void;
					public startPreview(param0: number, param1: number): void;
					public getGlInterface(): com.pedro.rtplibrary.view.GlInterface;
					public setCustomAudioEffect(param0: com.pedro.encoder.input.audio.CustomAudioEffect): void;
					public isVideoEnabled(): boolean;
					public startRecord(param0: string, param1: com.pedro.rtplibrary.util.RecordController.Listener): void;
					public startRecord(param0: string): void;
					public enableAudio(): void;
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
					public reConnect(param0: number): void;
					public onVideoFormat(param0: globalAndroid.media.MediaFormat): void;
					public prepareVideo(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: number): boolean;
					public getAacData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public startPreview(param0: com.pedro.encoder.input.video.CameraHelper.Facing): void;
					public getCameraCharacteristics(): globalAndroid.hardware.camera2.CameraCharacteristics;
					public resetSentVideoFrames(): void;
					public isOnPreview(): boolean;
					public reTry(param0: number, param1: string): boolean;
					public onSpsPpsVpsRtp(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public isFrontCamera(): boolean;
					public enableLantern(): void;
					public startPreview(param0: com.pedro.encoder.input.video.CameraHelper.Facing, param1: number, param2: number, param3: number): void;
					public startPreview(): void;
					public getMaxZoom(): number;
					public getBitrate(): number;
					public startStream(param0: string): void;
					public getStreamWidth(): number;
					public switchCamera(): void;
					public enableFaceDetection(param0: com.pedro.encoder.input.video.Camera2ApiManager.FaceDetectorCallback): void;
					public getRecordStatus(): com.pedro.rtplibrary.util.RecordController.Status;
					public onAudioFormat(param0: globalAndroid.media.MediaFormat): void;
					public getDroppedAudioFrames(): number;
					public disableAudio(): void;
					public isRecording(): boolean;
					/** @deprecated */
					public reTry(param0: number): void;
					public prepareVideo(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: number, param6: number): boolean;
					public getSentVideoFrames(): number;
					public isFaceDetectionEnabled(): boolean;
					public isLanternSupported(): boolean;
					public setZoom(param0: number): void;
					public setFpsListener(param0: com.pedro.rtplibrary.util.FpsListener.Callback): void;
					public getResolutionValue(): number;
					public setLimitFPSOnFly(param0: number): void;
					public stopStreamRtp(): void;
					public onSpsPpsVps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public constructor(param0: globalAndroid.content.Context, param1: boolean);
					public setCameraCallbacks(param0: com.pedro.encoder.input.video.CameraCallbacks): void;
					public getVideoData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public prepareVideo(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: number, param6: number, param7: number, param8: number): boolean;
					public replaceView(param0: com.pedro.rtplibrary.view.OpenGlView): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public resizeCache(param0: number): void;
					public disableFaceDetection(): void;
					public prepareAudioRtp(param0: boolean, param1: number): void;
					public stopPreview(): void;
					public prepareVideo(): boolean;
					public inputPCMData(param0: com.pedro.encoder.Frame): void;
					public getH264DataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getStreamHeight(): number;
					public getSentAudioFrames(): number;
					public isStreaming(): boolean;
					public getAacDataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public prepareAudio(): boolean;
					public setForce(param0: com.pedro.encoder.utils.CodecUtil.Force, param1: com.pedro.encoder.utils.CodecUtil.Force): void;
					public getResolutionsBack(): java.util.List<any>;
					/** @deprecated */
					public shouldRetry(param0: string): boolean;
					public prepareAudio(param0: number, param1: number, param2: boolean, param3: boolean, param4: boolean): boolean;
					public onSpsPps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): void;
					public replaceView(param0: com.pedro.rtplibrary.view.LightOpenGlView): void;
					public setAuthorization(param0: string, param1: string): void;
					public isAudioMuted(): boolean;
					public setReTries(param0: number): void;
					public stopRecord(): void;
					public constructor(param0: globalAndroid.view.SurfaceView);
					public getZoom(): number;
					public pauseRecord(): void;
					public constructor(param0: globalAndroid.view.TextureView);
					public constructor(param0: com.pedro.rtplibrary.view.OpenGlView);
					public replaceView(param0: globalAndroid.content.Context): void;
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public setZoom(param0: globalAndroid.view.MotionEvent): void;
					public resumeRecord(): void;
					public isLanternEnabled(): boolean;
					public startStreamRtp(param0: string): void;
					public getResolutionsFront(): java.util.List<any>;
					public disableLantern(): void;
					public startPreview(param0: com.pedro.encoder.input.video.CameraHelper.Facing, param1: number, param2: number): void;
					public stopStream(): void;
					public constructor(param0: com.pedro.rtplibrary.view.LightOpenGlView);
					public setVideoBitrateOnFly(param0: number): void;
					public getGlInterface(): com.pedro.rtplibrary.view.GlInterface;
					public startPreview(param0: com.pedro.encoder.input.video.CameraHelper.Facing, param1: number): void;
					public setCustomAudioEffect(param0: com.pedro.encoder.input.audio.CustomAudioEffect): void;
					public isVideoEnabled(): boolean;
					public startRecord(param0: string, param1: com.pedro.rtplibrary.util.RecordController.Listener): void;
					public startRecord(param0: string): void;
					public enableAudio(): void;
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
					public reConnect(param0: number): void;
					public onVideoFormat(param0: globalAndroid.media.MediaFormat): void;
					public getAacData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resetSentVideoFrames(): void;
					public reTry(param0: number, param1: string): boolean;
					public onSpsPpsVpsRtp(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public getBitrate(): number;
					public startStream(param0: string): void;
					public getStreamWidth(): number;
					public getRecordStatus(): com.pedro.rtplibrary.util.RecordController.Status;
					public onAudioFormat(param0: globalAndroid.media.MediaFormat): void;
					public getDroppedAudioFrames(): number;
					public disableAudio(): void;
					public isRecording(): boolean;
					/** @deprecated */
					public reTry(param0: number): void;
					public prepareVideo(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): boolean;
					public getSentVideoFrames(): number;
					public setFpsListener(param0: com.pedro.rtplibrary.util.FpsListener.Callback): void;
					public getResolutionValue(): number;
					public setLimitFPSOnFly(param0: number): void;
					public stopStreamRtp(): void;
					public onSpsPpsVps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public constructor(param0: globalAndroid.content.Context, param1: boolean);
					public getVideoData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public prepareInternalAudio(param0: number, param1: number, param2: boolean): boolean;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public resizeCache(param0: number): void;
					public prepareAudioRtp(param0: boolean, param1: number): void;
					public prepareVideo(): boolean;
					public inputPCMData(param0: com.pedro.encoder.Frame): void;
					public getH264DataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getStreamHeight(): number;
					public getSentAudioFrames(): number;
					public isStreaming(): boolean;
					public getAacDataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public sendIntent(): globalAndroid.content.Intent;
					public prepareAudio(): boolean;
					public setForce(param0: com.pedro.encoder.utils.CodecUtil.Force, param1: com.pedro.encoder.utils.CodecUtil.Force): void;
					/** @deprecated */
					public shouldRetry(param0: string): boolean;
					public prepareAudio(param0: number, param1: number, param2: boolean, param3: boolean, param4: boolean): boolean;
					public setIntentResult(param0: number, param1: globalAndroid.content.Intent): void;
					public onSpsPps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): void;
					public setAuthorization(param0: string, param1: string): void;
					public isAudioMuted(): boolean;
					public setReTries(param0: number): void;
					public stopRecord(): void;
					public pauseRecord(): void;
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public resumeRecord(): void;
					public startStreamRtp(param0: string): void;
					public stopStream(): void;
					public setVideoBitrateOnFly(param0: number): void;
					public getGlInterface(): com.pedro.rtplibrary.view.GlInterface;
					public setCustomAudioEffect(param0: com.pedro.encoder.input.audio.CustomAudioEffect): void;
					public isVideoEnabled(): boolean;
					public prepareVideo(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;
					public startRecord(param0: string, param1: com.pedro.rtplibrary.util.RecordController.Listener): void;
					public startRecord(param0: string): void;
					public enableAudio(): void;
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
					public reConnect(param0: number): void;
					public onVideoFormat(param0: globalAndroid.media.MediaFormat): void;
					public getAacData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resetSentVideoFrames(): void;
					public reTry(param0: number, param1: string): boolean;
					public onSpsPpsVpsRtp(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public prepareVideo(param0: string, param1: number, param2: number): boolean;
					public getBitrate(): number;
					public startStream(param0: string): void;
					public getStreamWidth(): number;
					public getRecordStatus(): com.pedro.rtplibrary.util.RecordController.Status;
					public constructor(param0: com.pedro.rtplibrary.view.OpenGlView, param1: com.pedro.encoder.input.decoder.VideoDecoderInterface, param2: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public onAudioFormat(param0: globalAndroid.media.MediaFormat): void;
					public getDroppedAudioFrames(): number;
					public isRecording(): boolean;
					/** @deprecated */
					public reTry(param0: number): void;
					public reSyncFile(): void;
					public getSentVideoFrames(): number;
					public prepareAudio(param0: string): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: com.pedro.encoder.input.decoder.VideoDecoderInterface, param2: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public setFpsListener(param0: com.pedro.rtplibrary.util.FpsListener.Callback): void;
					public getResolutionValue(): number;
					public setLimitFPSOnFly(param0: number): void;
					public stopStreamRtp(): void;
					public onSpsPpsVps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public getVideoData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public getAudioDuration(): number;
					public resizeCache(param0: number): void;
					public prepareAudioRtp(param0: boolean, param1: number): void;
					public prepareVideo(param0: string, param1: number, param2: number, param3: number, param4: number): boolean;
					public moveTo(param0: number): void;
					public inputPCMData(param0: com.pedro.encoder.Frame): void;
					public getH264DataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getStreamHeight(): number;
					public getSentAudioFrames(): number;
					public isStreaming(): boolean;
					public getAacDataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setForce(param0: com.pedro.encoder.utils.CodecUtil.Force, param1: com.pedro.encoder.utils.CodecUtil.Force): void;
					public prepareAudio(param0: string, param1: number): boolean;
					/** @deprecated */
					public shouldRetry(param0: string): boolean;
					public onSpsPps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): void;
					public constructor(param0: com.pedro.rtplibrary.view.LightOpenGlView, param1: com.pedro.encoder.input.decoder.VideoDecoderInterface, param2: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public setAuthorization(param0: string, param1: string): void;
					public setReTries(param0: number): void;
					public stopRecord(): void;
					public pauseRecord(): void;
					public getVideoDuration(): number;
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public resumeRecord(): void;
					public getVideoTime(): number;
					public onReset(param0: boolean): void;
					public startStreamRtp(param0: string): void;
					public stopStream(): void;
					public getAudioTime(): number;
					public setVideoBitrateOnFly(param0: number): void;
					public prepareVideo(param0: string): boolean;
					public getGlInterface(): com.pedro.rtplibrary.view.GlInterface;
					public isVideoEnabled(): boolean;
					public setLoopMode(param0: boolean): void;
					public startRecord(param0: string, param1: com.pedro.rtplibrary.util.RecordController.Listener): void;
					public constructor(param0: com.pedro.encoder.input.decoder.VideoDecoderInterface, param1: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public startRecord(param0: string): void;
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
					public reConnect(param0: number): void;
					public inputPCMData(param0: com.pedro.encoder.Frame): void;
					public getAacData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resetSentVideoFrames(): void;
					public reTry(param0: number, param1: string): boolean;
					public getSentAudioFrames(): number;
					public isStreaming(): boolean;
					public getAacDataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public prepareAudio(): boolean;
					/** @deprecated */
					public shouldRetry(param0: string): boolean;
					public prepareAudio(param0: number, param1: number, param2: boolean, param3: boolean, param4: boolean): boolean;
					public constructor();
					public startStream(param0: string): void;
					public setAuthorization(param0: string, param1: string): void;
					public isAudioMuted(): boolean;
					public setReTries(param0: number): void;
					public onAudioFormat(param0: globalAndroid.media.MediaFormat): void;
					public getDroppedAudioFrames(): number;
					public disableAudio(): void;
					/** @deprecated */
					public reTry(param0: number): void;
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public getSentVideoFrames(): number;
					public startStreamRtp(param0: string): void;
					public stopStream(): void;
					public stopStreamRtp(): void;
					public setCustomAudioEffect(param0: com.pedro.encoder.input.audio.CustomAudioEffect): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public resizeCache(param0: number): void;
					public prepareAudioRtp(param0: boolean, param1: number): void;
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
					public static parseBitrate(param0: number, param1: number, param2: com.pedro.rtplibrary.network.AdapterBitrateParser.Callback): void;
					public constructor();
					public static calculateMaxVideoBitrate(param0: number): void;
				}
				export module AdapterBitrateParser {
					export class Callback extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.rtplibrary.network.AdapterBitrateParser.Callback>;
						/**
						 * Constructs a new instance of the com.pedro.rtplibrary.network.AdapterBitrateParser$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onNewBitrate(param0: number): void;
						});
						public constructor();
						public onNewBitrate(param0: number): void;
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
					public nextStringEquals(param0: string): boolean;
					public nextInt(): number;
					public reset(param0: native.Array<number>, param1: number): com.pedro.rtplibrary.network.ByteArrayScanner;
					public nextString(): string;
					public useDelimiter(param0: string): com.pedro.rtplibrary.network.ByteArrayScanner;
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
					public addBandwidth(param0: number, param1: number): void;
					public register(param0: com.pedro.rtplibrary.network.ConnectionClassManager.ConnectionClassStateChangeListener): void;
					public static getInstance(): com.pedro.rtplibrary.network.ConnectionClassManager;
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
							onBandwidthStateChange(param0: number): void;
						});
						public constructor();
						public onBandwidthStateChange(param0: number): void;
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
					public constructor();
					public setFileStream(param0: java.io.FileInputStream): void;
					public readLine(param0: native.Array<number>): number;
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
					public constructor(param0: string);
					public parseDataUsageForUidAndTag(param0: number): number;
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
						public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
						public constructor();
						public constructor(param0: globalAndroid.os.Handler.Callback);
						public constructor(param0: com.pedro.rtplibrary.network.UploadBandwidthSampler, param1: globalAndroid.os.Looper);
						public constructor(param0: globalAndroid.os.Looper);
						public handleMessage(param0: globalAndroid.os.Message): void;
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
					public reConnect(param0: number): void;
					public onVideoFormat(param0: globalAndroid.media.MediaFormat): void;
					public inputPCMData(param0: com.pedro.encoder.Frame): void;
					public getAacData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resetSentVideoFrames(): void;
					public getH264DataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public constructor(param0: globalAndroid.view.TextureView, param1: net.ossrs.rtmp.ConnectCheckerRtmp);
					public onSpsPpsVpsRtp(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public getSentAudioFrames(): number;
					public constructor(param0: globalAndroid.view.SurfaceView, param1: net.ossrs.rtmp.ConnectCheckerRtmp);
					public getAacDataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					/** @deprecated */
					public shouldRetry(param0: string): boolean;
					public onSpsPps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): void;
					public setAuthorization(param0: string, param1: string): void;
					public setReTries(param0: number): void;
					public constructor(param0: globalAndroid.view.SurfaceView);
					public onAudioFormat(param0: globalAndroid.media.MediaFormat): void;
					public constructor(param0: globalAndroid.view.TextureView);
					public getDroppedAudioFrames(): number;
					public forceAkamaiTs(param0: boolean): void;
					public constructor(param0: com.pedro.rtplibrary.view.OpenGlView);
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public getSentVideoFrames(): number;
					public constructor(param0: com.pedro.rtplibrary.view.OpenGlView, param1: net.ossrs.rtmp.ConnectCheckerRtmp);
					public setProfileIop(param0: number): void;
					public startStreamRtp(param0: string): void;
					public inputYUVData(param0: com.pedro.encoder.Frame): void;
					public constructor(param0: com.pedro.rtplibrary.view.LightOpenGlView);
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: com.pedro.rtplibrary.view.LightOpenGlView, param1: net.ossrs.rtmp.ConnectCheckerRtmp);
					public stopStreamRtp(): void;
					public onSpsPpsVps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public shouldRetry(param0: string): boolean;
					public getVideoData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public resizeCache(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: net.ossrs.rtmp.ConnectCheckerRtmp);
					public prepareAudioRtp(param0: boolean, param1: number): void;
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
					public reConnect(param0: number): void;
					public onVideoFormat(param0: globalAndroid.media.MediaFormat): void;
					public inputPCMData(param0: com.pedro.encoder.Frame): void;
					public getAacData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resetSentVideoFrames(): void;
					public getH264DataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public constructor(param0: globalAndroid.view.TextureView, param1: net.ossrs.rtmp.ConnectCheckerRtmp);
					public onSpsPpsVpsRtp(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public getSentAudioFrames(): number;
					public constructor(param0: globalAndroid.view.SurfaceView, param1: net.ossrs.rtmp.ConnectCheckerRtmp);
					public getAacDataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					/** @deprecated */
					public shouldRetry(param0: string): boolean;
					public onSpsPps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): void;
					public setAuthorization(param0: string, param1: string): void;
					public setReTries(param0: number): void;
					public constructor(param0: globalAndroid.view.SurfaceView);
					public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: net.ossrs.rtmp.ConnectCheckerRtmp);
					public onAudioFormat(param0: globalAndroid.media.MediaFormat): void;
					public constructor(param0: globalAndroid.view.TextureView);
					public getDroppedAudioFrames(): number;
					public forceAkamaiTs(param0: boolean): void;
					public constructor(param0: com.pedro.rtplibrary.view.OpenGlView);
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public getSentVideoFrames(): number;
					public constructor(param0: com.pedro.rtplibrary.view.OpenGlView, param1: net.ossrs.rtmp.ConnectCheckerRtmp);
					public setProfileIop(param0: number): void;
					public startStreamRtp(param0: string): void;
					public constructor(param0: com.pedro.rtplibrary.view.LightOpenGlView);
					public constructor(param0: com.pedro.rtplibrary.view.LightOpenGlView, param1: net.ossrs.rtmp.ConnectCheckerRtmp);
					public stopStreamRtp(): void;
					public onSpsPpsVps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public constructor(param0: globalAndroid.content.Context, param1: boolean);
					public shouldRetry(param0: string): boolean;
					public getVideoData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public resizeCache(param0: number): void;
					public prepareAudioRtp(param0: boolean, param1: number): void;
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
					public reConnect(param0: number): void;
					public onVideoFormat(param0: globalAndroid.media.MediaFormat): void;
					public inputPCMData(param0: com.pedro.encoder.Frame): void;
					public getAacData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resetSentVideoFrames(): void;
					public getH264DataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public onSpsPpsVpsRtp(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public getSentAudioFrames(): number;
					public getAacDataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					/** @deprecated */
					public shouldRetry(param0: string): boolean;
					public onSpsPps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): void;
					public setAuthorization(param0: string, param1: string): void;
					public setReTries(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: net.ossrs.rtmp.ConnectCheckerRtmp);
					public onAudioFormat(param0: globalAndroid.media.MediaFormat): void;
					public getDroppedAudioFrames(): number;
					public forceAkamaiTs(param0: boolean): void;
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public getSentVideoFrames(): number;
					public setProfileIop(param0: number): void;
					public startStreamRtp(param0: string): void;
					public stopStreamRtp(): void;
					public onSpsPpsVps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public constructor(param0: globalAndroid.content.Context, param1: boolean);
					public shouldRetry(param0: string): boolean;
					public getVideoData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public resizeCache(param0: number): void;
					public prepareAudioRtp(param0: boolean, param1: number): void;
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
					public reConnect(param0: number): void;
					public onVideoFormat(param0: globalAndroid.media.MediaFormat): void;
					public inputPCMData(param0: com.pedro.encoder.Frame): void;
					public getAacData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resetSentVideoFrames(): void;
					public getH264DataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public onSpsPpsVpsRtp(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public constructor(param0: com.pedro.rtplibrary.view.OpenGlView, param1: net.ossrs.rtmp.ConnectCheckerRtmp, param2: com.pedro.encoder.input.decoder.VideoDecoderInterface, param3: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public getSentAudioFrames(): number;
					public getAacDataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public constructor(param0: globalAndroid.content.Context, param1: net.ossrs.rtmp.ConnectCheckerRtmp, param2: com.pedro.encoder.input.decoder.VideoDecoderInterface, param3: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					/** @deprecated */
					public shouldRetry(param0: string): boolean;
					public constructor(param0: com.pedro.rtplibrary.view.LightOpenGlView, param1: net.ossrs.rtmp.ConnectCheckerRtmp, param2: com.pedro.encoder.input.decoder.VideoDecoderInterface, param3: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public onSpsPps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): void;
					public constructor(param0: com.pedro.rtplibrary.view.LightOpenGlView, param1: com.pedro.encoder.input.decoder.VideoDecoderInterface, param2: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public setAuthorization(param0: string, param1: string): void;
					public constructor(param0: net.ossrs.rtmp.ConnectCheckerRtmp, param1: com.pedro.encoder.input.decoder.VideoDecoderInterface, param2: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public setReTries(param0: number): void;
					public constructor(param0: com.pedro.rtplibrary.view.OpenGlView, param1: com.pedro.encoder.input.decoder.VideoDecoderInterface, param2: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public onAudioFormat(param0: globalAndroid.media.MediaFormat): void;
					public getDroppedAudioFrames(): number;
					public forceAkamaiTs(param0: boolean): void;
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public getSentVideoFrames(): number;
					public setProfileIop(param0: number): void;
					public onReset(param0: boolean): void;
					public constructor(param0: globalAndroid.content.Context, param1: com.pedro.encoder.input.decoder.VideoDecoderInterface, param2: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public startStreamRtp(param0: string): void;
					public stopStreamRtp(): void;
					public onSpsPpsVps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public shouldRetry(param0: string): boolean;
					public getVideoData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public resizeCache(param0: number): void;
					public constructor(param0: com.pedro.encoder.input.decoder.VideoDecoderInterface, param1: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public prepareAudioRtp(param0: boolean, param1: number): void;
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
					public reConnect(param0: number): void;
					public inputPCMData(param0: com.pedro.encoder.Frame): void;
					public getAacData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resetSentVideoFrames(): void;
					public getSentAudioFrames(): number;
					public getAacDataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					/** @deprecated */
					public shouldRetry(param0: string): boolean;
					public constructor();
					public setAuthorization(param0: string, param1: string): void;
					public setReTries(param0: number): void;
					public onAudioFormat(param0: globalAndroid.media.MediaFormat): void;
					public getDroppedAudioFrames(): number;
					public forceAkamaiTs(param0: boolean): void;
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public getSentVideoFrames(): number;
					public startStreamRtp(param0: string): void;
					public constructor(param0: net.ossrs.rtmp.ConnectCheckerRtmp);
					public stopStreamRtp(): void;
					public shouldRetry(param0: string): boolean;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public resizeCache(param0: number): void;
					public prepareAudioRtp(param0: boolean, param1: number): void;
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
					public reConnect(param0: number): void;
					public onVideoFormat(param0: globalAndroid.media.MediaFormat): void;
					public inputPCMData(param0: com.pedro.encoder.Frame): void;
					public getAacData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resetSentVideoFrames(): void;
					public getH264DataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public onSpsPpsVpsRtp(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public constructor(param0: com.pedro.rtplibrary.view.LightOpenGlView, param1: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public getSentAudioFrames(): number;
					public getAacDataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setVideoCodec(param0: com.pedro.rtsp.rtsp.VideoCodec): void;
					/** @deprecated */
					public shouldRetry(param0: string): boolean;
					public onSpsPps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): void;
					public constructor(param0: globalAndroid.view.TextureView, param1: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public setAuthorization(param0: string, param1: string): void;
					public setReTries(param0: number): void;
					public constructor(param0: globalAndroid.view.SurfaceView);
					public onAudioFormat(param0: globalAndroid.media.MediaFormat): void;
					public constructor(param0: globalAndroid.view.TextureView);
					public getDroppedAudioFrames(): number;
					public constructor(param0: globalAndroid.view.SurfaceView, param1: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public constructor(param0: com.pedro.rtplibrary.view.OpenGlView);
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public getSentVideoFrames(): number;
					public startStreamRtp(param0: string): void;
					public inputYUVData(param0: com.pedro.encoder.Frame): void;
					public constructor(param0: com.pedro.rtplibrary.view.LightOpenGlView);
					public constructor(param0: globalAndroid.content.Context);
					public stopStreamRtp(): void;
					public onSpsPpsVps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public shouldRetry(param0: string): boolean;
					public getVideoData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public constructor(param0: com.pedro.rtplibrary.view.OpenGlView, param1: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public setProtocol(param0: com.pedro.rtsp.rtsp.Protocol): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public resizeCache(param0: number): void;
					public prepareAudioRtp(param0: boolean, param1: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: com.pedro.rtsp.utils.ConnectCheckerRtsp);
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
					public reConnect(param0: number): void;
					public onVideoFormat(param0: globalAndroid.media.MediaFormat): void;
					public inputPCMData(param0: com.pedro.encoder.Frame): void;
					public getAacData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resetSentVideoFrames(): void;
					public getH264DataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public onSpsPpsVpsRtp(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public constructor(param0: com.pedro.rtplibrary.view.LightOpenGlView, param1: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public getSentAudioFrames(): number;
					public getAacDataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setVideoCodec(param0: com.pedro.rtsp.rtsp.VideoCodec): void;
					/** @deprecated */
					public shouldRetry(param0: string): boolean;
					public onSpsPps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): void;
					public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public constructor(param0: globalAndroid.view.TextureView, param1: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public setAuthorization(param0: string, param1: string): void;
					public setReTries(param0: number): void;
					public constructor(param0: globalAndroid.view.SurfaceView);
					public onAudioFormat(param0: globalAndroid.media.MediaFormat): void;
					public constructor(param0: globalAndroid.view.TextureView);
					public getDroppedAudioFrames(): number;
					public constructor(param0: globalAndroid.view.SurfaceView, param1: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public constructor(param0: com.pedro.rtplibrary.view.OpenGlView);
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public getSentVideoFrames(): number;
					public startStreamRtp(param0: string): void;
					public constructor(param0: com.pedro.rtplibrary.view.LightOpenGlView);
					public stopStreamRtp(): void;
					public onSpsPpsVps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public constructor(param0: globalAndroid.content.Context, param1: boolean);
					public shouldRetry(param0: string): boolean;
					public getVideoData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public constructor(param0: com.pedro.rtplibrary.view.OpenGlView, param1: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public setProtocol(param0: com.pedro.rtsp.rtsp.Protocol): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public resizeCache(param0: number): void;
					public prepareAudioRtp(param0: boolean, param1: number): void;
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
					public reConnect(param0: number): void;
					public onVideoFormat(param0: globalAndroid.media.MediaFormat): void;
					public inputPCMData(param0: com.pedro.encoder.Frame): void;
					public getAacData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resetSentVideoFrames(): void;
					public getH264DataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public onSpsPpsVpsRtp(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public getSentAudioFrames(): number;
					public getAacDataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setVideoCodec(param0: com.pedro.rtsp.rtsp.VideoCodec): void;
					/** @deprecated */
					public shouldRetry(param0: string): boolean;
					public onSpsPps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): void;
					public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public setAuthorization(param0: string, param1: string): void;
					public setReTries(param0: number): void;
					public onAudioFormat(param0: globalAndroid.media.MediaFormat): void;
					public getDroppedAudioFrames(): number;
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public getSentVideoFrames(): number;
					public startStreamRtp(param0: string): void;
					public stopStreamRtp(): void;
					public onSpsPpsVps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public constructor(param0: globalAndroid.content.Context, param1: boolean);
					public shouldRetry(param0: string): boolean;
					public getVideoData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setProtocol(param0: com.pedro.rtsp.rtsp.Protocol): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public resizeCache(param0: number): void;
					public prepareAudioRtp(param0: boolean, param1: number): void;
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
					public reConnect(param0: number): void;
					public onVideoFormat(param0: globalAndroid.media.MediaFormat): void;
					public inputPCMData(param0: com.pedro.encoder.Frame): void;
					public getAacData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resetSentVideoFrames(): void;
					public getH264DataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public onSpsPpsVpsRtp(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public getSentAudioFrames(): number;
					public getAacDataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public constructor(param0: globalAndroid.content.Context, param1: com.pedro.rtsp.utils.ConnectCheckerRtsp, param2: com.pedro.encoder.input.decoder.VideoDecoderInterface, param3: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public setVideoCodec(param0: com.pedro.rtsp.rtsp.VideoCodec): void;
					/** @deprecated */
					public shouldRetry(param0: string): boolean;
					public constructor(param0: com.pedro.rtsp.utils.ConnectCheckerRtsp, param1: com.pedro.encoder.input.decoder.VideoDecoderInterface, param2: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public constructor(param0: com.pedro.rtplibrary.view.LightOpenGlView, param1: com.pedro.rtsp.utils.ConnectCheckerRtsp, param2: com.pedro.encoder.input.decoder.VideoDecoderInterface, param3: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public onSpsPps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): void;
					public constructor(param0: com.pedro.rtplibrary.view.LightOpenGlView, param1: com.pedro.encoder.input.decoder.VideoDecoderInterface, param2: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public setAuthorization(param0: string, param1: string): void;
					public setReTries(param0: number): void;
					public constructor(param0: com.pedro.rtplibrary.view.OpenGlView, param1: com.pedro.encoder.input.decoder.VideoDecoderInterface, param2: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public onAudioFormat(param0: globalAndroid.media.MediaFormat): void;
					public getDroppedAudioFrames(): number;
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public getSentVideoFrames(): number;
					public constructor(param0: com.pedro.rtplibrary.view.OpenGlView, param1: com.pedro.rtsp.utils.ConnectCheckerRtsp, param2: com.pedro.encoder.input.decoder.VideoDecoderInterface, param3: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public onReset(param0: boolean): void;
					public constructor(param0: globalAndroid.content.Context, param1: com.pedro.encoder.input.decoder.VideoDecoderInterface, param2: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public startStreamRtp(param0: string): void;
					public stopStreamRtp(): void;
					public onSpsPpsVps(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public shouldRetry(param0: string): boolean;
					public getVideoData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setProtocol(param0: com.pedro.rtsp.rtsp.Protocol): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public resizeCache(param0: number): void;
					public constructor(param0: com.pedro.encoder.input.decoder.VideoDecoderInterface, param1: com.pedro.encoder.input.decoder.AudioDecoderInterface);
					public prepareAudioRtp(param0: boolean, param1: number): void;
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
					public reConnect(param0: number): void;
					public inputPCMData(param0: com.pedro.encoder.Frame): void;
					public getAacData(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resetSentVideoFrames(): void;
					public getSentAudioFrames(): number;
					public getAacDataRtp(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					/** @deprecated */
					public shouldRetry(param0: string): boolean;
					public constructor();
					public setAuthorization(param0: string, param1: string): void;
					public setReTries(param0: number): void;
					public onAudioFormat(param0: globalAndroid.media.MediaFormat): void;
					public getDroppedAudioFrames(): number;
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public getSentVideoFrames(): number;
					public startStreamRtp(param0: string): void;
					public constructor(param0: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public stopStreamRtp(): void;
					public shouldRetry(param0: string): boolean;
					public setProtocol(param0: com.pedro.rtsp.rtsp.Protocol): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public resizeCache(param0: number): void;
					public prepareAudioRtp(param0: boolean, param1: number): void;
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
					public setMaxBitrate(param0: number): void;
					public reset(): void;
					public adaptBitrate(param0: number): void;
					public constructor(param0: com.pedro.rtplibrary.util.BitrateAdapter.Listener);
				}
				export module BitrateAdapter {
					export class Listener extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.rtplibrary.util.BitrateAdapter.Listener>;
						/**
						 * Constructs a new instance of the com.pedro.rtplibrary.util.BitrateAdapter$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onBitrateAdapted(param0: number): void;
						});
						public constructor();
						public onBitrateAdapted(param0: number): void;
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
					public setCallback(param0: com.pedro.rtplibrary.util.FpsListener.Callback): void;
					public constructor();
					public calculateFps(): void;
				}
				export module FpsListener {
					export class Callback extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.rtplibrary.util.FpsListener.Callback>;
						/**
						 * Constructs a new instance of the com.pedro.rtplibrary.util.FpsListener$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFps(param0: number): void;
						});
						public constructor();
						public onFps(param0: number): void;
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
					public setVideoFormat(param0: globalAndroid.media.MediaFormat): void;
					public resumeRecord(): void;
					public recordVideo(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public recordAudio(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public resetFormats(): void;
					public setAudioFormat(param0: globalAndroid.media.MediaFormat): void;
					public getStatus(): com.pedro.rtplibrary.util.RecordController.Status;
					public constructor();
					public isRunning(): boolean;
					public startRecord(param0: string, param1: com.pedro.rtplibrary.util.RecordController.Listener): void;
					public stopRecord(): void;
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
							onStatusChange(param0: com.pedro.rtplibrary.util.RecordController.Status): void;
						});
						public constructor();
						public onStatusChange(param0: com.pedro.rtplibrary.util.RecordController.Status): void;
					}
					export class Status {
						public static class: java.lang.Class<com.pedro.rtplibrary.util.RecordController.Status>;
						public static STARTED: com.pedro.rtplibrary.util.RecordController.Status;
						public static STOPPED: com.pedro.rtplibrary.util.RecordController.Status;
						public static RECORDING: com.pedro.rtplibrary.util.RecordController.Status;
						public static PAUSED: com.pedro.rtplibrary.util.RecordController.Status;
						public static RESUMED: com.pedro.rtplibrary.util.RecordController.Status;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): com.pedro.rtplibrary.util.RecordController.Status;
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
					public constructor(param0: globalAndroid.content.Context, param1: com.pedro.rtplibrary.util.SensorRotationManager.RotationChangedListener);
					public stop(): void;
					public start(): void;
				}
				export module SensorRotationManager {
					export class RotationChangedListener extends java.lang.Object {
						public static class: java.lang.Class<com.pedro.rtplibrary.util.SensorRotationManager.RotationChangedListener>;
						/**
						 * Constructs a new instance of the com.pedro.rtplibrary.util.SensorRotationManager$RotationChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onRotationChanged(param0: number): void;
						});
						public constructor();
						public onRotationChanged(param0: number): void;
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
					public onMeasure(param0: number, param1: number): void;
					public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
					public setAspectRatio(param0: number, param1: number): void;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public sendAccessibilityEvent(param0: number): void;
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
					public constructor(param0: number, param1: com.pedro.encoder.input.gl.render.filters.BaseFilterRender);
					public constructor();
					public setPosition(param0: number): void;
					public getPosition(): number;
					public setBaseFilterRender(param0: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
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
						setEncoderSize(param0: number, param1: number): void;
						getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
						getSurface(): globalAndroid.view.Surface;
						addMediaCodecSurface(param0: globalAndroid.view.Surface): void;
						removeMediaCodecSurface(): void;
						takePhoto(param0: com.pedro.rtplibrary.view.TakePhotoCallback): void;
						setFilter(param0: number, param1: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
						setFilter(param0: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
						enableAA(param0: boolean): void;
						setRotation(param0: number): void;
						setStreamRotation(param0: number): void;
						setIsStreamHorizontalFlip(param0: boolean): void;
						setIsStreamVerticalFlip(param0: boolean): void;
						isAAEnabled(): boolean;
						start(): void;
						stop(): void;
						setFps(param0: number): void;
						muteVideo(): void;
						unMuteVideo(): void;
						isVideoMuted(): boolean;
						setForceRender(param0: boolean): void;
					});
					public constructor();
					public isVideoMuted(): boolean;
					public removeMediaCodecSurface(): void;
					public setFilter(param0: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public muteVideo(): void;
					public setStreamRotation(param0: number): void;
					public unMuteVideo(): void;
					public isAAEnabled(): boolean;
					public init(): void;
					public start(): void;
					public getSurface(): globalAndroid.view.Surface;
					public setIsStreamVerticalFlip(param0: boolean): void;
					public setRotation(param0: number): void;
					public setForceRender(param0: boolean): void;
					public setFps(param0: number): void;
					public takePhoto(param0: com.pedro.rtplibrary.view.TakePhotoCallback): void;
					public stop(): void;
					public setEncoderSize(param0: number, param1: number): void;
					public enableAA(param0: boolean): void;
					public setIsStreamHorizontalFlip(param0: boolean): void;
					public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
					public addMediaCodecSurface(param0: globalAndroid.view.Surface): void;
					public setFilter(param0: number, param1: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
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
					public run(): void;
					public setStreamRotation(param0: number): void;
					public setKeepAspectRatio(param0: boolean): void;
					public start(): void;
					public getSurface(): globalAndroid.view.Surface;
					public setIsStreamVerticalFlip(param0: boolean): void;
					public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onFrameAvailable(param0: globalAndroid.graphics.SurfaceTexture): void;
					public setRotation(param0: number): void;
					public setForceRender(param0: boolean): void;
					public setFps(param0: number): void;
					public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public enableAA(param0: boolean): void;
					public sendAccessibilityEvent(param0: number): void;
					public setFilter(param0: number, param1: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public setFilter(param0: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public removeMediaCodecSurface(): void;
					public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public unMuteVideo(): void;
					public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
					public setCameraFlip(param0: boolean, param1: boolean): void;
					public isAAEnabled(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public init(): void;
					public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
					public takePhoto(param0: com.pedro.rtplibrary.view.TakePhotoCallback): void;
					public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public stop(): void;
					public setEncoderSize(param0: number, param1: number): void;
					public isKeepAspectRatio(): boolean;
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setIsStreamHorizontalFlip(param0: boolean): void;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
					public addMediaCodecSurface(param0: globalAndroid.view.Surface): void;
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
					public setStreamRotation(param0: number): void;
					public run(): void;
					public start(): void;
					public getSurface(): globalAndroid.view.Surface;
					public setIsStreamVerticalFlip(param0: boolean): void;
					public onFrameAvailable(param0: globalAndroid.graphics.SurfaceTexture): void;
					public setRotation(param0: number): void;
					public setForceRender(param0: boolean): void;
					public setFps(param0: number): void;
					public enableAA(param0: boolean): void;
					public setFilter(param0: number, param1: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public removeMediaCodecSurface(): void;
					public setFilter(param0: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public unMuteVideo(): void;
					public isAAEnabled(): boolean;
					public init(): void;
					public constructor(param0: globalAndroid.content.Context);
					public takePhoto(param0: com.pedro.rtplibrary.view.TakePhotoCallback): void;
					public stop(): void;
					public setEncoderSize(param0: number, param1: number): void;
					public setIsStreamHorizontalFlip(param0: boolean): void;
					public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
					public addMediaCodecSurface(param0: globalAndroid.view.Surface): void;
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
					public run(): void;
					public setStreamRotation(param0: number): void;
					public setKeepAspectRatio(param0: boolean): void;
					public start(): void;
					public getSurface(): globalAndroid.view.Surface;
					public setIsStreamVerticalFlip(param0: boolean): void;
					public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onFrameAvailable(param0: globalAndroid.graphics.SurfaceTexture): void;
					public setRotation(param0: number): void;
					public setForceRender(param0: boolean): void;
					public setFps(param0: number): void;
					public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public enableAA(param0: boolean): void;
					public sendAccessibilityEvent(param0: number): void;
					public setFilter(param0: number, param1: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public setFilter(param0: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public removeMediaCodecSurface(): void;
					public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public unMuteVideo(): void;
					public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
					public setCameraFlip(param0: boolean, param1: boolean): void;
					public isAAEnabled(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public init(): void;
					public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
					public takePhoto(param0: com.pedro.rtplibrary.view.TakePhotoCallback): void;
					public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public stop(): void;
					public setEncoderSize(param0: number, param1: number): void;
					public isKeepAspectRatio(): boolean;
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setIsStreamHorizontalFlip(param0: boolean): void;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
					public addMediaCodecSurface(param0: globalAndroid.view.Surface): void;
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
					public setStreamRotation(param0: number): void;
					public run(): void;
					public start(): void;
					public getSurface(): globalAndroid.view.Surface;
					public setIsStreamVerticalFlip(param0: boolean): void;
					public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onFrameAvailable(param0: globalAndroid.graphics.SurfaceTexture): void;
					public setRotation(param0: number): void;
					public setForceRender(param0: boolean): void;
					public setFps(param0: number): void;
					public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public enableAA(param0: boolean): void;
					public sendAccessibilityEvent(param0: number): void;
					public setFilter(param0: number, param1: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public removeMediaCodecSurface(): void;
					public setFilter(param0: com.pedro.encoder.input.gl.render.filters.BaseFilterRender): void;
					public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public unMuteVideo(): void;
					public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
					public isAAEnabled(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public init(): void;
					public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
					public takePhoto(param0: com.pedro.rtplibrary.view.TakePhotoCallback): void;
					public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public stop(): void;
					public setEncoderSize(param0: number, param1: number): void;
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setIsStreamHorizontalFlip(param0: boolean): void;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
					public releaseSurfaceManager(): void;
					public addMediaCodecSurface(param0: globalAndroid.view.Surface): void;
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
						onTakePhoto(param0: globalAndroid.graphics.Bitmap): void;
					});
					public constructor();
					public onTakePhoto(param0: globalAndroid.graphics.Bitmap): void;
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
					public static getInstance(param0: com.pedro.rtsp.rtsp.Protocol, param1: number, param2: number): com.pedro.rtsp.rtcp.BaseSenderReport;
					public sendReport(param0: native.Array<number>, param1: com.pedro.rtsp.rtsp.RtpFrame, param2: string, param3: number, param4: number): void;
					public setDataStream(param0: java.io.OutputStream, param1: string): void;
					public reset(): void;
					public close(): void;
					public update(param0: com.pedro.rtsp.rtsp.RtpFrame): void;
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
					public sendReport(param0: native.Array<number>, param1: com.pedro.rtsp.rtsp.RtpFrame, param2: string, param3: number, param4: number): void;
					public setDataStream(param0: java.io.OutputStream, param1: string): void;
					public constructor();
					public close(): void;
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
					public sendReport(param0: native.Array<number>, param1: com.pedro.rtsp.rtsp.RtpFrame, param2: string, param3: number, param4: number): void;
					public setDataStream(param0: java.io.OutputStream, param1: string): void;
					public close(): void;
					public constructor(param0: number, param1: number);
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
						public createAndSendPacket(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
						public constructor(param0: number);
						public constructor(param0: number, param1: com.pedro.rtsp.rtp.packets.AudioPacketCallback);
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
							onAudioFrameCreated(param0: com.pedro.rtsp.rtsp.RtpFrame): void;
						});
						public constructor();
						public onAudioFrameCreated(param0: com.pedro.rtsp.rtsp.RtpFrame): void;
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
						public getBuffer(param0: number): native.Array<number>;
						public updateTimeStamp(param0: native.Array<number>, param1: number): void;
						public updateSeq(param0: native.Array<number>): void;
						public createAndSendPacket(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
						public setLong(param0: native.Array<number>, param1: number, param2: number, param3: number): void;
						public constructor(param0: number);
						public markPacket(param0: native.Array<number>): void;
						public setPorts(param0: number, param1: number): void;
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
						public createAndSendPacket(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
						public constructor(param0: native.Array<number>, param1: native.Array<number>, param2: com.pedro.rtsp.rtp.packets.VideoPacketCallback);
						public constructor(param0: number);
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
						public createAndSendPacket(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
						public constructor(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>, param3: com.pedro.rtsp.rtp.packets.VideoPacketCallback);
						public constructor(param0: number);
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
							onVideoFrameCreated(param0: com.pedro.rtsp.rtsp.RtpFrame): void;
						});
						public constructor();
						public onVideoFrameCreated(param0: com.pedro.rtsp.rtsp.RtpFrame): void;
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
						public constructor();
						public static getInstance(param0: com.pedro.rtsp.rtsp.Protocol, param1: number, param2: number): com.pedro.rtsp.rtp.sockets.BaseRtpSocket;
						public setDataStream(param0: java.io.OutputStream, param1: string): void;
						public close(): void;
						public sendFrame(param0: com.pedro.rtsp.rtsp.RtpFrame): void;
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
						public constructor();
						public setDataStream(param0: java.io.OutputStream, param1: string): void;
						public close(): void;
						public sendFrame(param0: com.pedro.rtsp.rtsp.RtpFrame): void;
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
						public constructor();
						public setDataStream(param0: java.io.OutputStream, param1: string): void;
						public close(): void;
						public constructor(param0: number, param1: number);
						public sendFrame(param0: com.pedro.rtsp.rtsp.RtpFrame): void;
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
					public constructor();
					public static createH264Body(param0: number, param1: string, param2: string): string;
					public static createH265Body(param0: number, param1: string, param2: string, param3: string): string;
					public static createAacBody(param0: number, param1: number, param2: boolean): string;
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
					public getPort(): number;
					public getPps(): native.Array<number>;
					public getAudioServerPorts(): native.Array<number>;
					public static createGetParameter(): string;
					public createAnnounceWithAuth(param0: string): string;
					public getAudioClientPorts(): native.Array<number>;
					public getSampleRate(): number;
					public isStereo(): boolean;
					public setIsStereo(param0: boolean): void;
					public getHost(): string;
					public createSetup(param0: number): string;
					public createRecord(): string;
					public createOptions(): string;
					public createTeardown(): string;
					public static createRedirect(): string;
					public constructor();
					public getSps(): native.Array<number>;
					public clear(): void;
					public setVideoInfo(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
					public getResponseStatus(param0: string): number;
					public setAuth(param0: string, param1: string): void;
					public setSampleRate(param0: number): void;
					public getVideoClientPorts(): native.Array<number>;
					public isOnlyAudio(): boolean;
					public getTrackAudio(): number;
					public setUrl(param0: string, param1: number, param2: string): void;
					public setOnlyAudio(param0: boolean): void;
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
					public setProtocol(param0: com.pedro.rtsp.rtsp.Protocol): void;
					public getVps(): native.Array<number>;
					public getResponse(param0: java.io.BufferedReader, param1: com.pedro.rtsp.utils.ConnectCheckerRtsp, param2: boolean, param3: boolean): string;
					public getUser(): string;
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
					public static valueOf(param0: string): com.pedro.rtsp.rtsp.Protocol;
					public static values(): native.Array<com.pedro.rtsp.rtsp.Protocol>;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
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
					public setRtcpPort(param0: number): void;
					public setBuffer(param0: native.Array<number>): void;
					public getLength(): number;
					public setChannelIdentifier(param0: number): void;
					public getRtcpPort(): number;
					public setLength(param0: number): void;
					public getRtpPort(): number;
					public getTimeStamp(): number;
					public isVideoFrame(): boolean;
					public setTimeStamp(param0: number): void;
					public getChannelIdentifier(): number;
					public getBuffer(): native.Array<number>;
					public setRtpPort(param0: number): void;
					public constructor(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number);
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
					public reConnect(param0: number): void;
					public getPort(): number;
					public resetSentVideoFrames(): void;
					public getSentAudioFrames(): number;
					public isStreaming(): boolean;
					public sendVideo(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public getHost(): string;
					public setIsStereo(param0: boolean): void;
					public setUrl(param0: string): void;
					public connect(): void;
					public setAuthorization(param0: string, param1: string): void;
					public sendAudio(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public setReTries(param0: number): void;
					public disconnect(): void;
					public setSampleRate(param0: number): void;
					public getDroppedAudioFrames(): number;
					public getCacheSize(): number;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public getSentVideoFrames(): number;
					public getConnectCheckerRtsp(): com.pedro.rtsp.utils.ConnectCheckerRtsp;
					public setOnlyAudio(param0: boolean): void;
					public constructor(param0: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public getPath(): string;
					public shouldRetry(param0: string): boolean;
					public setProtocol(param0: com.pedro.rtsp.rtsp.Protocol): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public resizeCache(param0: number): void;
					public setSPSandPPS(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer): void;
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
					public setAudioPorts(param0: number, param1: number): void;
					public getCacheSize(): number;
					public setDataStream(param0: java.io.OutputStream, param1: string): void;
					public resetSentVideoFrames(): void;
					public resetDroppedVideoFrames(): void;
					public resetSentAudioFrames(): void;
					public getSentAudioFrames(): number;
					public getSentVideoFrames(): number;
					public setVideoInfo(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>): void;
					public onVideoFrameCreated(param0: com.pedro.rtsp.rtsp.RtpFrame): void;
					public start(): void;
					public constructor(param0: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public setSocketsInfo(param0: com.pedro.rtsp.rtsp.Protocol, param1: native.Array<number>, param2: native.Array<number>): void;
					public onAudioFrameCreated(param0: com.pedro.rtsp.rtsp.RtpFrame): void;
					public sendAudioFrame(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public stop(): void;
					public getDroppedVideoFrames(): number;
					public resetDroppedAudioFrames(): void;
					public setVideoPorts(param0: number, param1: number): void;
					public resizeCache(param0: number): void;
					public setAudioInfo(param0: number): void;
					public sendVideoFrame(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
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
					public static valueOf(param0: string): com.pedro.rtsp.rtsp.VideoCodec;
					public static values(): native.Array<com.pedro.rtsp.rtsp.VideoCodec>;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
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
					public static getMd5Hash(param0: string): string;
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
				export class BitrateManager extends java.lang.Object {
					public static class: java.lang.Class<com.pedro.rtsp.utils.BitrateManager>;
					public constructor(param0: com.pedro.rtsp.utils.ConnectCheckerRtsp);
					public calculateBitrate(param0: number): void;
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
						onConnectionFailedRtsp(param0: string): void;
						onNewBitrateRtsp(param0: number): void;
						onDisconnectRtsp(): void;
						onAuthErrorRtsp(): void;
						onAuthSuccessRtsp(): void;
					});
					public constructor();
					public onAuthErrorRtsp(): void;
					public onNewBitrateRtsp(param0: number): void;
					public onDisconnectRtsp(): void;
					public onConnectionSuccessRtsp(): void;
					public onConnectionFailedRtsp(param0: string): void;
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
					public static createSSlSocket(param0: string, param1: number): java.net.Socket;
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
					public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
					public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
					public constructor();
					public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
					public getDefaultCipherSuites(): native.Array<string>;
					public createSocket(param0: string, param1: number): java.net.Socket;
					public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
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
				public calculateBitrate(param0: number): void;
				public constructor(param0: net.ossrs.rtmp.ConnectCheckerRtmp);
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
					onConnectionFailedRtmp(param0: string): void;
					onNewBitrateRtmp(param0: number): void;
					onDisconnectRtmp(): void;
					onAuthErrorRtmp(): void;
					onAuthSuccessRtmp(): void;
				});
				public constructor();
				public onDisconnectRtmp(): void;
				public onAuthErrorRtmp(): void;
				public onConnectionSuccessRtmp(): void;
				public onConnectionFailedRtmp(param0: string): void;
				public onNewBitrateRtmp(param0: number): void;
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
				public static createSSlSocket(param0: string, param1: number): java.net.Socket;
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
				public constructor(param0: number, param1: number);
				public allocate(param0: number): net.ossrs.rtmp.SrsAllocator.Allocation;
				public constructor(param0: number);
				public release(param0: net.ossrs.rtmp.SrsAllocator.Allocation): void;
			}
			export module SrsAllocator {
				export class Allocation extends java.lang.Object {
					public static class: java.lang.Class<net.ossrs.rtmp.SrsAllocator.Allocation>;
					public put(param0: number): void;
					public array(): native.Array<number>;
					public constructor(param0: net.ossrs.rtmp.SrsAllocator, param1: number);
					public clear(): void;
					public size(): number;
					public put(param0: number, param1: number): void;
					public put(param0: native.Array<number>): void;
					public appendOffset(param0: number): void;
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
				public setIsStereo(param0: boolean): void;
				public resetSentAudioFrames(): void;
				public setReTries(param0: number): void;
				public resetDroppedAudioFrames(): void;
				public getFlvTagCacheSize(): number;
				public reConnect(param0: number): void;
				public getSentVideoFrames(): number;
				public sendAudio(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
				public setProfileIop(param0: number): void;
				public isConnected(): boolean;
				public resizeFlvTagCache(param0: number): void;
				public setSampleRate(param0: number): void;
				public start(param0: string): void;
				public setSpsPPs(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): void;
				public getSentAudioFrames(): number;
				public shouldRetry(param0: string): boolean;
				public constructor(param0: net.ossrs.rtmp.ConnectCheckerRtmp);
				public sendVideo(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
				public resetDroppedVideoFrames(): void;
				public constructor(param0: net.ossrs.rtmp.ConnectCheckerRtmp, param1: com.github.faucamp.simplertmp.RtmpPublisher);
				public stop(): void;
				public resetSentVideoFrames(): void;
				public getDroppedAudioFrames(): number;
				public setVideoResolution(param0: number, param1: number): void;
				public setAuthorization(param0: string, param1: string): void;
				public forceAkamaiTs(param0: boolean): void;
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
					public reset(): void;
					public writeVideoSample(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
					public constructor(param0: net.ossrs.rtmp.SrsFlvMuxer);
					public setAchannel(param0: number): void;
					public setSpsPPs(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): void;
					public writeAudioSample(param0: java.nio.ByteBuffer, param1: globalAndroid.media.MediaCodec.BufferInfo): void;
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
					public muxSequenceHeader(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.util.ArrayList<net.ossrs.rtmp.SrsFlvMuxer.SrsFlvFrameBytes>): void;
					public isPps(param0: net.ossrs.rtmp.SrsFlvMuxer.SrsFlvFrameBytes): boolean;
					public isSps(param0: net.ossrs.rtmp.SrsFlvMuxer.SrsFlvFrameBytes): boolean;
					public muxFlvTag(param0: java.util.ArrayList<net.ossrs.rtmp.SrsFlvMuxer.SrsFlvFrameBytes>, param1: number, param2: number): net.ossrs.rtmp.SrsAllocator.Allocation;
					public muxNaluHeader(param0: net.ossrs.rtmp.SrsFlvMuxer.SrsFlvFrameBytes): net.ossrs.rtmp.SrsFlvMuxer.SrsFlvFrameBytes;
					public demuxAnnexb(param0: java.nio.ByteBuffer, param1: number, param2: boolean): net.ossrs.rtmp.SrsFlvMuxer.SrsFlvFrameBytes;
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
				public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
				public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
				public createSocket(): java.net.Socket;
				public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
				public getDefaultCipherSuites(): native.Array<string>;
				public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
				public getSupportedCipherSuites(): native.Array<string>;
				public createSocket(param0: string, param1: number): java.net.Socket;
				public constructor();
			}
		}
	}
}
