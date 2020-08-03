
declare class GLProgram extends NSObject {

	static alloc(): GLProgram; // inherited from NSObject

	static new(): GLProgram; // inherited from NSObject

	fragmentShaderLog: string;

	initialized: boolean;

	programLog: string;

	vertexShaderLog: string;

	constructor(o: { vertexShaderFilename: string; fragmentShaderFilename: string; });

	constructor(o: { vertexShaderString: string; fragmentShaderFilename: string; });

	constructor(o: { vertexShaderString: string; fragmentShaderString: string; });

	addAttribute(attributeName: string): void;

	attributeIndex(attributeName: string): number;

	initWithVertexShaderFilenameFragmentShaderFilename(vShaderFilename: string, fShaderFilename: string): this;

	initWithVertexShaderStringFragmentShaderFilename(vShaderString: string, fShaderFilename: string): this;

	initWithVertexShaderStringFragmentShaderString(vShaderString: string, fShaderString: string): this;

	link(): boolean;

	uniformIndex(uniformName: string): number;

	use(): void;

	validate(): void;
}

interface GPUByteColorVector {
	red: number;
	green: number;
	blue: number;
	alpha: number;
}
declare var GPUByteColorVector: interop.StructType<GPUByteColorVector>;

declare class GPUImage3x3ConvolutionFilter extends GPUImage3x3TextureSamplingFilter {

	static alloc(): GPUImage3x3ConvolutionFilter; // inherited from NSObject

	static new(): GPUImage3x3ConvolutionFilter; // inherited from NSObject

	convolutionKernel: GPUMatrix3x3;
}

declare class GPUImage3x3TextureSamplingFilter extends GPUImageFilter {

	static alloc(): GPUImage3x3TextureSamplingFilter; // inherited from NSObject

	static new(): GPUImage3x3TextureSamplingFilter; // inherited from NSObject

	texelHeight: number;

	texelWidth: number;
}

declare class GPUImageAdaptiveThresholdFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageAdaptiveThresholdFilter; // inherited from NSObject

	static new(): GPUImageAdaptiveThresholdFilter; // inherited from NSObject

	blurRadiusInPixels: number;
}

declare class GPUImageAddBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageAddBlendFilter; // inherited from NSObject

	static new(): GPUImageAddBlendFilter; // inherited from NSObject
}

declare class GPUImageAlphaBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageAlphaBlendFilter; // inherited from NSObject

	static new(): GPUImageAlphaBlendFilter; // inherited from NSObject

	mix: number;
}

declare class GPUImageAmatorkaFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageAmatorkaFilter; // inherited from NSObject

	static new(): GPUImageAmatorkaFilter; // inherited from NSObject
}

declare class GPUImageAverageColor extends GPUImageFilter {

	static alloc(): GPUImageAverageColor; // inherited from NSObject

	static new(): GPUImageAverageColor; // inherited from NSObject

	colorAverageProcessingFinishedBlock: (p1: number, p2: number, p3: number, p4: number, p5: CMTime) => void;

	extractAverageColorAtFrameTime(frameTime: CMTime): void;
}

declare class GPUImageAverageLuminanceThresholdFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageAverageLuminanceThresholdFilter; // inherited from NSObject

	static new(): GPUImageAverageLuminanceThresholdFilter; // inherited from NSObject

	thresholdMultiplier: number;
}

declare class GPUImageBilateralFilter extends GPUImageGaussianBlurFilter {

	static alloc(): GPUImageBilateralFilter; // inherited from NSObject

	static new(): GPUImageBilateralFilter; // inherited from NSObject

	distanceNormalizationFactor: number;
}

declare class GPUImageBoxBlurFilter extends GPUImageGaussianBlurFilter {

	static alloc(): GPUImageBoxBlurFilter; // inherited from NSObject

	static new(): GPUImageBoxBlurFilter; // inherited from NSObject
}

declare class GPUImageBrightnessFilter extends GPUImageFilter {

	static alloc(): GPUImageBrightnessFilter; // inherited from NSObject

	static new(): GPUImageBrightnessFilter; // inherited from NSObject

	brightness: number;
}

declare class GPUImageBuffer extends GPUImageFilter {

	static alloc(): GPUImageBuffer; // inherited from NSObject

	static new(): GPUImageBuffer; // inherited from NSObject

	bufferSize: number;
}

declare class GPUImageBulgeDistortionFilter extends GPUImageFilter {

	static alloc(): GPUImageBulgeDistortionFilter; // inherited from NSObject

	static new(): GPUImageBulgeDistortionFilter; // inherited from NSObject

	center: CGPoint;

	radius: number;

	scale: number;
}

declare class GPUImageCGAColorspaceFilter extends GPUImageFilter {

	static alloc(): GPUImageCGAColorspaceFilter; // inherited from NSObject

	static new(): GPUImageCGAColorspaceFilter; // inherited from NSObject
}

declare class GPUImageCannyEdgeDetectionFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageCannyEdgeDetectionFilter; // inherited from NSObject

	static new(): GPUImageCannyEdgeDetectionFilter; // inherited from NSObject

	blurRadiusInPixels: number;

	blurTexelSpacingMultiplier: number;

	lowerThreshold: number;

	texelHeight: number;

	texelWidth: number;

	upperThreshold: number;
}

declare class GPUImageChromaKeyBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageChromaKeyBlendFilter; // inherited from NSObject

	static new(): GPUImageChromaKeyBlendFilter; // inherited from NSObject

	smoothing: number;

	thresholdSensitivity: number;

	setColorToReplaceRedGreenBlue(redComponent: number, greenComponent: number, blueComponent: number): void;
}

declare class GPUImageChromaKeyFilter extends GPUImageFilter {

	static alloc(): GPUImageChromaKeyFilter; // inherited from NSObject

	static new(): GPUImageChromaKeyFilter; // inherited from NSObject

	smoothing: number;

	thresholdSensitivity: number;

	setColorToReplaceRedGreenBlue(redComponent: number, greenComponent: number, blueComponent: number): void;
}

declare class GPUImageClosingFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageClosingFilter; // inherited from NSObject

	static new(): GPUImageClosingFilter; // inherited from NSObject

	horizontalTexelSpacing: number;

	verticalTexelSpacing: number;

	constructor(o: { radius: number; });

	initWithRadius(radius: number): this;
}

declare class GPUImageColorBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageColorBlendFilter; // inherited from NSObject

	static new(): GPUImageColorBlendFilter; // inherited from NSObject
}

declare class GPUImageColorBurnBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageColorBurnBlendFilter; // inherited from NSObject

	static new(): GPUImageColorBurnBlendFilter; // inherited from NSObject
}

declare class GPUImageColorDodgeBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageColorDodgeBlendFilter; // inherited from NSObject

	static new(): GPUImageColorDodgeBlendFilter; // inherited from NSObject
}

declare class GPUImageColorInvertFilter extends GPUImageFilter {

	static alloc(): GPUImageColorInvertFilter; // inherited from NSObject

	static new(): GPUImageColorInvertFilter; // inherited from NSObject
}

declare class GPUImageColorMatrixFilter extends GPUImageFilter {

	static alloc(): GPUImageColorMatrixFilter; // inherited from NSObject

	static new(): GPUImageColorMatrixFilter; // inherited from NSObject

	colorMatrix: GPUMatrix4x4;

	intensity: number;
}

declare class GPUImageColorPackingFilter extends GPUImageFilter {

	static alloc(): GPUImageColorPackingFilter; // inherited from NSObject

	static new(): GPUImageColorPackingFilter; // inherited from NSObject
}

declare class GPUImageContext extends NSObject {

	static alloc(): GPUImageContext; // inherited from NSObject

	static contextKey(): interop.Pointer | interop.Reference<any>;

	static deviceSupportsFramebufferReads(): boolean;

	static deviceSupportsOpenGLESExtension(extension: string): boolean;

	static deviceSupportsRedTextures(): boolean;

	static maximumTextureSizeForThisDevice(): number;

	static maximumTextureUnitsForThisDevice(): number;

	static maximumVaryingVectorsForThisDevice(): number;

	static new(): GPUImageContext; // inherited from NSObject

	static setActiveShaderProgram(shaderProgram: GLProgram): void;

	static sharedContextQueue(): NSObject;

	static sharedFramebufferCache(): GPUImageFramebufferCache;

	static sharedImageProcessingContext(): GPUImageContext;

	static sizeThatFitsWithinATextureForSize(inputSize: CGSize): CGSize;

	static supportsFastTextureUpload(): boolean;

	static useImageProcessingContext(): void;

	readonly context: EAGLContext;

	readonly contextQueue: NSObject;

	readonly coreVideoTextureCache: any;

	currentShaderProgram: GLProgram;

	readonly framebufferCache: GPUImageFramebufferCache;

	presentBufferForDisplay(): void;

	programForVertexShaderStringFragmentShaderString(vertexShaderString: string, fragmentShaderString: string): GLProgram;

	setContextShaderProgram(shaderProgram: GLProgram): void;

	useAsCurrentContext(): void;

	useSharegroup(sharegroup: EAGLSharegroup): void;
}

declare class GPUImageContrastFilter extends GPUImageFilter {

	static alloc(): GPUImageContrastFilter; // inherited from NSObject

	static new(): GPUImageContrastFilter; // inherited from NSObject

	contrast: number;
}

declare function GPUImageCreateResizedSampleBuffer(cameraFrame: any, finalSize: CGSize, sampleBuffer: interop.Pointer | interop.Reference<any>): void;

declare class GPUImageCropFilter extends GPUImageFilter {

	static alloc(): GPUImageCropFilter; // inherited from NSObject

	static new(): GPUImageCropFilter; // inherited from NSObject

	cropRegion: CGRect;

	constructor(o: { cropRegion: CGRect; });

	initWithCropRegion(newCropRegion: CGRect): this;
}

declare class GPUImageCrosshairGenerator extends GPUImageFilter {

	static alloc(): GPUImageCrosshairGenerator; // inherited from NSObject

