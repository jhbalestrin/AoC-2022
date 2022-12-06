import { readFileSync } from 'fs';

const file = readFileSync("../input.txt", "utf8")

const lines = file.split("\n");

const innitialState = {
	array: [],
	current: 0
}
export const processor = (acc, next) => {
	if(next === "") {
		acc.array.push(acc.current)
		acc.current = 0
		return acc
	}
	acc.current = acc.current + Number(next)
	return acc
}

const result = lines.reduce(processor, innitialState)
const orderedResult = result.array.sort((a, b) => a - b)
const threeBiggest = orderedResult.slice(orderedResult.length - 3, orderedResult.length)
console.log(threeBiggest.reduce((acc, next) => acc + next, 0))
