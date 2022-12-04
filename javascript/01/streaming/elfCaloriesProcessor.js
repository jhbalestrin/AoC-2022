import { Transform } from 'stream'

export class elfCaloriesProcessor extends Transform{
	constructor() {
		super({
			writableObjectMode: true
		})
		this.calories = 0
	}
	_transform(obj, encoding, callback) {
		if(obj === "end"){
			return callback(null, `Finished elfs\n`)
		}
		if(typeof obj === "number"){
			this.calories += obj
			return callback(null, `Elf received ${obj} has total ${this.calories} calories\n`)
		}
		if(typeof obj === "string"){
			callback(null,`Elf finished with ${this.calories} calories\n`)
			this.calories = 0
			return
		}
		callback(new Error("Invalid input"))
	}
}