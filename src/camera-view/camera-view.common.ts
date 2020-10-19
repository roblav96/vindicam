import { View } from '@nativescript/core/ui/core/view'

export enum CameraPosition {
	BACK = 'back',
	FRONT = 'front',
}

export abstract class CameraViewBase extends View {
	cameraPosition: keyof typeof CameraPosition
	torch: boolean
	endpoint: string

	abstract startPreview(): Promise<void>
	abstract startRecording(endpoint: string): Promise<void>
	abstract stopPreview(): Promise<void>
	abstract stopRecording(): Promise<void>
	abstract toggleCamera(): Promise<void>
	abstract toggleTorch(): Promise<void>
}
