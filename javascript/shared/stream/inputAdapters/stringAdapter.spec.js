const stream = require('stream')
const { isReadableStream } = require('../tests/utils')
const adapterInitializer = require('./stringAdapter')
const assert = require('assert')

describe('String Adapter', function () {
	it('With a valid String', function () {
		const stringAdapter = adapterInitializer('Dummy string')
		assert.ok(stringAdapter.stream() instanceof stream,
			'Stream should return a stream instance')
		assert.ok(isReadableStream(stringAdapter.stream()),
			'Stream should return a readable stream')
	})

	it('With a invalid string', function () {
		return assert.throws(() => adapterInitializer(),
			'No violations found on account already initialized.')
	})
})