	static new(): GPUImageCrosshairGenerator; // inherited from NSObject

	crosshairWidth: number;

	renderCrosshairsFromArrayCountFrameTime(crosshairCoordinates: interop.Pointer | interop.Reference<number>, numberOfCrosshairs: number, frameTime: CMTime): void;

	setCrosshairColorRedGreenBlue(redComponent: number, greenComponent: number, blueComponent: number): void;
}

declare class GPUImageCrosshatchFilter extends GPUImageFilter {

	static alloc(): GPUImageCrosshatchFilter; // inherited from NSObject

	static new(): GPUImageCrosshatchFilter; // inherited from NSObject

	crossHatchSpacing: number;

	lineWidth: number;
}

declare class GPUImageDarkenBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageDarkenBlendFilter; // inherited from NSObject

	static new(): GPUImageDarkenBlendFilter; // inherited from NSObject
}

declare class GPUImageDifferenceBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageDifferenceBlendFilter; // inherited from NSObject

	static new(): GPUImageDifferenceBlendFilter; // inherited from NSObject
}

declare class GPUImageDilationFilter extends GPUImageTwoPassTextureSamplingFilter {

	static alloc(): GPUImageDilationFilter; // inherited from NSObject

	static new(): GPUImageDilationFilter; // inherited from NSObject

	constructor(o: { radius: number; });

	initWithRadius(dilationRadius: number): this;
}

declare class GPUImageDirectionalNonMaximumSuppressionFilter extends GPUImageFilter {

	static alloc(): GPUImageDirectionalNonMaximumSuppressionFilter; // inherited from NSObject

	static new(): GPUImageDirectionalNonMaximumSuppressionFilter; // inherited from NSObject

	lowerThreshold: number;

	texelHeight: number;

	texelWidth: number;

	upperThreshold: number;
}

declare class GPUImageDirectionalSobelEdgeDetectionFilter extends GPUImage3x3TextureSamplingFilter {

	static alloc(): GPUImageDirectionalSobelEdgeDetectionFilter; // inherited from NSObject

	static new(): GPUImageDirectionalSobelEdgeDetectionFilter; // inherited from NSObject
}

declare class GPUImageDissolveBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageDissolveBlendFilter; // inherited from NSObject

	static new(): GPUImageDissolveBlendFilter; // inherited from NSObject

	mix: number;
}

declare class GPUImageDivideBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageDivideBlendFilter; // inherited from NSObject

	static new(): GPUImageDivideBlendFilter; // inherited from NSObject
}

declare class GPUImageEmbossFilter extends GPUImage3x3ConvolutionFilter {

	static alloc(): GPUImageEmbossFilter; // inherited from NSObject

	static new(): GPUImageEmbossFilter; // inherited from NSObject

	intensity: number;
}

declare class GPUImageErosionFilter extends GPUImageTwoPassTextureSamplingFilter {

	static alloc(): GPUImageErosionFilter; // inherited from NSObject

	static new(): GPUImageErosionFilter; // inherited from NSObject

	constructor(o: { radius: number; });

	initWithRadius(erosionRadius: number): this;
}

declare class GPUImageExclusionBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageExclusionBlendFilter; // inherited from NSObject

	static new(): GPUImageExclusionBlendFilter; // inherited from NSObject
}

declare class GPUImageExposureFilter extends GPUImageFilter {

	static alloc(): GPUImageExposureFilter; // inherited from NSObject

	static new(): GPUImageExposureFilter; // inherited from NSObject

	exposure: number;
}

declare class GPUImageFASTCornerDetectionFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageFASTCornerDetectionFilter; // inherited from NSObject

	static new(): GPUImageFASTCornerDetectionFilter; // inherited from NSObject

	constructor(o: { FASTDetectorVariant: GPUImageFASTDetectorType; });

	initWithFASTDetectorVariant(detectorType: GPUImageFASTDetectorType): this;
}

declare const enum GPUImageFASTDetectorType {

	kGPUImageFAST12Contiguous = 0,

	kGPUImageFAST12ContiguousNonMaximumSuppressed = 1
}

declare class GPUImageFalseColorFilter extends GPUImageFilter {

	static alloc(): GPUImageFalseColorFilter; // inherited from NSObject

	static new(): GPUImageFalseColorFilter; // inherited from NSObject

	firstColor: GPUVector4;

	secondColor: GPUVector4;

	setFirstColorRedGreenBlue(redComponent: number, greenComponent: number, blueComponent: number): void;

	setSecondColorRedGreenBlue(redComponent: number, greenComponent: number, blueComponent: number): void;
}

declare const enum GPUImageFillModeType {

	kGPUImageFillModeStretch = 0,

	kGPUImageFillModePreserveAspectRatio = 1,

	kGPUImageFillModePreserveAspectRatioAndFill = 2
}

declare class GPUImageFilter extends GPUImageOutput implements GPUImageInput {

	static alloc(): GPUImageFilter; // inherited from NSObject

	static new(): GPUImageFilter; // inherited from NSObject

	static textureCoordinatesForRotation(rotationMode: GPUImageRotationMode): interop.Pointer | interop.Reference<number>;

	currentlyReceivingMonochromeInput: boolean;

	preventRendering: boolean;

