const fileData = require("./fileData");
const textMetrics = require("./textMetrics");

async function main(path) {
	try {
		var data = await fileData.getFileAsString(path);
		console.log(data);
	} catch (error) {
		throw error;
	}
}

console.log("Test begin.");

try {
	main();
} catch (error) {
	throw error;
}

console.log("Test complete.");