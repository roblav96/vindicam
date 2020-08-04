export * from './permissions.common'
import * as application from '@nativescript/core/application'
import * as permissions from './permissions.common'
import * as utils from '@nativescript/core/utils/utils'

export async function ensurePermissions() {
	return new Promise<boolean>((resolve, reject) => {
		let activity = application.android
			.foregroundActivity as androidx.appcompat.app.AppCompatActivity
		com.karumi.dexter.Dexter.withContext(activity)
			.withPermissions(
				utils.ad.collections.stringArrayToStringSet([
					android.Manifest.permission.CAMERA,
					android.Manifest.permission.RECORD_AUDIO,
					android.Manifest.permission.WRITE_EXTERNAL_STORAGE,
				]),
			)
			.withListener(
				new com.karumi.dexter.listener.multi.MultiplePermissionsListener({
					onPermissionsChecked(report) {
						if (report.areAllPermissionsGranted()) return resolve(true)
						console.log(report.getGrantedPermissionResponses())
					},
					onPermissionRationaleShouldBeShown(permissions, token) {
						console.warn(`onPermissionRationaleShouldBeShown ->`)
						console.log(`permissions ->`, permissions)
						console.log('token ->', token)
						token.continuePermissionRequest()
					},
				}),
			)
			.withErrorListener(
				new com.karumi.dexter.listener.PermissionRequestErrorListener({
					onError(error) {
						console.error(`dexter.onError -> %O`, error)
						reject(error.toString())
					},
				}),
			)
			// .onSameThread()
			.check()
	})
}

const Requests = {
	CAMERA: [android.Manifest.permission.CAMERA, android.Manifest.permission.RECORD_AUDIO],
} as Record<keyof typeof permissions.Requests, string[]>

export async function hasPermissions(request: permissions.Requests) {
	let activity = application.android
		.foregroundActivity as androidx.appcompat.app.AppCompatActivity
	// let dexter = com.karumi.dexter.Dexter.withContext(application.android.context)
	// console.log('dexter ->', dexter)
	console.log('permissions.Requests[request] ->', permissions.Requests[request])
	console.log(
		`Requests[permissions.Requests[request]] ->`,
		Requests[permissions.Requests[request]],
	)
	com.karumi.dexter.Dexter.withContext(activity)
		.withPermissions(Requests[permissions.Requests[request]])
		.withListener(
			new com.karumi.dexter.listener.multi.MultiplePermissionsListener({
				onPermissionsChecked(report) {
					console.log('report ->', report)
				},
				onPermissionRationaleShouldBeShown(permissions, token) {
					console.log('permissions ->', permissions)
					console.log('token ->', token)
				},
			}),
		)
		.onSameThread()
		.check()
}

application.android.on('activityRequestPermissions', function activityRequestPermissions(args) {})
