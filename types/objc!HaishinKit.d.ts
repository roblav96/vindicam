
declare class ASUndefined extends NSObject {

	static alloc(): ASUndefined; // inherited from NSObject

	static new(): ASUndefined; // inherited from NSObject
}

declare class ASXML extends NSObject {

	static alloc(): ASXML; // inherited from NSObject

	static new(): ASXML; // inherited from NSObject
}

declare class ASXMLDocument extends NSObject {

	static alloc(): ASXMLDocument; // inherited from NSObject

	static new(): ASXMLDocument; // inherited from NSObject
}

declare class AVRecorder extends NSObject {

	static alloc(): AVRecorder; // inherited from NSObject

	static new(): AVRecorder; // inherited from NSObject
}

declare class AudioEffect extends NSObject {

	static alloc(): AudioEffect; // inherited from NSObject

	static new(): AudioEffect; // inherited from NSObject
}

declare class DefaultAVRecorderDelegate extends NSObject {

	static alloc(): DefaultAVRecorderDelegate; // inherited from NSObject

	static new(): DefaultAVRecorderDelegate; // inherited from NSObject

	didFinishWriting(recorder: AVRecorder): void;

	didStartRunning(recorder: AVRecorder): void;

	didStopRunning(recorder: AVRecorder): void;

	getPixelBufferAdaptorWithWriterInput(recorder: AVRecorder, withWriterInput: AVAssetWriterInput): AVAssetWriterInputPixelBufferAdaptor;

	getWriterInputMediaTypeSourceFormatHint(recorder: AVRecorder, mediaType: string, sourceFormatHint: any): AVAssetWriterInput;

	rotateFileWithPresentationTimeStampMediaType(recorder: AVRecorder, withPresentationTimeStamp: CMTime, mediaType: string): void;
}

declare class GLHKView extends GLKView implements GLKViewDelegate {

	static alloc(): GLHKView; // inherited from NSObject

	static appearance(): GLHKView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GLHKView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GLHKView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GLHKView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GLHKView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GLHKView; // inherited from UIAppearance

	static new(): GLHKView; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	glkViewDrawInRect(view: GLKView, rect: CGRect): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class HKView extends UIView {

	static alloc(): HKView; // inherited from NSObject

	static appearance(): HKView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): HKView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): HKView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): HKView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): HKView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): HKView; // inherited from UIAppearance

	static layerClass(): typeof NSObject;

	static new(): HKView; // inherited from NSObject

	readonly layer: AVCaptureVideoPreviewLayer;
}

declare class HLSService extends HTTPService {

	static alloc(): HLSService; // inherited from NSObject

	static new(): HLSService; // inherited from NSObject
}

declare class HTTPService extends NetService {

	static alloc(): HTTPService; // inherited from NSObject

	static new(): HTTPService; // inherited from NSObject
}

declare class HTTPStream extends NetStream {

	static alloc(): HTTPStream; // inherited from NSObject

	static new(): HTTPStream; // inherited from NSObject
}

declare var HaishinKitVersionNumber: number;

declare var HaishinKitVersionNumberVar: number;

declare var HaishinKitVersionString: interop.Reference<number>;

declare var HaishinKitVersionStringVar: interop.Reference<number>;

declare class MTHKView extends MTKView implements MTKViewDelegate {

	static alloc(): MTHKView; // inherited from NSObject

	static appearance(): MTHKView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MTHKView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MTHKView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MTHKView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MTHKView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MTHKView; // inherited from UIAppearance

	static new(): MTHKView; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	drawInMTKView(view: MTKView): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	mtkViewDrawableSizeWillChange(view: MTKView, size: CGSize): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class NetClient extends NetSocket {

	static alloc(): NetClient; // inherited from NSObject

	static new(): NetClient; // inherited from NSObject
}

declare class NetService extends NSObject implements NSNetServiceDelegate {

	static alloc(): NetService; // inherited from NSObject

	static new(): NetService; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	netServiceDidAcceptConnectionWithInputStreamOutputStream(sender: NSNetService, inputStream: NSInputStream, outputStream: NSOutputStream): void;

	netServiceDidNotPublish(sender: NSNetService, errorDict: NSDictionary<string, number>): void;

	netServiceDidNotResolve(sender: NSNetService, errorDict: NSDictionary<string, number>): void;

	netServiceDidPublish(sender: NSNetService): void;

	netServiceDidResolveAddress(sender: NSNetService): void;

	netServiceDidStop(sender: NSNetService): void;

	netServiceDidUpdateTXTRecordData(sender: NSNetService, data: NSData): void;

	netServiceWillPublish(sender: NSNetService): void;

	netServiceWillResolve(sender: NSNetService): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class NetSocket extends NSObject implements NSStreamDelegate {

	static alloc(): NetSocket; // inherited from NSObject

	static new(): NetSocket; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

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

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	streamHandleEvent(aStream: NSStream, eventCode: NSStreamEvent): void;
}

declare class NetStream extends NSObject {

	static alloc(): NetStream; // inherited from NSObject

	static new(): NetStream; // inherited from NSObject
}

declare class RTMPStream extends NetStream {

	static alloc(): RTMPStream; // inherited from NSObject

	static new(): RTMPStream; // inherited from NSObject

	readonly currentFPS: number;
}

declare class ScreenCaptureSession extends NSObject {

	static alloc(): ScreenCaptureSession; // inherited from NSObject

	static new(): ScreenCaptureSession; // inherited from NSObject

	onScreen(displayLink: CADisplayLink): void;
}

declare class VideoEffect extends NSObject {

	static alloc(): VideoEffect; // inherited from NSObject

	static new(): VideoEffect; // inherited from NSObject
}
