export enum Requests {
	'CAMERA',
}

export abstract class PermissionsBase {
	abstract check(): Promise<boolean>
	abstract ensure(): Promise<boolean>
	abstract request(): Promise<boolean>
}
