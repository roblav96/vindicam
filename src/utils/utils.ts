import * as R from 'rambda'
import * as stringFn from 'string-fn'

export function hash(value = '') {
	value = value.toString()
	let [hash, i, char] = [0, 0, 0]
	if (value.length == 0) return hash
	for (i = 0; i < value.length; i++) {
		char = value.charCodeAt(i)
		hash = (hash << 5) - hash + char
		hash |= 0
	}
	return Math.abs(hash)
}
