import { existsSync, createReadStream } from "fs"

export const FileAdapter = (filePath) => {
	if(!filePath || !existsSync(filePath)){
		throw new Error("Missing file path on file adapter")
	}
	return {
		stream: () => createReadStream(filePath)
	}
}
