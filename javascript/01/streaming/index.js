import { promisify } from "util"
import { pipeline as streamPipeline } from "stream"
import { FileAdapter, StdinAdapter } from '../../shared/stream/inputAdapters/index.js'
import { elfCaloriesProcessor } from './elfCaloriesProcessor.js'
import { toNumberFormatter } from './inputFormatter.js'
import { topElfSelector } from './topElfSelector.js'

const pipeline = promisify(streamPipeline);

const [,, flag, path] = process.argv
const inputAdapter = (flag === "-f" && !!path) ?
	FileAdapter(path):
	StdinAdapter()


async function run () {
	await pipeline(
		inputAdapter.stream(),
		new toNumberFormatter(),
		new elfCaloriesProcessor(),
		// new topElfSelector(),
		process.stdout)
}

run()
.then(()=> console.log("Pipeline ended"))
.catch(console.error)