	readonly renderTarget: any;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly enabled: boolean; // inherited from GPUImageInput

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { fragmentShaderFromFile: string; });

	constructor(o: { fragmentShaderFromString: string; });

	constructor(o: { vertexShaderFromString: string; fragmentShaderFromString: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	endProcessing(): void;

	informTargetsAboutNewFrameAtTime(frameTime: CMTime): void;

	initWithFragmentShaderFromFile(fragmentShaderFilename: string): this;

	initWithFragmentShaderFromString(fragmentShaderString: string): this;

	initWithVertexShaderFromStringFragmentShaderFromString(vertexShaderString: string, fragmentShaderString: string): this;

	initializeAttributes(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	maximumOutputSize(): CGSize;

	newFrameReadyAtTimeAtIndex(frameTime: CMTime, textureIndex: number): void;

	nextAvailableTextureIndex(): number;

	outputFrameSize(): CGSize;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	renderToTextureWithVerticesTextureCoordinates(vertices: interop.Pointer | interop.Reference<number>, textureCoordinates: interop.Pointer | interop.Reference<number>): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	rotatedPointForRotation(pointToRotate: CGPoint, rotation: GPUImageRotationMode): CGPoint;

	rotatedSizeForIndex(sizeToRotate: CGSize, textureIndex: number): CGSize;

	self(): this;

	setAndExecuteUniformStateCallbackAtIndexForProgramToBlock(uniform: number, shaderProgram: GLProgram, uniformStateBlock: () => void): void;

	setBackgroundColorRedGreenBlueAlpha(redComponent: number, greenComponent: number, blueComponent: number, alphaComponent: number): void;

	setCurrentlyReceivingMonochromeInput(newValue: boolean): void;

	setFloatArrayLengthForUniform(array: interop.Pointer | interop.Reference<number>, count: number, uniformName: string): void;

	setFloatArrayLengthForUniformProgram(arrayValue: interop.Pointer | interop.Reference<number>, arrayLength: number, uniform: number, shaderProgram: GLProgram): void;

	setFloatForUniformName(newFloat: number, uniformName: string): void;

	setFloatForUniformProgram(floatValue: number, uniform: number, shaderProgram: GLProgram): void;

	setFloatVec3ForUniformName(newVec3: GPUVector3, uniformName: string): void;

	setFloatVec4ForUniform(newVec4: GPUVector4, uniformName: string): void;

	setInputFramebufferAtIndex(newInputFramebuffer: GPUImageFramebuffer, textureIndex: number): void;

	setInputRotationAtIndex(newInputRotation: GPUImageRotationMode, textureIndex: number): void;

	setInputSizeAtIndex(newSize: CGSize, textureIndex: number): void;

	setIntegerForUniformName(newInteger: number, uniformName: string): void;

	setIntegerForUniformProgram(intValue: number, uniform: number, shaderProgram: GLProgram): void;

	setMatrix3fForUniformProgram(matrix: GPUMatrix3x3, uniform: number, shaderProgram: GLProgram): void;

	setMatrix4fForUniformProgram(matrix: GPUMatrix4x4, uniform: number, shaderProgram: GLProgram): void;

	setPointForUniformName(newPoint: CGPoint, uniformName: string): void;

	setPointForUniformProgram(pointValue: CGPoint, uniform: number, shaderProgram: GLProgram): void;

	setSizeForUniformName(newSize: CGSize, uniformName: string): void;

	setSizeForUniformProgram(sizeValue: CGSize, uniform: number, shaderProgram: GLProgram): void;

	setUniformsForProgramAtIndex(programIndex: number): void;

	setVec3ForUniformProgram(vectorValue: GPUVector3, uniform: number, shaderProgram: GLProgram): void;

	setVec4ForUniformProgram(vectorValue: GPUVector4, uniform: number, shaderProgram: GLProgram): void;

	setupFilterForSize(filterFrameSize: CGSize): void;

	shouldIgnoreUpdatesToThisTarget(): boolean;

	sizeOfFBO(): CGSize;

	wantsMonochromeInput(): boolean;
}

declare class GPUImageFilterGroup extends GPUImageOutput implements GPUImageInput {

	static alloc(): GPUImageFilterGroup; // inherited from NSObject

	static new(): GPUImageFilterGroup; // inherited from NSObject

	initialFilters: NSArray<any>;

	inputFilterToIgnoreForUpdates: GPUImageOutput;

	terminalFilter: GPUImageOutput;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly enabled: boolean; // inherited from GPUImageInput

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addFilter(newFilter: GPUImageOutput): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	endProcessing(): void;

	filterAtIndex(filterIndex: number): GPUImageOutput;

	filterCount(): number;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	maximumOutputSize(): CGSize;

	newFrameReadyAtTimeAtIndex(frameTime: CMTime, textureIndex: number): void;

	nextAvailableTextureIndex(): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setCurrentlyReceivingMonochromeInput(newValue: boolean): void;

	setInputFramebufferAtIndex(newInputFramebuffer: GPUImageFramebuffer, textureIndex: number): void;

	setInputRotationAtIndex(newInputRotation: GPUImageRotationMode, textureIndex: number): void;

	setInputSizeAtIndex(newSize: CGSize, textureIndex: number): void;

	shouldIgnoreUpdatesToThisTarget(): boolean;

	wantsMonochromeInput(): boolean;
}

declare class GPUImageFilterPipeline extends NSObject {

	static alloc(): GPUImageFilterPipeline; // inherited from NSObject

	static new(): GPUImageFilterPipeline; // inherited from NSObject

	filters: NSMutableArray<any>;

	input: GPUImageOutput;

	output: GPUImageInput;

	constructor(o: { configurationFile: NSURL; input: GPUImageOutput; output: GPUImageInput; });

	constructor(o: { configuration: NSDictionary<any, any>; input: GPUImageOutput; output: GPUImageInput; });

	constructor(o: { orderedFilters: NSArray<any> | any[]; input: GPUImageOutput; output: GPUImageInput; });

	addFilter(filter: GPUImageOutput): void;

	addFilterAtIndex(filter: GPUImageOutput, insertIndex: number): void;

	currentFilteredFrame(): UIImage;

	currentFilteredFrameWithOrientation(imageOrientation: UIImageOrientation): UIImage;

	initWithConfigurationFileInputOutput(configuration: NSURL, input: GPUImageOutput, output: GPUImageInput): this;

	initWithConfigurationInputOutput(configuration: NSDictionary<any, any>, input: GPUImageOutput, output: GPUImageInput): this;

	initWithOrderedFiltersInputOutput(filters: NSArray<any> | any[], input: GPUImageOutput, output: GPUImageInput): this;

	newCGImageFromCurrentFilteredFrame(): any;

	removeAllFilters(): void;

	removeFilter(filter: GPUImageOutput): void;

	removeFilterAtIndex(index: number): void;

	replaceAllFilters(newFilters: NSArray<any> | any[]): void;

	replaceFilterAtIndexWithFilter(index: number, filter: GPUImageOutput): void;
}

declare class GPUImageFramebuffer extends NSObject {

	static alloc(): GPUImageFramebuffer; // inherited from NSObject

	static new(): GPUImageFramebuffer; // inherited from NSObject

	readonly missingFramebuffer: boolean;

	readonly size: CGSize;

	readonly texture: number;

	readonly textureOptions: GPUTextureOptions;

	constructor(o: { size: CGSize; });

	constructor(o: { size: CGSize; overriddenTexture: number; });

	constructor(o: { size: CGSize; textureOptions: GPUTextureOptions; onlyTexture: boolean; });

	activateFramebuffer(): void;

	byteBuffer(): string;

	bytesPerRow(): number;

	clearAllLocks(): void;

	disableReferenceCounting(): void;

	enableReferenceCounting(): void;

	initWithSize(framebufferSize: CGSize): this;

	initWithSizeOverriddenTexture(framebufferSize: CGSize, inputTexture: number): this;

	initWithSizeTextureOptionsOnlyTexture(framebufferSize: CGSize, fboTextureOptions: GPUTextureOptions, onlyGenerateTexture: boolean): this;

	lock(): void;

	lockForReading(): void;

	newCGImageFromFramebufferContents(): any;

	restoreRenderTarget(): void;

	unlock(): void;

	unlockAfterReading(): void;
}

declare class GPUImageFramebufferCache extends NSObject {

	static alloc(): GPUImageFramebufferCache; // inherited from NSObject

	static new(): GPUImageFramebufferCache; // inherited from NSObject

	addFramebufferToActiveImageCaptureList(framebuffer: GPUImageFramebuffer): void;

	fetchFramebufferForSizeOnlyTexture(framebufferSize: CGSize, onlyTexture: boolean): GPUImageFramebuffer;

	fetchFramebufferForSizeTextureOptionsOnlyTexture(framebufferSize: CGSize, textureOptions: GPUTextureOptions, onlyTexture: boolean): GPUImageFramebuffer;

	purgeAllUnassignedFramebuffers(): void;

	removeFramebufferFromActiveImageCaptureList(framebuffer: GPUImageFramebuffer): void;

	returnFramebufferToCache(framebuffer: GPUImageFramebuffer): void;
}

declare var GPUImageFrameworkVersionNumber: number;

declare var GPUImageFrameworkVersionString: interop.Reference<number>;

declare class GPUImageGammaFilter extends GPUImageFilter {

	static alloc(): GPUImageGammaFilter; // inherited from NSObject

	static new(): GPUImageGammaFilter; // inherited from NSObject

	gamma: number;
}

declare class GPUImageGaussianBlurFilter extends GPUImageTwoPassTextureSamplingFilter {

	static alloc(): GPUImageGaussianBlurFilter; // inherited from NSObject

	static fragmentShaderForOptimizedBlurOfRadiusSigma(blurRadius: number, sigma: number): string;

	static fragmentShaderForStandardBlurOfRadiusSigma(blurRadius: number, sigma: number): string;

	static new(): GPUImageGaussianBlurFilter; // inherited from NSObject

	static vertexShaderForOptimizedBlurOfRadiusSigma(blurRadius: number, sigma: number): string;

	static vertexShaderForStandardBlurOfRadiusSigma(blurRadius: number, sigma: number): string;

	blurPasses: number;

	blurRadiusAsFractionOfImageHeight: number;

	blurRadiusAsFractionOfImageWidth: number;

	blurRadiusInPixels: number;

	texelSpacingMultiplier: number;

	switchToVertexShaderFragmentShader(newVertexShader: string, newFragmentShader: string): void;
}

declare class GPUImageGaussianBlurPositionFilter extends GPUImageTwoPassTextureSamplingFilter {

	static alloc(): GPUImageGaussianBlurPositionFilter; // inherited from NSObject

	static new(): GPUImageGaussianBlurPositionFilter; // inherited from NSObject

	blurCenter: CGPoint;

	blurRadius: number;

	blurSize: number;
}

declare class GPUImageGaussianSelectiveBlurFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageGaussianSelectiveBlurFilter; // inherited from NSObject

	static new(): GPUImageGaussianSelectiveBlurFilter; // inherited from NSObject

	aspectRatio: number;

	blurRadiusInPixels: number;

	excludeBlurSize: number;

	excludeCirclePoint: CGPoint;

	excludeCircleRadius: number;
}

declare class GPUImageGlassSphereFilter extends GPUImageSphereRefractionFilter {

	static alloc(): GPUImageGlassSphereFilter; // inherited from NSObject

	static new(): GPUImageGlassSphereFilter; // inherited from NSObject
}

declare class GPUImageGrayscaleFilter extends GPUImageFilter {

	static alloc(): GPUImageGrayscaleFilter; // inherited from NSObject

	static new(): GPUImageGrayscaleFilter; // inherited from NSObject
}

declare class GPUImageHSBFilter extends GPUImageColorMatrixFilter {

	static alloc(): GPUImageHSBFilter; // inherited from NSObject

	static new(): GPUImageHSBFilter; // inherited from NSObject

	adjustBrightness(b: number): void;

	adjustSaturation(s: number): void;

	reset(): void;

	rotateHue(h: number): void;
}

declare class GPUImageHalftoneFilter extends GPUImagePixellateFilter {

	static alloc(): GPUImageHalftoneFilter; // inherited from NSObject

	static new(): GPUImageHalftoneFilter; // inherited from NSObject
}

declare class GPUImageHardLightBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageHardLightBlendFilter; // inherited from NSObject

	static new(): GPUImageHardLightBlendFilter; // inherited from NSObject
}

declare class GPUImageHarrisCornerDetectionFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageHarrisCornerDetectionFilter; // inherited from NSObject

	static new(): GPUImageHarrisCornerDetectionFilter; // inherited from NSObject

	blurRadiusInPixels: number;

	cornersDetectedBlock: (p1: interop.Pointer | interop.Reference<number>, p2: number, p3: CMTime) => void;

	readonly intermediateImages: NSMutableArray<any>;

	sensitivity: number;

	threshold: number;

	constructor(o: { cornerDetectionFragmentShader: string; });

	initWithCornerDetectionFragmentShader(cornerDetectionFragmentShader: string): this;
}

declare class GPUImageHazeFilter extends GPUImageFilter {

	static alloc(): GPUImageHazeFilter; // inherited from NSObject

	static new(): GPUImageHazeFilter; // inherited from NSObject

	distance: number;

	slope: number;
}

declare class GPUImageHighPassFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageHighPassFilter; // inherited from NSObject

	static new(): GPUImageHighPassFilter; // inherited from NSObject

	filterStrength: number;
}

declare class GPUImageHighlightShadowFilter extends GPUImageFilter {

	static alloc(): GPUImageHighlightShadowFilter; // inherited from NSObject

	static new(): GPUImageHighlightShadowFilter; // inherited from NSObject

	highlights: number;

	shadows: number;
}

declare class GPUImageHistogramEqualizationFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageHistogramEqualizationFilter; // inherited from NSObject

	static new(): GPUImageHistogramEqualizationFilter; // inherited from NSObject

	downsamplingFactor: number;

	constructor(o: { histogramType: GPUImageHistogramType; });

	initWithHistogramType(newHistogramType: GPUImageHistogramType): this;
}

declare class GPUImageHistogramFilter extends GPUImageFilter {

	static alloc(): GPUImageHistogramFilter; // inherited from NSObject

	static new(): GPUImageHistogramFilter; // inherited from NSObject

	downsamplingFactor: number;

	constructor(o: { histogramType: GPUImageHistogramType; });

	initWithHistogramType(newHistogramType: GPUImageHistogramType): this;

	initializeSecondaryAttributes(): void;
}

declare class GPUImageHistogramGenerator extends GPUImageFilter {

	static alloc(): GPUImageHistogramGenerator; // inherited from NSObject

