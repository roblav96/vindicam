declare module com {
	export module karumi {
		export module dexter {
			export class AndroidPermissionService extends java.lang.Object {
				public static class: java.lang.Class<com.karumi.dexter.AndroidPermissionService>;
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.karumi.dexter.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export class Dexter extends java.lang.Object implements com.karumi.dexter.DexterBuilder, com.karumi.dexter.DexterBuilder.Permission, com.karumi.dexter.DexterBuilder.SinglePermissionListener, com.karumi.dexter.DexterBuilder.MultiPermissionListener {
				public static class: java.lang.Class<com.karumi.dexter.Dexter>;
				public onSameThread(): com.karumi.dexter.DexterBuilder;
				public static withActivity(arg0: globalAndroid.app.Activity): com.karumi.dexter.DexterBuilder.Permission;
				public withListener(arg1: com.karumi.dexter.listener.multi.MultiplePermissionsListener): com.karumi.dexter.DexterBuilder;
				public check(): void;
				public withPermissions(arg1: native.Array<string>): com.karumi.dexter.DexterBuilder.MultiPermissionListener;
				public withPermissions(arg1: java.util.Collection<string>): com.karumi.dexter.DexterBuilder.MultiPermissionListener;
				public withErrorListener(arg1: com.karumi.dexter.listener.PermissionRequestErrorListener): com.karumi.dexter.DexterBuilder;
				public withListener(arg1: com.karumi.dexter.listener.single.PermissionListener): com.karumi.dexter.DexterBuilder;
				public static withContext(arg0: globalAndroid.content.Context): com.karumi.dexter.DexterBuilder.Permission;
				public withPermission(arg1: string): com.karumi.dexter.DexterBuilder.SinglePermissionListener;
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export class DexterActivity extends globalAndroid.app.Activity implements androidx.core.app.ActivityCompat.OnRequestPermissionsResultCallback {
				public static class: java.lang.Class<com.karumi.dexter.DexterActivity>;
				public onWindowAttributesChanged(params: globalAndroid.view.WindowManager.LayoutParams): void;
				public onMenuOpened(featureId: number, menu: globalAndroid.view.Menu): boolean;
				public constructor(base: globalAndroid.content.Context, themeResId: number);
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public onCreateView(name: string, context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public dispatchPopulateAccessibilityEvent(arg1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onNewIntent(intent: globalAndroid.content.Intent): void;
				public onCreateContextMenu(arg1: globalAndroid.view.ContextMenu, arg2: globalAndroid.view.View, arg3: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public constructor();
				public onCreatePanelMenu(featureId: number, menu: globalAndroid.view.Menu): boolean;
				public onWindowFocusChanged(hasFocus: boolean): void;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle, persistentState: any): void;
				public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
				public dispatchGenericMotionEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public constructor(base: globalAndroid.content.Context, theme: globalAndroid.content.res.Resources.Theme);
				public dispatchPopulateAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public dispatchTrackballEvent(arg1: globalAndroid.view.MotionEvent): boolean;
				public onMenuOpened(arg1: number, arg2: globalAndroid.view.Menu): boolean;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onTrimMemory(arg1: number): void;
				public onKeyUp(arg1: number, arg2: globalAndroid.view.KeyEvent): boolean;
				public onCreatePanelView(featureId: number): globalAndroid.view.View;
				public dispatchKeyEvent(arg1: globalAndroid.view.KeyEvent): boolean;
				public onCreatePanelView(arg1: number): globalAndroid.view.View;
				public onPreparePanel(featureId: number, view: globalAndroid.view.View, menu: globalAndroid.view.Menu): boolean;
				public onActionModeStarted(mode: globalAndroid.view.ActionMode): void;
				public onSearchRequested(arg1: any): boolean;
				public onContentChanged(): void;
				public onSearchRequested(searchEvent: any): boolean;
				public onMenuItemSelected(arg1: number, arg2: globalAndroid.view.MenuItem): boolean;
				public onWindowFocusChanged(arg1: boolean): void;
				public onKeyDown(arg1: number, arg2: globalAndroid.view.KeyEvent): boolean;
				public onDetachedFromWindow(): void;
				public dispatchKeyShortcutEvent(event: globalAndroid.view.KeyEvent): boolean;
				public onPointerCaptureChanged(hasCapture: boolean): void;
				public onKeyLongPress(arg1: number, arg2: globalAndroid.view.KeyEvent): boolean;
				public onSearchRequested(): boolean;
				public dispatchTrackballEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public onPreparePanel(arg1: number, arg2: globalAndroid.view.View, arg3: globalAndroid.view.Menu): boolean;
				public onActionModeStarted(arg1: globalAndroid.view.ActionMode): void;
				public dispatchKeyShortcutEvent(arg1: globalAndroid.view.KeyEvent): boolean;
				public onKeyMultiple(arg1: number, arg2: number, arg3: globalAndroid.view.KeyEvent): boolean;
				public onRequestPermissionsResult(arg1: number, arg2: native.Array<string>, arg3: native.Array<number>): void;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onTrimMemory(level: number): void;
				public constructor(base: globalAndroid.content.Context);
				public onWindowAttributesChanged(arg1: globalAndroid.view.WindowManager.LayoutParams): void;
				public onPanelClosed(arg1: number, arg2: globalAndroid.view.Menu): void;
				public onActionModeFinished(mode: globalAndroid.view.ActionMode): void;
				public onNewIntent(arg1: globalAndroid.content.Intent): void;
				public onActionModeFinished(arg1: globalAndroid.view.ActionMode): void;
				public onRequestPermissionsResult(requestCode: number, permissions: native.Array<string>, grantResults: native.Array<number>): void;
				public onWindowStartingActionMode(arg1: globalAndroid.view.ActionMode.Callback, arg2: number): globalAndroid.view.ActionMode;
				public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: globalAndroid.view.Menu, deviceId: number): void;
				public onCreateView(arg1: globalAndroid.view.View, arg2: string, arg3: globalAndroid.content.Context, arg4: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public dispatchGenericMotionEvent(arg1: globalAndroid.view.MotionEvent): boolean;
				public onPanelClosed(featureId: number, menu: globalAndroid.view.Menu): void;
				public onCreateView(parent: globalAndroid.view.View, name: string, context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public onWindowStartingActionMode(arg1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onMenuItemSelected(featureId: number, item: globalAndroid.view.MenuItem): boolean;
				public dispatchTouchEvent(arg1: globalAndroid.view.MotionEvent): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onCreatePanelMenu(arg1: number, arg2: globalAndroid.view.Menu): boolean;
				public onCreate(arg1: globalAndroid.os.Bundle): void;
				public onDestroy(): void;
				public onAttachedToWindow(): void;
				public dispatchTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export class DexterBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.karumi.dexter.DexterBuilder>;
				/**
				 * Constructs a new instance of the com.karumi.dexter.DexterBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSameThread(): com.karumi.dexter.DexterBuilder;
					withErrorListener(arg1: com.karumi.dexter.listener.PermissionRequestErrorListener): com.karumi.dexter.DexterBuilder;
					check(): void;
				});
				public constructor();
				public onSameThread(): com.karumi.dexter.DexterBuilder;
				public check(): void;
				public withErrorListener(arg1: com.karumi.dexter.listener.PermissionRequestErrorListener): com.karumi.dexter.DexterBuilder;
			}
			export module DexterBuilder {
				export class MultiPermissionListener extends java.lang.Object {
					public static class: java.lang.Class<com.karumi.dexter.DexterBuilder.MultiPermissionListener>;
					/**
					 * Constructs a new instance of the com.karumi.dexter.DexterBuilder$MultiPermissionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						withListener(arg1: com.karumi.dexter.listener.multi.MultiplePermissionsListener): com.karumi.dexter.DexterBuilder;
					});
					public constructor();
					public withListener(arg1: com.karumi.dexter.listener.multi.MultiplePermissionsListener): com.karumi.dexter.DexterBuilder;
				}
				export class Permission extends java.lang.Object {
					public static class: java.lang.Class<com.karumi.dexter.DexterBuilder.Permission>;
					/**
					 * Constructs a new instance of the com.karumi.dexter.DexterBuilder$Permission interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						withPermission(arg1: string): com.karumi.dexter.DexterBuilder.SinglePermissionListener;
						withPermissions(arg1: native.Array<string>): com.karumi.dexter.DexterBuilder.MultiPermissionListener;
						withPermissions(arg1: java.util.Collection<string>): com.karumi.dexter.DexterBuilder.MultiPermissionListener;
					});
					public constructor();
					public withPermission(arg1: string): com.karumi.dexter.DexterBuilder.SinglePermissionListener;
					public withPermissions(arg1: java.util.Collection<string>): com.karumi.dexter.DexterBuilder.MultiPermissionListener;
					public withPermissions(arg1: native.Array<string>): com.karumi.dexter.DexterBuilder.MultiPermissionListener;
				}
				export class SinglePermissionListener extends java.lang.Object {
					public static class: java.lang.Class<com.karumi.dexter.DexterBuilder.SinglePermissionListener>;
					/**
					 * Constructs a new instance of the com.karumi.dexter.DexterBuilder$SinglePermissionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						withListener(arg1: com.karumi.dexter.listener.single.PermissionListener): com.karumi.dexter.DexterBuilder;
					});
					public constructor();
					public withListener(arg1: com.karumi.dexter.listener.single.PermissionListener): com.karumi.dexter.DexterBuilder;
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export class DexterException extends java.lang.IllegalStateException {
				public static class: java.lang.Class<com.karumi.dexter.DexterException>;
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export class DexterInstance extends java.lang.Object {
				public static class: java.lang.Class<com.karumi.dexter.DexterInstance>;
			}
			export module DexterInstance {
				export class PermissionStates extends java.lang.Object {
					public static class: java.lang.Class<com.karumi.dexter.DexterInstance.PermissionStates>;
					public getImpossibleToGrantPermissions(): java.util.Collection<string>;
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export class IntentProvider extends java.lang.Object {
				public static class: java.lang.Class<com.karumi.dexter.IntentProvider>;
				public get(arg1: globalAndroid.content.Context, arg2: java.lang.Class<any>): globalAndroid.content.Intent;
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export class MainThread extends java.lang.Object implements com.karumi.dexter.Thread {
				public static class: java.lang.Class<com.karumi.dexter.MainThread>;
				public loop(): void;
				public execute(arg1: java.lang.Runnable): void;
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export class MultiplePermissionListenerThreadDecorator extends java.lang.Object implements com.karumi.dexter.listener.multi.MultiplePermissionsListener {
				public static class: java.lang.Class<com.karumi.dexter.MultiplePermissionListenerThreadDecorator>;
				public onPermissionsChecked(arg1: com.karumi.dexter.MultiplePermissionsReport): void;
				public onPermissionRationaleShouldBeShown(arg1: java.util.List<com.karumi.dexter.listener.PermissionRequest>, arg2: com.karumi.dexter.PermissionToken): void;
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export class MultiplePermissionsListenerToPermissionListenerAdapter extends java.lang.Object implements com.karumi.dexter.listener.multi.MultiplePermissionsListener {
				public static class: java.lang.Class<com.karumi.dexter.MultiplePermissionsListenerToPermissionListenerAdapter>;
				public onPermissionsChecked(arg1: com.karumi.dexter.MultiplePermissionsReport): void;
				public onPermissionRationaleShouldBeShown(arg1: java.util.List<com.karumi.dexter.listener.PermissionRequest>, arg2: com.karumi.dexter.PermissionToken): void;
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export class MultiplePermissionsReport extends java.lang.Object {
				public static class: java.lang.Class<com.karumi.dexter.MultiplePermissionsReport>;
				public areAllPermissionsGranted(): boolean;
				public isAnyPermissionPermanentlyDenied(): boolean;
				public getGrantedPermissionResponses(): java.util.List<com.karumi.dexter.listener.PermissionGrantedResponse>;
				public getDeniedPermissionResponses(): java.util.List<com.karumi.dexter.listener.PermissionDeniedResponse>;
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export class PermissionRationaleToken extends java.lang.Object implements com.karumi.dexter.PermissionToken {
				public static class: java.lang.Class<com.karumi.dexter.PermissionRationaleToken>;
				public cancelPermissionRequest(): void;
				public continuePermissionRequest(): void;
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export class PermissionToken extends java.lang.Object {
				public static class: java.lang.Class<com.karumi.dexter.PermissionToken>;
				/**
				 * Constructs a new instance of the com.karumi.dexter.PermissionToken interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					continuePermissionRequest(): void;
					cancelPermissionRequest(): void;
				});
				public constructor();
				public cancelPermissionRequest(): void;
				public continuePermissionRequest(): void;
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export class Thread extends java.lang.Object {
				public static class: java.lang.Class<com.karumi.dexter.Thread>;
				/**
				 * Constructs a new instance of the com.karumi.dexter.Thread interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execute(arg1: java.lang.Runnable): void;
					loop(): void;
				});
				public constructor();
				public loop(): void;
				public execute(arg1: java.lang.Runnable): void;
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export class ThreadFactory extends java.lang.Object {
				public static class: java.lang.Class<com.karumi.dexter.ThreadFactory>;
				public static makeSameThread(): com.karumi.dexter.Thread;
				public static makeMainThread(): com.karumi.dexter.Thread;
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export class WorkerThread extends java.lang.Object implements com.karumi.dexter.Thread {
				public static class: java.lang.Class<com.karumi.dexter.WorkerThread>;
				public loop(): void;
				public execute(arg1: java.lang.Runnable): void;
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export class DexterError {
					public static class: java.lang.Class<com.karumi.dexter.listener.DexterError>;
					public static REQUEST_ONGOING: com.karumi.dexter.listener.DexterError;
					public static NO_PERMISSIONS_REQUESTED: com.karumi.dexter.listener.DexterError;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(arg0: string): com.karumi.dexter.listener.DexterError;
					public static values(): native.Array<com.karumi.dexter.listener.DexterError>;
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export class EmptyPermissionRequestErrorListener extends java.lang.Object implements com.karumi.dexter.listener.PermissionRequestErrorListener {
					public static class: java.lang.Class<com.karumi.dexter.listener.EmptyPermissionRequestErrorListener>;
					public constructor();
					public onError(arg1: com.karumi.dexter.listener.DexterError): void;
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export class OnDialogButtonClickListener extends java.lang.Object {
					public static class: java.lang.Class<com.karumi.dexter.listener.OnDialogButtonClickListener>;
					/**
					 * Constructs a new instance of the com.karumi.dexter.listener.OnDialogButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onClick(): void;
					});
					public constructor();
					public onClick(): void;
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export class PermissionDeniedResponse extends java.lang.Object {
					public static class: java.lang.Class<com.karumi.dexter.listener.PermissionDeniedResponse>;
					public constructor(arg1: com.karumi.dexter.listener.PermissionRequest, arg2: boolean);
					public getPermissionName(): string;
					public isPermanentlyDenied(): boolean;
					public static from(arg0: string, arg1: boolean): com.karumi.dexter.listener.PermissionDeniedResponse;
					public getRequestedPermission(): com.karumi.dexter.listener.PermissionRequest;
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export class PermissionGrantedResponse extends java.lang.Object {
					public static class: java.lang.Class<com.karumi.dexter.listener.PermissionGrantedResponse>;
					public getPermissionName(): string;
					public static from(arg0: string): com.karumi.dexter.listener.PermissionGrantedResponse;
					public constructor(arg1: com.karumi.dexter.listener.PermissionRequest);
					public getRequestedPermission(): com.karumi.dexter.listener.PermissionRequest;
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export class PermissionRequest extends java.lang.Object {
					public static class: java.lang.Class<com.karumi.dexter.listener.PermissionRequest>;
					public toString(): string;
					public constructor(arg1: string);
					public getName(): string;
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export class PermissionRequestErrorListener extends java.lang.Object {
					public static class: java.lang.Class<com.karumi.dexter.listener.PermissionRequestErrorListener>;
					/**
					 * Constructs a new instance of the com.karumi.dexter.listener.PermissionRequestErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onError(arg1: com.karumi.dexter.listener.DexterError): void;
					});
					public constructor();
					public onError(arg1: com.karumi.dexter.listener.DexterError): void;
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export class SettingsClickListener extends java.lang.Object implements globalAndroid.view.View.OnClickListener {
					public static class: java.lang.Class<com.karumi.dexter.listener.SettingsClickListener>;
					public onClick(arg1: globalAndroid.view.View): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export class SnackbarUtils extends java.lang.Object {
					public static class: java.lang.Class<com.karumi.dexter.listener.SnackbarUtils>;
					public constructor();
					public static show(arg0: globalAndroid.view.View, arg1: string, arg2: number, arg3: string, arg4: globalAndroid.view.View.OnClickListener, arg5: com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback<com.google.android.material.snackbar.Snackbar>): void;
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export module multi {
					export class BaseMultiplePermissionsListener extends java.lang.Object implements com.karumi.dexter.listener.multi.MultiplePermissionsListener {
						public static class: java.lang.Class<com.karumi.dexter.listener.multi.BaseMultiplePermissionsListener>;
						public constructor();
						public onPermissionRationaleShouldBeShown(arg1: java.util.List<com.karumi.dexter.listener.PermissionRequest>, arg2: com.karumi.dexter.PermissionToken): void;
						public onPermissionsChecked(arg1: com.karumi.dexter.MultiplePermissionsReport): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export module multi {
					export class CompositeMultiplePermissionsListener extends java.lang.Object implements com.karumi.dexter.listener.multi.MultiplePermissionsListener {
						public static class: java.lang.Class<com.karumi.dexter.listener.multi.CompositeMultiplePermissionsListener>;
						public constructor(arg1: java.util.Collection<com.karumi.dexter.listener.multi.MultiplePermissionsListener>);
						public onPermissionRationaleShouldBeShown(arg1: java.util.List<com.karumi.dexter.listener.PermissionRequest>, arg2: com.karumi.dexter.PermissionToken): void;
						public constructor(arg1: native.Array<com.karumi.dexter.listener.multi.MultiplePermissionsListener>);
						public onPermissionsChecked(arg1: com.karumi.dexter.MultiplePermissionsReport): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export module multi {
					export class DialogOnAnyDeniedMultiplePermissionsListener extends com.karumi.dexter.listener.multi.BaseMultiplePermissionsListener {
						public static class: java.lang.Class<com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener>;
						public onPermissionRationaleShouldBeShown(arg1: java.util.List<com.karumi.dexter.listener.PermissionRequest>, arg2: com.karumi.dexter.PermissionToken): void;
						public onPermissionsChecked(arg1: com.karumi.dexter.MultiplePermissionsReport): void;
					}
					export module DialogOnAnyDeniedMultiplePermissionsListener {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder>;
							public withMessage(arg1: number): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public withTitle(arg1: number): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public withButtonText(arg1: string): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public withIcon(arg1: globalAndroid.graphics.drawable.Drawable): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public withTitle(arg1: string): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public withIcon(arg1: number): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public withButtonText(arg1: number): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public build(): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener;
							public withButtonText(arg1: number, arg2: com.karumi.dexter.listener.OnDialogButtonClickListener): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public static withContext(arg0: globalAndroid.content.Context): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public withMessage(arg1: string): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public withButtonText(arg1: string, arg2: com.karumi.dexter.listener.OnDialogButtonClickListener): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export module multi {
					export class MultiplePermissionsListener extends java.lang.Object {
						public static class: java.lang.Class<com.karumi.dexter.listener.multi.MultiplePermissionsListener>;
						/**
						 * Constructs a new instance of the com.karumi.dexter.listener.multi.MultiplePermissionsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPermissionsChecked(arg1: com.karumi.dexter.MultiplePermissionsReport): void;
							onPermissionRationaleShouldBeShown(arg1: java.util.List<com.karumi.dexter.listener.PermissionRequest>, arg2: com.karumi.dexter.PermissionToken): void;
						});
						public constructor();
						public onPermissionRationaleShouldBeShown(arg1: java.util.List<com.karumi.dexter.listener.PermissionRequest>, arg2: com.karumi.dexter.PermissionToken): void;
						public onPermissionsChecked(arg1: com.karumi.dexter.MultiplePermissionsReport): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export module multi {
					export class SnackbarOnAnyDeniedMultiplePermissionsListener extends com.karumi.dexter.listener.multi.BaseMultiplePermissionsListener {
						public static class: java.lang.Class<com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener>;
						public onPermissionRationaleShouldBeShown(arg1: java.util.List<com.karumi.dexter.listener.PermissionRequest>, arg2: com.karumi.dexter.PermissionToken): void;
						public onPermissionsChecked(arg1: com.karumi.dexter.MultiplePermissionsReport): void;
					}
					export module SnackbarOnAnyDeniedMultiplePermissionsListener {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener.Builder>;
							public static with(arg0: globalAndroid.view.View, arg1: string): com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener.Builder;
							public withButton(arg1: number, arg2: globalAndroid.view.View.OnClickListener): com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener.Builder;
							public withOpenSettingsButton(arg1: number): com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener.Builder;
							public build(): com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener;
							public withDuration(arg1: number): com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener.Builder;
							public withButton(arg1: string, arg2: globalAndroid.view.View.OnClickListener): com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener.Builder;
							public withCallback(arg1: com.google.android.material.snackbar.Snackbar.Callback): com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener.Builder;
							public withOpenSettingsButton(arg1: string): com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener.Builder;
							public static with(arg0: globalAndroid.view.View, arg1: number): com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export module multi {
					export class SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener extends com.karumi.dexter.listener.multi.BaseMultiplePermissionsListener {
						public static class: java.lang.Class<com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener>;
						public onPermissionRationaleShouldBeShown(arg1: java.util.List<com.karumi.dexter.listener.PermissionRequest>, arg2: com.karumi.dexter.PermissionToken): void;
						public onPermissionsChecked(arg1: com.karumi.dexter.MultiplePermissionsReport): void;
					}
					export module SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener.Builder>;
							public withCallback(arg1: com.google.android.material.snackbar.Snackbar.Callback): com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener.Builder;
							public withButton(arg1: string, arg2: globalAndroid.view.View.OnClickListener): com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener.Builder;
							public static with(arg0: globalAndroid.view.View, arg1: number): com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener.Builder;
							public withOpenSettingsButton(arg1: string): com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener.Builder;
							public withButton(arg1: number, arg2: globalAndroid.view.View.OnClickListener): com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener.Builder;
							public withDuration(arg1: number): com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener.Builder;
							public withOpenSettingsButton(arg1: number): com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener.Builder;
							public static with(arg0: globalAndroid.view.View, arg1: string): com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener.Builder;
							public build(): com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export module single {
					export class BasePermissionListener extends java.lang.Object implements com.karumi.dexter.listener.single.PermissionListener {
						public static class: java.lang.Class<com.karumi.dexter.listener.single.BasePermissionListener>;
						public constructor();
						public onPermissionDenied(arg1: com.karumi.dexter.listener.PermissionDeniedResponse): void;
						public onPermissionRationaleShouldBeShown(arg1: com.karumi.dexter.listener.PermissionRequest, arg2: com.karumi.dexter.PermissionToken): void;
						public onPermissionGranted(arg1: com.karumi.dexter.listener.PermissionGrantedResponse): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export module single {
					export class CompositePermissionListener extends java.lang.Object implements com.karumi.dexter.listener.single.PermissionListener {
						public static class: java.lang.Class<com.karumi.dexter.listener.single.CompositePermissionListener>;
						public constructor(arg1: native.Array<com.karumi.dexter.listener.single.PermissionListener>);
						public onPermissionDenied(arg1: com.karumi.dexter.listener.PermissionDeniedResponse): void;
						public onPermissionRationaleShouldBeShown(arg1: com.karumi.dexter.listener.PermissionRequest, arg2: com.karumi.dexter.PermissionToken): void;
						public constructor(arg1: java.util.Collection<com.karumi.dexter.listener.single.PermissionListener>);
						public onPermissionGranted(arg1: com.karumi.dexter.listener.PermissionGrantedResponse): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export module single {
					export class DialogOnDeniedPermissionListener extends com.karumi.dexter.listener.single.BasePermissionListener {
						public static class: java.lang.Class<com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener>;
						public onPermissionDenied(arg1: com.karumi.dexter.listener.PermissionDeniedResponse): void;
						public onPermissionRationaleShouldBeShown(arg1: com.karumi.dexter.listener.PermissionRequest, arg2: com.karumi.dexter.PermissionToken): void;
						public onPermissionGranted(arg1: com.karumi.dexter.listener.PermissionGrantedResponse): void;
					}
					export module DialogOnDeniedPermissionListener {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder>;
							public static withContext(arg0: globalAndroid.content.Context): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public withTitle(arg1: string): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public withButtonText(arg1: string, arg2: com.karumi.dexter.listener.OnDialogButtonClickListener): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public withTitle(arg1: number): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public withMessage(arg1: number): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public withIcon(arg1: globalAndroid.graphics.drawable.Drawable): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public build(): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener;
							public withButtonText(arg1: number): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public withIcon(arg1: number): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public withMessage(arg1: string): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public withButtonText(arg1: number, arg2: com.karumi.dexter.listener.OnDialogButtonClickListener): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public withButtonText(arg1: string): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export module single {
					export class PermissionListener extends java.lang.Object {
						public static class: java.lang.Class<com.karumi.dexter.listener.single.PermissionListener>;
						/**
						 * Constructs a new instance of the com.karumi.dexter.listener.single.PermissionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPermissionGranted(arg1: com.karumi.dexter.listener.PermissionGrantedResponse): void;
							onPermissionDenied(arg1: com.karumi.dexter.listener.PermissionDeniedResponse): void;
							onPermissionRationaleShouldBeShown(arg1: com.karumi.dexter.listener.PermissionRequest, arg2: com.karumi.dexter.PermissionToken): void;
						});
						public constructor();
						public onPermissionDenied(arg1: com.karumi.dexter.listener.PermissionDeniedResponse): void;
						public onPermissionRationaleShouldBeShown(arg1: com.karumi.dexter.listener.PermissionRequest, arg2: com.karumi.dexter.PermissionToken): void;
						public onPermissionGranted(arg1: com.karumi.dexter.listener.PermissionGrantedResponse): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export module single {
					export class SnackbarOnDeniedPermissionListener extends com.karumi.dexter.listener.single.BasePermissionListener {
						public static class: java.lang.Class<com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener>;
						public onPermissionDenied(arg1: com.karumi.dexter.listener.PermissionDeniedResponse): void;
						public onPermissionRationaleShouldBeShown(arg1: com.karumi.dexter.listener.PermissionRequest, arg2: com.karumi.dexter.PermissionToken): void;
						public onPermissionGranted(arg1: com.karumi.dexter.listener.PermissionGrantedResponse): void;
					}
					export module SnackbarOnDeniedPermissionListener {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener.Builder>;
							public static with(arg0: globalAndroid.view.View, arg1: number): com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener.Builder;
							public withCallback(arg1: com.google.android.material.snackbar.Snackbar.Callback): com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener.Builder;
							public withButton(arg1: string, arg2: globalAndroid.view.View.OnClickListener): com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener.Builder;
							public withOpenSettingsButton(arg1: number): com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener.Builder;
							public static with(arg0: globalAndroid.view.View, arg1: string): com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener.Builder;
							public withButton(arg1: number, arg2: globalAndroid.view.View.OnClickListener): com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener.Builder;
							public build(): com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener;
							public withOpenSettingsButton(arg1: string): com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener.Builder;
							public withDuration(arg1: number): com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module karumi {
		export module dexter {
			export module listener {
				export module single {
					export class SnackbarOnPermanentlyDeniedPermissionListener extends com.karumi.dexter.listener.single.BasePermissionListener {
						public static class: java.lang.Class<com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener>;
						public onPermissionDenied(arg1: com.karumi.dexter.listener.PermissionDeniedResponse): void;
						public onPermissionRationaleShouldBeShown(arg1: com.karumi.dexter.listener.PermissionRequest, arg2: com.karumi.dexter.PermissionToken): void;
						public onPermissionGranted(arg1: com.karumi.dexter.listener.PermissionGrantedResponse): void;
					}
					export module SnackbarOnPermanentlyDeniedPermissionListener {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener.Builder>;
							public withOpenSettingsButton(arg1: number): com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener.Builder;
							public build(): com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener;
							public static with(arg0: globalAndroid.view.View, arg1: string): com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener.Builder;
							public withButton(arg1: number, arg2: globalAndroid.view.View.OnClickListener): com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener.Builder;
							public withCallback(arg1: com.google.android.material.snackbar.Snackbar.Callback): com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener.Builder;
							public static with(arg0: globalAndroid.view.View, arg1: number): com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener.Builder;
							public withOpenSettingsButton(arg1: string): com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener.Builder;
							public withButton(arg1: string, arg2: globalAndroid.view.View.OnClickListener): com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener.Builder;
							public withDuration(arg1: number): com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener.Builder;
						}
					}
				}
			}
		}
	}
}

//Generics information:

