import { Transform } from 'stream'

const lineEndingRegex = /[\r\n|\n]/

export class toNumberFormatter extends Transform{
	constructor() {
		super({
			readableObjectMode: true
		})
	}
	_transform(binary, encoding, callback) {
		const string = binary.toString()

		const splittedString = string.split(lineEndingRegex)
		splittedString.forEach((s, i) => {
			if(s){
				this.push(Number(s))
			} else {
				this.push("Finished elf\n")
			}
		})
		callback(null,"end")
	}

}