	static new(): GPUImageHistogramGenerator; // inherited from NSObject
}

declare const enum GPUImageHistogramType {

	kGPUImageHistogramRed = 0,

	kGPUImageHistogramGreen = 1,

	kGPUImageHistogramBlue = 2,

	kGPUImageHistogramRGB = 3,

	kGPUImageHistogramLuminance = 4
}

declare class GPUImageHoughTransformLineDetector extends GPUImageFilterGroup {

	static alloc(): GPUImageHoughTransformLineDetector; // inherited from NSObject

	static new(): GPUImageHoughTransformLineDetector; // inherited from NSObject

	edgeThreshold: number;

	readonly intermediateImages: NSMutableArray<any>;

	lineDetectionThreshold: number;

	linesDetectedBlock: (p1: interop.Pointer | interop.Reference<number>, p2: number, p3: CMTime) => void;
}

declare class GPUImageHueBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageHueBlendFilter; // inherited from NSObject

	static new(): GPUImageHueBlendFilter; // inherited from NSObject
}

declare class GPUImageHueFilter extends GPUImageFilter {

	static alloc(): GPUImageHueFilter; // inherited from NSObject

	static new(): GPUImageHueFilter; // inherited from NSObject

	hue: number;
}

interface GPUImageInput extends NSObjectProtocol {

	enabled: boolean;

	endProcessing(): void;

	maximumOutputSize(): CGSize;

	newFrameReadyAtTimeAtIndex(frameTime: CMTime, textureIndex: number): void;

	nextAvailableTextureIndex(): number;

	setCurrentlyReceivingMonochromeInput(newValue: boolean): void;

	setInputFramebufferAtIndex(newInputFramebuffer: GPUImageFramebuffer, textureIndex: number): void;

	setInputRotationAtIndex(newInputRotation: GPUImageRotationMode, textureIndex: number): void;

	setInputSizeAtIndex(newSize: CGSize, textureIndex: number): void;

	shouldIgnoreUpdatesToThisTarget(): boolean;

	wantsMonochromeInput(): boolean;
}
declare var GPUImageInput: {

	prototype: GPUImageInput;
};

declare class GPUImageJFAVoronoiFilter extends GPUImageFilter {

	static alloc(): GPUImageJFAVoronoiFilter; // inherited from NSObject

	static new(): GPUImageJFAVoronoiFilter; // inherited from NSObject

	sizeInPixels: CGSize;
}

declare class GPUImageKuwaharaFilter extends GPUImageFilter {

	static alloc(): GPUImageKuwaharaFilter; // inherited from NSObject

	static new(): GPUImageKuwaharaFilter; // inherited from NSObject

	radius: number;
}

declare class GPUImageKuwaharaRadius3Filter extends GPUImageFilter {

	static alloc(): GPUImageKuwaharaRadius3Filter; // inherited from NSObject

	static new(): GPUImageKuwaharaRadius3Filter; // inherited from NSObject
}

declare class GPUImageLanczosResamplingFilter extends GPUImageTwoPassTextureSamplingFilter {

	static alloc(): GPUImageLanczosResamplingFilter; // inherited from NSObject

	static new(): GPUImageLanczosResamplingFilter; // inherited from NSObject

	originalImageSize: CGSize;
}

declare class GPUImageLaplacianFilter extends GPUImage3x3ConvolutionFilter {

	static alloc(): GPUImageLaplacianFilter; // inherited from NSObject

	static new(): GPUImageLaplacianFilter; // inherited from NSObject
}

declare class GPUImageLevelsFilter extends GPUImageFilter {

	static alloc(): GPUImageLevelsFilter; // inherited from NSObject

	static new(): GPUImageLevelsFilter; // inherited from NSObject

	setBlueMinGammaMax(min: number, mid: number, max: number): void;

	setBlueMinGammaMaxMinOutMaxOut(min: number, mid: number, max: number, minOut: number, maxOut: number): void;

	setGreenMinGammaMax(min: number, mid: number, max: number): void;

	setGreenMinGammaMaxMinOutMaxOut(min: number, mid: number, max: number, minOut: number, maxOut: number): void;

	setMinGammaMax(min: number, mid: number, max: number): void;

	setMinGammaMaxMinOutMaxOut(min: number, mid: number, max: number, minOut: number, maxOut: number): void;

	setRedMinGammaMax(min: number, mid: number, max: number): void;

	setRedMinGammaMaxMinOutMaxOut(min: number, mid: number, max: number, minOut: number, maxOut: number): void;
}

declare class GPUImageLightenBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageLightenBlendFilter; // inherited from NSObject

	static new(): GPUImageLightenBlendFilter; // inherited from NSObject
}

declare class GPUImageLineGenerator extends GPUImageFilter {

	static alloc(): GPUImageLineGenerator; // inherited from NSObject

	static new(): GPUImageLineGenerator; // inherited from NSObject

	lineWidth: number;

	renderLinesFromArrayCountFrameTime(lineSlopeAndIntercepts: interop.Pointer | interop.Reference<number>, numberOfLines: number, frameTime: CMTime): void;

	setLineColorRedGreenBlue(redComponent: number, greenComponent: number, blueComponent: number): void;
}

declare class GPUImageLinearBurnBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageLinearBurnBlendFilter; // inherited from NSObject

	static new(): GPUImageLinearBurnBlendFilter; // inherited from NSObject
}

declare class GPUImageLocalBinaryPatternFilter extends GPUImage3x3TextureSamplingFilter {

	static alloc(): GPUImageLocalBinaryPatternFilter; // inherited from NSObject

	static new(): GPUImageLocalBinaryPatternFilter; // inherited from NSObject
}

declare class GPUImageLookupFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageLookupFilter; // inherited from NSObject

	static new(): GPUImageLookupFilter; // inherited from NSObject

	intensity: number;
}

declare class GPUImageLowPassFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageLowPassFilter; // inherited from NSObject

	static new(): GPUImageLowPassFilter; // inherited from NSObject

	filterStrength: number;
}

declare class GPUImageLuminanceRangeFilter extends GPUImageFilter {

	static alloc(): GPUImageLuminanceRangeFilter; // inherited from NSObject

	static new(): GPUImageLuminanceRangeFilter; // inherited from NSObject

	rangeReductionFactor: number;
}

declare class GPUImageLuminanceThresholdFilter extends GPUImageFilter {

	static alloc(): GPUImageLuminanceThresholdFilter; // inherited from NSObject

	static new(): GPUImageLuminanceThresholdFilter; // inherited from NSObject

	threshold: number;
}

declare class GPUImageLuminosity extends GPUImageAverageColor {

	static alloc(): GPUImageLuminosity; // inherited from NSObject

	static new(): GPUImageLuminosity; // inherited from NSObject

	luminosityProcessingFinishedBlock: (p1: number, p2: CMTime) => void;

	extractLuminosityAtFrameTime(frameTime: CMTime): void;

	initializeSecondaryAttributes(): void;
}

declare class GPUImageLuminosityBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageLuminosityBlendFilter; // inherited from NSObject

	static new(): GPUImageLuminosityBlendFilter; // inherited from NSObject
}

declare class GPUImageMaskFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageMaskFilter; // inherited from NSObject

	static new(): GPUImageMaskFilter; // inherited from NSObject
}

declare class GPUImageMedianFilter extends GPUImage3x3TextureSamplingFilter {

	static alloc(): GPUImageMedianFilter; // inherited from NSObject

	static new(): GPUImageMedianFilter; // inherited from NSObject
}

declare class GPUImageMissEtikateFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageMissEtikateFilter; // inherited from NSObject

	static new(): GPUImageMissEtikateFilter; // inherited from NSObject
}

declare class GPUImageMonochromeFilter extends GPUImageFilter {

	static alloc(): GPUImageMonochromeFilter; // inherited from NSObject

	static new(): GPUImageMonochromeFilter; // inherited from NSObject

	color: GPUVector4;

	intensity: number;

	setColorRedGreenBlue(redComponent: number, greenComponent: number, blueComponent: number): void;
}

declare class GPUImageMosaicFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageMosaicFilter; // inherited from NSObject

	static new(): GPUImageMosaicFilter; // inherited from NSObject

	colorOn: boolean;

	displayTileSize: CGSize;

	inputTileSize: CGSize;

	numTiles: number;

	tileSet: string;
}

declare class GPUImageMotionBlurFilter extends GPUImageFilter {

	static alloc(): GPUImageMotionBlurFilter; // inherited from NSObject

	static new(): GPUImageMotionBlurFilter; // inherited from NSObject

	blurAngle: number;

	blurSize: number;
}

declare class GPUImageMotionDetector extends GPUImageFilterGroup {

	static alloc(): GPUImageMotionDetector; // inherited from NSObject

	static new(): GPUImageMotionDetector; // inherited from NSObject

	lowPassFilterStrength: number;

	motionDetectionBlock: (p1: CGPoint, p2: number, p3: CMTime) => void;
}

declare class GPUImageMovie extends GPUImageOutput {

	static alloc(): GPUImageMovie; // inherited from NSObject

	static new(): GPUImageMovie; // inherited from NSObject

	asset: AVAsset;

	readonly assetReader: AVAssetReader;

	readonly audioEncodingIsFinished: boolean;

	delegate: GPUImageMovieDelegate;

	playAtActualSpeed: boolean;

	playerItem: AVPlayerItem;

	readonly progress: number;

	runBenchmark: boolean;

	shouldRepeat: boolean;

	url: NSURL;

	readonly videoEncodingIsFinished: boolean;

	constructor(o: { asset: AVAsset; });

	constructor(o: { playerItem: AVPlayerItem; });

	constructor(o: { URL: NSURL; });

	cancelProcessing(): void;

	enableSynchronizedEncodingUsingMovieWriter(movieWriter: GPUImageMovieWriter): void;

	endProcessing(): void;

	initWithAsset(asset: AVAsset): this;

	initWithPlayerItem(playerItem: AVPlayerItem): this;

