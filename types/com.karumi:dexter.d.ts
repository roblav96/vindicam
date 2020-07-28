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
				public withPermissions(param0: java.util.Collection<string>): com.karumi.dexter.DexterBuilder.MultiPermissionListener;
				public withListener(param0: com.karumi.dexter.listener.multi.MultiplePermissionsListener): com.karumi.dexter.DexterBuilder;
				public onSameThread(): com.karumi.dexter.DexterBuilder;
				public check(): void;
				public withPermissions(param0: native.Array<string>): com.karumi.dexter.DexterBuilder.MultiPermissionListener;
				public withListener(param0: com.karumi.dexter.listener.single.PermissionListener): com.karumi.dexter.DexterBuilder;
				public withErrorListener(param0: com.karumi.dexter.listener.PermissionRequestErrorListener): com.karumi.dexter.DexterBuilder;
				public static withActivity(param0: globalAndroid.app.Activity): com.karumi.dexter.DexterBuilder.Permission;
				public withPermission(param0: string): com.karumi.dexter.DexterBuilder.SinglePermissionListener;
				public static withContext(param0: globalAndroid.content.Context): com.karumi.dexter.DexterBuilder.Permission;
			}
		}
	}
}
declare module com {
	export module karumi {
		export module dexter {
			export class DexterActivity extends globalAndroid.app.Activity implements androidx.core.app.ActivityCompat.OnRequestPermissionsResultCallback {
				public static class: java.lang.Class<com.karumi.dexter.DexterActivity>;
				public onMenuItemSelected(param0: number, param1: globalAndroid.view.MenuItem): boolean;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public onCreatePanelMenu(param0: number, param1: globalAndroid.view.Menu): boolean;
				public onCreateView(param0: globalAndroid.view.View, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public dispatchTrackballEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback, param1: number): globalAndroid.view.ActionMode;
				public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public onActionModeFinished(param0: globalAndroid.view.ActionMode): void;
				public constructor();
				public dispatchGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onCreateView(param0: string, param1: globalAndroid.content.Context, param2: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public onMenuOpened(param0: number, param1: globalAndroid.view.Menu): boolean;
				public onCreate(param0: globalAndroid.os.Bundle, param1: any): void;
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onTrimMemory(param0: number): void;
				public onPreparePanel(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.Menu): boolean;
				public onActionModeStarted(param0: globalAndroid.view.ActionMode): void;
				public onPointerCaptureChanged(param0: boolean): void;
				public onSearchRequested(param0: any): boolean;
				public dispatchKeyShortcutEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onProvideKeyboardShortcuts(param0: java.util.List<any>, param1: globalAndroid.view.Menu, param2: number): void;
				public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onWindowAttributesChanged(param0: globalAndroid.view.WindowManager.LayoutParams): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.Resources.Theme);
				public onCreateContextMenu(param0: globalAndroid.view.ContextMenu, param1: globalAndroid.view.View, param2: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onContentChanged(): void;
				public onCreatePanelView(param0: number): globalAndroid.view.View;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onPanelClosed(param0: number, param1: globalAndroid.view.Menu): void;
				public onNewIntent(param0: globalAndroid.content.Intent): void;
				public onDetachedFromWindow(): void;
				public onSearchRequested(): boolean;
				public onDestroy(): void;
				public onWindowFocusChanged(param0: boolean): void;
				public onAttachedToWindow(): void;
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
					withErrorListener(param0: com.karumi.dexter.listener.PermissionRequestErrorListener): com.karumi.dexter.DexterBuilder;
					check(): void;
				});
				public constructor();
				public onSameThread(): com.karumi.dexter.DexterBuilder;
				public check(): void;
				public withErrorListener(param0: com.karumi.dexter.listener.PermissionRequestErrorListener): com.karumi.dexter.DexterBuilder;
			}
			export module DexterBuilder {
				export class MultiPermissionListener extends java.lang.Object {
					public static class: java.lang.Class<com.karumi.dexter.DexterBuilder.MultiPermissionListener>;
					/**
					 * Constructs a new instance of the com.karumi.dexter.DexterBuilder$MultiPermissionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						withListener(param0: com.karumi.dexter.listener.multi.MultiplePermissionsListener): com.karumi.dexter.DexterBuilder;
					});
					public constructor();
					public withListener(param0: com.karumi.dexter.listener.multi.MultiplePermissionsListener): com.karumi.dexter.DexterBuilder;
				}
				export class Permission extends java.lang.Object {
					public static class: java.lang.Class<com.karumi.dexter.DexterBuilder.Permission>;
					/**
					 * Constructs a new instance of the com.karumi.dexter.DexterBuilder$Permission interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						withPermission(param0: string): com.karumi.dexter.DexterBuilder.SinglePermissionListener;
						withPermissions(param0: native.Array<string>): com.karumi.dexter.DexterBuilder.MultiPermissionListener;
						withPermissions(param0: java.util.Collection<string>): com.karumi.dexter.DexterBuilder.MultiPermissionListener;
					});
					public constructor();
					public withPermissions(param0: java.util.Collection<string>): com.karumi.dexter.DexterBuilder.MultiPermissionListener;
					public withPermission(param0: string): com.karumi.dexter.DexterBuilder.SinglePermissionListener;
					public withPermissions(param0: native.Array<string>): com.karumi.dexter.DexterBuilder.MultiPermissionListener;
				}
				export class SinglePermissionListener extends java.lang.Object {
					public static class: java.lang.Class<com.karumi.dexter.DexterBuilder.SinglePermissionListener>;
					/**
					 * Constructs a new instance of the com.karumi.dexter.DexterBuilder$SinglePermissionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						withListener(param0: com.karumi.dexter.listener.single.PermissionListener): com.karumi.dexter.DexterBuilder;
					});
					public constructor();
					public withListener(param0: com.karumi.dexter.listener.single.PermissionListener): com.karumi.dexter.DexterBuilder;
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
				public get(param0: globalAndroid.content.Context, param1: java.lang.Class<any>): globalAndroid.content.Intent;
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
				public execute(param0: java.lang.Runnable): void;
			}
		}
	}
}
declare module com {
	export module karumi {
		export module dexter {
			export class MultiplePermissionListenerThreadDecorator extends java.lang.Object implements com.karumi.dexter.listener.multi.MultiplePermissionsListener {
				public static class: java.lang.Class<com.karumi.dexter.MultiplePermissionListenerThreadDecorator>;
				public onPermissionsChecked(param0: com.karumi.dexter.MultiplePermissionsReport): void;
				public onPermissionRationaleShouldBeShown(param0: java.util.List<com.karumi.dexter.listener.PermissionRequest>, param1: com.karumi.dexter.PermissionToken): void;
			}
		}
	}
}
declare module com {
	export module karumi {
		export module dexter {
			export class MultiplePermissionsListenerToPermissionListenerAdapter extends java.lang.Object implements com.karumi.dexter.listener.multi.MultiplePermissionsListener {
				public static class: java.lang.Class<com.karumi.dexter.MultiplePermissionsListenerToPermissionListenerAdapter>;
				public onPermissionsChecked(param0: com.karumi.dexter.MultiplePermissionsReport): void;
				public onPermissionRationaleShouldBeShown(param0: java.util.List<com.karumi.dexter.listener.PermissionRequest>, param1: com.karumi.dexter.PermissionToken): void;
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
					execute(param0: java.lang.Runnable): void;
					loop(): void;
				});
				public constructor();
				public loop(): void;
				public execute(param0: java.lang.Runnable): void;
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
				public execute(param0: java.lang.Runnable): void;
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
					public static values(): native.Array<com.karumi.dexter.listener.DexterError>;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
					public static valueOf(param0: string): com.karumi.dexter.listener.DexterError;
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
					public onError(param0: com.karumi.dexter.listener.DexterError): void;
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
					public getPermissionName(): string;
					public isPermanentlyDenied(): boolean;
					public static from(param0: string, param1: boolean): com.karumi.dexter.listener.PermissionDeniedResponse;
					public getRequestedPermission(): com.karumi.dexter.listener.PermissionRequest;
					public constructor(param0: com.karumi.dexter.listener.PermissionRequest, param1: boolean);
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
					public static from(param0: string): com.karumi.dexter.listener.PermissionGrantedResponse;
					public constructor(param0: com.karumi.dexter.listener.PermissionRequest);
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
					public constructor(param0: string);
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
						onError(param0: com.karumi.dexter.listener.DexterError): void;
					});
					public constructor();
					public onError(param0: com.karumi.dexter.listener.DexterError): void;
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
					public constructor();
					public onClick(param0: globalAndroid.view.View): void;
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
					public static show(param0: globalAndroid.view.View, param1: string, param2: number, param3: string, param4: globalAndroid.view.View.OnClickListener, param5: com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback<com.google.android.material.snackbar.Snackbar>): void;
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
				export module multi {
					export class BaseMultiplePermissionsListener extends java.lang.Object implements com.karumi.dexter.listener.multi.MultiplePermissionsListener {
						public static class: java.lang.Class<com.karumi.dexter.listener.multi.BaseMultiplePermissionsListener>;
						public constructor();
						public onPermissionsChecked(param0: com.karumi.dexter.MultiplePermissionsReport): void;
						public onPermissionRationaleShouldBeShown(param0: java.util.List<com.karumi.dexter.listener.PermissionRequest>, param1: com.karumi.dexter.PermissionToken): void;
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
						public onPermissionsChecked(param0: com.karumi.dexter.MultiplePermissionsReport): void;
						public onPermissionRationaleShouldBeShown(param0: java.util.List<com.karumi.dexter.listener.PermissionRequest>, param1: com.karumi.dexter.PermissionToken): void;
						public constructor(param0: native.Array<com.karumi.dexter.listener.multi.MultiplePermissionsListener>);
						public constructor(param0: java.util.Collection<com.karumi.dexter.listener.multi.MultiplePermissionsListener>);
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
						public onPermissionsChecked(param0: com.karumi.dexter.MultiplePermissionsReport): void;
						public onPermissionRationaleShouldBeShown(param0: java.util.List<com.karumi.dexter.listener.PermissionRequest>, param1: com.karumi.dexter.PermissionToken): void;
					}
					export module DialogOnAnyDeniedMultiplePermissionsListener {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder>;
							public static withContext(param0: globalAndroid.content.Context): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public withTitle(param0: string): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public withButtonText(param0: number, param1: com.karumi.dexter.listener.OnDialogButtonClickListener): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public withMessage(param0: string): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public withIcon(param0: globalAndroid.graphics.drawable.Drawable): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public withMessage(param0: number): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public withButtonText(param0: string): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public withIcon(param0: number): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public withButtonText(param0: string, param1: com.karumi.dexter.listener.OnDialogButtonClickListener): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public build(): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener;
							public withButtonText(param0: number): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
							public withTitle(param0: number): com.karumi.dexter.listener.multi.DialogOnAnyDeniedMultiplePermissionsListener.Builder;
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
							onPermissionsChecked(param0: com.karumi.dexter.MultiplePermissionsReport): void;
							onPermissionRationaleShouldBeShown(param0: java.util.List<com.karumi.dexter.listener.PermissionRequest>, param1: com.karumi.dexter.PermissionToken): void;
						});
						public constructor();
						public onPermissionsChecked(param0: com.karumi.dexter.MultiplePermissionsReport): void;
						public onPermissionRationaleShouldBeShown(param0: java.util.List<com.karumi.dexter.listener.PermissionRequest>, param1: com.karumi.dexter.PermissionToken): void;
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
						public onPermissionsChecked(param0: com.karumi.dexter.MultiplePermissionsReport): void;
						public onPermissionRationaleShouldBeShown(param0: java.util.List<com.karumi.dexter.listener.PermissionRequest>, param1: com.karumi.dexter.PermissionToken): void;
					}
					export module SnackbarOnAnyDeniedMultiplePermissionsListener {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener.Builder>;
							public withDuration(param0: number): com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener.Builder;
							public withOpenSettingsButton(param0: number): com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener.Builder;
							public withButton(param0: number, param1: globalAndroid.view.View.OnClickListener): com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener.Builder;
							public build(): com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener;
							public static with(param0: globalAndroid.view.View, param1: string): com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener.Builder;
							public withCallback(param0: com.google.android.material.snackbar.Snackbar.Callback): com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener.Builder;
							public withOpenSettingsButton(param0: string): com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener.Builder;
							public static with(param0: globalAndroid.view.View, param1: number): com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener.Builder;
							public withButton(param0: string, param1: globalAndroid.view.View.OnClickListener): com.karumi.dexter.listener.multi.SnackbarOnAnyDeniedMultiplePermissionsListener.Builder;
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
						public onPermissionsChecked(param0: com.karumi.dexter.MultiplePermissionsReport): void;
						public onPermissionRationaleShouldBeShown(param0: java.util.List<com.karumi.dexter.listener.PermissionRequest>, param1: com.karumi.dexter.PermissionToken): void;
					}
					export module SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener.Builder>;
							public static with(param0: globalAndroid.view.View, param1: string): com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener.Builder;
							public withOpenSettingsButton(param0: string): com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener.Builder;
							public withCallback(param0: com.google.android.material.snackbar.Snackbar.Callback): com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener.Builder;
							public withDuration(param0: number): com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener.Builder;
							public static with(param0: globalAndroid.view.View, param1: number): com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener.Builder;
							public withButton(param0: number, param1: globalAndroid.view.View.OnClickListener): com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener.Builder;
							public withButton(param0: string, param1: globalAndroid.view.View.OnClickListener): com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener.Builder;
							public withOpenSettingsButton(param0: number): com.karumi.dexter.listener.multi.SnackbarOnAnyPermanentlyDeniedMultiplePermissionsListener.Builder;
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
						public onPermissionRationaleShouldBeShown(param0: com.karumi.dexter.listener.PermissionRequest, param1: com.karumi.dexter.PermissionToken): void;
						public onPermissionGranted(param0: com.karumi.dexter.listener.PermissionGrantedResponse): void;
						public onPermissionDenied(param0: com.karumi.dexter.listener.PermissionDeniedResponse): void;
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
						public onPermissionRationaleShouldBeShown(param0: com.karumi.dexter.listener.PermissionRequest, param1: com.karumi.dexter.PermissionToken): void;
						public constructor(param0: native.Array<com.karumi.dexter.listener.single.PermissionListener>);
						public constructor(param0: java.util.Collection<com.karumi.dexter.listener.single.PermissionListener>);
						public onPermissionGranted(param0: com.karumi.dexter.listener.PermissionGrantedResponse): void;
						public onPermissionDenied(param0: com.karumi.dexter.listener.PermissionDeniedResponse): void;
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
						public onPermissionRationaleShouldBeShown(param0: com.karumi.dexter.listener.PermissionRequest, param1: com.karumi.dexter.PermissionToken): void;
						public onPermissionGranted(param0: com.karumi.dexter.listener.PermissionGrantedResponse): void;
						public onPermissionDenied(param0: com.karumi.dexter.listener.PermissionDeniedResponse): void;
					}
					export module DialogOnDeniedPermissionListener {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder>;
							public withMessage(param0: number): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public withButtonText(param0: string): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public withIcon(param0: globalAndroid.graphics.drawable.Drawable): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public withTitle(param0: number): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public withMessage(param0: string): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public build(): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener;
							public withButtonText(param0: string, param1: com.karumi.dexter.listener.OnDialogButtonClickListener): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public static withContext(param0: globalAndroid.content.Context): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public withTitle(param0: string): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public withIcon(param0: number): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public withButtonText(param0: number): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
							public withButtonText(param0: number, param1: com.karumi.dexter.listener.OnDialogButtonClickListener): com.karumi.dexter.listener.single.DialogOnDeniedPermissionListener.Builder;
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
							onPermissionGranted(param0: com.karumi.dexter.listener.PermissionGrantedResponse): void;
							onPermissionDenied(param0: com.karumi.dexter.listener.PermissionDeniedResponse): void;
							onPermissionRationaleShouldBeShown(param0: com.karumi.dexter.listener.PermissionRequest, param1: com.karumi.dexter.PermissionToken): void;
						});
						public constructor();
						public onPermissionRationaleShouldBeShown(param0: com.karumi.dexter.listener.PermissionRequest, param1: com.karumi.dexter.PermissionToken): void;
						public onPermissionGranted(param0: com.karumi.dexter.listener.PermissionGrantedResponse): void;
						public onPermissionDenied(param0: com.karumi.dexter.listener.PermissionDeniedResponse): void;
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
						public onPermissionRationaleShouldBeShown(param0: com.karumi.dexter.listener.PermissionRequest, param1: com.karumi.dexter.PermissionToken): void;
						public onPermissionGranted(param0: com.karumi.dexter.listener.PermissionGrantedResponse): void;
						public onPermissionDenied(param0: com.karumi.dexter.listener.PermissionDeniedResponse): void;
					}
					export module SnackbarOnDeniedPermissionListener {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener.Builder>;
							public static with(param0: globalAndroid.view.View, param1: string): com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener.Builder;
							public withCallback(param0: com.google.android.material.snackbar.Snackbar.Callback): com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener.Builder;
							public withOpenSettingsButton(param0: string): com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener.Builder;
							public withDuration(param0: number): com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener.Builder;
							public static with(param0: globalAndroid.view.View, param1: number): com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener.Builder;
							public build(): com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener;
							public withButton(param0: number, param1: globalAndroid.view.View.OnClickListener): com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener.Builder;
							public withOpenSettingsButton(param0: number): com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener.Builder;
							public withButton(param0: string, param1: globalAndroid.view.View.OnClickListener): com.karumi.dexter.listener.single.SnackbarOnDeniedPermissionListener.Builder;
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
						public onPermissionRationaleShouldBeShown(param0: com.karumi.dexter.listener.PermissionRequest, param1: com.karumi.dexter.PermissionToken): void;
						public onPermissionGranted(param0: com.karumi.dexter.listener.PermissionGrantedResponse): void;
						public onPermissionDenied(param0: com.karumi.dexter.listener.PermissionDeniedResponse): void;
					}
					export module SnackbarOnPermanentlyDeniedPermissionListener {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener.Builder>;
							public withDuration(param0: number): com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener.Builder;
							public build(): com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener;
							public withOpenSettingsButton(param0: number): com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener.Builder;
							public withButton(param0: string, param1: globalAndroid.view.View.OnClickListener): com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener.Builder;
							public static with(param0: globalAndroid.view.View, param1: number): com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener.Builder;
							public withCallback(param0: com.google.android.material.snackbar.Snackbar.Callback): com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener.Builder;
							public withOpenSettingsButton(param0: string): com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener.Builder;
							public withButton(param0: number, param1: globalAndroid.view.View.OnClickListener): com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener.Builder;
							public static with(param0: globalAndroid.view.View, param1: string): com.karumi.dexter.listener.single.SnackbarOnPermanentlyDeniedPermissionListener.Builder;
						}
					}
				}
			}
		}
	}
}
