import * as assert from 'assert'
import test from "node:test"
import { processor } from './index.js'

test('synchronous passing test', (t) => {
	const array = [1, 2, "" ,3, 4, ""]
	const inittialState = {
		array: [],
		current: 0
	}
	const result = array.reduce(processor, inittialState)
	assert.deepEqual(result.array, [3, 7]);
});