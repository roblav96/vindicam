import * as R from 'rambda'
import * as shimmer from 'shimmer'
import { Observable, ViewBase } from '@nativescript/core'
import { Property, PropertyOptions } from '@nativescript/core/ui/core/properties'

export function ObservableProperty<C extends Observable, T>(
	set?: (this: C, value: T, oldValue: T) => void,
	options = { cache: true },
) {
	return function (target: C, key: string) {
		Object.defineProperty(target, key, {
			get(this: C) {
				return this[`__${key}`]
			},
			set(this: C, value) {
				if (options.cache && this[`__${key}`] === value) return
				let oldValue = R.clone(this[`__${key}`])
				this[`__${key}`] = value
				this.notifyPropertyChange(key, value, oldValue)
				set && set.apply(this, [value, oldValue])
			},
			enumerable: true,
			configurable: true,
		})
	}
}

export function NativeProperty<C extends ViewBase, T>(
	options: Partial<{
		property: any
		options: Omit<PropertyOptions<C, T>, 'name'>
		getDefault(this: C): T
		setNative(this: C, value: T): void
	}>,
) {
	return function (target: C, key: keyof C) {
		let property = options.property
		if (!property) {
			property = new Property(
				Object.assign(options.options || ({} as any), { name: key }),
			) as Property<C, T>
		}
		if (options.getDefault) Object.assign(target, { [property.getDefault]: options.getDefault })
		if (options.setNative) Object.assign(target, { [property.setNative]: options.setNative })
		property.register(target.constructor)
	}
}

export function DefineProperty<T>(target: T, key: keyof T, get: (this: T) => T[keyof T]) {
	return Object.defineProperty(target, key, {
		get,
		enumerable: true,
		configurable: true,
	})
}

export const Inject = shimmer.wrap as <Impl extends object, Key extends keyof Impl>(
	impl: Impl,
	name: Key,
	// @ts-ignore
	wrapper: (method: Impl[Key]) => (this: Impl, ...args: Parameters<Impl[Key]>) => Impl[Key],
) => void
