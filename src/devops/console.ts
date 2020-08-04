// import * as _ from 'lodash-es'
// import * as ansi from 'ansi-colors'
// import * as application from '@nativescript/core/application'
// import * as dayjs from 'dayjs'
// import * as eyes from 'eyes'
// import * as platform from '@nativescript/core/platform'
// import * as R from 'rambdax'
// import * as StackTracey from 'stacktracey'
// import * as types from '@nativescript/core/utils/types'
// import * as util from 'util'

// console.log(`StackTracey ->`, StackTracey)

// _.merge(eyes.defaults, { styles: { all: '', key: '', special: 'red' }, maxLength: Infinity })
// function einspect(value: any) {
// 	return eyes.inspect(value)
// }

// _.merge(util.inspect.styles, {
// 	special: 'cyan',
// 	number: 'magenta',
// 	boolean: 'blue',
// 	undefined: 'red',
// 	null: 'red',
// 	string: 'green',
// 	date: 'green',
// 	regexp: 'green',
// })
// function uinspect(value: any) {
// 	return util.inspect(value, { colors: true, depth: 2 }) as string
// }

// const newln = '\r\n'
// const generate = {
// 	getType: (v: any) => (_.isPlainObject(v) ? 'PlainObject' : R.type(v)),
// 	Null: (v: null) => ansi.red('null'),
// 	Undefined: (v: undefined) => ansi.red('undefined'),
// 	Async: (v: any) => ansi.grey(`'[object Async]'`),
// 	Promise: (v: any) => ansi.grey(`'[object Promise]'`),
// 	Boolean: (v: boolean) => ansi.blue(v.toString()),
// 	Number: (v: number) => ansi.magenta(v.toString()),
// 	String: (v: string) => ansi.green(`'${v}'`),
// 	RegExp: (v: RegExp) => ansi.green(v.toString()),
// 	Array: (v: any[]) => {
// 		v.forEach((vv, ii) => {
// 			if (_.isPlainObject(vv)) {
// 				v[ii] = _.fromPairs(_.sortBy(_.toPairs(vv)))
// 				Object.keys(v[ii]).forEach((k) => {
// 					if (_.isPlainObject(v[ii][k])) {
// 						v[ii][k] = _.fromPairs(_.sortBy(_.toPairs(v[ii][k])))
// 						Object.keys(v[ii][k]).forEach((kk) => {
// 							if (_.isPlainObject(v[ii][k][kk])) {
// 								v[ii][k][kk] = _.fromPairs(_.sortBy(_.toPairs(v[ii][k][kk])))
// 							}
// 						})
// 					}
// 				})
// 			}
// 		})
// 		let json: string
// 		try {
// 			json = JSON.stringify(v) && einspect(v)
// 		} catch (_) {
// 			json = uinspect(v)
// 		}
// 		return json
// 	},
// 	PlainObject: (v: any) => {
// 		// return generate.Object(v, {deep: true})
// 		v = _.fromPairs(_.sortBy(_.toPairs(v)))
// 		Object.keys(v).forEach((k) => {
// 			if (_.isPlainObject(v[k])) {
// 				v[k] = _.fromPairs(_.sortBy(_.toPairs(v[k])))
// 				Object.keys(v[k]).forEach((kk) => {
// 					if (_.isPlainObject(v[k][kk])) {
// 						v[k][kk] = _.fromPairs(_.sortBy(_.toPairs(v[k][kk])))
// 					}
// 				})
// 			}
// 		})
// 		let json: string
// 		try {
// 			json = JSON.stringify(v) && einspect(v)
// 		} catch (_) {
// 			json = uinspect(v)
// 		}
// 		return json
// 	},
// 	Function(v: Function) {
// 		let str = v.toString().split('\n')[0]
// 		if (str.includes('[native code]')) return `() ${ansi.dim('=> [native code]')}`
// 		return str
// 	},
// 	Object(value: object, opts = { deep: false, method: 'log' }) {
// 		try {
// 			if (opts.method == 'error' && _.isError(value) && value.stack) {
// 				let split = value.stack.split('\n')
// 				split[0] = ansi.red(split[0])
// 				if (_.get(value, 'response.url')) {
// 					split[0] += ` -> ${einspect(
// 						_.omit(_.get(value, 'response'), ['request', 'headers']),
// 					)}`
// 				}
// 				return split.join('\n')
// 				// return `${newln}${split.join('\n')}`
// 				// return `${newln}${ansi.red(value.message)} <${value.name}>${newln}${value.stack}`
// 			}
// 			let tostr = value.toString()
// 			let str = `<${tostr}>`
// 			if (tostr == '[object Object]') {
// 				str += ` ${ansi.dim('as')} <${types.getClass(value)}>`
// 			}
// 			if (platform.isAndroid) {
// 				if (value instanceof java.lang.Exception) {
// 					str = ansi.green(`'${value.getMessage()}' `) + str
// 				}
// 				if (value instanceof java.lang.Object) {
// 					str += ` ${ansi.dim('as')} <${value.getClass().getName()}>`
// 				}
// 			}
// 			if (!opts.deep || opts.method == 'error') return str
// 			// let keys = [] as string[]
// 			let keys = Object.getOwnPropertyNames(value).concat(
// 				Object.getOwnPropertySymbols(value).map((v) => v.toString()),
// 			)
// 			for (let key in value) {
// 				if (keys.indexOf(key) == -1) keys.push(key)
// 			}
// 			keys.sort().forEach((key) => {
// 				let v: any
// 				try {
// 					v = value[key]
// 				} catch (error) {
// 					v = error
// 				}
// 				// let v = value[key]
// 				let type = generate.getType(v)
// 				let gened = generate[type](v) // + ansi.dim(` as ${type}`)
// 				if (type == 'Function') {
// 					if (gened.startsWith('function ')) gened = gened.substr(9)
// 					if (gened.endsWith(' {')) gened = gened.slice(0, -2)
// 				}
// 				let space = gened.startsWith('(') ? '' : ': '
// 				str += `${newln}${key}${space}${gened}`
// 			})
// 			return str
// 		} catch (error) {
// 			if (_.isError(error)) {
// 				return `${ansi.bold.redBright(
// 					`████  GENERATE.OBJECT ERROR  ████`,
// 				)}${newln}${ansi.red(error.message)} ${ansi.dim('as')} <${error.name}>${newln}${
// 					error.stack
// 				}`
// 			}
// 			return error.toString()
// 		}
// 	},
// }