	initWithURL(url: NSURL): this;

	processMovieFrame(movieSampleBuffer: any): void;

	readNextAudioSampleFromOutput(readerAudioTrackOutput: AVAssetReaderOutput): boolean;

	readNextVideoFrameFromOutput(readerVideoTrackOutput: AVAssetReaderOutput): boolean;

	startProcessing(): void;

	yuvConversionSetup(): void;
}

declare class GPUImageMovieComposition extends GPUImageMovie {

	static alloc(): GPUImageMovieComposition; // inherited from NSObject

	static new(): GPUImageMovieComposition; // inherited from NSObject

	audioMix: AVAudioMix;

	compositon: AVComposition;

	videoComposition: AVVideoComposition;

	constructor(o: { composition: AVComposition; andVideoComposition: AVVideoComposition; andAudioMix: AVAudioMix; });

	initWithCompositionAndVideoCompositionAndAudioMix(compositon: AVComposition, videoComposition: AVVideoComposition, audioMix: AVAudioMix): this;
}

interface GPUImageMovieDelegate extends NSObjectProtocol {

	didCompletePlayingMovie(): void;
}
declare var GPUImageMovieDelegate: {

	prototype: GPUImageMovieDelegate;
};

declare class GPUImageMovieWriter extends NSObject implements GPUImageInput {

	static alloc(): GPUImageMovieWriter; // inherited from NSObject

	static new(): GPUImageMovieWriter; // inherited from NSObject

	readonly assetWriter: AVAssetWriter;

	audioInputReadyCallback: () => boolean;

	audioProcessingCallback: (p1: interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<number>>, p2: number) => void;

	completionBlock: () => void;

	delegate: GPUImageMovieWriterDelegate;

	readonly duration: CMTime;

	enabled: boolean;

	encodingLiveVideo: boolean;

	failureBlock: (p1: NSError) => void;

	hasAudioTrack: boolean;

	metaData: NSArray<any>;

	movieWriterContext: GPUImageContext;

	paused: boolean;

	shouldInvalidateAudioSampleWhenDone: boolean;

	shouldPassthroughAudio: boolean;

	transform: CGAffineTransform;

	videoInputReadyCallback: () => boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { movieURL: NSURL; size: CGSize; });

	constructor(o: { movieURL: NSURL; size: CGSize; fileType: string; outputSettings: NSDictionary<any, any>; });

	cancelRecording(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	enableSynchronizationCallbacks(): void;

	endProcessing(): void;

	finishRecording(): void;

	finishRecordingWithCompletionHandler(handler: () => void): void;

	initWithMovieURLSize(newMovieURL: NSURL, newSize: CGSize): this;

	initWithMovieURLSizeFileTypeOutputSettings(newMovieURL: NSURL, newSize: CGSize, newFileType: string, outputSettings: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	maximumOutputSize(): CGSize;

	newFrameReadyAtTimeAtIndex(frameTime: CMTime, textureIndex: number): void;

	nextAvailableTextureIndex(): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	processAudioBuffer(audioBuffer: any): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setCurrentlyReceivingMonochromeInput(newValue: boolean): void;

	setHasAudioTrackAudioSettings(hasAudioTrack: boolean, audioOutputSettings: NSDictionary<any, any>): void;

	setInputFramebufferAtIndex(newInputFramebuffer: GPUImageFramebuffer, textureIndex: number): void;

	setInputRotationAtIndex(newInputRotation: GPUImageRotationMode, textureIndex: number): void;

	setInputSizeAtIndex(newSize: CGSize, textureIndex: number): void;

	shouldIgnoreUpdatesToThisTarget(): boolean;

	startRecording(): void;

	startRecordingInOrientation(orientationTransform: CGAffineTransform): void;

	wantsMonochromeInput(): boolean;
}

interface GPUImageMovieWriterDelegate extends NSObjectProtocol {

	movieRecordingCompleted?(): void;

	movieRecordingFailedWithError?(error: NSError): void;
}
declare var GPUImageMovieWriterDelegate: {

	prototype: GPUImageMovieWriterDelegate;
};

declare class GPUImageMultiplyBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageMultiplyBlendFilter; // inherited from NSObject

	static new(): GPUImageMultiplyBlendFilter; // inherited from NSObject
}

declare class GPUImageNobleCornerDetectionFilter extends GPUImageHarrisCornerDetectionFilter {

	static alloc(): GPUImageNobleCornerDetectionFilter; // inherited from NSObject

	static new(): GPUImageNobleCornerDetectionFilter; // inherited from NSObject
}

declare class GPUImageNonMaximumSuppressionFilter extends GPUImage3x3TextureSamplingFilter {

	static alloc(): GPUImageNonMaximumSuppressionFilter; // inherited from NSObject

	static new(): GPUImageNonMaximumSuppressionFilter; // inherited from NSObject
}

declare class GPUImageNormalBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageNormalBlendFilter; // inherited from NSObject

	static new(): GPUImageNormalBlendFilter; // inherited from NSObject
}

declare class GPUImageOpacityFilter extends GPUImageFilter {

	static alloc(): GPUImageOpacityFilter; // inherited from NSObject

	static new(): GPUImageOpacityFilter; // inherited from NSObject

	opacity: number;
}

declare class GPUImageOpeningFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageOpeningFilter; // inherited from NSObject

	static new(): GPUImageOpeningFilter; // inherited from NSObject

	horizontalTexelSpacing: number;

	verticalTexelSpacing: number;

	constructor(o: { radius: number; });

	initWithRadius(radius: number): this;
}

declare class GPUImageOutput extends NSObject {

	static alloc(): GPUImageOutput; // inherited from NSObject

	static new(): GPUImageOutput; // inherited from NSObject

	audioEncodingTarget: GPUImageMovieWriter;

	enabled: boolean;

	frameProcessingCompletionBlock: (p1: GPUImageOutput, p2: CMTime) => void;

	outputTextureOptions: GPUTextureOptions;

	shouldIgnoreUpdatesToThisTarget: boolean;

	shouldSmoothlyScaleOutput: boolean;

	targetToIgnoreForUpdates: GPUImageInput;

	addTarget(newTarget: GPUImageInput): void;

	addTargetAtTextureLocation(newTarget: GPUImageInput, textureLocation: number): void;

	forceProcessingAtSize(frameSize: CGSize): void;

	forceProcessingAtSizeRespectingAspectRatio(frameSize: CGSize): void;

	framebufferForOutput(): GPUImageFramebuffer;

	imageByFilteringImage(imageToFilter: UIImage): UIImage;

	imageFromCurrentFramebuffer(): UIImage;

	imageFromCurrentFramebufferWithOrientation(imageOrientation: UIImageOrientation): UIImage;

	newCGImageByFilteringCGImage(imageToFilter: any): any;

	newCGImageByFilteringImage(imageToFilter: UIImage): any;

	newCGImageFromCurrentlyProcessedOutput(): any;

	notifyTargetsAboutNewOutputTexture(): void;

	providesMonochromeOutput(): boolean;

	removeAllTargets(): void;

	removeOutputFramebuffer(): void;

	removeTarget(targetToRemove: GPUImageInput): void;

	setInputFramebufferForTargetAtIndex(target: GPUImageInput, inputTextureIndex: number): void;

	targets(): NSArray<any>;

	useNextFrameForImageCapture(): void;
}

declare class GPUImageOverlayBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageOverlayBlendFilter; // inherited from NSObject

	static new(): GPUImageOverlayBlendFilter; // inherited from NSObject
}

declare class GPUImageParallelCoordinateLineTransformFilter extends GPUImageFilter {

	static alloc(): GPUImageParallelCoordinateLineTransformFilter; // inherited from NSObject

	static new(): GPUImageParallelCoordinateLineTransformFilter; // inherited from NSObject
}

declare class GPUImagePerlinNoiseFilter extends GPUImageFilter {

	static alloc(): GPUImagePerlinNoiseFilter; // inherited from NSObject

	static new(): GPUImagePerlinNoiseFilter; // inherited from NSObject

	colorFinish: GPUVector4;

	colorStart: GPUVector4;

	scale: number;
}

declare class GPUImagePicture extends GPUImageOutput {

	static alloc(): GPUImagePicture; // inherited from NSObject

	static new(): GPUImagePicture; // inherited from NSObject

	constructor(o: { CGImage: any; });

	constructor(o: { CGImage: any; smoothlyScaleOutput: boolean; });

	constructor(o: { image: UIImage; });

	constructor(o: { image: UIImage; smoothlyScaleOutput: boolean; });

	constructor(o: { URL: NSURL; });

	initWithCGImage(newImageSource: any): this;

	initWithCGImageSmoothlyScaleOutput(newImageSource: any, smoothlyScaleOutput: boolean): this;

	initWithImage(newImageSource: UIImage): this;

	initWithImageSmoothlyScaleOutput(newImageSource: UIImage, smoothlyScaleOutput: boolean): this;

	initWithURL(url: NSURL): this;

	outputImageSize(): CGSize;

	processImage(): void;

	processImageUpToFilterWithCompletionHandler(finalFilterInChain: GPUImageOutput, block: (p1: UIImage) => void): void;

	processImageWithCompletionHandler(completion: () => void): boolean;

	replaceTextureWithSubCGImage(subimageSource: any): void;

	replaceTextureWithSubCGImageInRect(subimageSource: any, subRect: CGRect): void;

	replaceTextureWithSubimage(subimage: UIImage): void;

	replaceTextureWithSubimageInRect(subimage: UIImage, subRect: CGRect): void;
}

declare class GPUImagePinchDistortionFilter extends GPUImageFilter {

	static alloc(): GPUImagePinchDistortionFilter; // inherited from NSObject

	static new(): GPUImagePinchDistortionFilter; // inherited from NSObject

	center: CGPoint;

	radius: number;

	scale: number;
}

declare class GPUImagePixellateFilter extends GPUImageFilter {

	static alloc(): GPUImagePixellateFilter; // inherited from NSObject

