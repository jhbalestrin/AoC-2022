const stdinAdapter = () => {
	return process.stdin
}

export function StdinAdapter () {
	return {
		stream: stdinAdapter,
	}
}