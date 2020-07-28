export * from './permissions.common'
import * as application from '@nativescript/core/application'
import * as permissions from './permissions.common'

const Requests = {
	CAMERA: [android.Manifest.permission.RECORD_AUDIO, android.Manifest.permission.CAMERA],
} as Record<keyof typeof permissions.Requests, string[]>

export async function hasPermissions(request: permissions.Requests) {
	let activity = application.android.foregroundActivity as androidx.appcompat.app.AppCompatActivity
	// let dexter = com.karumi.dexter.Dexter.withContext(application.android.context)
	// console.log('dexter ->', dexter)
	console.log('permissions.Requests[request] ->', permissions.Requests[request])
	console.log(`Requests[permissions.Requests[request]] ->`, Requests[permissions.Requests[request]])
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