// let nano = java.lang.System.nanoTime()
// const __console = {} as typeof console
// let methods = ['log', /** 'info', */ 'warn', 'error']
// methods.forEach((method) => {
// 	Object.assign(__console, { [method]: console[method] })
// 	Object.assign(console, {
// 		[method](...args: any[]) {
// 			let stack = new StackTracey()
// 			let site = stack.items[1]
// 			let color = { log: 'blue', info: 'green', warn: 'yellow', error: 'red' }[
// 				method
// 			] as string
// 			if (_.isString(args[0]) && args[0].search(/[\d]+ms/) == 0) color = 'magenta'
// 			let square = ansi[color + 'Bright']('█') as string
// 			let file = `${(site.fileShort as string).slice(0, -3)}` + ':' + site.line
// 			let output = `${square} ${ansi.dim(
// 				`${
// 					site.calleeShort && ansi.bold(`${site.calleeShort} `)
// 				}[${file}] [${dayjs().subtract(5, 'hour').format('hh:mm:ss:SSS')} +${Math.round(
// 					(java.lang.System.nanoTime() - nano) / 1000,
// 				)}]`,
// 			)}`
// 			nano = java.lang.System.nanoTime()
// 			if (method == 'error' && args.length > 1) {
// 				output = ansi.bold.redBright(`████  ERROR  ████${newln}`) + output
// 			}
// 			output = newln + output + newln
// 			if (R.type(args[0]) == 'String') {
// 				args[0] = output + ansi.bold(args[0])
// 				// args[0] = output + (args.length > 1 ? ansi.bold(args[0]) : args[0])
// 			} else args.unshift(output)
// 			let i: number,
// 				len = args.length
// 			for (i = 1; i < len; i++) {
// 				let v = args[i]
// 				let type = generate.getType(v)
// 				args[i] = generate[type](v, { deep: true, method })
// 			}
// 			args.push(newln)
// 			__console[method].apply(console, args)
// 		},
// 	})
// })

//

import * as Application from '@nativescript/core/application'
import * as core from '@nativescript/core'
import * as types from '@nativescript/core/utils/types'

console.log(`true ->`, true)
console.log(`123 ->`, 123)
console.log(`text ->`, 'text')
console.log(`null ->`, null)
console.log(`undefined ->`, undefined)
const json = {
	headers: true,
	connection: null,
	host: undefined,
	origin: 2099414440,
	url: 'https://httpbin.org/get',
}
console.log(`json ->`, json)
console.log(`json ->`, JSON.stringify(json, null, 4))
console.log(`array ->`, [json, json, json])
// console.log(`function ->`, generate.getType)
// console.log(`function ->`, generate.Array)
// console.log(`function ->`, generate.Function)
// console.log(`function ->`, com.androidnetworking.AndroidNetworking.enableLogging)

