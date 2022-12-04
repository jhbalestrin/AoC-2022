const stream = require("stream")

module.exports = (string, objectMode) => {
	if(!string){
		throw new Error("Missing string on string Adapter")
	}
	return {
		stream: () => stream.Readable.from(string, {objectMode: objectMode})
	}
}