	static new(): GPUImagePixellateFilter; // inherited from NSObject

	fractionalWidthOfAPixel: number;
}

declare class GPUImagePixellatePositionFilter extends GPUImageFilter {

	static alloc(): GPUImagePixellatePositionFilter; // inherited from NSObject

	static new(): GPUImagePixellatePositionFilter; // inherited from NSObject

	center: CGPoint;

	fractionalWidthOfAPixel: number;

	radius: number;
}

declare class GPUImagePoissonBlendFilter extends GPUImageTwoInputCrossTextureSamplingFilter {

	static alloc(): GPUImagePoissonBlendFilter; // inherited from NSObject

	static new(): GPUImagePoissonBlendFilter; // inherited from NSObject

	mix: number;

	numIterations: number;
}

declare class GPUImagePolarPixellateFilter extends GPUImageFilter {

	static alloc(): GPUImagePolarPixellateFilter; // inherited from NSObject

	static new(): GPUImagePolarPixellateFilter; // inherited from NSObject

	center: CGPoint;

	pixelSize: CGSize;
}

declare class GPUImagePolkaDotFilter extends GPUImagePixellateFilter {

	static alloc(): GPUImagePolkaDotFilter; // inherited from NSObject

	static new(): GPUImagePolkaDotFilter; // inherited from NSObject

	dotScaling: number;
}

declare class GPUImagePosterizeFilter extends GPUImageFilter {

	static alloc(): GPUImagePosterizeFilter; // inherited from NSObject

	static new(): GPUImagePosterizeFilter; // inherited from NSObject

	colorLevels: number;
}

declare class GPUImagePrewittEdgeDetectionFilter extends GPUImageSobelEdgeDetectionFilter {

	static alloc(): GPUImagePrewittEdgeDetectionFilter; // inherited from NSObject

	static new(): GPUImagePrewittEdgeDetectionFilter; // inherited from NSObject
}

declare class GPUImageRGBClosingFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageRGBClosingFilter; // inherited from NSObject

	static new(): GPUImageRGBClosingFilter; // inherited from NSObject

	constructor(o: { radius: number; });

	initWithRadius(radius: number): this;
}

declare class GPUImageRGBDilationFilter extends GPUImageTwoPassTextureSamplingFilter {

	static alloc(): GPUImageRGBDilationFilter; // inherited from NSObject

	static new(): GPUImageRGBDilationFilter; // inherited from NSObject

	constructor(o: { radius: number; });

	initWithRadius(dilationRadius: number): this;
}

declare class GPUImageRGBErosionFilter extends GPUImageTwoPassTextureSamplingFilter {

	static alloc(): GPUImageRGBErosionFilter; // inherited from NSObject

	static new(): GPUImageRGBErosionFilter; // inherited from NSObject

	constructor(o: { radius: number; });

	initWithRadius(erosionRadius: number): this;
}

declare class GPUImageRGBFilter extends GPUImageFilter {

	static alloc(): GPUImageRGBFilter; // inherited from NSObject

	static new(): GPUImageRGBFilter; // inherited from NSObject

	blue: number;

	green: number;

	red: number;
}

declare class GPUImageRGBOpeningFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageRGBOpeningFilter; // inherited from NSObject

	static new(): GPUImageRGBOpeningFilter; // inherited from NSObject

	constructor(o: { radius: number; });

	initWithRadius(radius: number): this;
}

declare class GPUImageRawDataInput extends GPUImageOutput {

	static alloc(): GPUImageRawDataInput; // inherited from NSObject

	static new(): GPUImageRawDataInput; // inherited from NSObject

	pixelFormat: GPUPixelFormat;

	pixelType: GPUPixelType;

	constructor(o: { bytes: string | interop.Pointer | interop.Reference<any>; size: CGSize; });

	constructor(o: { bytes: string | interop.Pointer | interop.Reference<any>; size: CGSize; pixelFormat: GPUPixelFormat; });

	constructor(o: { bytes: string | interop.Pointer | interop.Reference<any>; size: CGSize; pixelFormat: GPUPixelFormat; type: GPUPixelType; });

	initWithBytesSize(bytesToUpload: string | interop.Pointer | interop.Reference<any>, imageSize: CGSize): this;

	initWithBytesSizePixelFormat(bytesToUpload: string | interop.Pointer | interop.Reference<any>, imageSize: CGSize, pixelFormat: GPUPixelFormat): this;

	initWithBytesSizePixelFormatType(bytesToUpload: string | interop.Pointer | interop.Reference<any>, imageSize: CGSize, pixelFormat: GPUPixelFormat, pixelType: GPUPixelType): this;

	outputImageSize(): CGSize;

	processData(): void;

	processDataForTimestamp(frameTime: CMTime): void;

	updateDataFromBytesSize(bytesToUpload: string | interop.Pointer | interop.Reference<any>, imageSize: CGSize): void;
}

declare class GPUImageRawDataOutput extends NSObject implements GPUImageInput {

	static alloc(): GPUImageRawDataOutput; // inherited from NSObject

	static new(): GPUImageRawDataOutput; // inherited from NSObject

	enabled: boolean;

	newFrameAvailableBlock: () => void;

	readonly rawBytesForImage: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { imageSize: CGSize; resultsInBGRAFormat: boolean; });

	bytesPerRowInOutput(): number;

	class(): typeof NSObject;

	colorAtLocation(locationInImage: CGPoint): GPUByteColorVector;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	endProcessing(): void;

	initWithImageSizeResultsInBGRAFormat(newImageSize: CGSize, resultsInBGRAFormat: boolean): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	lockFramebufferForReading(): void;

	maximumOutputSize(): CGSize;

	newFrameReadyAtTimeAtIndex(frameTime: CMTime, textureIndex: number): void;

	nextAvailableTextureIndex(): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setCurrentlyReceivingMonochromeInput(newValue: boolean): void;

	setImageSize(newImageSize: CGSize): void;

	setInputFramebufferAtIndex(newInputFramebuffer: GPUImageFramebuffer, textureIndex: number): void;

	setInputRotationAtIndex(newInputRotation: GPUImageRotationMode, textureIndex: number): void;

	setInputSizeAtIndex(newSize: CGSize, textureIndex: number): void;

	shouldIgnoreUpdatesToThisTarget(): boolean;

	unlockFramebufferAfterReading(): void;

	wantsMonochromeInput(): boolean;
}

declare const enum GPUImageRotationMode {

	kGPUImageNoRotation = 0,

	kGPUImageRotateLeft = 1,

	kGPUImageRotateRight = 2,

	kGPUImageFlipVertical = 3,

	kGPUImageFlipHorizonal = 4,

	kGPUImageRotateRightFlipVertical = 5,

	kGPUImageRotateRightFlipHorizontal = 6,

	kGPUImageRotate180 = 7
}

declare class GPUImageSaturationBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageSaturationBlendFilter; // inherited from NSObject

	static new(): GPUImageSaturationBlendFilter; // inherited from NSObject
}

declare class GPUImageSaturationFilter extends GPUImageFilter {

	static alloc(): GPUImageSaturationFilter; // inherited from NSObject

	static new(): GPUImageSaturationFilter; // inherited from NSObject

	saturation: number;
}

declare class GPUImageScreenBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageScreenBlendFilter; // inherited from NSObject

	static new(): GPUImageScreenBlendFilter; // inherited from NSObject
}

declare class GPUImageSepiaFilter extends GPUImageColorMatrixFilter {

	static alloc(): GPUImageSepiaFilter; // inherited from NSObject

	static new(): GPUImageSepiaFilter; // inherited from NSObject
}

declare class GPUImageSharpenFilter extends GPUImageFilter {

	static alloc(): GPUImageSharpenFilter; // inherited from NSObject

	static new(): GPUImageSharpenFilter; // inherited from NSObject

	sharpness: number;
}

declare class GPUImageShiTomasiFeatureDetectionFilter extends GPUImageHarrisCornerDetectionFilter {

	static alloc(): GPUImageShiTomasiFeatureDetectionFilter; // inherited from NSObject

	static new(): GPUImageShiTomasiFeatureDetectionFilter; // inherited from NSObject
}

declare class GPUImageSingleComponentGaussianBlurFilter extends GPUImageGaussianBlurFilter {

	static alloc(): GPUImageSingleComponentGaussianBlurFilter; // inherited from NSObject

	static new(): GPUImageSingleComponentGaussianBlurFilter; // inherited from NSObject
}

declare class GPUImageSketchFilter extends GPUImageSobelEdgeDetectionFilter {

	static alloc(): GPUImageSketchFilter; // inherited from NSObject

	static new(): GPUImageSketchFilter; // inherited from NSObject
}

declare class GPUImageSmoothToonFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageSmoothToonFilter; // inherited from NSObject

	static new(): GPUImageSmoothToonFilter; // inherited from NSObject

	blurRadiusInPixels: number;

	quantizationLevels: number;

	texelHeight: number;

	texelWidth: number;

	threshold: number;
}

declare class GPUImageSobelEdgeDetectionFilter extends GPUImageTwoPassFilter {

	static alloc(): GPUImageSobelEdgeDetectionFilter; // inherited from NSObject

	static new(): GPUImageSobelEdgeDetectionFilter; // inherited from NSObject

	edgeStrength: number;

	texelHeight: number;

	texelWidth: number;
}

declare class GPUImageSoftEleganceFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageSoftEleganceFilter; // inherited from NSObject

	static new(): GPUImageSoftEleganceFilter; // inherited from NSObject
}

declare class GPUImageSoftLightBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageSoftLightBlendFilter; // inherited from NSObject

	static new(): GPUImageSoftLightBlendFilter; // inherited from NSObject
}

declare class GPUImageSolidColorGenerator extends GPUImageFilter {

	static alloc(): GPUImageSolidColorGenerator; // inherited from NSObject

	static new(): GPUImageSolidColorGenerator; // inherited from NSObject

	color: GPUVector4;

	useExistingAlpha: boolean;

