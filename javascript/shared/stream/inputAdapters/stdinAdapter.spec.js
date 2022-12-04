import { describe, it } from "node:test"
import assert from "assert"
import stream from "stream"
import { isReadableStream } from './utils.js'
import { stdinAdapter } from './stdinAdapter'

describe('File Adapter', function () {
	it('With a valid path', function () {
		 assert.ok(stdinAdapter.stream() instanceof stream,
			"stream should return a instace of stream")
		assert.ok(isReadableStream(stdinAdapter.stream()),
			'Stream should return a readable stream')
	})
})