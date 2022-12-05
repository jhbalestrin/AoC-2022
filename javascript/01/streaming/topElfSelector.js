import { Transform } from 'stream'

export class topElfSelector extends Transform{
	constructor(elfCount) {
		super({
			writableObjectMode: true
		})
		this.array = []
	}
	_transform(obj, encoding, callback) {
		if(obj === "end"){
			return callback(null, "lol")
		}
		if(typeof obj === "number"){
			this.array.push(obj)
			// return callback(null, `Elf received ${obj} has total ${this.calories} calories\n`)
		}
		callback(new Error("Invalid input"))
	}
}