	setColorRedGreenBlueAlpha(redComponent: number, greenComponent: number, blueComponent: number, alphaComponent: number): void;
}

declare class GPUImageSourceOverBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageSourceOverBlendFilter; // inherited from NSObject

	static new(): GPUImageSourceOverBlendFilter; // inherited from NSObject
}

declare class GPUImageSphereRefractionFilter extends GPUImageFilter {

	static alloc(): GPUImageSphereRefractionFilter; // inherited from NSObject

	static new(): GPUImageSphereRefractionFilter; // inherited from NSObject

	center: CGPoint;

	radius: number;

	refractiveIndex: number;
}

declare class GPUImageStillCamera extends GPUImageVideoCamera {

	static alloc(): GPUImageStillCamera; // inherited from NSObject

	static new(): GPUImageStillCamera; // inherited from NSObject

	readonly currentCaptureMetadata: NSDictionary<any, any>;

	jpegCompressionQuality: number;

	capturePhotoAsImageProcessedUpToFilterWithCompletionHandler(finalFilterInChain: GPUImageOutput, block: (p1: UIImage, p2: NSError) => void): void;

	capturePhotoAsImageProcessedUpToFilterWithOrientationWithCompletionHandler(finalFilterInChain: GPUImageOutput, orientation: UIImageOrientation, block: (p1: UIImage, p2: NSError) => void): void;

	capturePhotoAsJPEGProcessedUpToFilterWithCompletionHandler(finalFilterInChain: GPUImageOutput, block: (p1: NSData, p2: NSError) => void): void;

	capturePhotoAsJPEGProcessedUpToFilterWithOrientationWithCompletionHandler(finalFilterInChain: GPUImageOutput, orientation: UIImageOrientation, block: (p1: NSData, p2: NSError) => void): void;

	capturePhotoAsPNGProcessedUpToFilterWithCompletionHandler(finalFilterInChain: GPUImageOutput, block: (p1: NSData, p2: NSError) => void): void;

	capturePhotoAsPNGProcessedUpToFilterWithOrientationWithCompletionHandler(finalFilterInChain: GPUImageOutput, orientation: UIImageOrientation, block: (p1: NSData, p2: NSError) => void): void;

	capturePhotoAsSampleBufferWithCompletionHandler(block: (p1: any, p2: NSError) => void): void;
}

declare class GPUImageStretchDistortionFilter extends GPUImageFilter {

	static alloc(): GPUImageStretchDistortionFilter; // inherited from NSObject

	static new(): GPUImageStretchDistortionFilter; // inherited from NSObject

	center: CGPoint;
}

declare class GPUImageSubtractBlendFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageSubtractBlendFilter; // inherited from NSObject

	static new(): GPUImageSubtractBlendFilter; // inherited from NSObject
}

declare class GPUImageSwirlFilter extends GPUImageFilter {

	static alloc(): GPUImageSwirlFilter; // inherited from NSObject

	static new(): GPUImageSwirlFilter; // inherited from NSObject

	angle: number;

	center: CGPoint;

	radius: number;
}

declare class GPUImageTextureInput extends GPUImageOutput {

	static alloc(): GPUImageTextureInput; // inherited from NSObject

	static new(): GPUImageTextureInput; // inherited from NSObject

	constructor(o: { texture: number; size: CGSize; });

	initWithTextureSize(newInputTexture: number, newTextureSize: CGSize): this;

	processTextureWithFrameTime(frameTime: CMTime): void;
}

declare class GPUImageTextureOutput extends NSObject implements GPUImageInput {

	static alloc(): GPUImageTextureOutput; // inherited from NSObject

	static new(): GPUImageTextureOutput; // inherited from NSObject

	delegate: GPUImageTextureOutputDelegate;

	enabled: boolean;

	readonly texture: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	doneWithTexture(): void;

	endProcessing(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	maximumOutputSize(): CGSize;

	newFrameReadyAtTimeAtIndex(frameTime: CMTime, textureIndex: number): void;

	nextAvailableTextureIndex(): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setCurrentlyReceivingMonochromeInput(newValue: boolean): void;

	setInputFramebufferAtIndex(newInputFramebuffer: GPUImageFramebuffer, textureIndex: number): void;

	setInputRotationAtIndex(newInputRotation: GPUImageRotationMode, textureIndex: number): void;

	setInputSizeAtIndex(newSize: CGSize, textureIndex: number): void;

	shouldIgnoreUpdatesToThisTarget(): boolean;

	wantsMonochromeInput(): boolean;
}

interface GPUImageTextureOutputDelegate {

	newFrameReadyFromTextureOutput(callbackTextureOutput: GPUImageTextureOutput): void;
}
declare var GPUImageTextureOutputDelegate: {

	prototype: GPUImageTextureOutputDelegate;
};

declare class GPUImageThreeInputFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageThreeInputFilter; // inherited from NSObject

	static new(): GPUImageThreeInputFilter; // inherited from NSObject

	disableThirdFrameCheck(): void;
}

declare class GPUImageThresholdEdgeDetectionFilter extends GPUImageSobelEdgeDetectionFilter {

	static alloc(): GPUImageThresholdEdgeDetectionFilter; // inherited from NSObject

	static new(): GPUImageThresholdEdgeDetectionFilter; // inherited from NSObject

	threshold: number;
}

declare class GPUImageThresholdSketchFilter extends GPUImageThresholdEdgeDetectionFilter {

	static alloc(): GPUImageThresholdSketchFilter; // inherited from NSObject

	static new(): GPUImageThresholdSketchFilter; // inherited from NSObject
}

declare class GPUImageThresholdedNonMaximumSuppressionFilter extends GPUImage3x3TextureSamplingFilter {

	static alloc(): GPUImageThresholdedNonMaximumSuppressionFilter; // inherited from NSObject

	static new(): GPUImageThresholdedNonMaximumSuppressionFilter; // inherited from NSObject

	threshold: number;

	constructor(o: { packedColorspace: boolean; });

	initWithPackedColorspace(inputUsesPackedColorspace: boolean): this;
}

declare class GPUImageTiltShiftFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageTiltShiftFilter; // inherited from NSObject

	static new(): GPUImageTiltShiftFilter; // inherited from NSObject

	blurRadiusInPixels: number;

	bottomFocusLevel: number;

	focusFallOffRate: number;

	topFocusLevel: number;
}

declare class GPUImageToneCurveFilter extends GPUImageFilter {

	static alloc(): GPUImageToneCurveFilter; // inherited from NSObject

	static new(): GPUImageToneCurveFilter; // inherited from NSObject

	blueControlPoints: NSArray<any>;

	greenControlPoints: NSArray<any>;

	redControlPoints: NSArray<any>;

	rgbCompositeControlPoints: NSArray<any>;

	constructor(o: { ACV: string; });

	constructor(o: { ACVData: NSData; });

	constructor(o: { ACVURL: NSURL; });

	getPreparedSplineCurve(points: NSArray<any> | any[]): NSMutableArray<any>;

	initWithACV(curveFilename: string): this;

	initWithACVData(data: NSData): this;

	initWithACVURL(curveFileURL: NSURL): this;

	secondDerivative(cgPoints: NSArray<any> | any[]): NSMutableArray<any>;

	setPointsWithACV(curveFilename: string): void;

	setPointsWithACVURL(curveFileURL: NSURL): void;

	setRGBControlPoints(points: NSArray<any> | any[]): void;

	splineCurve(points: NSArray<any> | any[]): NSMutableArray<any>;

	updateToneCurveTexture(): void;
}

declare class GPUImageToonFilter extends GPUImage3x3TextureSamplingFilter {

	static alloc(): GPUImageToonFilter; // inherited from NSObject

	static new(): GPUImageToonFilter; // inherited from NSObject

	quantizationLevels: number;

	threshold: number;
}

declare class GPUImageTransformFilter extends GPUImageFilter {

	static alloc(): GPUImageTransformFilter; // inherited from NSObject

	static new(): GPUImageTransformFilter; // inherited from NSObject

	affineTransform: CGAffineTransform;

	anchorTopLeft: boolean;

	ignoreAspectRatio: boolean;

	transform3D: CATransform3D;
}

declare class GPUImageTwoInputCrossTextureSamplingFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageTwoInputCrossTextureSamplingFilter; // inherited from NSObject

	static new(): GPUImageTwoInputCrossTextureSamplingFilter; // inherited from NSObject

	texelHeight: number;

	texelWidth: number;
}

declare class GPUImageTwoInputFilter extends GPUImageFilter {

	static alloc(): GPUImageTwoInputFilter; // inherited from NSObject

	static new(): GPUImageTwoInputFilter; // inherited from NSObject

	disableFirstFrameCheck(): void;

	disableSecondFrameCheck(): void;
}

declare class GPUImageTwoPassFilter extends GPUImageFilter {

	static alloc(): GPUImageTwoPassFilter; // inherited from NSObject

	static new(): GPUImageTwoPassFilter; // inherited from NSObject

	constructor(o: { firstStageFragmentShaderFromString: string; secondStageFragmentShaderFromString: string; });

	constructor(o: { firstStageVertexShaderFromString: string; firstStageFragmentShaderFromString: string; secondStageVertexShaderFromString: string; secondStageFragmentShaderFromString: string; });

	initWithFirstStageFragmentShaderFromStringSecondStageFragmentShaderFromString(firstStageFragmentShaderString: string, secondStageFragmentShaderString: string): this;

	initWithFirstStageVertexShaderFromStringFirstStageFragmentShaderFromStringSecondStageVertexShaderFromStringSecondStageFragmentShaderFromString(firstStageVertexShaderString: string, firstStageFragmentShaderString: string, secondStageVertexShaderString: string, secondStageFragmentShaderString: string): this;

	initializeSecondaryAttributes(): void;
}

declare class GPUImageTwoPassTextureSamplingFilter extends GPUImageTwoPassFilter {

	static alloc(): GPUImageTwoPassTextureSamplingFilter; // inherited from NSObject

	static new(): GPUImageTwoPassTextureSamplingFilter; // inherited from NSObject

