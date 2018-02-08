const fileData = require("./fileData");
const textMetrics = require("./textMetrics");

async function main() {
	const numChapters = 3;
	for (var i = 0; i < numChapters; i++) {
		const chapter = `chapter${i + 1}`;
		console.log(chapter);

		try {
			throw "NEVERMIND";
			console.log(await fileData.getFileAsJSON(chapter + ".result.json"));
		} catch (error) {
			console.log(chapter + ".result.json does not exist, or is invalid.")
			
			console.log(`Loading ${chapter}.txt`);
			var text = await fileData.getFileAsString(chapter + ".txt");
			
			console.log(`Saving ${chapter}.debug.txt`)
			text = textMetrics.simplify(text);
			await fileData.saveStringToFile(`${chapter}.debug.txt`, text);
			
			console.log("Running metrics");
			const metrics = textMetrics.createMetrics(text);

			console.log("saving metrics to file");
			await fileData.saveJSONToFile(`${chapter}.result.json`, metrics);
			console.log(metrics);
		}

		console.log('');
	}
}

main();