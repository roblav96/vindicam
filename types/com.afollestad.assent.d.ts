declare module com {
	export module afollestad {
		export module assent {
			export class ActivitiesKt extends java.lang.Object {
				public static class: java.lang.Class<com.afollestad.assent.ActivitiesKt>;
				public static showSystemAppDetailsPage(param0: globalAndroid.app.Activity): void;
				public static runWithPermissions(param0: globalAndroid.app.Activity, param1: native.Array<com.afollestad.assent.Permission>, param2: number, param3: com.afollestad.assent.rationale.RationaleHandler, param4: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static askForPermissions(param0: globalAndroid.app.Activity, param1: native.Array<com.afollestad.assent.Permission>, param2: number, param3: com.afollestad.assent.rationale.RationaleHandler, param4: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export class AssentResult extends java.lang.Object {
				public static class: java.lang.Class<com.afollestad.assent.AssentResult>;
				public granted(): java.util.Set<com.afollestad.assent.Permission>;
				public isAllGranted(param0: native.Array<com.afollestad.assent.Permission>): boolean;
				public get(param0: com.afollestad.assent.Permission): com.afollestad.assent.GrantResult;
				public toString(): string;
				public isAllDenied(param0: native.Array<com.afollestad.assent.Permission>): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: java.util.Map<com.afollestad.assent.Permission,any>);
				public denied(): java.util.Set<com.afollestad.assent.Permission>;
				public constructor(param0: java.util.Set<any>, param1: java.util.List<any>);
				public containsPermissions(param0: com.afollestad.assent.Permission): boolean;
				public permanentlyDenied(): java.util.Set<com.afollestad.assent.Permission>;
				public getResultsMap$core(): java.util.Map<com.afollestad.assent.Permission,com.afollestad.assent.GrantResult>;
				public constructor(param0: java.util.Set<any>, param1: native.Array<number>, param2: com.afollestad.assent.rationale.ShouldShowRationale);
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export class AssentResultKt extends java.lang.Object {
				public static class: java.lang.Class<com.afollestad.assent.AssentResultKt>;
				public static plus(param0: com.afollestad.assent.AssentResult, param1: com.afollestad.assent.AssentResult): com.afollestad.assent.AssentResult;
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.afollestad.assent.BuildConfig>;
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
	export module afollestad {
		export module assent {
			export class ContextsKt extends java.lang.Object {
				public static class: java.lang.Class<com.afollestad.assent.ContextsKt>;
				public static startPermissionRequest(param0: any, param1: kotlin.jvm.functions.Function1<any,any>, param2: native.Array<com.afollestad.assent.Permission>, param3: number, param4: com.afollestad.assent.rationale.ShouldShowRationale, param5: com.afollestad.assent.rationale.RationaleHandler, param6: kotlin.jvm.functions.Function1<any,any>): void;
				public static isAllGranted(param0: globalAndroid.content.Context, param1: native.Array<com.afollestad.assent.Permission>): boolean;
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export class FragmentsKt extends java.lang.Object {
				public static class: java.lang.Class<com.afollestad.assent.FragmentsKt>;
				public static isAllGranted(param0: androidx.fragment.app.Fragment, param1: native.Array<com.afollestad.assent.Permission>): boolean;
				public static runWithPermissions(param0: androidx.fragment.app.Fragment, param1: native.Array<com.afollestad.assent.Permission>, param2: number, param3: com.afollestad.assent.rationale.RationaleHandler, param4: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static askForPermissions(param0: androidx.fragment.app.Fragment, param1: native.Array<com.afollestad.assent.Permission>, param2: number, param3: com.afollestad.assent.rationale.RationaleHandler, param4: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static showSystemAppDetailsPage(param0: androidx.fragment.app.Fragment): void;
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export class GrantResult {
				public static class: java.lang.Class<com.afollestad.assent.GrantResult>;
				public static GRANTED: com.afollestad.assent.GrantResult;
				public static DENIED: com.afollestad.assent.GrantResult;
				public static PERMANENTLY_DENIED: com.afollestad.assent.GrantResult;
				public static valueOf(param0: string): com.afollestad.assent.GrantResult;
				public static values(): native.Array<com.afollestad.assent.GrantResult>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export class GrantResultKt extends java.lang.Object {
				public static class: java.lang.Class<com.afollestad.assent.GrantResultKt>;
				public static mapGrantResults(param0: native.Array<number>, param1: java.util.Set<any>, param2: com.afollestad.assent.rationale.ShouldShowRationale): java.util.List<com.afollestad.assent.GrantResult>;
				public static asGrantResult(param0: number, param1: com.afollestad.assent.Permission, param2: com.afollestad.assent.rationale.ShouldShowRationale): com.afollestad.assent.GrantResult;
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export class Permission {
				public static class: java.lang.Class<com.afollestad.assent.Permission>;
				public static UNKNOWN: com.afollestad.assent.Permission;
				public static READ_CALENDAR: com.afollestad.assent.Permission;
				public static WRITE_CALENDAR: com.afollestad.assent.Permission;
				public static CAMERA: com.afollestad.assent.Permission;
				public static READ_CONTACTS: com.afollestad.assent.Permission;
				public static WRITE_CONTACTS: com.afollestad.assent.Permission;
				public static GET_ACCOUNTS: com.afollestad.assent.Permission;
				public static ACCESS_FINE_LOCATION: com.afollestad.assent.Permission;
				public static ACCESS_COARSE_LOCATION: com.afollestad.assent.Permission;
				public static ACCESS_BACKGROUND_LOCATION: com.afollestad.assent.Permission;
				public static RECORD_AUDIO: com.afollestad.assent.Permission;
				public static READ_PHONE_STATE: com.afollestad.assent.Permission;
				public static CALL_PHONE: com.afollestad.assent.Permission;
				public static READ_CALL_LOG: com.afollestad.assent.Permission;
				public static WRITE_CALL_LOG: com.afollestad.assent.Permission;
				public static ADD_VOICEMAIL: com.afollestad.assent.Permission;
				public static USE_SIP: com.afollestad.assent.Permission;
				public static BODY_SENSORS: com.afollestad.assent.Permission;
				public static SEND_SMS: com.afollestad.assent.Permission;
				public static RECEIVE_SMS: com.afollestad.assent.Permission;
				public static READ_SMS: com.afollestad.assent.Permission;
				public static RECEIVE_WAP_PUSH: com.afollestad.assent.Permission;
				public static RECEIVE_MMS: com.afollestad.assent.Permission;
				public static READ_EXTERNAL_STORAGE: com.afollestad.assent.Permission;
				public static WRITE_EXTERNAL_STORAGE: com.afollestad.assent.Permission;
				public static SYSTEM_ALERT_WINDOW: com.afollestad.assent.Permission;
				public static PROCESS_OUTGOING_CALLS: com.afollestad.assent.Permission;
				public static Companion: com.afollestad.assent.Permission.Companion;
				public static valueOf(param0: string): com.afollestad.assent.Permission;
				public getValue(): string;
				public static parse(param0: string): com.afollestad.assent.Permission;
				public static values(): native.Array<com.afollestad.assent.Permission>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module Permission {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.assent.Permission.Companion>;
					public parse(param0: string): com.afollestad.assent.Permission;
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export class Prefs extends java.lang.Object {
				public static class: java.lang.Class<com.afollestad.assent.Prefs>;
				/**
				 * Constructs a new instance of the com.afollestad.assent.Prefs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					set(param0: string, param1: any): void;
					get(param0: string): any;
				});
				public constructor();
				public get(param0: string): any;
				public set(param0: string, param1: any): void;
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export class PrefsKt extends java.lang.Object {
				public static class: java.lang.Class<com.afollestad.assent.PrefsKt>;
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export class RealPrefs extends java.lang.Object implements com.afollestad.assent.Prefs {
				public static class: java.lang.Class<com.afollestad.assent.RealPrefs>;
				public get(param0: string): any;
				public constructor(param0: globalAndroid.content.Context);
				public set(param0: string, param1: any): void;
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module internal {
				export class Assent extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.assent.internal.Assent>;
					public static TAG_ACTIVITY: string;
					public static TAG_FRAGMENT: string;
					public static Companion: com.afollestad.assent.internal.Assent.Companion;
					public setPermissionFragment$core(param0: com.afollestad.assent.internal.PermissionFragment): void;
					public setCurrentPendingRequest$core(param0: com.afollestad.assent.internal.PendingRequest): void;
					public constructor();
					public getRequestQueue$core(): com.afollestad.assent.internal.Queue<com.afollestad.assent.internal.PendingRequest>;
					public getCurrentPendingRequest$core(): com.afollestad.assent.internal.PendingRequest;
					public getPermissionFragment$core(): com.afollestad.assent.internal.PermissionFragment;
				}
				export module Assent {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<com.afollestad.assent.internal.Assent.Companion>;
						public forgetFragment(): void;
						public ensureFragment(param0: globalAndroid.content.Context): com.afollestad.assent.internal.PermissionFragment;
						public get(): com.afollestad.assent.internal.Assent;
						public getFragmentCreator$core(): kotlin.jvm.functions.Function0<com.afollestad.assent.internal.PermissionFragment>;
						public ensureFragment(param0: androidx.fragment.app.Fragment): com.afollestad.assent.internal.PermissionFragment;
						public setFragmentCreator$core(param0: kotlin.jvm.functions.Function0<com.afollestad.assent.internal.PermissionFragment>): void;
					}
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module internal {
				export class CollectionsKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.assent.internal.CollectionsKt>;
					public static equalsStrings(param0: java.util.Set<any>, param1: native.Array<string>): boolean;
					public static invokeAll(param0: java.util.List<any>, param1: com.afollestad.assent.AssentResult): void;
					public static allValues(param0: java.util.Set<any>): native.Array<string>;
					public static toPermissions(param0: native.Array<string>): java.util.Set<com.afollestad.assent.Permission>;
					public static containsPermission(param0: java.util.Set<any>, param1: com.afollestad.assent.Permission): boolean;
					public static equalsPermissions(param0: java.util.Set<any>, param1: native.Array<com.afollestad.assent.Permission>): boolean;
					public static equalsPermissions(param0: java.util.Set<any>, param1: java.util.Set<any>): boolean;
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module internal {
				export class FragmentsKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.assent.internal.FragmentsKt>;
					public static transact(param0: androidx.fragment.app.Fragment, param1: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
					public static transact(param0: androidx.fragment.app.FragmentActivity, param1: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): boolean;
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module internal {
				export class Lifecycle extends java.lang.Object implements androidx.lifecycle.LifecycleObserver {
					public static class: java.lang.Class<com.afollestad.assent.internal.Lifecycle>;
					public onStart(): void;
					public onCreate(): void;
					public constructor(param0: androidx.lifecycle.LifecycleOwner, param1: native.Array<androidx.lifecycle.Lifecycle.Event>, param2: kotlin.jvm.functions.Function1<any,kotlin.Unit>);
					public onPause(): void;
					public onStop(): void;
					public onDestroy(): void;
					public onResume(): void;
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module internal {
				export class LifecyclesKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.assent.internal.LifecyclesKt>;
					public static maybeObserveLifecycle(param0: any, param1: native.Array<androidx.lifecycle.Lifecycle.Event>, param2: kotlin.jvm.functions.Function1<any,kotlin.Unit>): com.afollestad.assent.internal.Lifecycle;
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module internal {
				export class LoggingKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.assent.internal.LoggingKt>;
					public static log(param0: any, param1: string, param2: native.Array<any>): void;
					public static warn(param0: any, param1: string, param2: native.Array<any>): void;
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module internal {
				export class PendingRequest extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.assent.internal.PendingRequest>;
					public equals(param0: any): boolean;
					public getPermissions(): java.util.Set<com.afollestad.assent.Permission>;
					public getCallbacks(): java.util.List<kotlin.jvm.functions.Function1<com.afollestad.assent.AssentResult,kotlin.Unit>>;
					public toString(): string;
					public setRequestCode(param0: number): void;
					public constructor(param0: java.util.Set<any>, param1: number, param2: java.util.List<kotlin.jvm.functions.Function1<com.afollestad.assent.AssentResult,kotlin.Unit>>);
					public component1(): java.util.Set<com.afollestad.assent.Permission>;
					public component2(): number;
					public component3(): java.util.List<kotlin.jvm.functions.Function1<com.afollestad.assent.AssentResult,kotlin.Unit>>;
					public hashCode(): number;
					public getRequestCode(): number;
					public copy(param0: java.util.Set<any>, param1: number, param2: java.util.List<kotlin.jvm.functions.Function1<com.afollestad.assent.AssentResult,kotlin.Unit>>): com.afollestad.assent.internal.PendingRequest;
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module internal {
				export class PermissionFragment extends androidx.fragment.app.Fragment {
					public static class: java.lang.Class<com.afollestad.assent.internal.PermissionFragment>;
					public onAttach(param0: globalAndroid.content.Context): void;
					public getViewModelStore(): androidx.lifecycle.ViewModelStore;
					public detach$core(): void;
					public perform$core(param0: com.afollestad.assent.internal.PendingRequest): void;
					public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
					public getLifecycle(): androidx.lifecycle.Lifecycle;
					public onLowMemory(): void;
					/** @deprecated */
					public onAttach(param0: globalAndroid.app.Activity): void;
					public constructor();
					public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
					public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
					public onDetach(): void;
					public constructor(param0: number);
					public onCreateContextMenu(param0: globalAndroid.view.ContextMenu, param1: globalAndroid.view.View, param2: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module internal {
				export class PermissionFragmentKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.assent.internal.PermissionFragmentKt>;
					public static onPermissionsResponse(param0: androidx.fragment.app.Fragment, param1: native.Array<string>, param2: native.Array<number>): void;
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module internal {
				export class Queue<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.assent.internal.Queue<any>>;
					public plusAssign(param0: T): void;
					public constructor();
					public pop(): T;
					public isNotEmpty(): boolean;
					public push(param0: T): boolean;
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module rationale {
				export class AlertDialogRationaleHandlerKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.assent.rationale.AlertDialogRationaleHandlerKt>;
					public static createDialogRationale(param0: androidx.fragment.app.Fragment, param1: number, param2: kotlin.jvm.functions.Function1<any,kotlin.Unit>): com.afollestad.assent.rationale.RationaleHandler;
					public static createDialogRationale(param0: globalAndroid.app.Activity, param1: number, param2: kotlin.jvm.functions.Function1<any,kotlin.Unit>): com.afollestad.assent.rationale.RationaleHandler;
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module rationale {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.assent.rationale.BuildConfig>;
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
}
declare module com {
	export module afollestad {
		export module assent {
			export module rationale {
				export class ConfirmCallback extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.assent.rationale.ConfirmCallback>;
					public constructor(param0: kotlin.jvm.functions.Function1<any,kotlin.Unit>);
					public invoke(param0: boolean): void;
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module rationale {
				export class DialogRationaleHandler extends com.afollestad.assent.rationale.RationaleHandler {
					public static class: java.lang.Class<com.afollestad.assent.rationale.DialogRationaleHandler>;
					public showRationale(param0: com.afollestad.assent.Permission, param1: string, param2: com.afollestad.assent.rationale.ConfirmCallback): void;
					public onDestroy(): void;
					public constructor(param0: globalAndroid.app.Activity, param1: kotlin.jvm.functions.Function4<any,any,any,any,kotlin.Unit>, param2: com.afollestad.assent.rationale.ShouldShowRationale);
					public constructor(param0: globalAndroid.app.Activity, param1: number, param2: kotlin.jvm.functions.Function4<any,any,any,any,kotlin.Unit>);
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module rationale {
				export abstract class RationaleHandler extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.assent.rationale.RationaleHandler>;
					public requestPermissions(param0: native.Array<com.afollestad.assent.Permission>, param1: number, param2: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
					public showRationale(param0: com.afollestad.assent.Permission, param1: string, param2: com.afollestad.assent.rationale.ConfirmCallback): void;
					public onPermission(param0: com.afollestad.assent.Permission, param1: string): void;
					public withOwner$core(param0: any): com.afollestad.assent.rationale.RationaleHandler;
					public onDestroy(): void;
					public constructor(param0: globalAndroid.app.Activity, param1: kotlin.jvm.functions.Function4<any,any,any,any,kotlin.Unit>, param2: com.afollestad.assent.rationale.ShouldShowRationale);
					public onPermission(param0: com.afollestad.assent.Permission, param1: number): void;
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module rationale {
				export class RationaleHandlerKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.assent.rationale.RationaleHandlerKt>;
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module rationale {
				export class RealShouldShowRationale extends java.lang.Object implements com.afollestad.assent.rationale.ShouldShowRationale {
					public static class: java.lang.Class<com.afollestad.assent.rationale.RealShouldShowRationale>;
					public check(param0: com.afollestad.assent.Permission): boolean;
					public isPermanentlyDenied(param0: com.afollestad.assent.Permission): boolean;
					public constructor(param0: globalAndroid.app.Activity, param1: com.afollestad.assent.Prefs);
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module rationale {
				export class ShouldShowRationale extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.assent.rationale.ShouldShowRationale>;
					/**
					 * Constructs a new instance of the com.afollestad.assent.rationale.ShouldShowRationale interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						check(param0: com.afollestad.assent.Permission): boolean;
						isPermanentlyDenied(param0: com.afollestad.assent.Permission): boolean;
					});
					public constructor();
					public check(param0: com.afollestad.assent.Permission): boolean;
					public isPermanentlyDenied(param0: com.afollestad.assent.Permission): boolean;
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module rationale {
				export class ShouldShowRationaleKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.assent.rationale.ShouldShowRationaleKt>;
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module rationale {
				export class SnackBarRationaleHandler extends com.afollestad.assent.rationale.RationaleHandler {
					public static class: java.lang.Class<com.afollestad.assent.rationale.SnackBarRationaleHandler>;
					public showRationale(param0: com.afollestad.assent.Permission, param1: string, param2: com.afollestad.assent.rationale.ConfirmCallback): void;
					public onDestroy(): void;
					public constructor(param0: globalAndroid.app.Activity, param1: kotlin.jvm.functions.Function4<any,any,any,any,kotlin.Unit>, param2: com.afollestad.assent.rationale.ShouldShowRationale);
					public constructor(param0: globalAndroid.view.View, param1: globalAndroid.app.Activity, param2: kotlin.jvm.functions.Function4<any,any,any,any,kotlin.Unit>);
				}
			}
		}
	}
}
declare module com {
	export module afollestad {
		export module assent {
			export module rationale {
				export class SnackBarRationaleHandlerKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.assent.rationale.SnackBarRationaleHandlerKt>;
					public static createSnackBarRationale(param0: androidx.fragment.app.Fragment, param1: globalAndroid.view.View, param2: kotlin.jvm.functions.Function1<any,kotlin.Unit>): com.afollestad.assent.rationale.RationaleHandler;
					public static createSnackBarRationale(param0: globalAndroid.app.Activity, param1: globalAndroid.view.View, param2: kotlin.jvm.functions.Function1<any,kotlin.Unit>): com.afollestad.assent.rationale.RationaleHandler;
				}
			}
		}
	}
}