	horizontalTexelSpacing: number;

	verticalTexelSpacing: number;
}

declare class GPUImageUIElement extends GPUImageOutput {

	static alloc(): GPUImageUIElement; // inherited from NSObject

	static new(): GPUImageUIElement; // inherited from NSObject

	constructor(o: { layer: CALayer; });

	constructor(o: { view: UIView; });

	initWithLayer(inputLayer: CALayer): this;

	initWithView(inputView: UIView): this;

	layerSizeInPixels(): CGSize;

	update(): void;

	updateUsingCurrentTime(): void;

	updateWithTimestamp(frameTime: CMTime): void;
}

declare class GPUImageUnsharpMaskFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageUnsharpMaskFilter; // inherited from NSObject

	static new(): GPUImageUnsharpMaskFilter; // inherited from NSObject

	blurRadiusInPixels: number;

	intensity: number;
}

declare var GPUImageVersionNumber: number;

declare var GPUImageVersionString: interop.Reference<number>;

declare class GPUImageVideoCamera extends GPUImageOutput implements AVCaptureAudioDataOutputSampleBufferDelegate, AVCaptureVideoDataOutputSampleBufferDelegate {

	static alloc(): GPUImageVideoCamera; // inherited from NSObject

	static isBackFacingCameraPresent(): boolean;

	static isFrontFacingCameraPresent(): boolean;

	static new(): GPUImageVideoCamera; // inherited from NSObject

	readonly backFacingCameraPresent: boolean;

	readonly captureSession: AVCaptureSession;

	captureSessionPreset: string;

	delegate: GPUImageVideoCameraDelegate;

	frameRate: number;

	readonly frontFacingCameraPresent: boolean;

	horizontallyMirrorFrontFacingCamera: boolean;

	horizontallyMirrorRearFacingCamera: boolean;

	readonly inputCamera: AVCaptureDevice;

	outputImageOrientation: UIInterfaceOrientation;

	runBenchmark: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { sessionPreset: string; cameraPosition: AVCaptureDevicePosition; });

	addAudioInputsAndOutputs(): boolean;

	averageFrameDurationDuringCapture(): number;

	cameraPosition(): AVCaptureDevicePosition;

	captureOutputDidDropSampleBufferFromConnection(output: AVCaptureOutput, sampleBuffer: any, connection: AVCaptureConnection): void;

	captureOutputDidOutputSampleBufferFromConnection(output: AVCaptureOutput, sampleBuffer: any, connection: AVCaptureConnection): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithSessionPresetCameraPosition(sessionPreset: string, cameraPosition: AVCaptureDevicePosition): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	pauseCameraCapture(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	processAudioSampleBuffer(sampleBuffer: any): void;

	processVideoSampleBuffer(sampleBuffer: any): void;

	removeAudioInputsAndOutputs(): boolean;

	removeInputsAndOutputs(): void;

	resetBenchmarkAverage(): void;

	respondsToSelector(aSelector: string): boolean;

	resumeCameraCapture(): void;

	retainCount(): number;

	rotateCamera(): void;

	self(): this;

	startCameraCapture(): void;

	stopCameraCapture(): void;

	videoCaptureConnection(): AVCaptureConnection;
}

interface GPUImageVideoCameraDelegate extends NSObjectProtocol {

	willOutputSampleBuffer?(sampleBuffer: any): void;
}
declare var GPUImageVideoCameraDelegate: {

	prototype: GPUImageVideoCameraDelegate;
};

declare class GPUImageView extends UIView implements GPUImageInput {

	static alloc(): GPUImageView; // inherited from NSObject

	static appearance(): GPUImageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GPUImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GPUImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GPUImageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GPUImageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GPUImageView; // inherited from UIAppearance

	static new(): GPUImageView; // inherited from NSObject

	enabled: boolean;

	fillMode: GPUImageFillModeType;

	readonly sizeInPixels: CGSize;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	endProcessing(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	maximumOutputSize(): CGSize;

	newFrameReadyAtTimeAtIndex(frameTime: CMTime, textureIndex: number): void;

	nextAvailableTextureIndex(): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setBackgroundColorRedGreenBlueAlpha(redComponent: number, greenComponent: number, blueComponent: number, alphaComponent: number): void;

	setCurrentlyReceivingMonochromeInput(newValue: boolean): void;

	setInputFramebufferAtIndex(newInputFramebuffer: GPUImageFramebuffer, textureIndex: number): void;

	setInputRotationAtIndex(newInputRotation: GPUImageRotationMode, textureIndex: number): void;

	setInputSizeAtIndex(newSize: CGSize, textureIndex: number): void;

	shouldIgnoreUpdatesToThisTarget(): boolean;

	wantsMonochromeInput(): boolean;
}

declare class GPUImageVignetteFilter extends GPUImageFilter {

	static alloc(): GPUImageVignetteFilter; // inherited from NSObject

	static new(): GPUImageVignetteFilter; // inherited from NSObject

	vignetteCenter: CGPoint;

	vignetteColor: GPUVector3;

	vignetteEnd: number;

	vignetteStart: number;
}

declare class GPUImageVoronoiConsumerFilter extends GPUImageTwoInputFilter {

	static alloc(): GPUImageVoronoiConsumerFilter; // inherited from NSObject

	static new(): GPUImageVoronoiConsumerFilter; // inherited from NSObject

	sizeInPixels: CGSize;
}

declare class GPUImageWeakPixelInclusionFilter extends GPUImage3x3TextureSamplingFilter {

	static alloc(): GPUImageWeakPixelInclusionFilter; // inherited from NSObject

	static new(): GPUImageWeakPixelInclusionFilter; // inherited from NSObject
}

declare class GPUImageWhiteBalanceFilter extends GPUImageFilter {

	static alloc(): GPUImageWhiteBalanceFilter; // inherited from NSObject

	static new(): GPUImageWhiteBalanceFilter; // inherited from NSObject

	temperature: number;

	tint: number;
}

declare class GPUImageXYDerivativeFilter extends GPUImageSobelEdgeDetectionFilter {

	static alloc(): GPUImageXYDerivativeFilter; // inherited from NSObject

	static new(): GPUImageXYDerivativeFilter; // inherited from NSObject
}

declare class GPUImageZoomBlurFilter extends GPUImageFilter {

	static alloc(): GPUImageZoomBlurFilter; // inherited from NSObject

	static new(): GPUImageZoomBlurFilter; // inherited from NSObject

	blurCenter: CGPoint;

	blurSize: number;
}

declare class GPUImageiOSBlurFilter extends GPUImageFilterGroup {

	static alloc(): GPUImageiOSBlurFilter; // inherited from NSObject

	static new(): GPUImageiOSBlurFilter; // inherited from NSObject

	blurRadiusInPixels: number;

	downsampling: number;

	rangeReductionFactor: number;

	saturation: number;
}

interface GPUMatrix3x3 {
	one: GPUVector3;
	two: GPUVector3;
	three: GPUVector3;
}
declare var GPUMatrix3x3: interop.StructType<GPUMatrix3x3>;

interface GPUMatrix4x4 {
	one: GPUVector4;
	two: GPUVector4;
	three: GPUVector4;
	four: GPUVector4;
}
declare var GPUMatrix4x4: interop.StructType<GPUMatrix4x4>;

declare const enum GPUPixelFormat {

	BGRA = 32993,

	RGBA = 6408,

	RGB = 6407,

	Luminance = 6409
}

declare const enum GPUPixelType {

	UByte = 5121,

	Float = 5126
}

interface GPUTextureOptions {
	minFilter: number;
	magFilter: number;
	wrapS: number;
	wrapT: number;
	internalFormat: number;
	format: number;
	type: number;
}
declare var GPUTextureOptions: interop.StructType<GPUTextureOptions>;

interface GPUVector3 {
	one: number;
	two: number;
	three: number;
}
declare var GPUVector3: interop.StructType<GPUVector3>;

interface GPUVector4 {
	one: number;
	two: number;
	three: number;
	four: number;
}
declare var GPUVector4: interop.StructType<GPUVector4>;

declare var kColorConversion601: interop.Reference<number>;

declare var kColorConversion601FullRange: interop.Reference<number>;

declare var kColorConversion709: interop.Reference<number>;

declare var kGPUImageColorAveragingVertexShaderString: string;

declare var kGPUImageColorSwizzlingFragmentShaderString: string;

declare var kGPUImageDilationRadiusFourVertexShaderString: string;

declare var kGPUImageDilationRadiusOneVertexShaderString: string;

declare var kGPUImageDilationRadiusThreeVertexShaderString: string;

declare var kGPUImageDilationRadiusTwoVertexShaderString: string;

declare var kGPUImageLuminanceFragmentShaderString: string;

declare var kGPUImageNearbyTexelSamplingVertexShaderString: string;

declare var kGPUImagePassthroughFragmentShaderString: string;

declare var kGPUImageThreeInputTextureVertexShaderString: string;

declare var kGPUImageTwoInputTextureVertexShaderString: string;

declare var kGPUImageVertexShaderString: string;

declare var kGPUImageYUVFullRangeConversionForLAFragmentShaderString: string;

declare var kGPUImageYUVVideoRangeConversionForLAFragmentShaderString: string;

declare var kGPUImageYUVVideoRangeConversionForRGFragmentShaderString: string;

declare function reportAvailableMemoryForGPUImage(tag: string): void;

declare function runAsynchronouslyOnContextQueue(context: GPUImageContext, block: () => void): void;

declare function runAsynchronouslyOnVideoProcessingQueue(block: () => void): void;

declare function runOnMainQueueWithoutDeadlocking(block: () => void): void;

declare function runSynchronouslyOnContextQueue(context: GPUImageContext, block: () => void): void;

declare function runSynchronouslyOnVideoProcessingQueue(block: () => void): void;

declare function stillImageDataReleaseCallback(releaseRefCon: interop.Pointer | interop.Reference<any>, baseAddress: interop.Pointer | interop.Reference<any>): void;
