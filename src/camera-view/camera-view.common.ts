import * as View from '@nativescript/core/ui/core/view'

export enum CameraPosition {
	BACK = 'back',
	FRONT = 'front',
}

export abstract class CameraViewBase extends View.View {
	cameraPosition: keyof typeof CameraPosition
	torch: boolean

	abstract startRecording(endpoint: string): void
	abstract stopRecording(): void
	abstract stopPreview(): void
	abstract toggleCamera(): void
	abstract toggleTorch(): void
	abstract startPreview(): void
}
