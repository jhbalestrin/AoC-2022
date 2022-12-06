import { Transform } from 'stream'

export class topElfSelector extends Transform{
	constructor(elfCount) {
		super({
			writableObjectMode: true
		})
		this.elfCount = elfCount
		this.array = []
	}
	_transform(obj, encoding, callback) {
		if(typeof obj === "symbol"){
			const sum = this.array.sort((a,b) => b-a).slice(0, this.elfCount).reduce((acc, curr) => acc + curr, 0)
			this.push(sum.toString())
		}
		if(typeof obj === "number"){
			this.array.push(obj)
		}
		callback()
	}
}