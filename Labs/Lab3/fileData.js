const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

//Get the file as a string
async function getFileAsString(path) {
	if (!path || typeof path !== 'string')
		throw "You must provide a path as a string";

	try {
		const data = await fs.readFileAsync(path, "utf8");
		return data;
	} catch (error) {
		throw error;
	}
}
async function getFileAsJSON(path) {

}

async function saveStringToFile(path, text) {

}

async function saveJSONToFile(path, obj) {

}

module.exports = {
	getFileAsString,
	getFileAsJSON,
	saveStringToFile,
	saveJSONToFile
};