import { existsSync, createReadStream } from "fs"

export const FileAdapter = (filePath) => {
	if(!filePath){
		throw new Error("Missing file path on file adapter")
	}
	if(!existsSync(filePath)){
		throw new Error("Files does not exist")
	}
	return {
		stream: () => createReadStream(filePath)
	}
}
