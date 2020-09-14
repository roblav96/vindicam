import * as R from 'rambda'

export function hash(value = '') {
	value = value.toString()
	let [hash, i, char] = [0, 0, 0]
	if (value.length == 0) return hash.toString()
	for (i = 0; i < value.length; i++) {
		char = value.charCodeAt(i)
		hash = (hash << 5) - hash + char
		hash |= 0
	}
	return Math.abs(hash).toString()
}

export function randomBits(count = 32): string {
	let bits = ''
	while (bits.length < count && count > 0) {
		let num = Math.random()
		bits +=
			num < 0.1
				? Math.floor(num * 100)
				: String.fromCharCode(Math.floor(num * 26) + (num > 0.5 ? 97 : 65))
	}
	return bits
}
