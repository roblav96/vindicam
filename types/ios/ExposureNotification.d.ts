
declare const ENAttenuationMax: number;

declare const ENAttenuationMin: number;

declare const enum ENAuthorizationStatus {

	Unknown = 0,

	Restricted = 1,

	NotAuthorized = 2,

	Authorized = 3
}

declare const enum ENCalibrationConfidence {

	Lowest = 0,

	Low = 1,

	Medium = 2,

	High = 3
}

declare const enum ENDiagnosisReportType {

	Unknown = 0,

	ConfirmedTest = 1,

	ConfirmedClinicalDiagnosis = 2,

	SelfReported = 3,

	Recursive = 4,

	Revoked = 5
}

declare const enum ENErrorCode {

	Unknown = 1,

	BadParameter = 2,

	NotEntitled = 3,

	NotAuthorized = 4,

	Unsupported = 5,

	Invalidated = 6,

	BluetoothOff = 7,

	InsufficientStorage = 8,

	NotEnabled = 9,

	APIMisuse = 10,

	Internal = 11,

	InsufficientMemory = 12,

	RateLimited = 13,

	Restricted = 14,

	BadFormat = 15,

	DataInaccessible = 16
}

declare var ENErrorDomain: string;

declare class ENExposureConfiguration extends NSObject {

	static alloc(): ENExposureConfiguration; // inherited from NSObject

	static new(): ENExposureConfiguration; // inherited from NSObject

	attenuationDurationThresholds: NSArray<number>;

	attenuationLevelValues: NSArray<number>;

	attenuationWeight: number;

	daysSinceLastExposureLevelValues: NSArray<number>;

	daysSinceLastExposureWeight: number;

	durationLevelValues: NSArray<number>;

	durationWeight: number;

	metadata: NSDictionary<any, any>;

	minimumRiskScore: number;

	minimumRiskScoreFullRange: number;

	transmissionRiskLevelValues: NSArray<number>;

	transmissionRiskWeight: number;
}

declare class ENExposureDetectionSummary extends NSObject {

	static alloc(): ENExposureDetectionSummary; // inherited from NSObject

	static new(): ENExposureDetectionSummary; // inherited from NSObject

	readonly attenuationDurations: NSArray<number>;

	readonly daysSinceLastExposure: number;

	readonly matchedKeyCount: number;

	readonly maximumRiskScore: number;

	readonly maximumRiskScoreFullRange: number;

	readonly metadata: NSDictionary<any, any>;

	readonly riskScoreSumFullRange: number;
}

declare const enum ENExposureFlags {

	None = 0,

	Cache = 1,

	ScoringV2 = 2
}

declare class ENExposureInfo extends NSObject {

	static alloc(): ENExposureInfo; // inherited from NSObject

	static new(): ENExposureInfo; // inherited from NSObject

	readonly attenuationDurations: NSArray<number>;

	readonly attenuationValue: number;

	readonly date: Date;

	readonly duration: number;

	readonly metadata: NSDictionary<any, any>;

	readonly totalRiskScore: number;

	readonly totalRiskScoreFullRange: number;

	readonly transmissionRiskLevel: number;
}

declare const enum ENInfectiousness {

	None = 0,

	Standard = 1,

	High = 2
}

declare class ENManager extends NSObject {

	static alloc(): ENManager; // inherited from NSObject

	static new(): ENManager; // inherited from NSObject

	dispatchQueue: NSObject;

	readonly exposureNotificationEnabled: boolean;

	readonly exposureNotificationStatus: ENStatus;

	invalidationHandler: () => void;

	static readonly authorizationStatus: ENAuthorizationStatus;

	activateWithCompletionHandler(completionHandler: (p1: NSError) => void): void;

	detectExposuresWithConfigurationDiagnosisKeyURLsCompletionHandler(configuration: ENExposureConfiguration, diagnosisKeyURLs: NSArray<NSURL> | NSURL[], completionHandler: (p1: ENExposureDetectionSummary, p2: NSError) => void): NSProgress;

	getDiagnosisKeysWithCompletionHandler(completionHandler: (p1: NSArray<ENTemporaryExposureKey>, p2: NSError) => void): void;

	getExposureInfoFromSummaryUserExplanationCompletionHandler(summary: ENExposureDetectionSummary, userExplanation: string, completionHandler: (p1: NSArray<ENExposureInfo>, p2: NSError) => void): NSProgress;

	getTestDiagnosisKeysWithCompletionHandler(completionHandler: (p1: NSArray<ENTemporaryExposureKey>, p2: NSError) => void): void;

	invalidate(): void;

	setExposureNotificationEnabledCompletionHandler(enabled: boolean, completionHandler: (p1: NSError) => void): void;
}

declare const ENRiskLevelMax: number;

declare const ENRiskLevelMin: number;

declare const ENRiskLevelValueMax: number;

declare const ENRiskLevelValueMin: number;

declare const ENRiskScoreMax: number;

declare const ENRiskScoreMin: number;

declare const ENRiskWeightDefault: number;

declare const ENRiskWeightDefaultV2: number;

declare const ENRiskWeightMax: number;

declare const ENRiskWeightMaxV2: number;

declare const ENRiskWeightMin: number;

declare const enum ENStatus {

	Unknown = 0,

	Active = 1,

	Disabled = 2,

	BluetoothOff = 3,

	Restricted = 4,

	Paused = 5
}

declare class ENTemporaryExposureKey extends NSObject {

	static alloc(): ENTemporaryExposureKey; // inherited from NSObject

	static new(): ENTemporaryExposureKey; // inherited from NSObject

	keyData: NSData;

	rollingPeriod: number;

	rollingStartNumber: number;

	transmissionRiskLevel: number;
}
