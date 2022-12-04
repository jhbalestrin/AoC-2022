import { describe, it } from "node:test"
import assert from "assert"
import stream from "stream"
import { isReadableStream } from './utils.js'
import { FileAdapter } from './fileAdapter.js'


describe('File Adapter', function () {
	it('With a valid path', function () {
		const fileAdapter = FileAdapter('dummy.txt')
		assert.ok(fileAdapter.stream() instanceof stream,
			'Stream should return a stream instance')
		assert.ok(isReadableStream(fileAdapter.stream()),
			'Stream should return a readable stream')
	})

	it('With a invalid path', function () {
		return assert.throws(() => FileAdapter(),
			'No violations found on account already initialized.')
	})
})