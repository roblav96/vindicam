export * from './permissions.common'
import * as Application from '@nativescript/core/application'
import * as R from 'rambdax'
import { PermissionsBase } from './permissions.common'

export class Permissions extends PermissionsBase {
	static manifests = [
		android.Manifest.permission.CAMERA,
		android.Manifest.permission.RECORD_AUDIO,
		android.Manifest.permission.WRITE_EXTERNAL_STORAGE,
	]
	async check() {
		for (let manifest of Permissions.manifests) {
			if (
				androidx.core.content.ContextCompat.checkSelfPermission(activity, manifest) !=
				android.content.pm.PackageManager.PERMISSION_GRANTED
			) {
				return false
			}
		}
		return true
	}
	async request() {
		return new Promise<boolean>((resolve, reject) => {
			let requestCode = R.random(100, 999)
			Application.android.on(
				Application.AndroidApplication.activityRequestPermissionsEvent,
				function activityRequestPermissionsEvent(
					args: Application.AndroidActivityRequestPermissionsEventData,
				) {
					if (args.requestCode != requestCode) return
					Application.android.off(
						Application.AndroidApplication.activityRequestPermissionsEvent,
					)
					for (let i = 0; i < args.permissions.length; i++) {
						let permission = args.permissions[i]
						let result = args.grantResults[i]
						if (result != android.content.pm.PackageManager.PERMISSION_GRANTED) {
							return resolve(false)
						}
					}
					return resolve(true)
				},
			)
			androidx.core.app.ActivityCompat.requestPermissions(
				activity,
				Permissions.manifests,
				requestCode,
			)
		})
	}
	async ensure() {
		return (await this.check()) || (await this.request())
	}
}

export default new Permissions()
