import * as Application from '@nativescript/core/application'

Application.android.on('activityCreated', function activityCreated(args) {
	let activity = args.activity as androidx.appcompat.app.AppCompatActivity
	com.karumi.dexter.Dexter.withContext(activity)
		.withPermission(android.Manifest.permission.CAMERA)
		.withListener(
			new com.karumi.dexter.listener.single.PermissionListener({
				// onPermissionsChecked(report) {
				// 	console.log('report ->', report)
				// },
				onPermissionGranted(granted) {
					console.log('granted ->', granted)
				},
				onPermissionDenied(denied) {
					console.log('denied ->', denied)
				},
				onPermissionRationaleShouldBeShown(permissions, token) {
					console.log('permissions ->', permissions)
					console.log('token ->', token)
				},
			}),
		)
		.onSameThread()
		.check()

	// android.os.StrictMode.setThreadPolicy(
	// 	new android.os.StrictMode.ThreadPolicy.Builder().permitAll().build(),
	// )
})
