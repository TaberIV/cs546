const fileData = require("./fileData");
const textMetrics = require("./textMetrics");

async function main() {
	const numChapters = 3;
	for (var i = 0; i < numChapters; i++) {
		const chapter = `chapter${i + 1}`;
		console.log(chapter);

		try {
			console.log(await fileData.getFileAsJSON(chapter + ".result.json"));
		} catch (error) {
			console.log(chapter + ".result.json does not exist, or is invalid.")
			
			console.log(`Loading ${chapter}.txt`);
			try{
				var text = await fileData.getFileAsString(chapter + ".txt");
			} catch (error) {
				console.log(error);
			}

			console.log(`Saving ${chapter}.debug.txt`)
			try{
				text = textMetrics.simplify(text);
				await fileData.saveStringToFile(`${chapter}.debug.txt`, text);
			} catch (error) {
				console.log(error);
			}
			
			
			console.log("Running metrics");
			const metrics = textMetrics.createMetrics(text);
			console.log(metrics);

			console.log("saving metrics to file");
			try {
				await fileData.saveJSONToFile(`${chapter}.result.json`, metrics);
			} catch (error) {
				console.log(error);
			}
		}

		console.log('');
	}
}

main();