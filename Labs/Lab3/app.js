const fileData = require("./fileData");
const textMetrics = require("./textMetrics");

async function main(path, obj) {
	try {
		fileData.saveJSONToFile(path, obj);
	} catch (error) {
		throw error;
	}
}

console.log("Test begin.");

const obj = {
	"fuck": "asyncroniysitee",
	"chirs": "is doing systems",
	"level_of_hope": 3
}
main("testWrite.txt", obj);

console.log("Test complete.");