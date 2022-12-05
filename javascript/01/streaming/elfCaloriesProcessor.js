import { Transform } from 'stream'

export class elfCaloriesProcessor extends Transform{
	constructor() {
		super({
			writableObjectMode: true,
			readableObjectMode: true
		})
		this.calories = 0
	}
	_transform(obj, encoding, callback) {
		if(typeof obj === "symbol"){
			this.push(obj)
		}
		if(typeof obj === "number"){
			this.calories += obj
			// return callback(null, `Elf received ${obj} has total ${this.calories} calories\n`)
		}
		if(typeof obj === "string"){
			// callback(null,`Elf finished with ${this.calories} calories\n`)
			this.push( this.calories)
			this.calories = 0
		}
		callback()
	}
}