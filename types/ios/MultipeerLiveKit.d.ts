
declare class LivePresenter extends NSObject {

	static alloc(): LivePresenter; // inherited from NSObject

	static new(): LivePresenter; // inherited from NSObject

	needsVideoRun: boolean;

	constructor(o: { mcSessionManager: MCSessionManager; sendVideoInterval: number; videoCompressionQuality: number; targetPeerID: MCPeerID; cameraInitPosition: AVCaptureDevicePosition; sessionPreset: string; });

	bindReceivedCallbacksWithGotImageGotAudioDataGotTextMessage(gotImage: (p1: UIImage, p2: MCPeerID) => void, gotAudioData: (p1: NSData, p2: MCPeerID) => void, gotTextMessage: (p1: string, p2: MCPeerID) => void): void;

	initWithMcSessionManagerSendVideoIntervalVideoCompressionQualityTargetPeerIDCameraInitPositionSessionPresetError(mcSessionManager: MCSessionManager, sendVideoInterval: number, videoCompressionQuality: number, targetPeerID: MCPeerID, cameraInitPosition: AVCaptureDevicePosition, sessionPreset: string): this;

	playSoundWithAudioDataError(audioData: NSData): boolean;

	sendWithTextSendModeError(text: string, sendMode: MCSessionSendDataMode): boolean;

	toggleCameraAndReturnError(): boolean;

	updateTargetPeerID(peerID: MCPeerID): void;
}

declare class MCSessionManager extends NSObject implements MCSessionDelegate {

	static alloc(): MCSessionManager; // inherited from NSObject

	static new(): MCSessionManager; // inherited from NSObject

	readonly connectedPeerIDs: NSArray<MCPeerID>;

	readonly displayName: string;

	readonly foundIDs: NSArray<MCPeerID>;

	readonly myPeerID: MCPeerID;

	needsAdvertising: boolean;

	needsBrowsing: boolean;

	needsToRunSession: boolean;

	readonly serviceType: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	canselConectRequestToPeerID(peerID: MCPeerID): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	inviteToPeerIDTimeout(peerID: MCPeerID, timeout: number): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	onInvited(answerCallback: (p1: MCPeerID, p2: (p1: boolean) => void) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sessionDidFinishReceivingResourceWithNameFromPeerAtURLWithError(session: MCSession, resourceName: string, peerID: MCPeerID, localURL: NSURL, error: NSError): void;

	sessionDidReceiveCertificateFromPeerCertificateHandler(session: MCSession, certificate: NSArray<any> | any[], peerID: MCPeerID, certificateHandler: (p1: boolean) => void): void;

	sessionDidReceiveDataFromPeer(session: MCSession, data: NSData, peerID: MCPeerID): void;

	sessionDidReceiveStreamWithNameFromPeer(session: MCSession, stream: NSInputStream, streamName: string, peerID: MCPeerID): void;

	sessionDidStartReceivingResourceWithNameFromPeerWithProgress(session: MCSession, resourceName: string, peerID: MCPeerID, progress: NSProgress): void;

	sessionPeerDidChangeState(session: MCSession, peerID: MCPeerID, state: MCSessionState): void;
}

declare var MultipeerLiveKitVersionNumber: number;

declare var MultipeerLiveKitVersionString: interop.Reference<number>;