Application.on('launch', function launch(args) {
	let intent = args.android as android.content.Intent
	let andapp = args.object as Application.AndroidApplication
	let context = andapp.context as android.content.Context
	let nativeApp = andapp.nativeApp as android.app.Application
	let instance = args.savedInstanceState as android.os.Bundle
	let view = args.root

	console.log(`intent ->`, types.toUIString(intent))
	console.log(`andapp ->`, types.toUIString(andapp))
	console.log(`context ->`, types.toUIString(context))
	console.log(`nativeApp ->`, types.toUIString(nativeApp))
	console.log(`instance ->`, types.toUIString(instance))
	console.log(`view ->`, types.toUIString(view))

	// return

	// let stack = new StackTracey()
	// let frame = stack[0]
	// console.log(`frame ->`, console.inspect(frame))

	// // let file = fs.knownFolders.currentApp().getFile(frame.fileRelative)
	// let file = fs.File.fromPath(frame.fileRelative)
	// console.log(`file.path ->`, console.inspect(file.path))
	// let srcmap = convertmap.fromSource(file.readTextSync()).sourcemap
	// console.log(`srcmap ->`, console.inspect(srcmap))

	// sourcemap.SourceMapConsumer.with(srcmap, null, function(smc) {
	// 	console.log(`smc ->`, console.inspect(smc))
	// 	let position = smc.originalPositionFor({ line: frame.line, column: frame.column })
	// 	console.log(`position ->`, console.inspect(position))
	// }).catch(function(error) {
	// 	console.error(`SourceMapConsumer Error ->`, error)
	// })

	// let smc = (new sourcemap.SourceMapConsumer(srcmap) as any) as sourcemap.SourceMapConsumer
	// console.log(`smc ->`, console.inspect(smc))
	// let position = smc.originalPositionFor({ line: frame.line, column: frame.column })
	// console.log(`position ->`, console.inspect(position))

	// new sourcemap.SourceMapConsumer(srcmap).then(function(smc) {
	// 	console.log(`smc ->`, console.inspect(smc))
	// 	let position = smc.originalPositionFor({ line: frame.line, column: frame.column })
	// 	console.log(`position ->`, console.inspect(position))
	// }).catch(function(error) {
	// 	console.error(`SourceMapConsumer Error ->`, error)
	// })

	// let smc = await new sourcemap.SourceMapConsumer(srcmap)
	// let position = smc.originalPositionFor({ line: frame.line, column: frame.column })
	// console.log(`position ->`, console.inspect(position))

	// let position = sourcemaps.mapSourcePosition({
	// 	source: filesrc,
	// 	line: frame.line,
	// 	column: frame.column,
	// })
	// console.log(`position ->`, console.inspect(position))

	// let smc = new sourcemap.SourceMapConsumer(filesrc)
	// console.log(`smc ->`, console.inspect(smc))

	// let appfolder = fs.knownFolders.currentApp().path
	// let abspath = appfolder.split(frame.file).pop() + '/' + frame.fileRelative
	// console.log(`abspath ->`, console.inspect(abspath))
	// // console.log(`src ->`, eyes.inspect(src))
	// console.log(`fs.knownFolders.currentApp() ->`, eyes.inspect(fs.knownFolders.currentApp()))

	// let file = fs.File.fromPath(frame.file)
	// console.log(`file ->`, file)
	// let src = file.readTextSync()
	// console.log(`src ->`, src)

	// let frames = stack.map(function(frame) {
	// 	let csite = srcmaps.wrapCallSite(frame)
	// 	console.log(`csite ->`, eyes.inspect(csite))
	// 	return frame
	// })
	// console.log(`launch args ->`, Types.getClassInfo(args.object))
	// console.log(`Types.getClassInfo(args.object) ->`); console.dir(Types.getClassInfo(args.object))

	// setTimeout(() => Player.play(), 1000)
})

// // declare global {
// // 	var sourceMapSupport: any
// // 	namespace NodeJS { interface Global { sourceMapSupport: any } }
// // 	interface Console { inspect: any, keys: any }
// // }

// // // const BuiltinModule = require('module')
// // console.log(`global ->`, global)
// // console.log(`global ->`, console.inspect(global))
// // console.log(`global ->`); console.dir(global)

// // import * as sourcemaps from 'source-map-support'
// // sourcemaps.install()
// // import 'source-map-support/browser-source-map-support'
// // const sourcemaps = global.sourceMapSupport
// // sourcemaps.install({
// // 	hookRequire: true,
// // 	environment: 'browser',
// // })
// // console.log(`sourcemaps ->`, eyes.inspect(sourcemaps))

// // import * as sourcemap from 'source-map'
// // import * as convertmap from 'convert-source-map'
// // console.log(`StackTracey ->`, console.inspect(StackTracey))
// // console.log(`sourcemaps ->`, console.inspect(sourcemaps))
// // // console.log(`sourcemap ->`, console.inspect(sourcemap))
// // console.log(`convertmap ->`, console.inspect(convertmap))
